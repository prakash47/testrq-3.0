import React from 'react'
import { MdTrolley, MdOutlineHealthAndSafety, MdCreditCard } from "react-icons/md";
import { GiSwipeCard } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { LuCodesandbox } from "react-icons/lu";
import { FaMobileRetro } from "react-icons/fa6";



const HomeIndustryExpert = () => {

    const heading = {
        title: 'Industry Expertise',
        info: 'We serve diverse industries with specialized testing solutions tailored to unique business requirements and compliance standards.'
    }

    const cardData = [
        { icon: MdTrolley, title: 'E-commerce', detail: 'Payment gateways, user experience, performance' },
        { icon: MdOutlineHealthAndSafety, title: 'Healthcare', detail: 'HIPAA compliance, data security, usability' },
        { icon: GiSwipeCard, title: 'Fin Tech', detail: 'Financial regulations, security, transaction integrity' },
        { icon: ImBooks, title: 'EdTech', detail: 'Learning platforms, accessibility, scalability' },
        { icon: IoGameController, title: 'Gaming', detail: 'Performance, multiplayer, cross- platform' },
        { icon: TbWorld, title: 'IoT', detail: 'Device connectivity, data integrity, security' },
        { icon: LuCodesandbox, title: 'SaaS', detail: 'Multi-tenancy, scalability, integration' },
        { icon: FaMobileRetro, title: 'Mobile Apps', detail: 'Cross-platform, performance, usability' }
    ]
    return (
        <section className='flex flex-col w-full max-w-screen-3xl bg-[theme(color.background.gray)] mx-auto md:px-8 px-8 xl:px-24 py-15 gap-y-15'>
            <div className='flex flex-col gap-y-5 text-center'>
                <h2 className='text-4xl'>{heading.title}</h2>
                <p className='text-lg text-gray-500 mx-auto max-w-2xl'>{heading.info}</p>
            </div>


            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-10'>
                {
                    cardData.map((card) => {
                        const Icon = card.icon;

                        return <div key={card.title} className='flex flex-col justify-center items-center text-center ring-sky-200 ring-2 bg-white rounded-lg p-5 md:p-5 h-55 gap-y-5 transition duration-300 transform hover:shadow-sky-200 hover:shadow-lg'>
                            <span><Icon className='text-[theme(color.brand.blue)] bg-sky-100 p-2 rounded-lg' size={35} /></span>
                            <h2 className='text-xl'>{card.title}</h2>
                            <p className='text-gray-500 text-sm'>{card.detail}</p>
                        </div>
                    })
                }
            </div>
            
            <div className='flex justify-center'>
                <button className='p-2 border bg-[theme(color.brand.blue)] hover:bg-sky-600 transition duration-300 cursor-pointer text-white w-50 rounded-lg'>View All Industries<span className='text-2xl'>&#8594;</span></button>
            </div>

        </section>
    )
}

export default HomeIndustryExpert