import React from 'react'
import "../assets/css/experience.css"


const Experience = () => {
  return (
    <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)] text-[#6D6D6D] sm:mx-[10%] bg-white'>
        <div className={`col-span-4 row-span-1 py-2 sm:py-5 px-8 relative`}>
            <div className="flex flex-col items-start py-2 sm:ps-6 w-full">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#ff963c] ">Experience</h1>
                <h1 className="text-sm sm:text-lg font-normal text-[#171717] py-[1.5rem]"><span className='font-semibold'>Fullstack Developer&nbsp;</span> with over <span className='text-[#fff] bg-[#ff963c] px-1 rounded-sm'>1.5 +</span> <span className='font-semibold'>&nbsp;&nbsp; years</span> of hands-on experience in building and maintaining scalable web applications and desktop software.</h1>
                <ol className='activities sm:ps-[2rem] text-sm sm:text-lg list-decimal text-[#ff963c] w-full mt-4'>
                    <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-[2px] py-2px sm:px-4 sm:py-1 border rounded-md absolute top-[5%] left-[-15%] sm:left-[-8.5%] sm:top-[10%] bg-white sm:bg-transparent text-xs sm:text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2024</span>
                        <div className="flex flex-col sm:flex-row sm:absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>Order Management and Tracking Dashboards</span>
                                <span className="text-sm ps-1">Technologies: Django (REST API), ReactJS, Redux, JWT Token Auth, Google Location API, Celery, Redis</span>
                            </div>
                            <div className='text-[#6D6D6D] ms-2 mt-4 mb-4 ms:ms-0 sm:mt-0 sm:mb-0 text-sm sm:text-sm px-4 py-4 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn group-hover:bg-[#ff973e14] delay-50'>Developed intuitive dashboards for roles like Admin, Statehead, and Superusers to manage orders and track riders in real-time. Integrated real-time rider location and order status, improving operational transparency.
                            </div>        
                        </div>
                    </li>
                    <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-[2px] py-2px sm:px-4 sm:py-1 border rounded-md absolute top-[5%] left-[-15%] sm:left-[-8.5%] sm:top-[10%] bg-white sm:bg-transparent text-xs sm:text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2024</span>
                        <div className="flex flex-col sm:flex-row sm:absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>Warehouse Management System</span>
                                <span className="text-sm ps-1">Technologies: Django, MSSQL, JavaScript, jQuery, Rest API, Bootstrap</span>
                            </div>
                            <div className='text-[#6D6D6D] ms-2 mt-4 mb-4 ms:ms-0 sm:mt-0 sm:mb-0 text-sm sm:text-sm px-4 py-4 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn group-hover:bg-[#ff973e14] delay-50'>Implemented a warehouse management system to enhance inventory tracking and management. The system provided real-time stock updates, automated reorder alerts, and detailed inventory reports, leading to improved operational efficiency.
                            </div>        
                        </div>
                    </li>
                    <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-[2px] py-2px sm:px-4 sm:py-1 border rounded-md absolute top-[5%] left-[-15%] sm:left-[-8.5%] sm:top-[10%] bg-white sm:bg-transparent text-xs sm:text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2023</span>
                        <div className="flex flex-col sm:flex-row sm:absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>US-based Exam Preparation Website</span>
                                <span className="text-sm ps-1">Technologies: Django, MySQL, JavaScript, jQuery, ReactJS, Stripe API</span>
                            </div>
                            <div className='text-[#6D6D6D] ms-2 mt-4 mb-4 ms:ms-0 sm:mt-0 sm:mb-0 text-sm sm:text-sm px-4 py-4 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn group-hover:bg-[#ff973e14] delay-50'>Built a website for teachers to prepare, generate, and download exam papers. Integrated a subscription-based payment system using Stripe API to manage recurring payments and user subscriptions, offering a smooth and secure checkout experience.
                            </div>        
                        </div>
                    </li>
                    <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-[2px] py-2px sm:px-4 sm:py-1 border rounded-md absolute top-[5%] left-[-15%] sm:left-[-8.5%] sm:top-[10%] bg-white sm:bg-transparent text-xs sm:text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2023</span>
                        <div className="flex flex-col sm:flex-row sm:absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>Windows Application for Video Data Collection</span>
                                <span className="text-sm ps-1">Technologies: Python, PyQT6, Django, Rest API, SFTP Integration</span>
                            </div>
                            <div className='text-[#6D6D6D] ms-2 mt-4 mb-4 ms:ms-0 sm:mt-0 sm:mb-0 text-sm sm:text-sm px-4 py-4 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn group-hover:bg-[#ff973e14] delay-50'>Created a desktop application for video data collection, significantly improving data processing and analysis efficiency. The application allowed users to record, manage, and store video files, with features for metadata tagging and export.
                            </div>        
                        </div>
                    </li>
                    <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-[2px] py-2px sm:px-4 sm:py-1 border rounded-md absolute top-[5%] left-[-15%] sm:left-[-8.5%] sm:top-[10%] bg-white sm:bg-transparent text-xs sm:text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2023</span>
                        <div className="flex flex-col sm:flex-row sm:absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>Data Collection Website</span>
                                <span className="text-sm ps-1">Technologies:  Django, MySQL, JavaScript, jQuery, Django Templates</span>
                            </div>
                            <div className='text-[#6D6D6D] ms-2 mt-4 mb-4 ms:ms-0 sm:mt-0 sm:mb-0 text-sm sm:text-sm px-4 py-4 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn group-hover:bg-[#ff973e14] delay-50'>Developed and maintained a web-based platform for data collection, enabling efficient processing and visualization of large datasets. Implemented features for data submission, filtering, and reporting. User Role Based Access to resources.
                            </div>        
                        </div>
                    </li>









                    {/* <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-[2px] py-2px sm:px-4 sm:py-1 border rounded-md absolute top-[5%] left-[-15%] sm:left-[-8.5%] sm:top-[10%] bg-white sm:bg-transparent text-xs sm:text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2024</span>
                        <div className="flex flex-col sm:flex-row absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>Warehouse Management System</span>
                                <span className="text-sm ps-1">Technologies: Django, MSSQL, JavaScript, jQuery, Rest API, Bootstrap</span>
                            </div>
                            <div className='text-[#6D6D6D] text-sm sm:text-sm border px-4 py-2 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn delay-50'>Implemented a warehouse management system to enhance inventory tracking and management. The system provided real-time stock updates, automated reorder alerts, and detailed inventory reports, leading to improved operational efficiency.
                            </div>        
                        </div>
                    </li> */}
                    {/* <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-4 py-1 border rounded-md absolute left-[-8.5%] top-[10%] text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2023</span>
                        <div className="flex flex-col sm:flex-row absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>US-based Exam Preparation Website</span>
                                <span className="text-sm ps-1">Technologies: Django, MySQL, JavaScript, jQuery, ReactJS, Stripe API</span>
                            </div>
                            <div className='text-[#6D6D6D] text-sm sm:text-sm border px-4 py-2 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn delay-50'>Built a website for teachers to prepare, generate, and download exam papers. Integrated a subscription-based payment system using Stripe API to manage recurring payments and user subscriptions, offering a smooth and secure checkout experience.
                            </div>        
                        </div>
                    </li> */}
                    {/* <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-4 py-1 border rounded-md absolute left-[-8.5%] top-[10%] text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2023</span>
                        <div className="flex flex-col sm:flex-row absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>Windows Application for Video Data Collection</span>
                                <span className="text-sm ps-1">Technologies: Python, PyQT6, Django, Rest API, SFTP Integration</span>
                            </div>
                            <div className='text-[#6D6D6D] text-sm sm:text-sm border px-4 py-2 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn delay-50'>Created a desktop application for video data collection, significantly improving data processing and analysis efficiency. The application allowed users to record, manage, and store video files, with features for metadata tagging and export.
                            </div>        
                        </div>
                    </li> */}
                    {/* <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-4 py-1 border rounded-md absolute left-[-8.5%] top-[10%] text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2023</span>
                        <div className="flex flex-col sm:flex-row absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>Data Collection Website</span>
                                <span className="text-sm ps-1">Technologies:  Django, MySQL, JavaScript, jQuery, Django Templates</span>
                            </div>
                            <div className='text-[#6D6D6D] text-sm sm:text-sm border px-4 py-2 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn delay-50'>Developed and maintained a web-based platform for data collection, enabling efficient processing and visualization of large datasets. Implemented features for data submission, filtering, and reporting. User Role Based Access to resources.
                            </div>        
                        </div>
                    </li>
                    <li className='flex flex-grow border-l border-l-1 border-l-[#ff963c] min-h-[200px] relative group'>
                        <span className="px-4 py-1 border rounded-md absolute left-[-8.5%] top-[10%] text-sm font-normal hidden group-hover:block group-hover:fastanimation-fadeIn">2023</span>
                        <div className="flex flex-col sm:flex-row absolute flex-grow group">
                            <div className="flex flex-col sm:min-w-[350px] sm:w-[350px] ps-3 pt-3 hover:cursor-pointer">
                                <span className='px-1 font-medium'>Data Collection Website</span>
                                <span className="text-sm ps-1">Technologies:  Django, MySQL, JavaScript, jQuery, Django Templates</span>
                            </div>
                            <div className='text-[#6D6D6D] text-sm sm:text-sm border px-4 py-2 rounded-md shadow-sm font-medium hidden group-hover:block group-hover:animate-fadeIn delay-50'>Developed and maintained a web-based platform for data collection, enabling efficient processing and visualization of large datasets. Implemented features for data submission, filtering, and reporting. User Role Based Access to resources.
                            </div>        
                        </div>
                    </li> */}
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Experience