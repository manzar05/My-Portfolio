// import React, { useState } from 'react';
// import { FaAngleDown } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const ServicesCard = ({ props }) => {
//     // State to keep track of which card is open
//     const [openIndex, setOpenIndex] = useState(null);

//     // Function to toggle the visibility of a specific card
//     const toggleOpen = (index) => {
//         if (openIndex === index) {
//             setOpenIndex(null); // Close the currently open card
//         } else {
//             setOpenIndex(index); // Open the selected card
//         }
//     };

//     return (
//         <div className="flex flex-wrap gap-4">
//             {props.map((item, index) => (
//                 <div 
//                     key={index} 
//                     className="flex flex-col shadow-md rounded-md px-5 relative bg-white hover:cursor-pointer transition-all duration-150 hover:transform hover:scale-[1.05] sm:hover:scale-[1.05] w-[280px] sm:w-[340px] flex-grow"
//                 >
//                     <div className="flex flex-row items-center justify-between">
//                         <h1 className={`text-md md:text-lg font-medium text-center py-2 ${openIndex == index ? 'text-orange-500' : 'text-[#6D6D6D]'}`}>
//                             {item.title}
//                         </h1>
//                         <span 
//                             className="rounded-full drop-shadow-md hover:text-orange-500 text-[#6D6D6D]" 
//                             onClick={() => toggleOpen(index)} // Toggle the specific card
//                         >
//                             <FaAngleDown />
//                         </span>
//                     </div>
//                     <div 
//                         className={`flex flex-col items-start justify-start transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0 pt-0'}`}
//                     >
//                         <h1 className="text-sm  sm:text-md text-[#6D6D6D] font-medium">
//                             {item.description}
//                         </h1>
//                         <span className="text-sm text-right w-full text-orange-500 hover:cursor-pointer pt-2"><Link to={item.link}>Read More ...</Link></span>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ServicesCard;


// import React, { useState } from 'react';
// import { FaAngleDown } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const ServicesCard = ({ props }) => {
//     // State to keep track of which card is open
//     const [openIndex, setOpenIndex] = useState(null);

//     // Function to toggle the visibility of a specific card
//     const toggleOpen = (index) => {
//         if (openIndex === index) {
//             setOpenIndex(null); // Close the currently open card
//         } else {
//             setOpenIndex(index); // Open the selected card
//         }
//     };

//     return (
//         <div className="flex flex-wrap gap-4">
//             {props.map((item, index) => (
//                 <div 
//                     key={index} 
//                     className="flex flex-col shadow-md rounded-md px-5 relative bg-white hover:cursor-pointer transition-all duration-150 hover:transform hover:scale-[1.05] sm:hover:scale-[1.05] w-[280px] sm:w-[340px] flex-grow"
//                 >
//                     <div className="flex flex-row items-center justify-between">
//                         <h1 className={`text-md md:text-lg font-medium text-center py-2 ${openIndex == index ? 'text-orange-500' : 'text-[#6D6D6D]'}`}>
//                             {item.title}
//                         </h1>
//                         <span 
//                             className="rounded-full drop-shadow-md hover:text-orange-500 text-[#6D6D6D]" 
//                             onClick={() => toggleOpen(index)} // Toggle the specific card
//                         >
//                             <FaAngleDown />
//                         </span>
//                     </div>
//                     <div 
//                         className={`flex flex-col items-start justify-start transition-all duration-300 ease-in-out absolute top-[100%] left-0 p-4 z-100 bg-[#fff]`}
//                     >
//                         <h1 className="text-sm  sm:text-md text-[#6D6D6D] font-medium">
//                             {item.description}
//                         </h1>
//                         <span className="text-sm text-right w-full text-orange-500 hover:cursor-pointer pt-2"><Link to={item.link}>Read More ...</Link></span>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ServicesCard;

import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServicesCard = ({ props }) => {
    // State to keep track of which card is open
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the visibility of a specific card
    const toggleOpen = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close the currently open card
        } else {
            setOpenIndex(index); // Open the selected card
        }
    };

    return (
        <div className="flex flex-wrap gap-8">
            {props.map((item, index) => (
                <div 
                    key={index} 
                    className={`flex flex-col shadow-md rounded-md px-5 relative bg-white hover:cursor-pointer transition-all duration-150 w-[280px] sm:w-[340px] flex-grow ${
                        openIndex === index ? 'z-1' : 'z-0'
                    }`}
                >
                    <div className="flex flex-row items-center justify-between z-0">
                        <h1 className={`text-md md:text-lg font-medium text-center py-2 ${openIndex === index ? 'text-orange-500' : 'text-[#6D6D6D]'}`}>
                            {item.title}
                        </h1>
                        <span 
                            className="rounded-full drop-shadow-md hover:text-orange-500 text-[#6D6D6D]" 
                            onClick={() => toggleOpen(index)} // Toggle the specific card
                        >
                            <FaAngleDown />
                        </span>
                    </div>

                    {/* This is the description section with absolute positioning */}
                    <div 
                        className={`transition-all duration-300 ease-in-out absolute rounded-md top-full left-0 mt-1 p-4 bg-white shadow-lg w-full ${
                            openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                    >
                        <h1 className="text-sm sm:text-md text-[#6D6D6D] font-medium">
                            {item.description}
                        </h1>
                        <span className="text-sm text-right w-full text-orange-500 hover:cursor-pointer pt-2 block">
                            <Link to={item.link}>Read More ...</Link>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesCard;

