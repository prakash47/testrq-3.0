import React from 'react'
import { FaStar } from 'react-icons/fa';

const RatingStar = () => {
    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-xl" />
            ))}
        </div>
    )
}

export default RatingStar