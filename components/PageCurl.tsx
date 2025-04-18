"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageCurl = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {!isExpanded && (
        <motion.div 
          className="page-curl fixed top-0 right-0 z-50" 
          aria-label="Expand to see abOS" 
          role="button" 
          tabIndex={0}
          onClick={handleClick}
          whileTap={{ scale: 0.95 }}
        />
      )}
      
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div 
            className="fixed inset-0 bg-[#004040] z-50 flex items-center justify-center"
            initial={{ 
              clipPath: "inset(0 0 100% 100%)",
              opacity: 0,
            }}
            animate={{ 
              clipPath: "inset(0 0 0 0)",
              opacity: 1,
            }}
            exit={{ 
              clipPath: "inset(0 0 100% 100%)",
              opacity: 0,
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div 
              className="w-full max-w-4xl p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.2,
                  duration: 0.5
                }
              }}
              exit={{ 
                opacity: 0, 
                y: -20,
                transition: {
                  duration: 0.3,
                  ease: [0.4, 0, 1, 1]
                }
              }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">abOS</h2>
                <motion.button 
                  onClick={handleClick}
                  className="text-white hover:text-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </div>
              
              <div className="text-center">
                <p className="mb-4">abOS System</p>
                {/* Add your expanded content here */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageCurl; 