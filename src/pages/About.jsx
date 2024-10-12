import React from 'react'

const About = () => {
  return (
    <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)] text-[#6D6D6D] sm:mx-[10%] bg-white'>
        <div className={`col-span-4 row-span-1 py-2 sm:py-5 animate-fadeIn px-8`}>
            <div className="flex flex-col items-start py-2">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#ff963c] ">About</h1>
                <h1 className="text-sm sm:text-lg font-normal text-[#171717]">Fullstack Developer | Python | Django | ReactJS | REST API</h1>
            </div>
            <p className="text-sm text-justify sm:text-lg py-4">With a passion for building high-performance, scalable, and user-friendly web applications, I am a <span className='text-[#ff963c] px-1'>Fullstack Developer</span> based in Gurgaon, currently working at <span className='text-[#ff963c] px-1'>SoftAge Information Technology</span>. Over the years, I have honed my expertise in a wide range of technologies including <span className='text-[#fff] bg-[#ff963c] px-1'>Django, ReactJS, REST API, JavaScript, jQuery, HTML,</span> and <span className='text-[#fff] bg-[#ff963c] px-1'>CSS</span>, allowing me to deliver end-to-end solutions for both frontend and backend development.
            <br/>
            My development philosophy is rooted in creating applications that are not only functional but also intuitive, secure, and scalable. Whether it's a robust backend system powered by <span className='text-[#fff] bg-[#ff963c] px-1'>Django</span> and <span className='text-[#fff] bg-[#ff963c] px-1'>Python</span>, or a sleek, responsive frontend built with <span className='text-[#fff] bg-[#ff963c] px-1'>ReactJS</span> and modern <span className='text-[#fff] bg-[#ff963c] px-1'>JavaScript</span> frameworks, I ensure every aspect of the project is aligned with the client's vision and goals.</p>
        </div>
        <div className={`col-span-4 row-span-2 px-4 py-2 sm:py-5 animate-fadeIn`}>
            <div className="flex flex-col items-start py-2 relative">
                <h1 className="text-lg font-medium text-white px-4 py-0 bg-[#ff963c] rounded-full">Core Strengths :</h1>
                <ol className='py-[0.5rem] ps-10 sm:text-lg list-decimal text-[#ff963c] '>
                    <li className='w-full py-2'>
                        <span className='px-1 font-medium'>Comprehensive Fullstack Development:</span>
                        <span className='text-[#6D6D6D] px-1 font-normal'>I can manage both frontend and backend development, ensuring seamless integration of APIs and frontend interfaces.</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1 font-medium'>Efficient API Development:</span>
                        <span className='text-[#6D6D6D] px-1 font-normal'>Specialized in creating secure, optimized, and scalable REST APIs using Django and Python.</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1 font-medium'>Frontend Expertise:</span>
                        <span className='text-[#6D6D6D] px-1 font-normal'>With ReactJS and modern JavaScript, I build dynamic, responsive, and intuitive UIs that enhance user experience.</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1 font-medium'>Proactive Communication:</span>
                        <span className='text-[#6D6D6D] px-1 font-normal'>I keep clients informed at every step, ensuring transparency and timely project delivery.</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1 font-medium'>Problem Solver:</span>
                        <span className='text-[#6D6D6D] px-1 font-normal'>Whether debugging, optimizing performance, or enhancing security, I have a proven track record of tackling technical challenges head-on.</span>
                    </li>
                </ol>
                <p className="text-lg text-center px-[3rem] py-[2rem] bg-[#ff963c] text-white sm:text-[#6D6D6D] rounded-lg sm:bg-transparent">In every project I take on, my focus is on driving results and adding value to the client’s business. Let’s collaborate to bring your vision to life with cutting-edge technology!</p>
            </div>
        </div>
    </div>
  )
}

export default About