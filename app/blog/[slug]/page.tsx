import React from "react";
import Image from "next/image";
import { blogs } from "@/public/datas/blogs";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { blogHeader } from "@/public/datas/homepage";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header (Matching Blog Index) */}
      <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden  bg-[#f9f9f9] flex items-center justify-center">
        <Image
          src={blogHeader.image}
          alt="Blog Header"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative text-center z-10 px-4">
          <h1 className="text-3xl md:text-5xl tracking-[0.08em] font-light uppercase mb-4">
            Blog
          </h1>
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] tracking-[0.08em] font-medium uppercase text-[#666]">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-black line-clamp-1">{blog.title}</span>
          </div>
        </div>
      </div>

      <article className="pt-16 md:pt-20 pb-16 md:pb-20">
        {/* Featured Image */}
        <div className="container mx-auto px-6 md:px-4 mb-12 md:mb-16 max-w-5xl">
           <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 md:px-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[13px] md:text-[18px] font-cormorant italic text-[#999] mb-4 lg:mb-1">
            <span>{blog.month} {blog.day}</span>
            <span className="font-lato">-</span>
            <span className="px-1">{blog.category}</span>
            <span className="font-lato">-</span>
            <span className="px-1">By {blog.author}</span>
          </div>
          
          <h2 className="text-xl md:text-3xl tracking-[0.08em] text-black mb-6 md:mb-8 leading-tight uppercase  text-center">
            {blog.title}
          </h2>

          <div className="space-y-6 text-[#6b6565] font-cormorant text-base md:text-lg leading-relaxed text-justify">
            <p className="whitespace-pre-line">
              {blog.description1}
            </p>
            
            {/* Blockquote Style as seen in design */}
            <div className="py-2 md:py-4 my-4 md:my-6 italic">
               <p className="text-lg md:text-[22px] font-cormorant text-[#3f3e3e] text-center leading-snug max-w-3xl mx-auto">
                 {blog.descriptionmiddle}
               </p>
            </div>

            <p>
              {blog.description2}
            </p>
          </div>
        </div>

        {/* Comment Form Section */}
        <div className="container mx-auto px-6 md:px-4 max-w-4xl mt-20 border-t border-gray-100 pt-16">
          <h3 className="text-xl md:text-2xl tracking-[0.08em] text-black mb-10 uppercase ">
            Post a Comment
          </h3>
          
          <form className="space-y-4">
            <div className="w-full">
              <textarea
                placeholder="Your comment"
                rows={8}
                className="w-full border border-gray-200 p-4 font-cormorant italic outline-none focus:border-black transition-colors resize-none"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-200 p-4 font-cormorant italic outline-none focus:border-black transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-200 p-4 font-cormorant italic outline-none focus:border-black transition-colors"
                required
              />
              <input
                type="text"
                placeholder="Website"
                className="w-full border border-gray-200 p-4 font-cormorant italic outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="flex items-start gap-3 py-2">
              <input 
                type="checkbox" 
                id="save-info" 
                className="mt-1.5 border-gray-300 rounded"
              />
              <label htmlFor="save-info" className="text-[13px] md:text-[14px] font-cormorant text-[#a1a1a1] italic leading-relaxed">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 bg-black text-white px-12 py-4 text-[11px] tracking-[0.08em] font-lato uppercase hover:bg-[#ff3366] transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </article>
      <Footer />
    </main>
  );
}
