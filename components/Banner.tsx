"use client";

import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { bannerSlides } from "@/public/datas/homepage";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 4 seconds timer
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
    },
  };

  const textVariants = {
    enter: {
      opacity: 0,
      x: 30,
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -30,
    },
  };

  const slide = bannerSlides[currentIndex];

  return (
    <section className="relative w-full h-[440px] md:h-[600px] overflow-hidden flex items-center justify-center bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            if (swipe < -50) {
              nextSlide();
            } else if (swipe > 50) {
              prevSlide();
            }
          }}
          transition={{
            opacity: { duration: 0.5, ease: "easeInOut" },
          }}
          className="absolute inset-0 touch-pan-y"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover pointer-events-none"
              priority
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/5" />
          </div>

          <div className="container mx-auto px-6 md:px-24 h-full relative flex items-center z-20 pointer-events-none">
            {/* Content Container */}
            <motion.div 
              className="w-full md:w-3/5 text-center md:text-left pointer-events-auto"
              variants={textVariants}
              transition={{
                x: { duration: 0.5, ease: "easeOut" },
                opacity: { duration: 0.3 },
              }}
            >
              <h3 className="text-3xl md:text-5xl font-tuesday-night text-white md:text-black mb-4 md:-mt-10 md:-mb-1 mt-6">
                {slide.subtitle}
              </h3>
              <h2 className="text-4xl md:text-[70px] font-lato font-light uppercase tracking-[0.08em] leading-[1.1] md:leading-[0.9] text-white md:text-black mb-6 md:mb-8 md:whitespace-nowrap">
                {slide.title}
              </h2>
              <p className="font-cormorant italic text-base md:text-[22px] text-white md:text-gray-800  max-w-lg mb-8 md:mb-10 mx-auto md:mx-0 leading-[27px]">
                {slide.description}
              </p>
              <a 
                href={slide.buttonLink}
                className="inline-block bg-white md:bg-black text-black md:text-white px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-[11px] font-lato uppercase tracking-[0.08em] hover:bg-black md:hover:bg-white hover:text-white md:hover:text-black border border-white md:border-black transition-all duration-300"
              >
                View More
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 group transition-all z-20">
        <ChevronLeft className="w-8 h-8 font-thin group-hover:-translate-x-1 transition-transform" strokeWidth={1} />
        <span className="font-cormorant italic text-sm opacity-60">Prev</span>
      </button>

      <button onClick={nextSlide} className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 group transition-all z-20">
        <span className="font-cormorant italic text-sm opacity-60">Next</span>
        <ChevronRight className="w-8 h-8 font-thin group-hover:translate-x-1 transition-transform" strokeWidth={1} />
      </button>

     
    </section>
  );
}
