"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InstagramPost } from "@/public/datas/homepage";

interface InstagramShowcaseProps {
  posts: InstagramPost[];
}

const InstagramShowcase: React.FC<InstagramShowcaseProps> = ({ posts }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden">
        {posts.map((post) => (
          <a 
            key={post.id} 
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group aspect-square overflow-hidden block"
          >
            {/* Main Image */}
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Hover Overlay - Sliding from bottom */}
            <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-700 ease-in-out z-10 p-2 md:p-3">
              <div className="bg-white w-full h-full flex flex-col items-center justify-center text-center shadow-sm px-4">
                <h3 className="text-[#1a1a1a] text-sm md:text-base tracking-[0.08em] font-light uppercase mb-2">
                  {post.title}
                </h3>
                <p className="text-[#a1a1a1] italic font-cormorant text-xs md:text-sm">
                  {post.category}
                </p>
              </div>
            </div>
            
            {/* Removed the Visual Border/Frame div */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramShowcase;
