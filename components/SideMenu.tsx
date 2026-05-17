"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { socialLinks } from "@/public/datas/homepage";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTok = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.01.23 2.08.94 2.79.68.68 1.61 1.07 2.56 1.1 1-.03 1.97-.45 2.62-1.2.73-.78 1.15-1.84 1.17-2.91-.03-5.22-.05-10.43.01-15.65z" />
  </svg>
);

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-700 ease-in-out ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-transparent transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Content Container */}
      <div className="flex h-full w-full justify-end relative">
        {/* Right Menu Section */}
        <div className={`w-full md:w-[450px] bg-white text-black h-full relative transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <button
            onClick={onClose}
            className="absolute top-10 right-10 hover:rotate-90 transition-transform duration-300 z-[110]"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="flex flex-col items-center justify-center h-full px-12 text-center">
            {/* Logo */}
            <div className={`mb-12 transition-all duration-700 delay-200 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <img src="/Images/logo.png" alt="Biagiotti" className="h-16 w-auto" />
            </div>

            {/* Collections / Navigation */}
            <div className={`space-y-6 transition-all duration-700 delay-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="space-y-6">
                <Link href="/" onClick={onClose} className="block font-cormorant italic text-[32px] md:text-[40px] hover:text-gray-400 transition-colors">Home</Link>
                <Link href="/shop" onClick={onClose} className="block font-cormorant italic text-[32px] md:text-[40px] hover:text-gray-400 transition-colors">Shop</Link>
                <Link href="/contact" onClick={onClose} className="block font-cormorant italic text-[32px] md:text-[40px] hover:text-gray-400 transition-colors">Contact</Link>
                <Link href="/about" onClick={onClose} className="block font-cormorant italic text-[32px] md:text-[40px] hover:text-gray-400 transition-colors">About</Link>
              </div>
            </div>

            {/* Socials - Optional, kept but styled for white background */}
            <div className={`flex gap-6 mt-16 transition-all duration-700 delay-400 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Link href={socialLinks.facebook} target="_blank" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                <Facebook size={16} />
              </Link>
              <Link href={socialLinks.instagram} target="_blank" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                <Instagram size={16} />
              </Link>
              <Link href={socialLinks.tiktok} target="_blank" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                <TikTok size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
