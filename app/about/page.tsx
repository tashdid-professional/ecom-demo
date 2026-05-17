import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aboutData, qualities } from "@/public/datas/homepage";
import Qualities from "@/components/Qualities";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Featured Header Image */}
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden mt-20">
        <Image
          src={aboutData.featuredImage}
          alt={aboutData.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="py-16 md:py-24 px-6 md:px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Section Header */}
          <div className="mb-8">
            <span className="font-tuesday-night text-4xl md:text-5xl text-[#d4b1a4] block mb-2 opacity-60">
              {aboutData.subtitle}
            </span>
            <h1 className="text-2xl md:text-3xl tracking-[0.125em] text-[#1a1a1a] uppercase leading-tight">
              {aboutData.title}
            </h1>
          </div>

          {/* Description Content */}
          <div className="max-w-4xl mx-auto">
            <p className="text-[#a1a1a1] font-cormorant text-lg md:text-xl leading-relaxed md:leading-[1.4] text-center whitespace-pre-line">
              {aboutData.description}
            </p>
          </div>
        </div>
      </article>
      
      <Qualities data={qualities} />
      
      <Footer />
    </main>
  );
}
