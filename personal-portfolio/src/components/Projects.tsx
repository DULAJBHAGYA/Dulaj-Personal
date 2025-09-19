'use client';

import React, { useEffect, useRef, useState } from 'react';
import ExpenseTrackerImg from '@/assets/images/ExpenseTracker.png';
import EventManagementImg from '@/assets/images/EventMng.png';
import MultiDimensionalCoursePerformanceAnalyticsImg from '@/assets/images/EduAnalytics.png';
import PortfolioImg from '@/assets/images/Portfolio.png';

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
  SiAngular,
  SiCss3,
  SiDotnet,
  SiFlutter,
  SiDart,
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
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      category: 'Final Year Project',
      title: 'ATS Compatible Resume Generator',
      description: 'A comprehensive AI-powered CV generation and optimization system that creates ATS-friendly resumes using advanced language models and modern web technologies.',
      image: '/api/placeholder/600/400',
      technologies: [ 'Next.js', 'Tailwind CSS', 'Python', 'FastAPI','Hugging Face', 'Jupyter'],
      liveUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      gradient: 'from-emerald-400 to-teal-600',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '🔍',
      size: 'wide' // Horizontal spanning card
    },
    {
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
    },{
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

  const leftCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      scale: 1
    }
  };

  const rightCardVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
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

        {/* Responsive Layout - Single column on mobile, alternating on desktop */}
        <div className="space-y-6 md:space-y-6">
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

            // On mobile: show single column, on desktop: show alternating layout
            if (index % 2 === 0) {
              const currentProject = project;
              const nextProject = projects[index + 1];
              
              return (
                <motion.div
                  key={`row-${index}`}
                  className="flex flex-col md:flex-row gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* First Column - Always comes from left */}
                  <motion.div
                    whileHover="hover"
                    className={`group w-full md:${getColumnWidths()}`}
                    variants={leftCardVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br ${currentProject.bgGradient} rounded-3xl p-4 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/20`}
                      variants={hoverVariants}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Project Image/Visual */}
                      <div className={`w-full h-64 sm:h-72 md:h-80 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                        {currentProject.image && currentProject.image !== '/api/placeholder/600/400' ? (
                          <img 
                            src={typeof currentProject.image === 'string' ? currentProject.image : currentProject.image.src} 
                            alt={currentProject.title}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${currentProject.gradient} rounded-2xl flex items-center justify-center relative`}>
                            <div className="text-5xl font-bold text-white/90">
                              {currentProject.title.charAt(0).toUpperCase()}
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
                                {currentProject.category}
                              </div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-regular text-gray-900 group-hover:text-[#7697A0] transition-colors duration-300">
                                {currentProject.title}
                              </h3>
                            </div>
                            
                            {/* Project Content */}
                            <div className="space-y-4">
                              {/* Description */}
                              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                                {currentProject.description}
                              </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-3">
                          {currentProject.technologies.map((tech) => (
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
                    </motion.div>
                  </motion.div>

                  {/* Second Column - Always comes from right */}
                  {nextProject && (
                    <motion.div
                      whileHover="hover"
                      className={`group w-full md:${isEvenRow ? 'w-2/5' : 'w-3/5'}`}
                      variants={rightCardVariants}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                      <motion.div 
                        className={`bg-gradient-to-br ${nextProject.bgGradient} rounded-3xl p-4 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/20`}
                        variants={hoverVariants}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* Project Image/Visual */}
                        <div className={`w-full h-64 sm:h-72 md:h-80 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                          {nextProject.image && nextProject.image !== '/api/placeholder/600/400' ? (
                            <img 
                              src={typeof nextProject.image === 'string' ? nextProject.image : nextProject.image.src} 
                              alt={nextProject.title}
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${nextProject.gradient} rounded-2xl flex items-center justify-center relative`}>
                              <div className="text-5xl font-bold text-white/90">
                                {nextProject.title.charAt(0).toUpperCase()}
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
                                  {nextProject.category}
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-regular text-gray-900 group-hover:text-[#7697A0] transition-colors duration-300">
                                  {nextProject.title}
                                </h3>
                              </div>
                              
                              {/* Project Content */}
                              <div className="space-y-4">
                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                                  {nextProject.description}
                                </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3">
                            {nextProject.technologies.map((tech) => (
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
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            }
            
            return null; // Skip odd-indexed projects as they're handled in pairs
          })}
        </div>

       
      </div>
    </section>
  );
};

export default Projects;
