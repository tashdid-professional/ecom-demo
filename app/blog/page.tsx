"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/public/datas/blogs";
import { blogHeader } from "@/public/datas/homepage";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
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
            <span className="text-black">Blog</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-4 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          
          {/* Blog List Area */}
          <div className="w-full lg:w-2/3 space-y-16 md:space-y-20">
            {blogs.map((blog) => (
              <article key={blog.id} className="group">
                {/* Image */}
                <Link href={`/blog/${blog.slug}`} className="block relative aspect-[16/9] mb-6 md:mb-8 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 text-[13px] md:text-[14px] font-cormorant italic text-[#999] mb-4">
                  <span>{blog.month} {blog.day}</span>
                  <span className="font-lato">-</span>
                  <span className="hover:text-black cursor-pointer transition-colors px-1">{blog.category}</span>
                  <span className="font-lato">-</span>
                  <span className="px-1">By {blog.author}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-4xl tracking-[0.1em] text-black mb-4 md:mb-6 leading-tight">
                  <Link href={`/blog/${blog.slug}`} className="hover:text-[#d4b1a4] transition-colors uppercase font-light">
                    {blog.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-[#a1a1a1] font-cormorant text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl">
                  {blog.excerpt}
                </p>

                {/* Social Share Mock (Matching format) */}
                {/* <div className="flex items-center gap-4 border-t border-[#eee] pt-6 mt-6">
                   <div className="flex gap-4">
                      {['f', 't', 'in', 'p'].map(s => (
                        <span key={s} className="w-8 h-8 rounded-full border border-[#eee] flex items-center justify-center text-[10px] uppercase hover:bg-black hover:text-white transition-all cursor-pointer">
                          {s}
                        </span>
                      ))}
                   </div>
                </div> */}
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-16">
              
              {/* Recent Posts Widget */}
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase mb-8 border-b border-[#eee] pb-4">Recent Posts</h3>
                <div className="space-y-6">
                  {blogs.slice(0, 3).map(post => (
                    <div key={post.id} className="flex gap-4 group">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <Link href={`/blog/${post.slug}`} className="text-xs tracking-[0.1em] uppercase hover:text-[#d4b1a4] transition-colors leading-relaxed">
                          {post.title}
                        </Link>
                        <div className="flex items-center gap-1 text-[10px] text-[#999] uppercase mt-1">
                          <span>{post.month} {post.day}</span>
                          <span className="text-[8px] opacity-50">-</span>
                          <span>By {post.author}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </main>
  );
}
