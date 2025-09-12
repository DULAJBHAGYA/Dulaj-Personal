import Navbar from "@/components/Navbar";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs | Dulaj Personal',
  description: 'Read my latest blog posts about technology, programming, and software development',
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <Blogs />
      <Footer />
    </main>
  );
}
