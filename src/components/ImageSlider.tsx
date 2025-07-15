"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import image1 from '../../public/Canva_Logo.png'
import image2 from '../../public/Milton_Logo.jpg'
import image3 from '../../public/Brandify_Logo.png'
import image4 from '../../public/Ace-learning-1_IMG.svg'
import image5 from '../../public/attom-1_IMG.svg'
import image6 from '../../public/awl-sundry-1_IMG.svg'
import image7 from '../../public/brightCOIN_IMG.svg'
import image8 from '../../public/mom-1-1_IMG.svg'
import image9 from '../../public/realtyTrac_IMG.svg'
import image10 from '../../public/tire-agent-1_IMG.svg'
import image11 from '../../public/soci-2-1_IMG.svg'

const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
    { src: image10 },
    { src: image11 }
]
const ImageSlider = () => {

    const [currentIdx, setCurrentIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const prevSlide = () => {
        setCurrentIdx(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        )
    }
    const nextSlide = () => {
        setCurrentIdx(
            (prevIndex) => (prevIndex + 1) % images.length
        );
    }

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 1000);

            return () => clearInterval(interval)
        }
    }, [isHovered])

    const handleMouseOver = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }


    return (
        <div className='flex justify-center relative w-full mx-auto mt-10'>
            <div className='relative h-[200px] mx-12'
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <Image src={images[currentIdx].src}
                    alt={`Slider image ${currentIdx + 1}`}
                    style={{ objectFit: "cover" }}
                    height={100}
                    className='rounded-xl transition-opacity duration-500 ease-in-out cursor-pointer'
                />

                <div className='flex justify-center'>
                    {
                        images.map((_, index) => {
                            return <div key={index}
                                className={`transition-all duration-500 ease-in-out`}
                            >

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageSlider