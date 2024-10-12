import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='relative w-full bg-gray-900 text-slate-100 flex flex-col sm:flex-row items-start sm:items-center p-4 pb-[2rem]'>
        <p className="absolute bottom-2 text-center sm:right-4 text-xs  text-slate-300">Copyright © 2024 Manzar Imam. All rights reserved.</p>
        <div className="flex items-start sm:items-center flex-col justify-start sm:w-[30%] mb-6 sm:mb-0">
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-3xl font-black tracking-wider ">Manzar<span className="text-[#ff963c] p-0 m-0">&nbsp;&nbsp;Imam</span></h1>
                <p className="text-xs tracking-widest py-0 pt-2 font-medium ">Phone: <span className="text-[#ff963c] p-0 m-0">&nbsp;&nbsp;6200862500</span></p>
                <p className="text-xs tracking-widest py-0 font-medium ">Email: <span className="text-[#ff963c] p-0 m-0">&nbsp;&nbsp;immanzar05@gmail.com</span></p>
                <p className="text-xs tracking-widest py-0 pb-2 font-medium ">Location: <span className="text-[#ff963c] p-0 m-0">&nbsp;&nbsp;New Delhi - 110025</span></p>
                {/* <p className="text-sm tracking-wide py-3 text-medium ">Software Developer</p> */}
                <div className='flex flex-row items-center justify-start gap-5 hover:cursor-pointer py-3'>
                    <Link to="/#" className='w-[20px] h-[20px] rounded-lg shadow-sm text-slate-400 hover:text-slate-300 hover:scale-[1.1] transition-all duration-200'>< FaFacebook /></Link>
                    <Link to="/#" className='w-[20px] h-[20px] rounded-lg shadow-sm text-slate-400 hover:text-slate-300 hover:scale-[1.1] transition-all duration-200'>< FaLinkedinIn /></Link>
                    <Link to="/#" className='w-[20px] h-[20px] rounded-lg shadow-sm text-slate-400 hover:text-slate-300 hover:scale-[1.1] transition-all duration-200'>< FaDiscord /></Link>
                </div>
            </div>
        </div>
        <div className="flex sm:items-center justify-start w-full sm:w-[70%] ">
            <div className="flex flex-row items-center justify-around sm:gap-10 w-full border-b-[1px] border-b-[#94a3b824] pb-10 flex-wrap flex-grow">
                <div className="flex flex-col items-start sm:items-center justify-between gap-3 pb-4 sm:pb-0">
                  <p className="font-bold mb-1 text-slate-400 tracking-wider">Quick Links</p>
                  <Link to="/about" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>About</Link>
                  <Link to="/services" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Services</Link>
                  <Link to="/contact" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Contact</Link>
                </div>
                <div className="flex flex-col items-start sm:items-center justify-between gap-3 pb-4 sm:pb-0">
                  <p className="font-bold mb-1 text-slate-400 tracking-wider">Get Help!</p>
                  <Link to="/contact" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Support</Link>
                  <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Help</Link>
                  <Link to="/#" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Know More</Link>
                </div>
                <div className="flex flex-col items-start sm:items-center justify-between gap-3 pb-4 sm:pb-0">
                  <p className="font-bold mb-1 text-slate-400 tracking-wider">Expertise</p>
                  <Link to="/experience" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Experience</Link>
                  <Link to="/resume" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Resume</Link>
                  <Link to="/projects" className='text-sm px-4 py-1 rounded-md hover:cursor-pointer hover:bg-[#78787842] hover:transition-all hover:text-slate-400'>Projects</Link>
                </div>
              </div>
        </div>
        {/* <hr />
        <div className="w-full">Copyright</div> */}
    </div>
  )
}

export default Footer