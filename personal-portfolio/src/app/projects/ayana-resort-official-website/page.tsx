"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript, SiReact } from "react-icons/si";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import AyanaWebImg from "@/assets/images/AyanaWeb.png";

export default function AyanaResortWebsite() {
  const pageTitle = "Ayana Resort Official Website | Dulaj Personal";

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="A visually stunning and user-friendly website for Ayana Resort, showcasing its luxurious amenities and services to attract potential guests."
        />
      </Head>
      <Navbar />

      <section className="py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center text-[#4ECDC4] dark:text-[#4ECDC4] hover:text-[#3da99a] dark:hover:text-[#3da99a] transition-colors duration-200 mb-6 mt-4"
            >
              <IoIosArrowForward className="transform rotate-180 mr-2" />
              Back to Projects
            </Link>

            <div className="flex flex-col gap-8">
              {/* Project Image */}
              <div className="w-full min-h-[700px] relative rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={AyanaWebImg}
                  alt="Ayana Resort Official Website"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* Project Content */}
              <div className="bg-white dark:bg-black rounded-3xl p-8">
                <div className="mb-6">
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                    Client Project – Luxury Hospitality
                  </span>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                    Ayana Resort Wilpattu
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-3 text-base">
                    Full-Stack Development & Deployment on Shared Linux Hosting
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-100 text-base leading-relaxed mb-8">
                  A high-performance, media-rich platform for a luxury nature retreat located on the border of Sri Lanka&apos;s largest national park (Wilpattu). Built to convert casual browsers into guests by capturing the &quot;luxury-meets-wild&quot; atmosphere while engineered to run efficiently on resource-constrained shared Linux infrastructure.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                      Ayana Resort Wilpattu is a high-end nature retreat just 5 minutes from Sri Lanka&apos;s largest national park. The digital platform was designed to provide visitors with an immersive experience that reflects the luxury and elegance of the resort while showcasing its unique proximity to wilderness. The website features stunning resort photography, smooth animations, and intuitive navigation to help potential guests explore accommodations, curated safari experiences, dining options, spa services, and special packages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      The Challenge
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                      Most Next.js applications are deployed on Vercel or AWS. This project required a different approach: hosting a modern, media-rich Next.js application on shared Linux hosting with limited RAM and CPU resources. The solution needed to maintain premium performance (90+ Lighthouse score on mobile) while staying within infrastructure constraints, ensuring the site could handle international traffic from tourists booking &quot;on the go.&quot;
                    </p>
                  </div>
                </div>

                <div className="mb-6 dark:bg-black p-6 rounded-lg mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">
                    Featured Modules
                  </h3>
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-gray-200 dark:border-gray-800 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Smart Booking Gateway
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        An inquiry-based booking system that captures guest details and safari preferences, funneling them into a management dashboard for streamlined reservation processing.
                      </p>
                    </div>
                    <div className="pb-4 border-b border-gray-200 dark:border-gray-800 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Curated Experiences
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        A dynamic &quot;Safari & Activities&quot; module showcasing the resort&apos;s unique proximity to Wilpattu National Park with interactive maps and experience descriptions.
                      </p>
                    </div>
                    <div className="pb-4 border-b border-gray-200 dark:border-gray-800 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Adaptive Accommodations
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        A filtered room showcase highlighting room types (Deluxe Double 80m², Deluxe Triple 110m²) with detailed amenity lists (AC, private patios, garden views, premium furnishings).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        SEO & Localized Search
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Built with JSON-LD Schema Markup for &quot;LodgingBusiness,&quot; helping the resort appear in Google&apos;s Knowledge Graph and local search results for luxury accommodations in Sri Lanka.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">
                    Technical Deep Dive
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Next.js on Shared Linux Hosting
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="text-[#4ECDC4] mr-2 mt-1 font-bold">→</span>
                          <span><strong>Node.js Runtime Configuration:</strong> Configured a custom Node.js environment using `.htaccess` reverse proxy to route traffic from Apache/Litespeed to the underlying Node.js process.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#4ECDC4] mr-2 mt-1 font-bold">→</span>
                          <span><strong>Standalone Build Optimization:</strong> Leveraged `output: 'standalone'` in `next.config.js` to reduce deployment package size, ensuring efficient operation within shared hosting RAM and CPU quotas.</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Frontend Performance & UI
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="text-[#4ECDC4] mr-2 mt-1 font-bold">→</span>
                          <span><strong>Dynamic Asset Management:</strong> Implemented image optimization using Next/Image and Sharp, converting resort photography into prioritized WebP formats to prevent bounce rates on mobile devices.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#4ECDC4] mr-2 mt-1 font-bold">→</span>
                          <span><strong>Motion Branding:</strong> Used Framer Motion for "Reveal-on-Scroll" animations, creating a premium feel with smooth transitions—a hallmark of luxury hospitality websites.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">
                    Impact & Results
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#4ECDC4] mr-3 mt-1 text-lg font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-200"><strong>99.9% Uptime:</strong> Maintained zero-downtime reliability on shared hosting through careful resource management and optimization.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4ECDC4] mr-3 mt-1 text-lg font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-200"><strong>90+ Lighthouse Score:</strong> Achieved premium performance on mobile devices, essential for tourists booking while traveling.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4ECDC4] mr-3 mt-1 text-lg font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-200"><strong>Brand Translation:</strong> Successfully captured the physical resort experience—warm textures, earthy tones, and peaceful wilderness—into a cohesive digital UI.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {/* Next.js */}
                    <div className="group relative flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                      <SiNextdotjs className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        Next.js
                      </div>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="group relative flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                      <SiTailwindcss className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        Tailwind CSS
                      </div>
                    </div>

                    {/* Framer Motion */}
                    <div className="group relative flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                      <SiFramer className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        Framer Motion
                      </div>
                    </div>

                    {/* TypeScript */}
                    <div className="group relative flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                      <SiTypescript className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        TypeScript
                      </div>
                    </div>

                    {/* React */}
                    <div className="group relative flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                      <SiReact className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        React
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row gap-4">
                  {/* GitHub Repository Button (commented out) */}
                  {/* 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-200 font-medium"
                  >
                    <FiGithub className="mr-2 w-5 h-5" />
                    GitHub Repository
                  </a> */}

                  {/* Live Site Button */}
                  <a
                    href="https://www.ayanaresortwilpattu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#4ECDC4] dark:bg-[#4ECDC4] text-white dark:text-gray-900 rounded-lg hover:bg-[#3da99a] dark:hover:bg-[#3da99a] transition-colors duration-200 font-medium"
                  >
                    <FiExternalLink className="mr-2 w-5 h-5" />
                    Live Site
                  </a>
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