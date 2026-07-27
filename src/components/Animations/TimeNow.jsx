import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

function TimeNow() {
  const { theme } = useTheme();

  // Config options to strictly enforce 12-hour format with AM/PM
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('en-US', timeOptions)
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', timeOptions));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className='flex flex-col font-roboto-condensed text-sm md:text-base text-gray-500 tracking-tighter'>
      <p className='text-xs'>LOCAL TIME (AEST +10)</p>
      <p className={`text-2xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{time}</p>
      <p className='text-xs'>Canberra, ACT</p>
    </div>
  );
}

export default TimeNow;