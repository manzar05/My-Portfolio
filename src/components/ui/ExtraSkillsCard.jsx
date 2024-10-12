import React from 'react'
import StarRating from './StarRating';
import {Link} from "react-router-dom"

const ExtraSkillsCard = ({props}) => {
  return (
    <div className='flex flex-col items-center justify-center shadow-md rounded-md w-[250px] sm:w-[350px] px-5 py-[1.5rem] pb-[2.5rem] sm:pt-[2.5rem] relative hover:cursor-pointer transition-all duration-150 mx-1 bg-white'>
        <div className="absolute top-4 right-4">
           <StarRating rating={ props && props.rating ? parseInt(props.rating) : parseInt(2)}/>
        </div>

        <div className="w-full flex items-center justify-start gap-3 pt-2 sm:pt-0">
            <img src={props.image} alt="" className='w-8 h-8 sm:w-10 sm:h-10 rounded-full drop-shadow-md' />
            <h1 className="text-sm sm:text-xl font-bold">{props && props.title ? props.title : "Guest"}</h1>
        </div>
        <span className="text-sm sm:text-md font-normal py-1 sm:py-4 pb-4 text-[#6D6D6D]">{props && props.description ? props.description : `${props.paragraph}`}</span>
        <span className="text-xs sm:text-sm font-medium mt-[0.5rem] absolute bottom-[1.35rem] left-[1.2rem] text-orange-400">{props && props.name ? props.name : "Manzar Imam"}</span>
        <span className='absolute right-[1.2rem] bottom-[1.35rem] hover:text-red-600'>
          <Link to={`${props.link}`} className="text-xs sm:text-sm font-medium text-slate-800 w-full hover:text-orange-400">Read More</Link>
        </span>

    </div>
  )
}

export default ExtraSkillsCard