'use client'

import React, { useState, useEffect } from 'react';

type TimerProps = {
  endDate?: string;
};

export const Timer: React.FC<TimerProps> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState<number[]>([]);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const end = new Date(endDate || '2024-12-20T00:00:00');

     
      if (isNaN(end.getTime())) {
        console.error("Invalid end date provided:", endDate);
        return [0, 0, 0, 0];
      }

      const difference = end.getTime() - now.getTime();

     
      if (difference <= 0) {
        return [0, 0, 0, 0];
      }

     
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return [days, hours, minutes, seconds];
    };

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  const timeUnits = ['d', 'h', 'm', 's'];

  return (
    <div className="timer-container flex text-4xl font-bold bg-transparent justify-center items-center">
      {timeLeft.some(t => t > 0) ? (
        <>
          {timeLeft.map((value, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <div className="bg-gradient-to-b from-orange-500 via-orange-300 to-orange-800  text-white px-3 py-1 rounded-md">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="ml-1 text-sm">{timeUnits[index]}</div>
              </div>
              {index !== timeLeft.length - 1 && <div className="mx-1">:</div>}
            </React.Fragment>
          ))}
        </>
      ) : (
        <div className="text-xl">Time's up!</div>
      )}
    </div>
  );
};

