import React from 'react';
import Image from 'next/image';
import image1 from '../../public/Canva_Logo.png';
import image2 from '../../public/Milton_Logo.jpg';
import image3 from '../../public/Brandify_Logo.png';
import image4 from '../../public/Ace-learning-1_IMG.svg';
import image5 from '../../public/attom-1_IMG.svg';
import image6 from '../../public/awl-sundry-1_IMG.svg';
import image7 from '../../public/brightCOIN_IMG.svg';
import image8 from '../../public/mom-1-1_IMG.svg';
import image9 from '../../public/realtyTrac_IMG.svg';
import image10 from '../../public/tire-agent-1_IMG.svg';
import image11 from '../../public/soci-2-1_IMG.svg';

const images = [
    { src: image1 },
    { src: image2 },
    // { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
    { src: image10 },
    { src: image11 },
];

const ImageMarquee = () => {
    return (
        <section className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap">
                <span className="text-4xl">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={`Company Logo ${index + 1}`}
                            className="inline-block mx-10"
                            width={150}
                            height={50}
                        />
                    ))}
                </span>
                
            </div>

            {/* <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span className="text-4xl mx-4">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={`Company Logo ${index + 1}`}
                            className="inline-block mx-4"
                            width={150}
                            height={50}
                        />
                    ))}
                </span>
                
            </div> */}
        </section>
    );
};

export default ImageMarquee;