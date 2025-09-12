'use client';

import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-black-400 text-xl font-regular">
            © {currentYear} Dulaj Upananda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
