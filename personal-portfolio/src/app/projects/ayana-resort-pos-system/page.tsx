'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";
import HotelPosImg from '@/assets/images/HotelPOS.png';

export default function AyanaResortPOS() {
  const pageTitle = 'Ayana Resort POS System | Dulaj Personal';

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="A modern point-of-sale system for Ayana Resort, streamlining operations and enhancing customer experience." />
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
              {/* Project Image */}
              <div className="w-full h-96 relative rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src={HotelPosImg}
                  alt="Ayana Resort POS System"
                  fill
                  style={{objectFit: 'cover'}}
                  priority
                />
              </div>

              {/* Project Content */}
              <div className="bg-white rounded-3xl p-8">
                <div className="mb-6">
                  <span className="text-base font-semibold text-gray-500">Commercial Project</span>
                  <h1 className="text-2xl font-bold text-gray-900 mt-2">Ayana Resort POS System</h1>
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  A modern point-of-sale system for Ayana Resort, streamlining operations and enhancing customer experience.
                </p>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    The Ayana Resort POS System is a comprehensive solution designed to manage all point-of-sale operations across the resort&apos;s restaurants, bars, spa, and retail outlets. This system provides real-time inventory tracking, order management, payment processing, and detailed reporting capabilities to improve operational efficiency.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Intuitive touchscreen interface for quick order entry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Real-time inventory management and tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Multi-payment method support (cash, card, room charge)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Table management and reservation system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Staff management and access control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Detailed sales reports and analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Integration with accounting systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Customer loyalty program integration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Implementation</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Built with React for a responsive and interactive frontend, the POS system leverages Node.js for the backend API and MySQL for reliable data storage. The architecture ensures fast transaction processing and real-time synchronization across multiple terminals.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The system is designed with scalability in mind, allowing for easy expansion to additional outlets or integration with other resort management systems.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The POS system has significantly improved operational efficiency at Ayana Resort by reducing order processing time, minimizing errors, and providing management with actionable insights through comprehensive reporting. Staff training time has been reduced due to the intuitive interface, and customer satisfaction has improved with faster service delivery.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">React</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Node.js</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">MySQL</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Express.js</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Status</h3>
                    <p className="text-gray-600">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Deployed & Active</span>
                    </p>
                  </div>
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
