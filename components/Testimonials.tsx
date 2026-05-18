"use client";

import { testimonials } from "@/public/datas/homepage";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="relative bg-[#fdf0ee] py-16 md:py-24 overflow-hidden min-h-[450px] md:min-h-[400px] flex items-center">
      {/* Background Floating Petals (Symbolic) */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#700d33] rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#700d33] rounded-full blur-3xl opacity-10 pointer-events-none" />
      
      {/* Background Large Script Text */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none select-none hidden md:block">
        <h2 className="font-tuesday-night text-[180px] text-white leading-none translate-y-1/4 translate-x-10 transform -rotate-6">
          You said about us
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        {/* Header */}
        <div className="relative inline-block mb-8 md:mb-12">
          <h4 className="font-tuesday-night text-3xl md:text-4xl text-[#ecd1cd] absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
            perfect shades
          </h4>
          <h2 className="font-lato text-2xl md:text-3xl tracking-[0.2em] uppercase text-black mt-1">
            Testimonials
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative group flex items-start justify-center">
          <div className="max-w-4xl mx-auto w-full relative min-h-[250px] md:min-h-[200px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="w-full px-4 md:px-0"
              >
                <p className="font-cormorant italic text-[#444343] text-[18px] md:text-[22px] lg:text-[25px] leading-relaxed mb-6 md:mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                <p className="font-cormorant text-[#6e6e6e] text-xs md:text-sm tracking-widest uppercase">
                  - {testimonials[currentIndex].author} -
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors"
          >
            <ChevronLeft className="w-8 h-8 md:w-9 md:h-9" strokeWidth={1} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors"
          >
            <ChevronRight className="w-8 h-8 md:w-9 md:h-9" strokeWidth={1} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all border border-black ${
                currentIndex === i ? "bg-black" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
