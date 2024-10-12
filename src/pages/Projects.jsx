import React from 'react'

const Projects = () => {
  return (
    <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)] text-[#6D6D6D] sm:mx-[10%] bg-white'>
        <div className={`col-span-4 row-span-3 py-2 sm:py-5 animate-fadeIn px-8 relative`}>
        <div className="flex flex-col items-start py-2 sm:ps-6">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#ff963c] ">Projects</h1>
            <h1 className="text-sm sm:text-lg font-normal text-[#171717] pt-[1rem]">Fullstack Developer | Python | Django | ReactJS | REST API</h1>
        </div>
        <ol className='py-[0.5rem] sm:ps-[2rem] text-sm sm:text-lg list-decimal text-[#ff963c] '>
            <li className='w-full py-2'>
                <span className='px-1 font-medium block relative'><span className='hidden sm:inline-block absolute right-2 px-4 rounded-md py-1 shadow-sm text-xs text-[#ff963c] bg-[#e3e3e352]'>2024</span>Rider Tracking and Order Management System</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Technologies: &nbsp;</span> Django, ReactJS, MySQL, Redis, Celery</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Description:  &nbsp;</span>Developed a web-based platform to track riders and manage orders for a logistics company, allowing admins to view and manage rider assignments in real-time.</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-semibold block mt-4'>Key Contributions:</span>
                <ul className='py-[0.5rem] ps-10 text-xs sm:text-lg list-disc text-[#6D6D6D]'>
                    <li className='w-full py-2'>
                        <span className='px-1'>Developed RESTful APIs to integrate with Android apps for real-time data exchange.</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1'>Implemented features to track and update order statuses, improving delivery efficiency by 15%.</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1'>Created a responsive and user-friendly dashboard for Admins, Stateheads, and Superusers to monitor and allocate orders effectively.</span>
                    </li>
                </ul>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium block relative'><span className='hidden sm:inline-block absolute right-2 px-4 rounded-md py-1 shadow-sm text-xs text-[#ff963c] bg-[#e3e3e352]'>2024</span>RegentsIQ Education Platform</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Technologies: &nbsp;</span> Django, Django Templates, Stripe API</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Description:  &nbsp;</span>Built an educational platform allowing teachers to create, download, and purchase exam papers.</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-semibold block mt-4'>Key Contributions:</span>
                <ul className='py-[0.5rem] ps-10 text-xs sm:text-lg list-disc text-[#6D6D6D]'>
                    <li className='w-full py-2'>
                        <span className='px-1'>Integrated Stripe for secure payment processing, increasing subscription rates by 25%.</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1'>Developed custom templates for teachers to create exam papers easily.</span>
                    </li>
                </ul>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium block relative'><span className='hidden sm:inline-block absolute right-2 px-4 rounded-md py-1 shadow-sm text-xs text-[#ff963c] bg-[#e3e3e352]'>2024</span>Warehouse Management System</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Technologies: &nbsp;</span> Django, MsSQL, REST API</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Description:  &nbsp;</span>Created an inventory management system to track product stocks, orders, and warehouse performance.</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-semibold block mt-4'>Key Contributions:</span>
                <ul className='py-[0.5rem] ps-10 text-xs sm:text-lg list-disc text-[#6D6D6D]'>
                    <li className='w-full py-2'>
                        <span className='px-1'>Designed and implemented database schemas and RESTful APIs, reducing inventory mismanagement by 30%.</span>
                    </li>
                    <li className='w-full py-2'>
                        <span className='px-1'>Automated stock updates and inventory audits, resulting in a 20% reduction in manual inventory checks.</span>
                    </li>
                </ul>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium block relative'><span className='hidden sm:inline-block absolute right-2 px-4 rounded-md py-1 shadow-sm text-xs text-[#ff963c] bg-[#e3e3e352]'>2024</span>Windows Application for Video Data Collection</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Technologies: &nbsp;</span>Python, PyQT6</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Description:  &nbsp;</span>Developed a desktop application for video data collection and processing.</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-semibold block mt-4'>Key Contributions:</span>
                <ul className='py-[0.5rem] ps-10 text-xs sm:text-lg list-disc text-[#6D6D6D]'>
                    <li className='w-full py-2'>
                        <span className='px-1'>Built a user-friendly interface for operators to record and save video data, increasing video processing accuracy by 20%.</span>
                    </li>
                </ul>
            </li>
            <li className='w-full py-2'>
                <span className='px-1 font-medium block relative'><span className='hidden sm:inline-block absolute right-2 px-4 rounded-md py-1 shadow-sm text-xs text-[#ff963c] bg-[#e3e3e352]'>2024</span>Data Collection Website</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Technologies: &nbsp;</span>Django, MySQL, JavaScript, jQuery, Django Templates</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 py-1 font-normal block'><span className='font-semibold'>Description:  &nbsp;</span>Developed and maintained a web-based platform for data collection.</span>
                <span className='text-[#6D6D6D] text-sm sm:text-lg px-1 font-semibold block mt-4'>Key Contributions:</span>
                <ul className='py-[0.5rem] ps-10 text-xs sm:text-lg list-disc text-[#6D6D6D]'>
                    <li className='w-full py-2'>
                        <span className='px-1'>Developed and maintained a web-based platform for data collection, enabling efficient processing and visualization of large datasets. Implemented features for data submission, filtering, and reporting. User Role Based Access to resources.</span>
                    </li>
                </ul>
            </li>





{/* 


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
            </li> */}
        </ol>
        </div>
    </div>
  )
}

export default Projects