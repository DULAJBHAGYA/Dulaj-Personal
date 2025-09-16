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
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={leftContentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
                Hey!
              </h1>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
                I am Dulaj
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed mb-4">
                IT graduate from{' '}
                <a 
                  href="https://uom.lk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  UOM
                </a>
              </p>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed mb-4">
                Former Software Engineer Intern at{' '}
                <a 
                  href="https://futurecx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  Future CX
                </a>
              </p>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed mb-4">
                DevOps and Full-Stack enthusiast
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed">
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
              
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Removed scroll indicator since we're using separate pages */}
    </section>
  );
};

export default Hero;
