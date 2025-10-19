'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IoIosArrowForward } from "react-icons/io";
import ETLPipe from '@/assets/images/ETLPipe.png';

export default function WeatherDashboardETLPipeline() {
  const pageTitle = 'Weather Dashboard ETL Pipeline | Dulaj Personal';

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="A comprehensive weather data collection and visualization system that automatically fetches real-time weather information from the OpenWeatherMap API, processes and stores it in a local SQLite database, and displays it through a responsive web dashboard." />
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
                  <span className="text-lg font-semibold text-gray-500">Data Engineering Project</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">Weather Dashboard ETL Pipeline</h1>
                </div>
                
                <p className="text-gray-600 text-lg text-justify leading-relaxed mb-8">
                  A comprehensive weather data collection and visualization system that automatically fetches real-time weather information from the OpenWeatherMap API, processes and stores it in a local SQLite database, and displays it through a responsive web dashboard.
                </p>
                
                <div className="mb-8">
                  <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={ETLPipe.src}
                      alt="Weather Dashboard ETL Pipeline"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
                    <p className="text-gray-600 text-justify leading-relaxed">
                      The Weather ETL Pipeline is a comprehensive weather data collection and visualization system that automatically fetches real-time weather information from the OpenWeatherMap API, processes and stores it in a local SQLite database, and displays it through a responsive web dashboard. This system provides a complete solution for monitoring weather conditions in real-time with minimal setup and maintenance requirements.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Components</h3>
                    
                    <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. Data Pipeline (Backend)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Technology:</strong> Python-based ETL pipeline with Flask API</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Data Source:</strong> OpenWeatherMap API for real-time weather data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Storage:</strong> SQLite database with SQLAlchemy ORM</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Scheduling:</strong> Automated data collection every 5 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Key Features:</strong> Real-time data fetching for multiple locations, Data validation and transformation, Error handling with retry mechanisms, RESTful API for data access</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. Dashboard (Frontend)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Technology:</strong> React with TypeScript and Tailwind CSS</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Functionality:</strong> Real-time display of weather conditions, Visual representation of temperature, humidity, wind speed, Automatic updates every minute, Responsive design for all devices</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h3>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li className="text-gray-600"><strong>Data Collection:</strong> The pipeline fetches current weather data for configured locations (Kandy, Colombo, Anuradhapura in Sri Lanka) from OpenWeatherMap API every 5 minutes</li>
                      <li className="text-gray-600"><strong>Data Processing:</strong> Raw API responses are transformed into structured data with proper validation</li>
                      <li className="text-gray-600"><strong>Data Storage:</strong> Processed weather data is stored in a SQLite database with timestamps</li>
                      <li className="text-gray-600"><strong>Data Serving:</strong> A Flask API server provides REST endpoints to access the stored data</li>
                      <li className="text-gray-600"><strong>Data Display:</strong> The React dashboard consumes the API and displays real-time weather information with automatic refresh</li>
                    </ol>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Real-time Updates:</strong> Weather data updates every 5 minutes from the source</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Automatic Scheduling:</strong> Pipeline runs continuously without manual intervention</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Data Persistence:</strong> All historical weather data is stored in a local database</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>User-friendly Dashboard:</strong> Clean, responsive interface showing current conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Error Resilience:</strong> Built-in retry mechanisms for network or API failures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600"><strong>Easy Deployment:</strong> Simple setup with Docker support</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Stack</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Python - Core language for the ETL pipeline</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Flask - Web framework for REST API development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">SQLAlchemy - ORM for database interactions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">SQLite - Lightweight database for data storage</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">React - JavaScript library for building user interfaces</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">TypeScript - Typed superset of JavaScript</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Tailwind CSS - Utility-first CSS framework for styling</span>
                          </li>
                        </ul>
                        
                        <h4 className="font-medium text-gray-900 mb-2 mt-4">APIs & Tools</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">OpenWeatherMap API - Source of real-time weather data</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Docker - Containerization for easy deployment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">Render.com - Free tier hosting option</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li className="text-gray-600">Configure your OpenWeatherMap API key in the environment file</li>
                      <li className="text-gray-600">Run the pipeline with <code className="bg-gray-100 px-1 rounded">python -m src.main schedule</code> to start continuous data collection</li>
                      <li className="text-gray-600">Start the API server with <code className="bg-gray-100 px-1 rounded">python dashboard_api.py</code></li>
                      <li className="text-gray-600">Launch the dashboard with <code className="bg-gray-100 px-1 rounded">npm start</code> in the weather-dashboard directory</li>
                    </ol>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Impact</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Demonstrates end-to-end data engineering skills from data collection to visualization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Showcases integration of multiple technologies in a cohesive system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Provides practical experience with ETL processes and real-time data handling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">Demonstrates deployment capabilities with Docker and cloud hosting</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                   <button 
                    className="bg-white border-2 border-[#7697A0] hover:bg-gray-50 text-[#7697A0] font-regular py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
                    onClick={() => window.open('https://tropicast.netlify.app/', '_blank')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live App
                  </button>

                  <button 
                    className="bg-white border-2 border-[#7697A0] hover:bg-gray-50 text-[#7697A0] font-regular py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
                    onClick={() => window.open('https://github.com/DULAJBHAGYA/Weather-ETL-Pipeline', '_blank')}
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