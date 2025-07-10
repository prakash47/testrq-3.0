import { BsCheckCircle } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";


const HomeSection2 = () => {

    const featureList = [
        { feature: 'Budget-friendly and capital-efficient solutions' },
        { feature: 'Perfect for lean startups and agile innovators' },
        { feature: 'Comprehensive QA solutions tailored to your needs' },
        { feature: 'Responsive Support and proven expertise' }
    ]
    return (
        <section className="flex flex-col xl:flex-row items-center px-8 lg:px-16 py-12 bg-gray-100 w-full">
            <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row items-center gap-10">

                {/* Left Section */}

                <div className="flex flex-col w-full">
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

                    <button className="p-3 mt-3 bg-sky-500 text-white font-semibold rounded-xl cursor-pointer">Learn More About Us</button>
                </div>

                <div className="flex items-center justify-center relative w-full bg-linear-to-tl from-sky-200 to bg-sky-100 rounded-xl h-80 max-w-xl mt-5">
                    <MdRocketLaunch size={300} className="opacity-10" />
                    <div className="flex flex-col text-center absolute">

                        <h5 className="text-2xl">LaunchFast QA</h5>
                        <p className="text-lg text-gray-500">Acclerated Growth, Capital Effect</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection2