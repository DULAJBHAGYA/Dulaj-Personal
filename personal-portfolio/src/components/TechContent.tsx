'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaJenkins, FaFigma, FaCss3, FaPython, FaApple, FaDocker, FaAws, FaAngular, FaWindows, FaLinux, FaGitAlt, FaGithub, FaJira } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiTypescript, SiGnubash, SiGooglecloud, SiOracle, SiJavascript, SiPostgresql, SiMongodb, SiMysql, SiDotnet, SiTailwindcss, SiKubernetes, SiClion, SiSpringboot, SiIntellijidea, SiApachenetbeanside, SiEclipseide, SiBlender, SiFigma, SiJira } from 'react-icons/si';
import { TbBrandReactNative, TbBrandVisualStudio } from "react-icons/tb";
import { FaDartLang, FaGolang } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";





export default function TechContent() {
  const [isVisible, setIsVisible] = useState(false);
  const techRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" ref={techRef} className="pt-36 pb-20">
       <div className="max-w-7xl mx-auto">
         <div className="text-left mb-10">
           <p className="text-gray-700 text-xl max-w-7xl text-justify text-left mb-6">
             As a DevOps and Full-Stack developer, I specialize in creating end-to-end solutions that bridge 
             development and operations. I am passionate about the MERN stack, 
             .NET ecosystem, Java development, Next.js for modern web applications, and Flutter for cross-platform mobile development.
           </p> 
           
           <h3 className="text-2xl font-regular mb-8 text-black text-left">Technologies</h3>
         </div>

         {/* Two Column Layout */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-2">
           {/* Left Column - Programming Languages */}
           <div className="mb-2">
             <h2 className="text-xl font-regular text-black text-left mb-2">Programming Languages</h2>
             <div className="grid grid-cols-8 gap-4">
               {/* Java */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaJava className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Javascript */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiJavascript className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Typescript */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiTypescript className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Dart */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaDartLang className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* HTML5 */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaHtml5 className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Css3 */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaCss3 className="text-3xl text-gray-600" />
                 </div>
               </div> 

               {/* Python */} 
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaPython className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Golang */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaGolang className="text-3xl text-gray-600" />
                 </div>
               </div>
               
             </div>
           </div>

           {/* Right Column - Frontend Technologies */}
           <div className="mb-2">
             <h2 className="text-xl font-regular text-black text-left mb-2">Frontend Technologies</h2>
             <div className="grid grid-cols-8 gap-4">
               {/* React */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaReact className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Next.js */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiNextdotjs className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* React Native */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <TbBrandReactNative className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Flutter */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiFlutter className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Tailwind CSS */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiTailwindcss className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Angular */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaAngular className="text-3xl text-gray-600" />
                 </div>
               </div>  
             </div>
           </div>
         </div>

         {/* Two Column Layout - Backend & Databases */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-2">
           {/* Left Column - Backend Technologies */}
           <div className="mb-2">
             <h2 className="text-xl font-regular text-black text-left mb-2">Backend Technologies</h2>
             <div className="grid grid-cols-8 gap-4">
               {/* Node.js */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaNodeJs className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* .NET */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiDotnet className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Spring Boot */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiSpringboot className="text-3xl text-gray-600" />
                 </div>
               </div>

               
             </div>
           </div>

           {/* Right Column - Databases & DevOps */}
           <div className="mb-2">
             <h2 className="text-xl font-regular text-black text-left mb-2">Databases</h2>
             <div className="grid grid-cols-8 gap-4">
               {/* MongoDB */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiMongodb className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Postgresql */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiPostgresql className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* MSSQL */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <DiMsqlServer className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* MySQL */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiMysql className="text-3xl text-gray-600" />
                 </div>
               </div>
             </div>
           </div>
         </div>

         

         {/* Two Column Layout - DevOps & IDEs */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-2">
           {/* Left Column - DevOps Tools */}
           <div className="mb-2">
             <h2 className="text-xl font-regular text-black text-left mb-2">DevOps Tools</h2>
             <div className="grid grid-cols-8 gap-4">
               {/* Git */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaGitAlt className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* GitHub */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaGithub className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Docker */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaDocker className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Kubernetes */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiKubernetes className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* AWS */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaAws className="text-3xl text-gray-600" />
                 </div>
               </div>
             </div>
           </div>

           {/* Right Column - IDEs & Editors */}
           <div className="mb-2">
             <h2 className="text-xl font-regular text-black text-left mb-2">IDEs & Editors</h2>
             <div className="grid grid-cols-8 gap-4">
               {/* Visual Studio */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <VscVscode className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Visual Studio Code */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <TbBrandVisualStudio className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* CLion */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiClion className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* IntelliJ IDEA */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiIntellijidea className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* NetBeans */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiApachenetbeanside className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Eclipse */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiEclipseide className="text-3xl text-gray-600" />
                 </div>
               </div>
             </div>
           </div>
         </div>

{/* Two Column Layout - DevOps & IDEs */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-2">
           {/* Left Column - DevOps Tools */}
           <div className="mb-2">
             <h2 className="text-xl font-regular text-black text-left mb-2">Other Tools</h2>
             <div className="grid grid-cols-8 gap-4">
               {/* Git */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaFigma className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* GitHub */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <SiBlender className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Docker */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaJira className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Kubernetes */}
              
             </div>
           </div>

           {/* Right Column - IDEs & Editors */}
           <div className="mb-2">
             <h2 className="text-xl font-regular text-black text-left mb-2">Operating Systems</h2>
             <div className="grid grid-cols-8 gap-4">
               {/* Visual Studio */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaWindows className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* Visual Studio Code */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaLinux className="text-3xl text-gray-600" />
                 </div>
               </div>

               {/* CLion */}
               <div className="bg-white/50 rounded-3xl flex flex-col items-center text-center p-4">
                 <div className="w-12 h-12 flex items-center justify-center">
                   <FaApple className="text-3xl text-gray-600" />
                 </div>
               </div>

               
             </div>
           </div>
         </div>

         {/* Certifications Section */}
         <div className="mt-16">
           <h3 className="text-2xl font-regular mb-8 text-black text-left">Certifications</h3>
           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Kubernetes Certification */}
             <a href="https://kodekloud.com/certificate-verification/" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <SiKubernetes className="text-4xl text-blue-700" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Kubernetes</h4>
               <p className="text-sm text-gray-600">Kodekloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Docker Certification */}
             <a href="https://kodekloud.com/certificate-verification/" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <FaDocker className="text-4xl text-blue-600" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Docker</h4>
               <p className="text-sm text-gray-600">Kodekloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Linux Certification */}
             <a href="https://kodekloud.com/certificate-verification/" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <FaLinux className="text-4xl text-orange-500" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Linux</h4>
               <p className="text-sm text-gray-600">Kodekloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Jenkins Certification */}
             <a href="https://kodekloud.com/certificate-verification/" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <FaJenkins className="text-4xl text-blue-500" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Jenkins</h4>
               <p className="text-sm text-gray-600">Kodekloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Git Certification */}
             <a href="https://kodekloud.com/certificate-verification/" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <FaGitAlt className="text-4xl text-orange-600" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Git</h4>
               <p className="text-sm text-gray-600">Kodekloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Shell Scripts Certification */}
             <a href="https://kodekloud.com/certificate-verification/" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <SiGnubash className="text-4xl text-gray-600" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Shell Scripts</h4>
               <p className="text-sm text-gray-600">Kodekloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Google Cloud - Generative AI */}
             <a href="https://www.cloudskillsboost.google/public_profiles/your-profile-id" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <SiGooglecloud className="text-4xl text-blue-500" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Introduction to Generative AI</h4>
               <p className="text-sm text-gray-600">Google Cloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Google Cloud - Large Language Models */}
             <a href="https://www.cloudskillsboost.google/public_profiles/your-profile-id" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <SiGooglecloud className="text-4xl text-blue-500" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Introduction to Large Language Models</h4>
               <p className="text-sm text-gray-600">Google Cloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Google Cloud - AI and ML */}
             <a href="https://www.cloudskillsboost.google/public_profiles/your-profile-id" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <SiGooglecloud className="text-4xl text-blue-500" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Introduction to AI and ML</h4>
               <p className="text-sm text-gray-600">Google Cloud</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Oracle DevOps Foundations */}
             <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=your-badge-id" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <SiOracle className="text-4xl text-red-600" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">DevOps Foundations 2025</h4>
               <p className="text-sm text-gray-600">Oracle</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>

             {/* Linux Foundation */}
             <a href="https://training.linuxfoundation.org/certificate/verification/" target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-white/70 transition-colors duration-200">
               <div className="w-16 h-16 mb-4 flex items-center justify-center">
                 <FaLinux className="text-4xl text-orange-500" />
               </div>
               <h4 className="text-lg font-semibold text-gray-900 mb-2">Introduction to Linux</h4>
               <p className="text-sm text-gray-600">Linux Foundation</p>
               <span className="text-xs text-blue-600 mt-2 hover:underline">View Credential</span>
             </a>
           </div>
         </div>
         
          
       </div>
    </section>
  );
}
