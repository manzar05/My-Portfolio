import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import DigitalClock from '../components/ui/DigitalClock'
import StarRating from '../components/ui/StarRating'
import HomeImage from "../assets/images/home-image.png"

const Contact = () => {
  return (
    <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)] text-[#171717]'>
        <div className={`col-span-4 sm:col-span-2 row-span-2 sm:row-span-2 px-4 py-2 sm:py-5 animate-fadeIn z-1`}>
            <div className="flex flex-col items-center justify-center gap-2 py-[4rem] relative pb-0">
                <p className="text-md font-semibold uppercase text-[#ff963c] tracking-widest absolute top-[2.5rem] sm:left-[11rem] animate-fadeIn">Hello!</p>
                <p className="text-medium text-2xl text-[#6D6D6D]">I'M</p>
                <p className="text-medium text-xl sm:text-3xl uppercase font-black">Manzar <span className='text-[#6D6D6D]'>Imam</span></p>
                <p className="text-medium text-xl sm:text-3xl uppercase font-black text-[#ff963c]">Fullstack <span className='text-[#171717]'>Developer</span></p>
                <p className="text-medium text-xs sm:text-lg font-medium tracking-wider text-center">Django | ReactJS | REST API |  Python | JavaScript | jQuery</p>
            </div>
            <span className="text-medium block text-center mt-4"><span className='text-[#ff963c] px-1'>Contact No:</span>&nbsp;&nbsp; 6200862500</span>
            <span className="text-medium block text-center"><span className='text-[#ff963c] px-1'>Email ID:</span>&nbsp;&nbsp; immanzar05@gmail.com</span>
        </div>
        <div className={`col-span-4 sm:col-span-2 row-span-1 sm:row-span-2 flex justify-center items-center relative`}>
            <img src={HomeImage} alt="" className='w-[85%] sm:w-[60%] absolute bottom-[-4.5rem] left-50 overflow-hidden'/>
            <div className="flex flex-col items-center justify-center absolute -top-[3rem] right-[0rem]  sm:top-[5rem] sm:right-[0rem] animate-fadeIn">
                <StarRating rating={parseInt(3)}/>
                <h1 className="text-sm sm:text-2xl font-semibold tracking-wider mt-1">1.6 <span className='font-semibold text-[#ff963c] uppercase '>Years</span></h1>
                <h1 className="text-sm sm:text-xl font-semibold tracking-wider uppercase text-[#6D6D6D]">Experience</h1>
            </div>
        </div>
</div>
  )
}

export default Contact