'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import schoolImage from '@/assets/images/School.jpg';
import universityImage from '@/assets/images/uniImg.png';
import about1Image from '@/assets/images/about1.png';
import about2Image from '@/assets/images/about2.png';
import about4Image from '@/assets/images/About4.jpg';
import sports1Image from '@/assets/images/Sports1.jpeg';
import sports2Image from '@/assets/images/Sports2.jpeg';
import sports3Image from '@/assets/images/Sports3.jpeg';
import sports4Image from '@/assets/images/Sports4.jpeg';
import sports5Image from '@/assets/images/Sports5.jpg';
import sports6Image from '@/assets/images/Sports6.jpg';
import music1Image from '@/assets/images/music1.jpg';
import music2Image from '@/assets/images/music2.jpg';
import music3Image from '@/assets/images/music3.jpg';
import music4Image from '@/assets/images/music4.jpg';
import music5Image from '@/assets/images/music5.jpg';
import music6Image from '@/assets/images/music6.jpg';
import books2Image from '@/assets/images/books2.jpg';
import movie1Image from '@/assets/images/movie.jpg';
import tvseries1Image from '@/assets/images/tvseries.jpg';



const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Sample sports images - replace with your actual images
  const sportsImages = [
    { src: sports1Image, alt: "Rugby Action" },
    { src: sports2Image, alt: "Cricket Match" },
    { src: sports3Image, alt: "Sports Team" },
    { src: sports5Image, alt: "Sports Action" },
    { src: sports4Image, alt: "Stadium View" },
    { src: sports6Image, alt: "Stadium View" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % sportsImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [sportsImages.length]);

  return (
    <section id="about" ref={aboutRef} className="pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="space-y-16">
          {/* Name and Images Layout */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
             <div className="grid grid-cols-12 gap-6 h-[500px]">
              {/* First Column: 80% Image, 20% Blank */}
              <div className="col-span-3 flex flex-col h-full">
                {/* 80% Image */}
                <div className="h-[60%] bg-white rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <div className="text-center text-white">
                    <Image
                      src={about2Image}
                      alt="About 2"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    </div>
                  </div>
                </div>
                {/* 20% Blank Space */}
                <div className="h-[40%]"></div>
              </div>

              {/* Second Column: 60% Name, 40% Image, 20% Blank */}
              <div className="col-span-6 flex flex-col h-full">
                 {/* 60% Name */}
                 <div className="h-[30%] flex items-center justify-start">
                   <div className="text-left">
                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                       Dulaj
                     </h1>
                     <h2 className="text-4xl sm:text-5xl md:text-6xl font-regular text-gray-900 leading-tight">
                       Upananda
                     </h2>
                   </div>
                 </div>
                {/* 20% Image */}
                <div className="h-[50%] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                    <div className="text-center text-white">
                    <Image
                      src={about1Image}
                      alt="About 1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    </div>
                  </div>
                </div>
                {/* 20% Blank Space */}
                <div className="h-[10%]"></div>
              </div>

              {/* Third Column: 40% Blank, 60% Image */}
              <div className="col-span-3 flex flex-col h-full">
                {/* 40% Blank Space */}
                <div className="h-[40%]"></div>
                {/* 60% Image */}
                <div className="h-[60%] bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                    <div className="text-center text-white">
                    <Image
                      src={about4Image}
                      alt="About 4"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-2000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-regular text-black mb-6">
              About Me
            </h3>
            
            <p className="text-gray-600 text-xl  mb-6 leading-relaxed">
              I&apos;m a fresh graduate from UOM with a passion for 
              Full Stack development and DevOps. I love building scalable applications and 
              implementing efficient deployment pipelines that enhance both development 
              productivity and system reliability.
            </p>
          </div>

           <div className="space-y-6">
             <h3 className="text-2xl font-regular text-black mb-6">Experience</h3>
             
             <div className="bg-white/50 rounded-lg">
               <h4 className="text-xl  font-semibold text-gray-900 mb-2">Software Engineer Intern (2024 Feb - 2024 Aug)</h4>
                <p className="text-gray-600 text-xl  mb-2">
                  Completed 6 months internship in <a href="https://futurecx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ">Future CX</a> as Software Engineer in the mobile development team.
                  You can find more about my internship project at <a href="#projects" className="text-blue-600 hover:text-blue-800 ">Projects</a> in the Projects section
                </p>
               
             </div>
           </div>

           <div className="space-y-6">
             <h3 className="text-2xl font-regular text-black mb-6">Education</h3>
             
             {/* Row 1: 50% - 50% */}
             <div className="grid grid-cols-2 gap-6">
               <div className="bg-white/50 rounded-lg h-72 flex flex-col justify-center">
                 <h4 className="text-xl  font-semibold text-gray-900 mb-2">University of Moratuwa (2021 - 2025)</h4>
                 <p className="text-gray-600 text-xl mb-2">
                  Pursued Bachelor of Science (Hons) in Information Technology & Management from Faculty of IT, <a href="https://uom.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">University of Moratuwa</a>. 
                  </p>
               </div>
                <div className="bg-white/50 rounded-lg h-80 flex items-center justify-center p-2">
                   <div className="w-3/4 h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                    <Image
                      src={universityImage}
                      alt="School Certificate"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    </div>
                  </div>
                </div>
             </div>

             {/* Row 2: 50% - 50% */}
             <div className="grid grid-cols-2 gap-10 mt-10">
             <div className="bg-white/50 rounded-lg h-80 flex items-center justify-center p-2">
                    <div className="w-3/4 h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                     <div className="text-center text-white">
                     <Image
                      src={schoolImage}
                      alt="School Certificate"
                      className="w-full h-full object-cover rounded-lg"
                    />
                     </div>
                   </div>
                 </div>
               <div className="bg-white/50 rounded-lg p-6 h-72 flex flex-col justify-center">
                <h4 className="text-xl  font-semibold text-gray-900 mb-2">
                    SIBA Campus (2019 - 2020)
                </h4>
                  <p className="text-gray-600 text-xl">
                   Completed Diploma in IT and Diploma in English at <a href="https://siba.edu.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">SIBA Campus, Kandy</a>. 
                   </p>
                 </div>
             </div>

             {/* Row 3: 50% - 50% */}
             <div className="grid grid-cols-2 gap-6">
               <div className="bg-white/50 rounded-lg p-6 h-72 flex flex-col justify-center">
               <h4 className="text-xl font-semibold text-gray-900 mb-2">Kingswood College, Kandy (2004 - 2017)</h4>
                  <p className="text-gray-600 text-xl">
                  studied primary and secondary studies at <a href="https://kingswood.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Kingswood College, Kandy</a>. I did my A/Ls in the Biology stream and I was able to secure 2As and B passes.
                   </p>
                 </div>
                 <div className="bg-white/50 rounded-lg h-80 flex items-center justify-center p-2">
                   <div className="w-3/4 h-full rounded-lg overflow-hidden">
                    <Image
                      src={schoolImage}
                      alt="School Certificate"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
             </div>
           </div>

           {/* Horizontal Line */}
           <div className="mt-16 mb-8">
             <hr className="border-gray-300 border-t-1" />
           </div>

           {/* My Favorites Section */}
           <div className="space-y-8">
             <h3 className="text-2xl font-regular text-black mb-8">My Favorites</h3>
             
             <div className="space-y-6">
               {/* Rugby and Cricket */}
               <div className="bg-white/50 rounded-lg p-10">
                 <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                   Rugby & Cricket
                 </h4>
                 
                 <div className="grid grid-cols-2 gap-6 mt-6">
                   {/* Left Column - Image Carousel */}
                   <div className="flex items-center justify-center">
                     <div className="w-full h-96 rounded-lg overflow-hidden relative">
                       <AnimatePresence mode="wait">
                         <motion.div
                           key={currentImageIndex}
                           initial={{ opacity: 0, x: 100 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -100 }}
                           transition={{ duration: 0.5, ease: "easeInOut" }}
                           className="w-full h-full"
                         >
                           <Image
                             src={sportsImages[currentImageIndex].src}
                             alt={sportsImages[currentImageIndex].alt}
                             className="w-full h-full object-cover"
                           />
                         </motion.div>
                       </AnimatePresence>
                       
                       {/* Image Indicators */}
                       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                         {sportsImages.map((_, index) => (
                           <button
                             key={index}
                             onClick={() => setCurrentImageIndex(index)}
                             className={`w-2 h-2 rounded-full transition-all duration-300 ${
                               index === currentImageIndex 
                                 ? 'bg-white scale-125' 
                                 : 'bg-white/50 hover:bg-white/75'
                             }`}
                           />
                         ))}
                       </div>
                     </div>
                   </div>
                   
                   {/* Right Column - Paragraph */}
                   <div className="flex items-center">
                     <p className="text-gray-600 text-lg leading-relaxed text-justify">
                       I am a big fan of <span className="font-semibold">Kandy Sports Club</span> and <span className="font-semibold">Springboks</span> rugby teams. I also have a deep love for  
                        <span className="font-semibold"> Sri Lankan cricket</span> and follow the national team passionately. These sports have been an integral 
                       part of my life, teaching me valuable lessons about teamwork, discipline, and national pride. 
                       Supporting these teams has given me a strong connection to both local and international sports culture.
                     </p>
                   </div>
                 </div>
               </div>
                         
               {/* Music */}
               <div className="bg-white/50 rounded-lg p-10">
                 <h4 className="text-xl font-semibold text-gray-900 mb-6">
                   Music
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Left Column - Text Content */}
                   <div className="flex items-center justify-center">
                     <div className="space-y-4">
                       <p className="text-gray-600 leading-relaxed text-lg text-justify">
                         I have a deep passion for Sri Lankan Classical Music, particularly the enchanting <span className="font-semibold">Nadhagama</span> vibe that captures the soul of our cultural heritage. The melodic rhythms and traditional instruments create a unique musical experience that I find truly captivating.
                       </p>
                       <p className="text-gray-600 leading-relaxed text-lg text-justify">
                         Among my favorite artists, <span className="font-semibold">Dhanith Sri</span> and <span className="font-semibold">Suni Edirisinghe</span> stand out for their exceptional vocal talent and ability to blend traditional elements with contemporary sounds. Their music resonates with me on both emotional and cultural levels.
                       </p>
                       <p className="text-gray-600 leading-relaxed text-lg text-justify">
                         I also enjoy exploring modern genres, especially EDM artists like <span className="font-semibold">Chainsmokers</span> and <span className="font-semibold">Coldplay</span>, who bring innovative electronic sounds and powerful lyrics. This diverse musical taste allows me to appreciate both the rich traditions of Sri Lankan music and the dynamic energy of contemporary global sounds.
                       </p>
                     </div>
                   </div>
                   
                   {/* Right Column - Complex Photo Grid */}
                   <div className="flex items-center justify-center">
                     <div className="w-full h-[400px] overflow-hidden">
                       <div className="grid grid-cols-3 gap-2 h-full">
                         {/* First Column - 60% and 40% split */}
                         <div className="flex flex-col gap-2 h-full">
                           <div className="rounded-lg overflow-hidden h-[240px]">
                             <Image
                               src={music5Image}
                               alt="Music 1"
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <div className="rounded-lg overflow-hidden h-[160px]">
                             <Image
                               src={music3Image}
                               alt="Music 2"
                               className="w-full h-full object-cover"
                             />
                           </div>
                         </div>
                         
                         {/* Second Column */}
                         <div className="flex flex-col gap-2 h-full">
                           <div className="rounded-lg overflow-hidden flex-1">
                             <Image
                               src={music4Image}
                               alt="Music 3"
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <div className="rounded-lg overflow-hidden flex-1">
                             <Image
                               src={music1Image}
                               alt="Music 4"
                               className="w-full h-full object-cover"
                             />
                           </div>
                         </div>
                         
                         {/* Third Column - 30% and 70% split */}
                         <div className="flex flex-col gap-2 h-full">
                           <div className="rounded-lg overflow-hidden h-[120px]">
                             <Image
                               src={music2Image}
                               alt="Music 5"
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <div className="rounded-lg overflow-hidden h-[280px]">
                             <Image
                               src={music6Image}
                               alt="Music 6"
                               className="w-full h-full object-cover"
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Books and Movies - Side by Side */}
               <div className="bg-white/50 rounded-lg p-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Books Column */}
                   <div className="flex flex-col">
                     <h4 className="text-xl font-semibold text-gray-900 mb-4">
                       Books
                     </h4>
                     
                     {/* Image Row */}
                     <div className="mb-4">
                       <div className="rounded-lg overflow-hidden h-96">
                         <Image
                           src={books2Image}
                           alt="Books"
                           className="w-full h-full object-cover"
                         />
                       </div>
                     </div>
                     
                     {/* Text Row */}
                     <div>
                       <p className="text-gray-600 mb-4 text-justify">
                         I love reading Sinhala novels most of the time, especially works by <span className="font-semibold">Martin Wickramasinghe</span>. His literary works have deeply influenced my understanding of Sri Lankan culture and society. I also enjoy reading biographies of successful entrepreneurs and tech leaders, as they provide valuable insights into their journey, challenges, and the mindset required to achieve greatness. These books help me understand different perspectives on leadership, innovation, and personal growth.
                       </p>
                       
                     </div>
                   </div>
                   
                   {/* Movies Column */}
                   <div className="flex flex-col">
                     <h4 className="text-xl font-semibold text-gray-900 mb-4">
                       Movies & TV Series
                     </h4>
                     
                     {/* Image Row - 2 Columns */}
                     <div className="mb-4">
                       <div className="grid grid-cols-2 gap-2 h-96">
                         <div className="rounded-lg overflow-hidden">
                           <Image
                             src={tvseries1Image}
                             alt="Movies 1"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <div className="rounded-lg overflow-hidden">
                           <Image
                             src={movie1Image}
                             alt="Movies 2"
                             className="w-full h-full object-cover"
                           />
                         </div>
                       </div>
                     </div>
                     
                     {/* Text Row */}
                     <div>
                       <p className="text-gray-600 mb-4 text-justify">
                         I enjoy watching adventure, thriller, and horror movies and series. My favorite TV series 
                         is <span className="font-semibold">The Day of the Jackal</span>, and I&apos;m a big fan of 
                         <span className="font-semibold">The Lord of the Rings</span> movies. These genres keep 
                         me engaged with their compelling storytelling and intense narratives. 
                         I particularly appreciate how adventure films take me on journeys to unknown worlds, 
                         while thrillers keep me on the edge of my seat with their suspenseful plots. 
                         </p>
                       
                     </div>
                   </div>
                 </div>
               </div>


               {/* Hobbies */}
               <div className="bg-white/50 rounded-lg p-10">
                 <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                   Hobbies
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="flex items-center justify-center">
                     <p className="text-gray-600 leading-relaxed text-justify text-center">
                       In my free time, I like to go hiking and traveling to explore new places and experience different cultures around the world. There&apos;s something incredibly fulfilling about discovering hidden trails, meeting new people, and immersing myself in diverse traditions and cuisines. I also thoroughly enjoy playing cricket or rugby as these sports not only keep me physically active but also help me stay connected with friends and build lasting relationships through teamwork and camaraderie. Whether it&apos;s trekking through scenic mountain trails, discovering new destinations with rich histories, or playing competitive sports with teammates, these activities bring perfect balance, excitement, and personal growth to my life while creating unforgettable memories and stories to share.
                     </p>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="relative h-48 rounded-2xl overflow-hidden">
                       <Image
                         src={sports1Image}
                         alt="Hiking adventure"
                         fill
                         className="object-cover"
                       />
                     </div>
                     <div className="relative h-48 rounded-2xl overflow-hidden">
                       <Image
                         src={sports2Image}
                         alt="Traveling"
                         fill
                         className="object-cover"
                       />
                     </div>
                     <div className="relative h-48 rounded-2xl overflow-hidden">
                       <Image
                         src={sports3Image}
                         alt="Cricket match"
                         fill
                         className="object-cover"
                       />
                     </div>
                     <div className="relative h-48 rounded-2xl overflow-hidden">
                       <Image
                         src={sports4Image}
                         alt="Rugby game"
                         fill
                         className="object-cover"
                       />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;