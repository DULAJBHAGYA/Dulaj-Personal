import Navbar from "@/components/Navbar";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <Blogs />
      <Footer />
    </main>
  );
}
