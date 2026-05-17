import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Timeline from "@/components/Timeline";
import Qualities from "@/components/Qualities";
import Testimonials from "@/components/Testimonials";
import ServiceStats from "@/components/ServiceStats";
import BlogSection from "@/components/BlogSection";
import InstagramShowcase from "@/components/InstagramShowcase";
import { timelineData, qualities, instagramPosts } from "@/public/datas/homepage";
import { blogs } from "@/public/datas/blogs";
import Footer from "@/components/Footer";

export default function Home() {
  const featuredBlogs = blogs.filter((b) => b.isFeatured);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <Timeline data={timelineData} />
      <Qualities data={qualities} />
      <BlogSection blogs={featuredBlogs} />
      <InstagramShowcase posts={instagramPosts} />
      <Testimonials />
      <ServiceStats />
      <Footer />
    </main>
  );
}
