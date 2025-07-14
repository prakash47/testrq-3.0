import { BsCheckCircle } from "react-icons/bs";

import Right_Card_Img from '../../../public/Home-Comprehensive-Software-Testing-Image.svg'
import Image from "next/image";


const HomeSection2 = () => {

    const featureList = [
        { feature: 'Budget-friendly and capital-efficient solutions' },
        { feature: 'Perfect for lean startups and agile innovators' },
        { feature: 'Comprehensive QA solutions tailored to your needs' },
        { feature: 'Responsive Support and proven expertise' }
    ]
    return (
        <section className="flex flex-col lg:flex-row xl:flex-row items-center px-8 md:px-8 xl:px-26 py-12 bg-gray-100 max-w-screen-7xl">
            <div className="flex flex-col lg:flex-row xl:flex-row items-center mx-auto w-full gap-10 lg:gap-20">

                {/* Left Section */}

                <div className="flex flex-col w-full lg:w-1/2">
                    <h2 className="text-4xl lg:w-2xl">Why Choose Testriq? Your Partner In Quality Assurance</h2>

                    <p className="text-gray-500 text-lg mt-5 max-w-2xl">Testriq QA LAB LLP is dedicated to helping award winning application. Our team of ISTQB Certified Experts specialize in a wide range of testing services, ensuring quality and client success across diverse industries.</p>

                    <ul className="flex flex-col md:justify-center mt-3 leading-6 md:leading-14 lg:leading-10 text-lg">
                        {
                            featureList.map((list) => {
                                return <li key={list.feature} className="flex items-center gap-2">
                                    <BsCheckCircle className="text-green-500" /> {list.feature}
                                </li>
                            })
                        }
                    </ul>

                    {/* Button to learn more about the company */}
                    <div>
                        <button className="p-3 mt-3 bg-sky-500 text-white font-semibold rounded-xl cursor-pointer">Learn More About Us</button>
                    </div>
                </div>

                {/* Right Section with Image */}

                <div className="flex w-full lg:w-2/3 justify-start h-80 max-w-xl mt-5">
                    <Image src={Right_Card_Img} alt="Card-Image" className="rounded-xl" />
                </div>
            </div>
          
        </section >
    )
}

export default HomeSection2