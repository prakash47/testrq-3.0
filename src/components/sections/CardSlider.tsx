"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [activeCard, setActiveCard] = useState(0);
    const [autoHover, setAutoHover] = useState(true);
    const cards = [
        {
            title: "Discovery & Analysis",
            days: "1-2 days",
            quote: 'Understanding Your Requirements',
            content: "Understanding Your Requirements\nWe begin with a comprehensive analysis of your web application, understanding your business requirements, user expectations, and technical specifications to create a tailored testing strategy.",
            icon: <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>,
            colordark: "blue-500",
            colorlight: "blue-50",
            progress: "0%",
            keyTitle: 'Key Activities',
            keys: [{ key: 'Requirement gathering and documentation' }, { key: 'Technical architecture analysis' }, { key: 'user persona and journey mapping' }, { key: 'Risk assessment and prioritization' }, { key: 'Testing scope definition' }]

        },
        {
            title: "Environment Setup",
            days: "1-2 days",
            quote: 'Preparing Testing Infrastructure',
            content: "Preparing Testing Infrastructure\nConfigure comprehensive testing environments that accurately mirror your production setup, ensuring reliable and consistent test results across all testing scenarios.",
            icon: <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25z" /></svg>,
            colordark: "green-500",
            colorlight: "green-50",
            progress: "0%",
            keyTitle: 'Key Activities',
            keys: [{ key: 'Requirement gathering and documentation' }, { key: 'Technical architecture analysis' }, { key: 'user persona and journey mapping' }, { key: 'Risk assessment and prioritization' }, { key: 'Testing scope definition' }]
        },
        {
            title: "Test Execution",
            days: "3-5 days",
            quote: 'Comprehensive Testing Implementation',
            content: "Comprehensive Testing Implementation\nExecute systematic testing across all defined scenarios using both manual and automated approaches to ensure comprehensive coverage of your web application functionality.",
            icon: <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>,
            colordark: "purple-500",
            colorlight: "purple-50",
            progress: "60%",
            keyTitle: 'Key Activities',
            keys: [{ key: 'Requirement gathering and documentation' }, { key: 'Technical architecture analysis' }, { key: 'user persona and journey mapping' }, { key: 'Risk assessment and prioritization' }, { key: 'Testing scope definition' }]
        },
        {
            title: "Issue Documentation",
            days: "1-2 days",
            quote: 'Detailed Bug Reporting',
            content: "Detailed Bug Reporting\nSystematically identify, document, and prioritize all issues found during testing with detailed reproduction steps and visual evidence for efficient resolution.",
            icon: <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>,
            colordark: "red-500",
            colorlight: "red-50",
            progress: "80%",
            keyTitle: 'Key Activities',
            keys: [{ key: 'Requirement gathering and documentation' }, { key: 'Technical architecture analysis' }, { key: 'user persona and journey mapping' }, { key: 'Risk assessment and prioritization' }, { key: 'Testing scope definition' }]
        },
    ];

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (autoHover) {
            interval = setInterval(() => {
                setActiveCard((prev) => (prev + 1) % cards.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [autoHover, cards.length]);

    const handleCardClick = (index: number) => {
        setActiveCard(index);
        setAutoHover(false);
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-start p-6 bg-gray-100 min-h-screen">
            <div className="w-full md:w-1/2 space-y-4 relative"> {/* Increased space-y from 4 to 6 */}
                {/* <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-200">
                    <div
                        className={`absolute left-0 top-0 w-full transition-all duration-300`}
                        style={{
                            height: `${(100 / cards.length) * (activeCard + 1)}%`,
                            backgroundColor: cards[activeCard].color.replace('500', '600'),
                        }}
                    ></div>
                </div> */}
                <div className="space-y-10 ">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg shadow-md cursor-pointer  ring ring-gray-300 transition-all duration-300 ${activeCard === index
                                ? `scale-105 transition-all duration-500 ease-in-out shadow-xl border-2 border-black bg-${card.colorlight}`
                                : "bg-white hover:shadow-lg hover:border-" + card.colordark
                                }`}
                            onMouseEnter={() => setActiveCard(index)}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="flex justify-between items-center">
                                
                                <h2 className="text-xl font-semibold">{card.title}</h2>
                                <p className="p-1 px-2 text-xs font-semibold bg-gray-200 rounded-xl text-gray-600">{card.days}</p>
                            </div>

                            <p className={` ${activeCard === index
                                ? `text-${card.colordark}`
                                : "hover:border-" + card.colordark
                                }`}>
                                {card.quote}
                            </p>

                            <p className="text-gray-700 mt-2">{card.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Right Section */}
            <div className={`w-full md:w-1/2 mt-6 md:mt-0 md:ml-6`}>
                <div className={`p-6 rounded-lg shadow-xl bg-${cards[activeCard].colorlight}  bg-opacity-50`}>
                    <div className="flex items-center">
                        <div className={`p-3 rounded-xl bg-${cards[activeCard].colordark}`}>
                            {cards[activeCard].icon}
                        </div>
                        <div className=" px-5">
                            <h2 className={`text-3xl font-extrabold`}>{cards[activeCard].title}</h2>
                            <p className={`mt-2 text-xl font-semibold text-${cards[activeCard].colordark}`}>
                                {cards[activeCard].quote}
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 text-lg mt-5">{cards[activeCard].content}</p>

                    
                        <div className="flex flex-col leading-8 mt-5">
                            <h4 className="text-xl font-semibold">{cards[activeCard].keyTitle}</h4>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                            {cards[activeCard].keys.map((item, idx) => (
                                <li key={idx}>{item.key}</li>
                            ))}
                        </ul>
                        </div>
                    

                    <div className="mt-4 bg-white rounded-3xl p-4">
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-semibold text-gray-600">Overall Progress</p>
                        <p className={`text-md font-semibold mt-1 text-${cards[activeCard].colordark}`}>{cards[activeCard].progress}</p>
                        </div>
                        <div className="w-full mt-2 bg-gray-200 rounded-full h-3.5">
                            <div
                                className={`bg-${cards[activeCard].colordark} h-3.5 rounded-full`}
                                style={{ width: cards[activeCard].progress }}
                            ></div>
                        </div>
                        
                    </div>
                    <button className={`mt-4 w-full bg-${cards[activeCard].colordark} text-white py-2 rounded-lg hover:bg-${cards[activeCard].colordark.replace('500', '600')}`}>
                        Learn More About {cards[activeCard].title}
                    </button>
                </div>
            </div>
        </div>
    );
}