import React from 'react'
import { Link } from 'react-router-dom';
const ProjectCard = ({props}) => {
  return (
    <div className="relative flex flex-col items-center justify-center shadow-md rounded-md px-5 py-[1.5rem] bg-[#fd9d6138] hover:cursor-pointer transition-all duration-150 hover:transform w-[300px] sm:w-[30%] flex-grow min-h-[260px] sm:min-h-[250px]">
        <span className='z-10 font-normal bg-[#f5f3f3e3]  px-2 rounded-sm text-[#FF8B42] absolute top-2 right-2 text-xs sm:text-sm'>{props.year}</span>
        <div className="z-10 absolute bottom-0 flex flex-col items-center w-full rounded-t-none rounded-b-md backdrop-blur-[35px] bg-[#6c463a8c]">
            <h1 className="text-sm md:text-lg font-light text-center py-2 text-[#fff] px-2">
                {props.tech}
            </h1>
        </div>
        <span className='z-10 font-medium text-[##525252] text-lg sm:text-lg block max-w-[90%] text-center mt-[1rem]'>{props.title}</span>
        <Link to="/projects" className='z-10 mt-4 rounded-full shadow-sm border-none outline-none py-1 px-8 bg-[#ededed] hover:bg-[#3a446c8c] hover:text-[#fff] hover:transition-all duration-200 hover:cursor-pointer'>See</Link>
    </div>

  )
}

export default ProjectCard