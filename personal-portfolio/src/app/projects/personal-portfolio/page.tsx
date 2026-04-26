"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function PersonalPortfolio() {
  const pageTitle = "Personal Portfolio | Dulaj Personal";

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion for smooth animations."
        />
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
              className="inline-flex items-center text-[#4ECDC4] dark:text-[#4ECDC4] hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 mb-6 mt-4"
            >
              <IoIosArrowForward className="transform rotate-180 mr-2" />
              Back to Projects
            </Link>

            <div className="flex flex-col gap-8">
              {/* Project Content */}
              <div className="bg-white dark:bg-black rounded-3xl p-8">
                <div className="mb-6">
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                    Frontend Development
                  </span>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                    Personal Portfolio
                  </h1>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
                  A modern, responsive portfolio website built with Next.js,
                  Tailwind CSS, and Framer Motion for smooth animations. This
                  project demonstrates my skills in frontend development, UI/UX
                  design, and modern web technologies.
                </p>

                <div className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                      This portfolio website serves as both a personal showcase
                      and a demonstration of my frontend development
                      capabilities. Built with cutting-edge technologies, it
                      provides an engaging user experience while highlighting my
                      projects, skills, and experiences. The site is designed to
                      be fully responsive, ensuring an optimal viewing
                      experience across all devices from mobile phones to
                      desktop computers.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      Architecture and Structure
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                      The portfolio follows a component-based architecture using
                      Next.js App Router, which allows for efficient code
                      splitting and improved performance. The site is organized
                      into several key sections including a hero section, about
                      page, skills showcase, projects gallery, blog section, and
                      contact form. Each section is built as reusable components
                      that can be easily maintained and extended. The routing
                      system leverages Next.js file-based routing for clean URLs
                      and optimal SEO.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      Design and User Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                      The design philosophy centers on clean aesthetics,
                      intuitive navigation, and smooth interactions. Tailwind
                      CSS is used extensively for styling, providing a
                      consistent design system while maintaining flexibility.
                      Framer Motion powers the animation system, creating smooth
                      transitions between pages and interactive elements that
                      enhance user engagement without compromising performance.
                      The color scheme is carefully chosen to be visually
                      appealing while maintaining accessibility standards.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      Key Features
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed mb-3">
                      The portfolio includes several advanced features that
                      demonstrate modern web development practices:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Fully responsive design for all device sizes with
                          mobile-first approach
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Smooth animations and transitions using Framer Motion
                          for enhanced user experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Dark/light mode toggle with system preference
                          detection
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Optimized performance with Next.js features like
                          automatic code splitting and image optimization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          SEO-friendly structure with proper meta tags and
                          semantic HTML
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Accessible design following WCAG guidelines for
                          inclusive user experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Interactive project cards with detailed modal views
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Dynamic blog section with markdown support
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      Technical Implementation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed mb-3">
                      The technical implementation showcases several modern
                      development practices:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Next.js 13+ with App Router for improved routing and
                          layout management
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          TypeScript for type safety and improved developer
                          experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Tailwind CSS for utility-first styling and design
                          consistency
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          Framer Motion for declarative animations and
                          micro-interactions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          React Icons for consistent iconography throughout the
                          application
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-100">
                          ESLint and Prettier for code quality and formatting
                          standards
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      Performance Optimizations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                      Performance was a key consideration throughout
                      development. The site implements automatic code splitting
                      through Next.js, image optimization with Next/Image
                      component, and efficient bundle management. Animations are
                      optimized to maintain 60fps, and the site achieves high
                      scores on performance metrics including Core Web Vitals.
                      Lazy loading is implemented for non-critical resources,
                      and the build process includes minification and
                      compression.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">
                      Development Process
                    </h3>
                    <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
                      The development process followed an iterative approach,
                      beginning with wireframing and design mockups before
                      moving to implementation. Component-driven development was
                      used to build reusable UI elements, and a mobile-first
                      responsive design approach ensured consistent experience
                      across devices. Git was used for version control with a
                      feature branch workflow, and the project includes
                      comprehensive documentation for future maintenance.
                    </p>
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
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row gap-4">
                  {/* GitHub Repository Button (commented out) */}
                  <a
                    href="https://github.com/DULAJBHAGYA/Dulaj-Personal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-200 font-medium"
                  >
                    <FiGithub className="mr-2 w-5 h-5" />
                    GitHub Repository
                  </a>

                  {/* Live Site Button */}
                  <a
                    href="https://dulajupananda.netlify.app"
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
