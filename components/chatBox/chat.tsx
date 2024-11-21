'use client';
import React, { useState } from 'react';
import { MessageSquare, X, Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Chat = () => {
    const [clicked, setClicked] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setShowOptions(true); 
    };

    const handleClose = () => {
        setShowOptions(false);
        setClicked(false); 
    };

    return (
        <div className="fixed bottom-4 left-6 z-20 rounded-full cursor-pointer">
            {!showOptions ? (
                <MessageSquare
                    size={50}
                    className={`text-blue-500 p-2 bg-blue-200 rounded-full transform transition-transform duration-300 ${clicked ? 'rotate-180' : 'rotate-0'}`}
                    onClick={handleClick}
                />
            ) : (
                <div className=" bottom-4  fixed  gap-2 ">
                  
                  <div
                        className="group flex items-center gap-2 pb-2 transition-all duration-500 ease-in-out "
                    >
                       <a href="tel:+919304251279"><Phone size={45} className="text-blue-600 py-2 bg-blue-200 rounded-full" /></a>
                        <p className="text-sm text-transparent group-hover:text-white group-hover:bg-black group-hover:opacity-90 py-1 px-3 rounded-3xl "> Phone
                        </p>
                        
                           
                    </div>

  
                    <div
                        className="group flex items-center gap-2 pb-2 transition-all duration-500 ease-in-out "
                    >
                        <Link href="https://wa.me/+919304251279"><FaWhatsapp size={50} className="text-green-600 py-2 bg-green-200 rounded-full" /></Link>
                        <p className="text-sm text-transparent group-hover:text-white group-hover:bg-black group-hover:opacity-90 py-1 px-3 rounded-3xl "> WhatsApp
                        </p>
                        
                           
                    </div>


                    <div
                        className="group flex items-center gap-2 transition-all duration-500 ease-in-out"
                    >
                        <div className='transform transition-transform rotate-180 duration-500 '>
                        <X
                            size={50}
                            className="text-blue-500 p-2 bg-blue-200 rounded-full  "
                            onClick={handleClose}
                        />
                        </div>
                        
                        <p className="text-sm text-transparent group-hover:text-white group-hover:bg-black group-hover:opacity-90 py-1 px-3 rounded-3xl transition-all">
                            Close
                        </p>
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
