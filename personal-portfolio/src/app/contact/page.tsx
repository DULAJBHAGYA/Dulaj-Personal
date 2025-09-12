import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Dulaj Personal',
  description: 'Get in touch with Dulaj Upananda for collaboration, opportunities, or just to say hello',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}