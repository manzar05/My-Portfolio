import React from 'react'
import StarRating from './StarRating';

const SkillsCard = ({props}) => {
  return (
    <div className='flex flex-col items-center justify-center shadow-md rounded-md px-5 py-[1.5rem] relative bg-white hover:cursor-pointer transition-all duration-150 hover:transform hover:scale-[1.05] sm:hover:scale-[1.05] w-[100px] sm:w-[140px] flex-grow'>
        <img src={props.image} alt="" className='rounded-full drop-shadow-md'  style={{width:'3.5rem'}}/>
        <h1 className="text-md md:text-lg font-semibold text-center py-2">{props.title}</h1>
        <div className="">
           <StarRating rating={ props && props.rating ? parseInt(props.rating) : parseInt(2)}/>
        </div>
    </div>
  )
}

export default SkillsCard