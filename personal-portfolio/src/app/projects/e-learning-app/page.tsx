'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";

export default function ELearningApp() {
  const pageTitle = 'E-Learning Application | Dulaj Personal';

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="An intelligent chatbot powered by OpenAI GPT for automated customer support." />
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
                  <span className="text-lg font-semibold text-gray-500">Intern Project</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">E-Learning Application</h1>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  An intelligent chatbot powered by OpenAI GPT for automated customer support.
                </p>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    This e-learning application provides an interactive platform for students to access educational content, participate in courses, and engage with intelligent tutoring systems. The application leverages AI to personalize learning experiences and provide automated support.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Course content delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Interactive learning modules</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">AI-powered tutoring system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Progress tracking and analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Automated assessment and feedback</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Multi-platform accessibility</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="Flutter">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title=".NET">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="text-gray-600 flex items-center justify-center bg-white p-3 rounded-lg" title="MySQL">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Flutter for cross-platform mobile development</span>
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
                        <span className="text-gray-600">OpenAI GPT for intelligent tutoring</span>
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