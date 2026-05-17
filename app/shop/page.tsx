"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/public/datas/products";
import { shopHeader } from "@/public/datas/homepage";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Dynamically extract categories from product data
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...uniqueCategories.sort()];
  }, []);

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    const filtered = activeCategory === "All" 
      ? products 
      : products.filter((p) => p.category === activeCategory);
    
    // Reset to page 1 when category changes
    return filtered;
  }, [activeCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header (Banner Style) */}
      <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden  bg-[#f9f9f9] flex items-center justify-center">
        <Image
          src={shopHeader.image}
          alt="Shop Banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-[#1a1a1a] uppercase mb-4">
            Shop
          </h1>
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-[11px] tracking-[0.3em] font-medium uppercase text-[#666]">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Shop</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar - Categories */}
          <aside className="w-full md:w-1/4">
            <div className="sticky top-24">
              <h2 className="text-xl tracking-[0.15em] text-[#1a1a1a] uppercase mb-6 md:mb-10 pb-4 border-b border-[#eee]">
                Categories
              </h2>
              {/* Desktop Categories List */}
              <ul className="hidden md:flex flex-col gap-y-4">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`text-[12px] tracking-[0.1em] uppercase transition-colors duration-300 flex justify-between w-full group ${
                        activeCategory === category
                          ? "text-[#d4b1a4]"
                          : "text-[#777] hover:text-[#1a1a1a]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          activeCategory === category ? "bg-[#d4b1a4] scale-100" : "bg-transparent scale-0"
                        }`} />
                        {category}
                      </span>
                      <span className={`text-[10px] ${
                        activeCategory === category ? "text-[#d4b1a4]" : "text-[#ccc]"
                      }`}>
                        ({category === "All" ? products.length : products.filter(p => p.category === category).length})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mobile Wrap Categories */}
              <div className="md:hidden flex flex-wrap gap-2 pb-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-[10px] tracking-[0.1em] uppercase transition-all duration-300 border ${
                      activeCategory === category
                        ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-sm"
                        : "bg-white text-[#777] border-[#eee] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                    }`}
                  >
                    {category}
                    <span className="ml-1.5 opacity-50 text-[8px]">
                      ({category === "All" ? products.length : products.filter(p => p.category === category).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            {/* Sorting/Info bar */}
            <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#eee]">
              <p className="text-xs uppercase tracking-widest text-[#a1a1a1]">
                Showing <span className="text-[#1a1a1a]">{(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredProducts.length)}</span> of <span className="text-[#1a1a1a]">{filteredProducts.length}</span> results
              </p>
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center items-center gap-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 border border-[#eee] flex items-center justify-center text-xs tracking-widest transition-all ${
                    currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                >
                  PREV
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 border flex items-center justify-center text-xs transition-all ${
                        currentPage === page
                          ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                          : "border-[#eee] text-[#777] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                      }`}
                    >
                      {String(page).padStart(2, '0')}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 border border-[#eee] flex items-center justify-center text-xs tracking-widest transition-all ${
                    currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                >
                  NEXT
                </button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-[#a1a1a1] italic tracking-widest">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
