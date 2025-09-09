import Navbar from "@/components/Navbar";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Blogs />
      <Footer />
    </main>
  );
}
