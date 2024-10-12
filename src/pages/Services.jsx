import React from 'react'

const Services = () => {
  return (
    <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)] text-[#6D6D6D] sm:mx-[10%] bg-white'>
    <div className={`col-span-4 row-span-1 py-2 sm:py-5 animate-fadeIn px-8 relative`}>
        <div className="flex flex-col items-start py-2 sm:ps-6">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#ff963c] ">Services I Provide</h1>
            <h1 className="text-sm sm:text-lg font-normal text-[#171717]">Fullstack Developer | Python | Django | ReactJS | REST API</h1>
        </div>
        <ol className='py-[0.5rem] sm:ps-[2rem] text-sm sm:text-lg list-decimal text-[#ff963c] '>
            <li className='w-full py-2'>
                <span className='px-1 font-medium'>Fullstack Web Development:</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-normal'>I offer comprehensive fullstack web development services, covering both frontend and backend. From creating stunning, responsive user interfaces to setting up powerful, scalable backends, I deliver solutions that meet your exact needs. Technologies include:</span>
                <ul className='py-[0.5rem] ps-10 text-xs sm:text-lg list-disc text-[#6D6D6D]'>
                    <li className='w-full py-2'>
                        <span className='px-1'>Frontend: ReactJS, jQuery, HTML, CSS, JavaScript</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1'>Backend: Django, Python, REST API, MySQL, PostgreSQL</span>
                    </li>
                </ul>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium'>Custom REST API Development</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-normal'>I design and develop robust RESTful APIs that enable seamless communication between your frontend, backend, and external services. With Django and Python, I ensure that your API is secure, scalable, and optimized for performance.</span>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium'>Responsive UI/UX Development</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-normal'>With expertise in HTML, CSS, and ReactJS, I build responsive, modern, and user-friendly interfaces. Whether it's a new website or a redesign, I create UIs that are intuitive, mobile-friendly, and visually appealing.</span>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium'>Third-Party API Integration</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-normal'>I specialize in integrating third-party services and APIs (like payment gateways, authentication services, and data providers) into your existing systems to expand functionality without sacrificing performance or security.</span>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium'>E-Commerce Development</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-normal'>I can help you build a secure, scalable e-commerce platform or add e-commerce functionality to your existing website. From payment gateway integration to product management, I can help you create a seamless buying experience.</span>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium'>Maintenance and Support</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-normal'>Beyond development, I offer ongoing support and maintenance services. Whether it's bug fixing, security updates, performance optimization, or feature enhancements, I ensure your web application runs smoothly post-launch.</span>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium'>Code Auditing and Refactoring</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-normal'>If you already have an existing project that needs optimization, I offer in-depth code auditing and refactoring services to improve code efficiency, security, and maintainability. This ensures your codebase is future-proof and scalable.</span>
            </li>
        </ol>
        <p className="text-lg text-center px-[3rem] py-[2rem] bg-[#ff963c] text-white sm:text-[#6D6D6D] rounded-lg sm:bg-transparent"><b>Let’s Work Together</b><br/>
        No matter the size or complexity of your project, I am committed to delivering high-quality solutions tailored to your needs. Feel free to reach out, and let’s discuss how I can help bring your next project to life!</p>
    </div>
</div>
  )
}

export default Services