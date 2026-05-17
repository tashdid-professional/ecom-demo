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
          <h1 className="text-3xl md:text-5xl tracking-[0.2em] font-light uppercase mb-4">
            Blog
          </h1>
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] tracking-[0.3em] font-medium uppercase text-[#666]">
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
        <div className="container mx-auto px-6 md:px-4 max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[13px] md:text-[14px] font-cormorant italic text-[#999] mb-4">
            <span>{blog.month} {blog.day}</span>
            <span className="font-lato">-</span>
            <span className="px-1">{blog.category}</span>
            <span className="font-lato">-</span>
            <span className="px-1">By {blog.author}</span>
          </div>
          
          <h2 className="text-xl md:text-4xl tracking-[0.1em] text-black mb-6 md:mb-8 leading-tight uppercase font-light">
            {blog.title}
          </h2>

          <div className="space-y-6 text-[#a1a1a1] font-cormorant text-base md:text-lg leading-relaxed text-center">
            <p className="whitespace-pre-line">
              {blog.description}
            </p>
            
            {/* Blockquote Style as seen in design */}
            <div className="py-2 md:py-4 my-4 md:my-6 italic">
               <p className="text-lg md:text-xl font-cormorant text-[#1a1a1a] text-center leading-snug max-w-3xl mx-auto">
                 "Et qui falli latine consequuntur. In appellantur concludaturque pro. Commune scriptorem ad pri, ut euripidis posidonium has. Eum ei verear dolorum."
               </p>
            </div>

            <p>
              {blog.description}
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
