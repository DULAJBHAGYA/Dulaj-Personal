'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Removed scroll functionality since we're using separate pages

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">
                Hey!
              </h1>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
                I am Dulaj
              </h2>
              
              <p className="text-xl sm:text-2xl text-black leading-relaxed mb-4">
                IT Undergraduate from{' '}
                <a 
                  href="https://uom.lk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  UOM
                </a>
              </p>
              
              <p className="text-xl sm:text-2xl text-black leading-relaxed mb-4">
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
              
              <p className="text-xl sm:text-2xl text-black leading-relaxed mb-4">
                DevOps and Full-Stack enthusiast
              </p>
              
              <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
                Passionate about building sustainable, user-focused solutions that enhance productivity while prioritizing human well-being and environmental responsibility.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Your Image */}
              <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/HeroImg.jpg" 
                  alt="Dulaj Upananda" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed scroll indicator since we're using separate pages */}
    </section>
  );
};

export default Hero;
