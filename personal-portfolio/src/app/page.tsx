'use client';

import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  // Set title after component mounts
  useEffect(() => {
    document.title = 'Dulaj Personal';
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
