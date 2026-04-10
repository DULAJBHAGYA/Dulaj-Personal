import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Dulaj Personal',
  description: 'Explore my photo gallery showcasing memorable moments and experiences',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200 flex flex-col">
      <Navbar />
      <Gallery />
      <Footer />
    </main>
  );
}
