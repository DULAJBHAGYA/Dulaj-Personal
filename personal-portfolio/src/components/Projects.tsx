'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ExpenseTrackerImg from '@/assets/images/ExpenseTracker.png';
import EventManagementImg from '@/assets/images/EventMng.png';
import MultiDimensionalCoursePerformanceAnalyticsImg from '@/assets/images/EduAnalytics.png';
import PortfolioImg from '@/assets/images/Portfolio.png';
import ItPathFinderImg from '@/assets/images/ItPathFinderImg.png';

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
  faRaspberryPi
} from '@fortawesome/free-brands-svg-icons';


// React Icons as fallbacks

import {
  SiTailwindcss,
  SiMongodb,
  SiJupyter,
  SiMysql,
  SiFastapi,
  SiHuggingface,
  SiFirebase,
  SiAxios,
  SiClerk,
  SiSpringboot,
  SiDjango,
  SiVite,
  SiNginx,
  SiSpacy,
  SiPuppeteer,
  SiMamp,
  SiDotnet,
  SiFlutter,
  SiDart,
  SiGoland,
  SiNextdotjs,
  SiExpress
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMsqlServer, DiPostgresql,DiRedis } from "react-icons/di";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";


const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Change title when Projects is visible (only on client)
          if (typeof document !== 'undefined') {
            document.title = 'Projects | Dulaj Personal';
          }
        } else {
          // Change title back when Projects is not visible (only on client)
          if (typeof document !== 'undefined') {
            document.title = 'Dulaj Personal';
          }
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to get icon for technology
  const getTechIcon = (techName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reactIconMap: { [key: string]: any } = {
      'TypeScript': BiLogoTypescript,
      'Tailwind CSS': SiTailwindcss,
      'Express': SiExpress,
      'Next.js': SiNextdotjs,
      'Spring Boot': SiSpringboot,
      'Django': SiDjango,
      'Vite': SiVite,
      'Redis': DiRedis,
      'Nginx': SiNginx,
      'Spacy': SiSpacy,
      'Puppeteer': SiPuppeteer,
      'Axios': SiAxios,
      'MAMP': SiMamp,
      'PostgreSQL': DiPostgresql,
      'Firebase': SiFirebase,
      'Flutter': SiFlutter,
      'FastAPI': SiFastapi,
      'MySQL': SiMysql,
      'Dart': SiDart,
      'Go': SiGoland,
      'Clerk': SiClerk,
      '.NET': SiDotnet,
      'MongoDB': SiMongodb,
      'Hugging Face': SiHuggingface,
      'Jupyter': SiJupyter,
      'SQL Server': DiMsqlServer,
      'Framer Motion': TbBrandFramerMotion,
      'React Native': TbBrandReactNative
    };

    return {
      faIcon: faIconMap[techName] || faJs,
      reactIcon: reactIconMap[techName] || null
    };
  };

  const projects = [
    {
      id: 'ats-resume-generator',
      category: 'Final Year Project',
      title: 'ATS Compatible Resume Generator',
      description: 'A comprehensive AI-powered CV generation and optimization system that creates ATS-friendly resumes using advanced language models and modern web technologies.',
      image: ItPathFinderImg,
      technologies: [ 'Next.js', 'Tailwind CSS', 'Python', 'FastAPI','Hugging Face', 'Jupyter'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🔍',
      size: 'wide' // Horizontal spanning card
    },
    {
      id: 'personal-portfolio',
      category: 'Frontend Development',
      title: 'This Website',
      description: 'A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.',
      image: PortfolioImg,
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '💻',
      size: 'medium' // Regular card
    },
    {
      id: 'event-management',
      category: 'Commercial Project',
      title: 'Event Management and Ticketing Platform',
      description: 'A comprehensive event management and ticketing platform built with Next.js frontend and .NET Core 9 backend, fully dockerized for production deployment.',
      image: EventManagementImg,
      technologies: ['Next.js', 'Tailwind CSS','.NET', 'Docker', 'SQL Server'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '✍️',
      size: 'small' // Small card
    },
    {
      id: 'course-performance-analytics',
      category: 'Client Project',
      title: 'Multi-Dimensional Course Performance Analytics',
      description: 'A comprehensive analytics dashboard for tracking course performance across multiple dimensions including students, instructors, courses, and campuses.',
      image: MultiDimensionalCoursePerformanceAnalyticsImg,
      technologies: ['React', 'Tailwind CSS',, 'Python', 'FastAPI', 'Hugging Face'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '⚡',
      size: 'large' // 2-column card
    },
    {
      id: 'tea-supply-chain',
      category: 'Blockchain Project',
      title: 'Tea Supply Chain',
      description: 'Hybrid solution for managing supply chain workflows across all users, enabling greater transparency, security, and efficiency in the tea trade.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS',, 'Node.js', 'Docker', 'Redis'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '⚡',
      size: 'large' // 2-column card
    },
    {
      id: 'real-estate-saas',
      category: 'Saas Project',
      title: 'Real Estate Saas Application',
      description: 'A full-stack Learning Management System built with the MERN stack featuring JWT role-based authentication and Docker containerization.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS','.NET', 'MySQL', 'Docker' ],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🛒',
      size: 'medium' // Regular card
    },
    {
      id: 'edemy-lms',
      category: 'Full-Stack Development',
      title: 'EDEMY Learning Management System',
      description: 'A full-stack Learning Management System built with the MERN stack featuring JWT role-based authentication and Docker containerization.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS','Node.js', 'Express', 'MongoDB', 'Docker' ],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🛒',
      size: 'medium' // Regular card
    },
    {
      id: 'salon-spa-booking',
      category: 'Mobile Application',
      title: 'Salon and Spa Appointment Booking App',
      description: 'A beautiful weather app with location-based forecasts and interactive maps.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Firebase'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🌤️',
      size: 'small' // Small card
    },
    {
      id: 'e-learning-app',
      category: 'Intern Project',
      title: 'E-Learning Application',
      description: 'An intelligent chatbot powered by OpenAI GPT for automated customer support.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', '.NET', 'MySQL'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🤖',
      size: 'wide' // Horizontal spanning card
    },
    {
      id: 'bus-management-system',
      category: 'Second Year Software Project',
      title: 'Highway Bus Management System',
      description: 'Interactive dashboards for business intelligence and data visualization.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'React Native', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '📈',
      size: 'medium' // Regular card
    },
    {
      id: 'expense-tracker',
      category: 'Personal Project',
      title: 'Expense Tracker',
      description: 'Modern, responsive expense tracking application with dark mode, customizable dashboard widgets, real-time updates, and mobile-optimized design.',
      image: ExpenseTrackerImg,
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Clerk', 'Axios'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🎨',
      size: 'small' // Small card
    },
    {
      id: 'job-portal',
      category: 'Full-Stack Development',
      title: 'Job Portal',
      description: 'Automated deployment pipeline with Docker, Kubernetes, and monitoring.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Clerk'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🚀',
      size: 'large' // 2-column card
    },
    {
      id: 'task-management',
      category: 'Full-Stack Development',
      title: 'Task Management Application',
      description: 'Automated deployment pipeline with Docker, Kubernetes, and monitoring.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Docker'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🚀',
      size: 'large' // 2-column card
    }
  ];

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
    <section id="projects" ref={projectsRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            My Projects
          </h2>
          <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                whileHover="hover"
                className="group w-full max-w-2xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div 
                  className={`bg-gradient-to-br ${project.bgGradient} rounded-3xl p-4 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/20 relative`}
                  variants={hoverVariants}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Project Image/Visual */}
                  <div className={`w-full h-64 sm:h-72 md:h-80 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                    {project.image && project.image !== '/api/placeholder/600/400' ? (
                      <Image 
                        src={typeof project.image === 'string' ? project.image : project.image.src} 
                        alt={project.title}
                        className="rounded-2xl"
                        fill
                        style={{objectFit: 'cover'}}
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center relative`}>
                        <div className="text-5xl font-bold text-white/90">
                          {project.title.charAt(0).toUpperCase()}
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Header */}
                  <div className="mb-2">
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-500">
                      {project.category}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-regular text-gray-900 group-hover:text-[#7697A0] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Project Content */}
                  <div className="space-y-4">
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                      {project.description}
                    </p>
              
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          className="text-gray-600 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          title={tech}
                        >
                          {(() => {
                            if (!tech) return null;
                            const iconData = getTechIcon(tech);
                            return iconData.reactIcon ? (
                              <div className="w-8 h-8">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {React.createElement(iconData.reactIcon as any, { className: "w-8 h-8" })}
                              </div>
                            ) : (
                              <FontAwesomeIcon 
                                icon={iconData.faIcon} 
                                className="w-8 h-8"
                              />
                            );
                          })()}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* View Project Button - Positioned at bottom right */}
                  <div className="absolute bottom-4 right-4">
                    <button 
                      className="text-gray-600 hover:text-gray-900 font-normal py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 text-base flex items-center gap-2 bg-transparent border-none cursor-pointer"
                      onClick={() => window.location.href = `/projects/${project.id}`}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;