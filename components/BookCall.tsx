"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BookCall = () => {
  return (
    <div className="flex justify-center md:justify-start px-4 -mt-2 mb-4">
      <motion.div 
        className="gradient bg-gradient-to-b from-[#252525] to-[#3B3B3B] rounded-lg p-[1px] relative overflow-hidden w-full sm:w-auto"
        initial={{ backgroundPosition: '200% 0' }}
        animate={{ 
          backgroundPosition: ['200% 0', '0% 0'] 
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 1
        }}
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 85%, rgba(255,255,255,0.1) 95%, rgba(255,255,255,0) 100%)',
          backgroundSize: '200% 100%',
        }}
      >
        <a 
          href="https://cal.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block h-full bg-[#1C1C1C] rounded-lg text-white text-sm sm:text-md px-2 sm:px-3 py-2 sm:py-1.5 w-full transition-all group relative overflow-hidden" 
        >
          <div className="flex items-center gap-2 group-hover:gap-8 sm:group-hover:gap-12 transition-all duration-300 justify-center md:justify-start">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image 
                alt="Profile" 
                width={26} 
                height={26} 
                className="w-full h-full object-cover" 
                src="/test.jpeg"
              />
            </div>
            <div className="flex items-center gap-0 absolute left-[28px] sm:left-[30px] transform -translate-x-full opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-2 h-2 sm:w-3 sm:h-3">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center text-[8px] sm:text-[10px]">You</div>
            </div>
            <span className="whitespace-nowrap relative block text-sm sm:text-base">
              Book a Free Call
            </span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default BookCall; 