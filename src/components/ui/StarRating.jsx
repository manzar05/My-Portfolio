import React from 'react';
import {FaStar} from "../../reactIcons"

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index} 
          color={index < parseInt(rating) ? 'orange' : 'gray'} 
          className='w-3 h-3 sm:w-4 sm:h-4'
        />
      ))}
    </div>
  );
};

export default StarRating;