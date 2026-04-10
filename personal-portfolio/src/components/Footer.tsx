'use client';

import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-black dark:text-gray-400 text-xs sm:text-sm md:text-md lg:text-md font-regular">
            © {currentYear} Dulaj Upananda
          </p>
          <h1 className="text-sm mt-2 sm:text-lg md:text-lg font-bold text-gray-700 dark:text-gray-200 font-blanka">
              D U L A J
            </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
