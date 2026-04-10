'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiOutlineSun } from 'react-icons/hi';
import { FaRegMoon } from 'react-icons/fa6';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiOutlineSun className="w-4 h-4 text-white-500" />
      ) : (
        <FaRegMoon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}
