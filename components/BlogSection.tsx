"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/public/datas/blogs";

interface BlogSectionProps {
  blogs: Blog[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-12 md:mb-16">
        <h4 className="font-tuesday-night text-3xl text-[#ecd1cd] lowercase mb-2">
          perfect shades
        </h4>
        <h2 className="font-lato text-2xl md:text-3xl tracking-[0.2em] uppercase text-black mb-4">
          FIND YOUR BEAUTY MATCH
        </h2>
        <p className="text-[#a1a1a1] italic font-cormorant text-base md:text-lg text-center max-w-2xl mx-auto">
          At vero eos et accusamus et iusto
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">
              {/* Image Container 16:9 */}
              <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Date Tag */}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-2 text-center min-w-[50px] shadow-sm">
                  <span className="block text-[10px] font-tuesday-night text-[#d4b1a4] leading-none mb-1">
                    {blog.month}
                  </span>
                  <span className="block text-sm font-lato tracking-widest text-[#1a1a1a] leading-none">
                    {blog.day}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="text-left">
                <div className="text-[11px] tracking-widest text-[#a1a1a1] uppercase mb-3 font-lato italic">
                  {blog.category} <span className="mx-1 font-normal">—</span> By {blog.author}
                </div>
                <h3 className="text-lg tracking-widest text-[#1a1a1a] border-[#1a1a1a] mb-4 uppercase font-light leading-snug">
                  <Link href={`/blog/${blog.slug}`} className="hover:opacity-70 transition-opacity">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-[#888888] font-light text-[14px] leading-relaxed mb-6 italic font-cormorant">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[11px] tracking-[0.3em] text-[#1a1a1a] uppercase transition-all duration-300 relative inline-block hover:opacity-60 font-lato"
                >
                 - Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
