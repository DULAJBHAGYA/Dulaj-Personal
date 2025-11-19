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
import music7Image from '@/assets/images/music7.png';
import movie1Image from '@/assets/images/movie.webp';
import tvseries1Image from '@/assets/images/tvseries.webp';
import hobbies1Image from '@/assets/images/hobby1.jpg';
import hobbies2Image from '@/assets/images/hobby2.png';
import hobbies3Image from '@/assets/images/hobby3.jpg';
import hobbies4Image from '@/assets/images/hobby4.jpg';
import sibaImage from '@/assets/images/sibaImg.jpg'



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
             <div className="grid grid-cols-12 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
              {/* First Column: 80% Image, 20% Blank */}
              <div className="col-span-3 flex flex-col h-full">
                {/* 80% Image */}
                <div className="h-[60%] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden">
                  <Image
                    src={about2Image}
                    alt="About 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 20% Blank Space */}
                <div className="h-[40%]"></div>
              </div>

              {/* Second Column: 60% Name, 40% Image, 20% Blank */}
              <div className="col-span-6 flex flex-col h-full">
                 {/* 60% Name */}
                 <div className="h-[30%] flex items-center justify-start">
                   <div className="text-left">
                     <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                       Dulaj
                     </h1>
                     <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-regular text-gray-900 leading-tight">
                       Upananda
                     </h2>
                   </div>
                 </div>
                {/* 20% Image */}
                <div className="h-[50%] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden">
                  <Image
                    src={about1Image}
                    alt="About 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 20% Blank Space */}
                <div className="h-[10%]"></div>
              </div>

              {/* Third Column: 40% Blank, 60% Image */}
              <div className="col-span-3 flex flex-col h-full">
                {/* 40% Blank Space */}
                <div className="h-[40%]"></div>
                {/* 60% Image */}
                <div className="h-[60%] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden">
                  <Image
                    src={about4Image}
                    alt="About 4"
                    className="w-full h-full object-cover"
                  />
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
            
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
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
                <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-2">
                  Completed 6 months internship in <a href="https://futurecx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ">Future CX</a> as Software Engineer in the mobile development team.
                  You can find more about my internship project at <a href="#projects" className="text-blue-600 hover:text-blue-800 ">Projects</a> in the Projects section
                </p>

                <h4 className="text-xl  font-semibold text-gray-900 mb-2 mt-8">Software Engineer (2025 Nov - Present)</h4>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-2">
                  Working as a Full Stack Software Engineer at <a href="https://masgraslaw.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ">Masgras Professional Corporation (Canada)</a>.
                </p>
               
             </div>
           </div>

           <div className="space-y-6">
             <h3 className="text-2xl font-regular text-black mb-6">Education</h3>
             
             {/* Row 1: Image first on mobile, text second */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
               <div className="bg-white/50 rounded-lg h-80 md:h-96 flex items-center justify-center p-2 order-1 md:order-2">
                 <div className="w-full h-full rounded-lg overflow-hidden">
                   <Image
                     src={universityImage}
                     alt="University of Moratuwa"
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
               <div className="bg-white/50 rounded-lg h-auto md:h-72 flex flex-col justify-center p-4 md:p-6 order-2 md:order-1">
                 <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">University of Moratuwa (2021 - 2025)</h4>
                 <p className="text-gray-600 text-base sm:text-lg md:text-xl">
                  Pursued Bachelor of Science (Hons) in Information Technology & Management from Faculty of IT, <a href="https://uom.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">University of Moratuwa</a>. 
                  </p>
               </div>
             </div>

             {/* Row 2: Image first on mobile, text second */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-10">
               <div className="bg-white/50 rounded-lg h-80 md:h-96 flex items-center justify-center p-2 order-1 md:order-1">
                 <div className="w-full h-full rounded-lg overflow-hidden">
                   <Image
                     src={sibaImage}
                     alt="SIBA Campus"
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
               <div className="bg-white/50 rounded-lg h-auto md:h-72 flex flex-col justify-center p-4 md:p-6 order-2 md:order-2">
                 <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                     SIBA Campus (2019 - 2020)
                 </h4>
                 <p className="text-gray-600 text-base sm:text-lg md:text-xl">
                  Completed Diploma in IT and Diploma in English at <a href="https://siba.edu.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">SIBA Campus, Kandy</a>. 
                  </p>
               </div>
             </div>

             {/* Row 3: Image first on mobile, text second */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
               <div className="bg-white/50 rounded-lg h-80 md:h-96 flex items-center justify-center p-2 order-1 md:order-2">
                 <div className="w-full h-full rounded-lg overflow-hidden">
                   <Image
                     src={schoolImage}
                     alt="Kingswood College"
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
               <div className="bg-white/50 rounded-lg h-auto md:h-72 flex flex-col justify-center p-4 md:p-6 order-2 md:order-1">
                 <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Kingswood College, Kandy (2004 - 2017)</h4>
                 <p className="text-gray-600 text-base sm:text-lg md:text-xl">
                  studied primary and secondary studies at <a href="https://kingswood.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Kingswood College, Kandy</a>. I did my A/Ls in the Biology stream and I was able to secure 2As and B passes.
                  </p>
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
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
                   {/* Left Column - Image Carousel */}
                   <div className="flex items-center justify-center order-2 md:order-1">
                     <div className="w-full h-64 xs:h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden relative">
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
                   <div className="flex items-center order-1 md:order-2">
                     <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
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
                       <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                         I have a deep passion for Sri Lankan Classical Music, particularly the enchanting <span className="font-semibold">Nadhagama</span> vibe that captures the soul of our cultural heritage. The melodic rhythms and traditional instruments create a unique musical experience that I find truly captivating.
                       </p>
                       <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                         Among my favorite artists, <span className="font-semibold">Dhanith Sri</span> and <span className="font-semibold">Suni Edirisinghe</span> stand out for their exceptional vocal talent and ability to blend traditional elements with contemporary sounds. Their music resonates with me on both emotional and cultural levels.
                       </p>
                       <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                         I also enjoy exploring modern genres, especially EDM artists like <span className="font-semibold">Chainsmokers</span> and <span className="font-semibold">Coldplay</span>, who bring innovative electronic sounds and powerful lyrics. This diverse musical taste allows me to appreciate both the rich traditions of Sri Lankan music and the dynamic energy of contemporary global sounds.
                       </p>
                     </div>
                   </div>
                   
                   {/* Right Column - Complex Photo Grid */}
                   <div className="flex items-center justify-center">
                     <div className="w-full">
                       <div className="grid grid-cols-3 gap-2">
                         {/* First Column - 60% and 40% split */}
                         <div className="flex flex-col gap-2">
                           <div className="rounded-lg overflow-hidden">
                             <Image
                               src={music5Image}
                               alt="Music 1"
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <div className="rounded-lg overflow-hidden ">
                             <Image
                               src={music3Image}
                               alt="Music 2"
                               className="w-full h-full object-cover"
                             />
                           </div>
                         </div>
                         
                         {/* Second Column */}
                         <div className="flex flex-col gap-2">
                           <div className="rounded-lg overflow-hidden aspect-square">
                             <Image
                               src={music4Image}
                               alt="Music 3"
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <div className="rounded-lg overflow-hidden ">
                             <Image
                               src={music1Image}
                               alt="Music 4"
                               className="w-full h-full object-cover"
                             />
                           </div>
                         </div>
                         
                         {/* Third Column - 30% and 70% split */}
                         <div className="flex flex-col gap-2">
                           <div className="rounded-lg overflow-hidden">
                             <Image
                               src={music2Image}
                               alt="Music 5"
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <div className="rounded-lg overflow-hidden aspect-[3/4]">
                             <Image
                               src={music6Image}
                               alt="Music 6"
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <div className="rounded-lg overflow-hidden aspect-square">
                             <Image
                               src={music7Image}
                               alt="Music 7"
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
                     <div className="relative h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden">
                       <Image
                         src={hobbies1Image}
                         alt="Hiking adventure"
                         fill
                         className="object-cover"
                       />
                     </div>
                     <div className="relative h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden">
                       <Image
                         src={hobbies3Image}
                         alt="Traveling"
                         fill
                         className="object-cover"
                       />
                     </div>
                     <div className="relative h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden">
                       <Image
                         src={hobbies4Image}
                         alt="Cricket match"
                         fill
                         className="object-cover"
                       />
                     </div>
                     <div className="relative h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden">
                       <Image
                         src={hobbies2Image}
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