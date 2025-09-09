'use client';

import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-purple-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-6xl font-bold text-gray-900">
                    DU
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Passionate Developer & Designer
            </h3>
            
            <p className="text-gray-600 text-xl sm:text-2xl mb-6 leading-relaxed">
              I'm a creative and detail-oriented full-stack developer with a passion for 
              building beautiful, functional, and user-centered digital experiences. With 
              expertise in modern web technologies, I love turning complex problems into 
              simple, elegant solutions.
            </p>

            <p className="text-gray-600 text-xl sm:text-2xl mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing my knowledge through technical writing. 
              I believe in continuous learning and staying up-to-date with the latest 
              industry trends.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h4 className="text-purple-600 font-semibold text-xl sm:text-2xl mb-2">Experience</h4>
                <p className="text-gray-600">3+ Years</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h4 className="text-purple-600 font-semibold text-xl sm:text-2xl mb-2">Projects</h4>
                <p className="text-gray-600">50+ Completed</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h4 className="text-purple-600 font-semibold text-xl sm:text-2xl mb-2">Clients</h4>
                <p className="text-gray-600">20+ Happy</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h4 className="text-purple-600 font-semibold text-xl sm:text-2xl mb-2">Awards</h4>
                <p className="text-gray-600">5+ Won</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
