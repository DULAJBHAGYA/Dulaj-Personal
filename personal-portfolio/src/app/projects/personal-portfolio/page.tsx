'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";

export default function PersonalPortfolio() {
  const pageTitle = 'Personal Portfolio | Dulaj Personal';

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion for smooth animations." />
      </Head>
      <Navbar />
      
      <section className="py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6 mt-4"
            >
              <IoIosArrowForward className="transform rotate-180 mr-2" />
              Back to Projects
            </Link>
            
            <div className="flex flex-col gap-8">
              {/* Project Content */}
              <div className="bg-white rounded-3xl p-8">
                <div className="mb-6">
                  <span className="text-lg font-semibold text-gray-500">Frontend Development</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">Personal Portfolio</h1>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion for smooth animations. This project demonstrates my skills in frontend development, UI/UX design, and modern web technologies.
                </p>
                
                <div className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      This portfolio website serves as both a personal showcase and a demonstration of my frontend development capabilities. Built with cutting-edge technologies, it provides an engaging user experience while highlighting my projects, skills, and experiences. The site is designed to be fully responsive, ensuring an optimal viewing experience across all devices from mobile phones to desktop computers.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Architecture and Structure</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The portfolio follows a component-based architecture using Next.js App Router, which allows for efficient code splitting and improved performance. The site is organized into several key sections including a hero section, about page, skills showcase, projects gallery, blog section, and contact form. Each section is built as reusable components that can be easily maintained and extended. The routing system leverages Next.js file-based routing for clean URLs and optimal SEO.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Design and User Experience</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The design philosophy centers on clean aesthetics, intuitive navigation, and smooth interactions. Tailwind CSS is used extensively for styling, providing a consistent design system while maintaining flexibility. Framer Motion powers the animation system, creating smooth transitions between pages and interactive elements that enhance user engagement without compromising performance. The color scheme is carefully chosen to be visually appealing while maintaining accessibility standards.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      The portfolio includes several advanced features that demonstrate modern web development practices:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Fully responsive design for all device sizes with mobile-first approach</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Smooth animations and transitions using Framer Motion for enhanced user experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Dark/light mode toggle with system preference detection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Optimized performance with Next.js features like automatic code splitting and image optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">SEO-friendly structure with proper meta tags and semantic HTML</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Accessible design following WCAG guidelines for inclusive user experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Interactive project cards with detailed modal views</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Dynamic blog section with markdown support</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Implementation</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      The technical implementation showcases several modern development practices:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Next.js 13+ with App Router for improved routing and layout management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">TypeScript for type safety and improved developer experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Tailwind CSS for utility-first styling and design consistency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Framer Motion for declarative animations and micro-interactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">React Icons for consistent iconography throughout the application</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">ESLint and Prettier for code quality and formatting standards</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimizations</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Performance was a key consideration throughout development. The site implements automatic code splitting through Next.js, image optimization with Next/Image component, and efficient bundle management. Animations are optimized to maintain 60fps, and the site achieves high scores on performance metrics including Core Web Vitals. Lazy loading is implemented for non-critical resources, and the build process includes minification and compression.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Development Process</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The development process followed an iterative approach, beginning with wireframing and design mockups before moving to implementation. Component-driven development was used to build reusable UI elements, and a mobile-first responsive design approach ensured consistent experience across devices. Git was used for version control with a feature branch workflow, and the project includes comprehensive documentation for future maintenance.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Core Technologies</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Next.js 13+ with App Router - React framework for production</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">TypeScript - Typed superset of JavaScript</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Tailwind CSS - Utility-first CSS framework</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Additional Libraries</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Framer Motion - Animation library for React</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">React Icons - SVG icon library</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">ESLint/Prettier - Code quality tools</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  {/* <button 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    View Live Project
                  </button> */}
                  <button 
                    className="bg-white border-2 border-[#7697A0] hover:bg-gray-50 text-[#7697A0] font-regular py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
                    onClick={() => window.open('https://github.com/DULAJBHAGYA/Dulaj-Personal', '_blank')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub Repo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}