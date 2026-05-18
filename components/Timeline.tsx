"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TimelineData } from "@/public/datas/homepage";

interface TimelineProps {
  data: TimelineData[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <section className="overflow-hidden">
      <div className="container-fluid mx-auto">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-stretch ${
              item.isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Side */}
            <div className={`w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center bg-white relative ${item.isReversed ? 'md:pl-32' : 'md:pr-32'}`}>
              <div className="max-w-md mx-auto xl:mx-0">
                <h4 className="font-tuesday-night text-3xl text-[#acaaaa] lowercase mb-2">
                  {item.subtitle}
                </h4>
                <h2 className="font-lato text-2xl md:text-3xl tracking-[0.2em] uppercase text-black mb-2 leading-tight md:whitespace-nowrap">
                  {item.title}
                </h2>
                <div className="mb-2">
                   <p className="text-[#474747] italic font-cormorant text-xl leading-relaxed">
                    {item.description1}
                  </p>
                </div>
                <div className="mb-10">
                  <p className="text-[#808080] font-light text-[17px] leading-loose text-justify font-cormorant">
                    {item.description2}
                  </p>
                </div>
                <Link 
                  href={item.buttonLink}
                  className="inline-block border border-[#1a1a1a] px-10 py-4 text-[11px] tracking-[0.3em] font-medium hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 uppercase"
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 relative h-[400px] sm:h-[500px] md:min-h-[600px] overflow-hidden">
              {item.sideImage ? (
                <div className="relative w-full h-full group">
                   <Image
                    src={item.sideImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
