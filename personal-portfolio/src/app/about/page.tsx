import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Dulaj Personal',
  description: 'Learn more about Dulaj Upananda - Fresh graduate from UOM, Full Stack Developer and DevOps enthusiast',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
