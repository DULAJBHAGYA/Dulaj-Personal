import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechContent from '@/components/TechContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech | Dulaj Personal',
  description: 'Explore my technical skills, tools, and technologies I work with',
};

export default function TechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <main className="pt-20 px-6 sm:px-4 md:px-4">
        <TechContent />
      </main>
      <Footer />
    </div>
  );
}
