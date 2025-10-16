'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";

export default function RealEstateSaaS() {
  const pageTitle = 'Real Estate SaaS Application | Dulaj Personal';

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="A full-stack Learning Management System built with the MERN stack featuring JWT role-based authentication and Docker containerization." />
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
                  <span className="text-lg font-semibold text-gray-500">SaaS Project</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">Real Estate SaaS Application</h1>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  A full-stack Learning Management System built with the MERN stack featuring JWT role-based authentication and Docker containerization.
                </p>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    This SaaS application provides comprehensive real estate management solutions for agents, brokers, and property managers. It streamlines property listings, client management, and transaction processing in a secure cloud-based platform.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Property listing management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Client relationship management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Transaction tracking and documentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Marketing and lead generation tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Financial reporting and analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Multi-user role-based access control</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="Next.js">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="Tailwind CSS">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title=".NET">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="MySQL">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="Docker">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Next.js for frontend development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Tailwind CSS for responsive styling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">.NET for backend services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">MySQL for data storage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Docker for containerization</span>
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