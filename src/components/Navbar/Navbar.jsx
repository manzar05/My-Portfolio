import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosList } from "react-icons/io";
import { MdClose } from "react-icons/md";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState("hidden");
  const [listToggle, setListToggle] = useState("flex");
  return (
    <div className='mx-[0rem] sm:mx-[2rem] sm:rounded-full sm:bg-[#111827fa] text-[#fff] tracking-wider font-medium sticky top-[0rem] sm:top-2 z-100'>
        <div className="relative sm:hidden w-[100%]">
            <button className={`absolute top-2 right-4 bg-[#3030309e] rounded-md p-2 w-10 h-10 flex items-center justify-center ${listToggle}`} onClick={() => {setMenuOpen("flex");setListToggle('hidden')}} ><IoIosList className='w-10 h-10' /></button>
            <ul className={`flex flex-col items-start justify-evenly sm:hidden absolute  bg-[#111827fa] w-full ${menuOpen} px-[1rem] uppercase`}>
                <li className="my-[0.1rem] rounded-md py-4 ps-8 relative"><h1 className="text-3xl font-black tracking-wider">Manzar<span className="text-[#ff963c] p-0 m-0">&nbsp;&nbsp;Imam</span></h1><button className="fixed sm:hidden top-2 right-4 text-lg font-semibold w-10 h-10 flex items-center justify-center" onClick={() => {setMenuOpen("hidden");setListToggle("flex")}} ><MdClose /></button></li>
                <li className="my-[0.1rem] rounded-md py-2 w-full"><Link to="/" className='block px-8 py-2 w-[100%] h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 '>Home</Link> </li>
                <li className="my-[0.1rem] rounded-md py-2 w-full"><Link to="/about" className='block px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 '>About</Link> </li>
                <li className="my-[0.1rem] rounded-md py-2 w-full"><Link to="/services" className='block px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 '>Services</Link> </li>
                <li className="my-[0.1rem] rounded-md py-2 w-full"><Link to="/experience" className='block px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 '>Experience</Link> </li>
                <li className="my-[0.1rem] rounded-md py-2 w-full"><Link to="/contact" className='block px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 '>Contact</Link> </li>
                <li className="my-[0.1rem] rounded-md py-2 w-full"><Link to="/projects" className='block px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 '>Projects</Link> </li>
                <li className="my-[0.1rem] rounded-md py-2 w-full"><Link to="/resume" className='block px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 '>Resume</Link> </li>
            </ul>
        </div>
        <ul className='sm:flex items-center justify-evenly hidden'>
            <li className="my-2"><Link to="/" className='px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 rounded-full'>Home</Link> </li>
            <li className="my-2"><Link to="/about" className='px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 rounded-full'>About</Link> </li>
            <li className="my-2"><Link to="/services" className='px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 rounded-full'>Services</Link> </li>
            <li className="my-2"><Link to="/experience" className='px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 rounded-full'>Experience</Link> </li>
            <li className="my-2"><Link to="/contact" className='px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 rounded-full'>Contact</Link> </li>
            <li className="my-2"><Link to="/projects" className='px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 rounded-full'>Projects</Link> </li>
            <li className="my-2"><Link to="/resume" className='px-8 py-2 w-full h-full hover:bg-[#FF8B42] hover:cursor-pointer transition-all duration-200 rounded-full'>Resume</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar