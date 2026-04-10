'use client';

import { useEffect, useRef, useState } from 'react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="flex-1 pt-36 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <p className="text-black dark:text-white text-xs sm:text-sm md:text-md lg:text-base max-w-6xl">
            A collection of memorable moments and experiences
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery items will be added here */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square bg-gray-200 dark:bg-gray-800"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400 dark:text-gray-600">Image {item}</p>
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-sm sm:text-base font-semibold text-center px-4">
                    Gallery Item {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
