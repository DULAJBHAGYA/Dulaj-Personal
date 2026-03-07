'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";
import AyanaWebImg from '@/assets/images/AyanaWeb.png';

export default function AyanaResortWebsite() {
  const pageTitle = 'Ayana Resort Official Website | Dulaj Personal';

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="A visually stunning and user-friendly website for Ayana Resort, showcasing its luxurious amenities and services to attract potential guests." />
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
                  src={AyanaWebImg}
                  alt="Ayana Resort Official Website"
                  fill
                  style={{objectFit: 'cover'}}
                  priority
                />
              </div>

              {/* Project Content */}
              <div className="bg-white rounded-3xl p-8">
                <div className="mb-6">
                  <span className="text-base font-semibold text-gray-500">Client Project</span>
                  <h1 className="text-2xl font-bold text-gray-900 mt-2">Ayana Resort Official Website</h1>
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  A visually stunning and user-friendly website for Ayana Resort, showcasing its luxurious amenities and services to attract potential guests.
                </p>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    The Ayana Resort Official Website is designed to provide visitors with an immersive digital experience that reflects the luxury and elegance of the resort. The website features stunning photography, smooth animations, and intuitive navigation to help potential guests explore accommodations, dining options, spa services, and special packages.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Responsive design optimized for all devices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Interactive image galleries showcasing resort facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Online booking system integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Smooth scroll animations with Framer Motion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Multi-language support for international guests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">SEO-optimized content for better visibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Contact forms and inquiry management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Highlights</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      This project focused on creating a premium online presence for Ayana Resort that captures the essence of luxury hospitality. The website employs modern web technologies to ensure fast loading times, smooth animations, and an engaging user experience across all platforms.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Special attention was given to showcasing the resort&apos;s unique features through high-quality imagery and compelling content that drives booking conversions.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Next.js</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Framer Motion</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">React</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Status</h3>
                    <p className="text-gray-600">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Completed</span>
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
