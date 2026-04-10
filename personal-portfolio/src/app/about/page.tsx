import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Dulaj Personal',
  description: 'Learn more about Dulaj Upananda - Fresh graduate from UOM, Full Stack Developer and DevOps enthusiast',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
