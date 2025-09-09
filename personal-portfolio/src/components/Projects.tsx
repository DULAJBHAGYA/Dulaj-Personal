'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faReact, 
  faNodeJs, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faGitAlt, 
  faDocker, 
  faAws, 
  faGithub,
  faJava,
  faPhp,
  faLaravel,
  faAngular,
  faBootstrap,
  faSass,
  faLess,
  faNpm,
  faYarn,
  faMicrosoft,
  faUbuntu,
  faLinux,
  faWindows,
  faApple,
  faAndroid,
  faFigma,
  faSketch,
  faInvision,
  faDigitalOcean,
  faLinode,
  faRaspberryPi,
  faRaspberryPi as faRaspberry,
  faRaspberryPi as faRaspberryPiIcon
} from '@fortawesome/free-brands-svg-icons';

// React Icons as fallbacks
import { FaReact, FaJava, FaNodeJs, FaFileAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFastapi,
  SiClerk,
  SiSpringboot,
  SiDjango,
  SiVite,
  SiNginx,
  SiSpacy,
  SiPuppeteer,
  SiMamp,
  SiAngular,
  SiCss3,
  SiDotnet,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPostgresql,
  SiGoland,
  SiDocker,
  SiNextdotjs,
  SiExpress
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiDotnet, DiMsqlServer, DiPostgresql, DiDart, DiRedis } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  // Function to get icon for technology
  const getTechIcon = (techName: string) => {
    const faIconMap: { [key: string]: any } = {
      'Python': faPython,
      'React': faReact,
      'Node.js': faNodeJs,
      'JavaScript': faJs,
      'HTML5': faHtml5,
      'CSS3': faCss3Alt,
      'Git': faGitAlt,
      'Docker': faDocker,
      'AWS': faAws,
      'GitHub': faGithub,
      'Java': faJava,
      'PHP': faPhp,
      'Laravel': faLaravel,
      'Angular': faAngular,
      'Bootstrap': faBootstrap,
      'Sass': faSass,
      'Less': faLess,
      'npm': faNpm,
      'Yarn': faYarn,
      'Microsoft': faMicrosoft,
      'Ubuntu': faUbuntu,
      'Linux': faLinux,
      'Windows': faWindows,
      'Apple': faApple,
      'Android': faAndroid,
      'Figma': faFigma,
      'Sketch': faSketch,
      'InVision': faInvision,
      'DigitalOcean': faDigitalOcean,
      'Linode': faLinode,
      'Raspberry Pi': faRaspberryPi
    };

    const reactIconMap: { [key: string]: any } = {
      'TypeScript': BiLogoTypescript,
      'Tailwind CSS': SiTailwindcss,
      'Express': SiExpress,
      'Next.js': SiNextdotjs,
      'Spring Boot': SiSpringboot,
      'Django': SiDjango,
      'Vite': SiVite,
      'Nginx': SiNginx,
      'Spacy': SiSpacy,
      'Puppeteer': SiPuppeteer,
      'MAMP': SiMamp,
      'Flutter': SiFlutter,
      'FastAPI': SiFastapi,
      'Dart': SiDart,
      'Go': SiGoland,
      'Clerk': SiClerk,
      '.NET': SiDotnet,
      'SQL Server': DiMsqlServer,
      'MongoDB': SiMongodb
    };

    return {
      faIcon: faIconMap[techName] || faJs,
      reactIcon: reactIconMap[techName] || null
    };
  };

  const projects = [
    {
      category: 'Final Year Project',
      title: 'Exam Candidate Verification',
      description: 'A hierarchical voting system for verifying exam candidates using signatures and handwriting analysis with machine learning.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'FastAPI', 'Next.js', ],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      icon: '🔍',
      size: 'wide' // Horizontal spanning card
    },
    {
      category: 'Frontend Development',
      title: 'This Website',
      description: 'A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-blue-400 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      icon: '💻',
      size: 'medium' // Regular card
    },
    {
      category: 'ML Project',
      title: 'Online Signature Verification',
      description: 'An advanced signature verification system using deep learning and computer vision techniques for fraud detection.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-amber-400 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      icon: '✍️',
      size: 'small' // Small card
    },
    {
      category: 'Blockchain Project',
      title: 'Tea Supply Chain',
      description: 'A comprehensive database introspection tool that generates Ballerina data models from SQL schemas automatically.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'Python', 'Docker', 'Hyperledger Fabric'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      icon: '⚡',
      size: 'large' // 2-column card
    },
    {
      category: 'Full-Stack Development',
      title: 'EDEMY Learning Management System',
      description: 'A complete e-commerce solution with payment processing, inventory management, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-rose-400 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50',
      icon: '🛒',
      size: 'medium' // Regular card
    },
    {
      category: 'Mobile App',
      title: 'Weather Tracker',
      description: 'A beautiful weather app with location-based forecasts and interactive maps.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Expo', 'OpenWeather API'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-cyan-400 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
      icon: '🌤️',
      size: 'small' // Small card
    },
    {
      category: 'AI Chatbot',
      title: 'Customer Support Assistant',
      description: 'An intelligent chatbot powered by OpenAI GPT for automated customer support.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'Redis', 'Docker'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-violet-400 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50',
      icon: '🤖',
      size: 'wide' // Horizontal spanning card
    },
    {
      category: 'Data Visualization',
      title: 'Analytics Dashboard',
      description: 'Interactive dashboards for business intelligence and data visualization.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Chart.js', 'Node.js', 'MongoDB'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-indigo-400 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
      icon: '📈',
      size: 'medium' // Regular card
    },
    {
      category: 'Blockchain',
      title: 'NFT Marketplace',
      description: 'A decentralized marketplace for buying and selling NFTs with smart contracts.',
      image: '/api/placeholder/600/400',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      icon: '🎨',
      size: 'small' // Small card
    },
    {
      category: 'DevOps',
      title: 'CI/CD Pipeline',
      description: 'Automated deployment pipeline with Docker, Kubernetes, and monitoring.',
      image: '/api/placeholder/600/400',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      icon: '🚀',
      size: 'large' // 2-column card
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            My Projects
          </h2>
          <p className="text-black text-xl sm:text-2xl max-w-2xl leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Alternating Row Layout */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            // Determine if this is an even or odd row for alternating layout
            const isEvenRow = Math.floor(index / 2) % 2 === 0;
            const isLeftColumn = index % 2 === 0;
            
            // Define column widths based on row position
            const getColumnWidths = () => {
              if (isEvenRow) {
                return isLeftColumn ? 'w-3/5' : 'w-2/5'; // 60%/40% split
              } else {
                return isLeftColumn ? 'w-2/5' : 'w-3/5'; // 40%/60% split
              }
            };

            const getImageHeight = (size: string) => {
              switch (size) {
                case 'large':
                  return 'h-64';
                case 'medium':
                  return 'h-48';
                case 'small':
                  return 'h-40';
                case 'wide':
                  return 'h-32';
                default:
                  return 'h-48';
              }
            };

            const getPadding = (size: string) => {
              switch (size) {
                case 'large':
                  return 'p-8';
                case 'medium':
                  return 'p-6';
                case 'small':
                  return 'p-5';
                case 'wide':
                  return 'p-6';
                default:
                  return 'p-6';
              }
            };

            const isWideCard = project.size === 'wide';

            // Only render every other project to create rows with 2 columns each
            if (index % 2 === 0) {
              const currentProject = project;
              const nextProject = projects[index + 1];
              
              return (
                <motion.div
                  key={`row-${index}`}
                  variants={cardVariants}
                  className="flex gap-6"
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* First Column */}
                  <motion.div
                    whileHover="hover"
                    className={`group ${getColumnWidths()}`}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br ${currentProject.bgGradient} rounded-3xl p-4 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/20`}
                      variants={hoverVariants}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Project Image/Visual */}
                      <div className={`w-full h-80 bg-gradient-to-br ${currentProject.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                        <div className="text-5xl font-bold text-white/90">
                          {currentProject.title.charAt(0)}
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                      </div>
                      
                            {/* Project Header */}
                            <div className="mb-2">
                              <div className="text-xl font-semibold text-gray-500">
                                {currentProject.category}
                              </div>
                              <h3 className="text-2xl font-regular text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                                {currentProject.title}
                              </h3>
                            </div>
                            
                            {/* Project Content */}
                            <div className="space-y-4">
                              {/* Description */}
                              <p className="text-gray-600 leading-relaxed text-xl">
                                {currentProject.description}
                              </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-3">
                          {currentProject.technologies.slice(0, 6).map((tech) => (
                            <motion.div
                              key={tech}
                              className="text-gray-600 flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                              title={tech}
                            >
                              {getTechIcon(tech).reactIcon ? (
                                <div className="w-8 h-8">
                                  {React.createElement(getTechIcon(tech).reactIcon, { className: "w-8 h-8" })}
                                </div>
                              ) : (
                                <FontAwesomeIcon 
                                  icon={getTechIcon(tech).faIcon} 
                                  className="w-8 h-8"
                                />
                              )}
                            </motion.div>
                          ))}
                        </div>
                        
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Second Column */}
                  {nextProject && (
                    <motion.div
                      whileHover="hover"
                      className={`group ${isEvenRow ? 'w-2/5' : 'w-3/5'}`}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.div 
                        className={`bg-gradient-to-br ${nextProject.bgGradient} rounded-3xl p-4 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/20`}
                        variants={hoverVariants}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* Project Image/Visual */}
                        <div className={`w-full h-80 bg-gradient-to-br ${nextProject.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                          <div className="text-5xl font-bold text-white/90">
                            {nextProject.title.charAt(0)}
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>
                          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                        </div>
                        
                              {/* Project Header */}
                              <div className="mb-2">
                                <div className="text-xl font-semibold text-gray-500">
                                  {nextProject.category}
                                </div>
                                <h3 className="text-2xl font-regular text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                                  {nextProject.title}
                                </h3>
                              </div>
                              
                              {/* Project Content */}
                              <div className="space-y-4">
                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-xl">
                                  {nextProject.description}
                                </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3">
                            {nextProject.technologies.slice(0, 6).map((tech) => (
                              <motion.div
                                key={tech}
                                className="text-gray-600 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                title={tech}
                              >
                                {getTechIcon(tech).reactIcon ? (
                                  <div className="w-8 h-8">
                                    {React.createElement(getTechIcon(tech).reactIcon, { className: "w-8 h-8" })}
                                  </div>
                                ) : (
                                  <FontAwesomeIcon 
                                    icon={getTechIcon(tech).faIcon} 
                                    className="w-8 h-8"
                                  />
                                )}
                              </motion.div>
                            ))}
                          </div>
                          
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            }
            
            return null; // Skip odd-indexed projects as they're handled in pairs
          })}
        </motion.div>

       
      </div>
    </section>
  );
};

export default Projects;
