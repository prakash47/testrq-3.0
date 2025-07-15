import React from 'react'
import { FiTarget } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { LuShield, LuUsers, LuLightbulb } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";


const HomeChooseTestriq = () => {

    // Define the heading and card data
    const heading = {
        title: 'Why Choose Testriq?',
        info: 'We combine technical expertise with business understanding to deliver testingsolutions that drive real results.'
    }

    const cardData = [
        { icon: FiTarget, title: 'Result-Oriented Approach', href: '#', detail: 'We focus on delivering measurable outcomes that directly impact your business goals and user satisfaction.' },
        { icon: FaRegClock, title: 'Faster Time-to-Market', href: '#', detail: 'Our efficient testing processes and automation expertise help you launch products faster without compromising quality.' },
        { icon: LuShield, title: 'Risk Mitigation', href: '#', detail: 'Comprehensive testing strategies that identify and eliminate potential risks before they impact your users.' },
        { icon: LuUsers, title: 'Dedicated Team', href: '#', detail: 'ISTQB certified professionals who become an extension of your team, understanding your unique requirements.' },
        { icon: FaArrowTrendUp, title: 'Scalable Solutions', href: '#', detail: 'Testing solutions that grow with your business, from startup MVP to enterprise-scale applications.' },
        { icon: LuLightbulb, title: 'Innovation Focus', href: '#', detail: 'We stay ahead of technology trends, ensuring your applications are tested with the latest methodologies.' }
    ]

    return (
        // Main section container
        <section className='flex flex-col w-full max-w-screen-3xl bg-[theme(color.background.gray)] mx-auto md:px-8 px-8 xl:px-24 py-10 gap-y-15'>
            {/* Heading section */}
            <div className='flex flex-col gap-y-5 text-center'>
                <h2 className='text-4xl'>{heading.title}</h2>
                <p className='text-lg text-gray-500 mx-auto max-w-2xl'>{heading.info}</p>
            </div>

            {/* Card grid layout */}
            {/* Each card contains an icon, title, and detail text */}
            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    cardData.map((card) => {
                        const Icon = card.icon;

                        return <div key={card.title} className='flex flex-col bg-white ring-sky-200 ring-2 rounded-lg p-5 md:p-5 h-55 gap-y-5 transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl'>
                            <span><Icon className='text-[theme(color.brand.blue)] bg-sky-100 p-2 rounded-lg' size={35} /></span>
                            <h2 className='text-xl'>{card.title}</h2>
                            <p className='text-gray-500 text-sm'>{card.detail}</p>
                        </div>

                    })
                }
            </div>


        </section>
    )
}

export default HomeChooseTestriq