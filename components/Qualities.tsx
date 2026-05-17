"use client";

import React from "react";
import Image from "next/image";
import { Quality } from "@/public/datas/homepage";

interface QualitiesProps {
  data: Quality[];
}

const Qualities: React.FC<QualitiesProps> = ({ data }) => {
  return (
    <section className="py-24 bg-[#fffaf9]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              {/* Icon with pinkish blur background as seen in design */}
              <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#fde9e4] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-16 h-16">
                   <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              <h3 className="text-sm tracking-[0.25em] font-medium text-[#111111] mb-4 uppercase">
                {item.title}
              </h3>
              
              <p className="text-[#a1a1a1] italic font-cormorant text-[15px] leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;
