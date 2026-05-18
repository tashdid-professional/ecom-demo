"use client";

import { products } from "@/public/datas/products";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive items per page
  // We'll use 1 for mobile, 2 for tablet, 4 for desktop
  // But for the math, we'll keep it simple and base it on the view
  const itemsPerPage = 4;
  
  // Clone products for loop
  const extendedProducts = [
    ...products.slice(-itemsPerPage),
    ...products,
    ...products.slice(0, itemsPerPage),
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="featured-products" className="w-full py-16 md:py-24 bg-white px-4 md:px-20 relative">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16 space-y-2">
        <h4 className="font-tuesday-night text-2xl md:text-3xl text-[#ecd1cd] lowercase">
          perfect shades
        </h4>
        <h2 className="font-lato text-2xl md:text-3xl tracking-[0.2em] uppercase text-black px-4 md:px-0">
          Featured Products
        </h2>
        <p className="font-cormorant italic text-[#999] text-base md:text-lg">
          At vero eos et accusamus et iusto
        </p>
      </div>

      {/* Products Slider Container */}
      <div className="container mx-auto relative group px-0 md:px-12">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex + itemsPerPage) * (100 / itemsPerPage)}%)`,
              }}
            >
              {extendedProducts.map((product, index) => (
                <div key={`${product.id}-${index}`} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 opacity-40 md:opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-all p-2 z-10"
        >
          <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" strokeWidth={0.5} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 opacity-40 md:opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-all p-2 z-10"
        >
          <ChevronRight className="w-10 h-10 md:w-16 md:h-16" strokeWidth={0.5} />
        </button>
      </div>
    </section>
  );
}
