'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroImg from '@/assets/images/heroImg.png';

const Hero = () => {
  // Animation variants
  const leftContentVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      y: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0
    }
  };

  const rightImageVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      y: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0
    }
  };

  // Set title when Hero component mounts (as backup)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'Dulaj Personal';
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-40 md:pt-32">
      


      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={leftContentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Hey!
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                I am Dulaj
              </h2>
              
              <p className="text-sm sm:text-sm md:text-md lg:text-lg text-black dark:text-gray-300 leading-relaxed mb-4">
                IT graduate from{' '}
                <a 
                  href="https://uom.lk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                >
                  UOM
                </a>
              </p>
              
              <p className="text-sm sm:text-sm md:text-md lg:text-lg text-black dark:text-gray-300 leading-relaxed mb-4">
                Software Engineer at{' '}
                <a 
                  href="https://masgraslaw.ca/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                >
                  Masgras Professional Corporation
                </a>
              </p>
              
              <p className="text-sm sm:text-sm md:text-md lg:text-lg text-black dark:text-gray-300 leading-relaxed mb-4">
                DevOps and Full-Stack enthusiast
              </p>
              
              <p className="text-sm sm:text-sm md:text-md lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Passionate about building sustainable, user-focused solutions that enhance productivity while prioritizing human well-being and environmental responsibility.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={rightImageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              {/* Your Image */}
              <div className="w-full h-96 md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src={heroImg} 
                  alt="Dulaj Upananda" 
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Removed scroll indicator since we're using separate pages */}
    </section>
  );
};

export default Hero;