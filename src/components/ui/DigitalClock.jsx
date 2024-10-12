import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    // State to store the current time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Function to update the time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    // Format the time (HH:MM:SS)
    const formatTime = (time) => {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-lg px-2 sm:px-4 py-2 min-w-[100px]">
            <h1 className="text-sm tracking-wider sm:text-xl font-bold uppercase">Time</h1>
            <h2 className="text-lg sm:text-3xl mt-0">{formatTime(currentTime)}</h2>
        </div>
    );
};

export default DigitalClock;
