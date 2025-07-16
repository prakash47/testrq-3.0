"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import image1 from '../../public/launchfastqa-1.svg';
import image2 from '../../public/Group-computers.svg';
import image3 from '../../public/Robot-AI.svg';

const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 }
];

const ImageSlider = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const nextSlide = () => {
        setCurrentIdx((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000); // Increased interval to 3s for better visibility of transition

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-[700px] mx-auto overflow-hidden">
            <div className="relative w-full h-[450px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-all duration-800 ease-in-out ${index === currentIdx
                                ? 'opacity-100 transform translate-x-0'
                                : 'opacity-0 transform translate-x-full'
                            }`}
                    >
                        < Image src={images[currentIdx].src}
                            alt={`Slider image ${currentIdx + 1}`}
                            // style={{ objectFit: "cover" }}
                            
                            // className='rounded-xl transition-opacity duration-500 ease-in-out cursor-pointer'
                        />
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default ImageSlider;



