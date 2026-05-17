import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/public/datas/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group/card cursor-pointer text-center block">
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#fcf9f9] flex items-center justify-center mb-6 overflow-hidden">
        {product.badge && (
          <span className="absolute top-0 right-0 bg-[#f8e4e1] px-6 py-1 text-[11px] font-cormorant italic tracking-widest z-10">
            {product.badge}
          </span>
        )}
        
        {/* Product Image */}
        <div className="relative w-full h-full transition-transform duration-500 group-hover/card:scale-105">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="font-lato text-[17px] tracking-[0.2em] uppercase text-black">
          {product.name}
        </h3>
        <p className="font-cormorant italic text-[#999] text-[15px]">
          {product.category}
        </p>
        <div className="flex justify-center items-center gap-2 pt-1">
          {product.oldPrice && (
            <span className="font-cormorant text-[#999] line-through text-[24px]">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="font-cormorant text-black text-[24px]">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
