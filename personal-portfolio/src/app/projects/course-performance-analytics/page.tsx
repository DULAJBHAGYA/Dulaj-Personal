'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";

export default function CoursePerformanceAnalytics() {
  const pageTitle = 'Multi-Dimensional Course Performance Analytics | Dulaj Personal';

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="A comprehensive analytics dashboard for educational institutions that provides multi-dimensional insights into course performance, predictive analytics, and data visualization." />
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
                  <span className="text-lg font-semibold text-gray-500">Client Project</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">Multi-Dimensional Course Performance Analytics Dashboard</h1>
                </div>
                
                <p className="text-gray-600 text-lg text-justify leading-relaxed mb-8">
                  A comprehensive analytics dashboard for educational institutions that provides multi-dimensional insights into course performance, predictive analytics, and data visualization. The system supports different user roles Admin, Department Head, Instructor with role-specific dashboards and analytics.
                </p>
                
                <div className="mb-8">
                  <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full border-0"
                      src="https://drive.google.com/file/d/1rr_P2iwl54QIfT1Vo58CSkBgjZ7PNkDb/preview"
                      title="Course Performance Analytics Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
                    <p className="text-gray-600 text-justify leading-relaxed">
                      This comprehensive analytics dashboard for educational institutions provides multi-dimensional insights into course performance, predictive analytics, and data visualization. The system supports different user roles (Admin, Department Head, Instructor) with role-specific dashboards and analytics, enabling enhanced decision-making for administrators, data-driven instructional improvements, and early intervention opportunities for at-risk students.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Role-Based Dashboards - Admin Dashboard for institution-wide analytics, Department Head Dashboard for department-specific metrics, and Instructor Dashboard for course-level analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Analytics & Visualization - Real-time performance metrics, interactive charts and graphs, KPI cards for quick insights, and comparative analytics across courses, instructors, and semesters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Predictive Analytics - Performance prediction models, risk assessment for courses and students, and trend analysis and forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Data Management - Comprehensive data generation scripts, data validation and consistency checks, and automated data upload to Firestore</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Usage in the Project</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Predictive Modeling - Performance Prediction using machine learning models to forecast student performance based on historical data, Risk Assessment with algorithms to identify at-risk courses and students, and Trend Analysis for pattern recognition in academic performance data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Natural Language Processing - AI Chat Assistant as a context-aware chatbot for explaining analytics and providing insights, and RAG (Retrieval-Augmented Generation) for enhanced chat responses using relevant data context</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Intelligent Data Processing - Data Validation with automated consistency checks for educational data, and Anomaly Detection for identification of outliers in performance data</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">System Architecture</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Frontend Architecture - Component-based React structure, Context API for state management, protected routes for role-based access, and responsive design for all device sizes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Backend Architecture - RESTful API endpoints, Firebase integration for authentication and data storage, modular route organization, and service layer for business logic</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Data Structure - Normalized Firestore collections, consistent data validation rules, and cross-referenced entities (Courses, Instructors, Departments, Campuses)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Challenges & Solutions</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Data Consistency - Implemented comprehensive validation scripts, created data generation tools with strict constraints, and developed verification mechanisms for data integrity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Role-Based Access Control - Firebase Authentication integration, custom claims for role management, and protected routes and API endpoints</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Performance Optimization - Data caching strategies, efficient data fetching with useFetch hook, and optimized chart rendering with memoization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Scalability - Modular code organization, reusable components and utilities, and script-based data processing for large datasets</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Impact</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Educational Insights - Enhanced decision-making for administrators, data-driven instructional improvements, early intervention opportunities for at-risk students, and performance trend identification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Technical Skills Demonstrated - Full-stack web development, data processing and analysis, machine learning integration, cloud database management, and user experience design</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Development Process</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Planning & Design - Requirement analysis for educational analytics, user persona development (Admin, Department Head, Instructor), system architecture design, and database schema planning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Implementation - Frontend component development, backend API creation, data processing script development, and integration testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Testing & Validation - Unit testing for critical functions, data validation and consistency checks, user acceptance testing, and performance optimization</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Unique Aspects</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Educational Domain Expertise - Deep understanding of academic data structures, compliance with educational data standards, and role-specific analytics tailored to institutional needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Data Integrity Focus - Comprehensive validation rules, automated consistency checking, and script-based data generation with constraints</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">AI-Enhanced Analytics - Predictive modeling for educational outcomes, intelligent chat assistant for data interpretation, and risk assessment algorithms</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">React.js - JavaScript library for building user interfaces</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Tailwind CSS - Utility-first CSS framework for styling</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Chart.js with React-Chartjs-2 - Data visualization library for interactive charts</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Vite - Fast build tool and development server</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Firebase Authentication - User authentication and role-based access control</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Python Flask - Web framework for REST API development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Firebase Firestore - NoSQL cloud database for data storage</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Firebase Authentication - User management and authentication</span>
                          </li>
                        </ul>
                        
                        <h4 className="font-medium text-gray-900 mb-2 mt-4">Data Processing & Scripts</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Python - Data processing, generation, and migration scripts</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">JSON - Data interchange format</span>
                          </li>
                        </ul>
                        
                        <h4 className="font-medium text-gray-900 mb-2 mt-4">DevOps & Tools</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Git - Version control system</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">GitHub - Code repository and collaboration</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">RESTful API - Communication between frontend and backend</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Repository Structure</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context for state management
│   │   ├── pages/          # Role-specific dashboard pages
│   │   ├── services/       # API service integration
│   │   └── utils/          # Utility functions
├── server/                 # Python Flask backend
│   ├── app/
│   │   ├── routes/         # API endpoint definitions
│   │   ├── services/       # Business logic layer
│   │   └── firebase_config.py  # Firebase configuration
├── scripts/                # Data processing and generation scripts
└── documentation/          # Project documentation`}
                    </pre>
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
                    onClick={() => window.open('https://github.com/DULAJBHAGYA/Multi-Dimensional-Course-Performance-Analytics-Dashboard', '_blank')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.566-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
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