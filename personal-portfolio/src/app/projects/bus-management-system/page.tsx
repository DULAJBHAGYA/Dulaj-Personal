'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";

export default function BusManagementSystem() {
  // Set title when component mounts
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = 'Highway Bus Management System | Dulaj Personal';
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
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
                  <span className="text-lg font-semibold text-gray-500">Second Year Software Project</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">Highway Bus Management System</h1>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Interactive dashboards for business intelligence and data visualization.
                </p>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    This comprehensive bus management system streamlines operations for highway transportation companies. It provides tools for route planning, scheduling, fleet management, and passenger services, all integrated into a single platform for efficient transportation management.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Route planning and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Real-time scheduling and dispatch</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Fleet management and maintenance tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Passenger booking and ticketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Driver management and assignment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Performance analytics and reporting</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="React">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="React Native">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="Tailwind CSS">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="Node.js">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="Express">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="MongoDB">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="Firebase">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">React for web frontend development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">React Native for mobile applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Tailwind CSS for responsive styling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Node.js with Express for backend services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">MongoDB for data storage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Firebase for real-time features</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <button 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    View Live Project
                  </button>
                  <button 
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    View Source Code
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