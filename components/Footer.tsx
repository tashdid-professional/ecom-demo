"use client";

import Link from "next/link";
import { socialLinks } from "@/public/datas/homepage";

const Facebook = ({ size = 16, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTok = ({ size = 16, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Instagram = ({ size = 16, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Pinterest = ({ size = 16, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 20c.3-1.6.6-3.1.9-4.7C8.1 14.2 7.5 12.8 7.5 11.2c0-2.6 1.5-4.5 3.3-4.5 1.6 0 2.3 1.2 2.3 2.6 0 1.6-1 3.9-1.5 6.1-.4 1.8.9 3.3 2.6 3.3 3.1 0 5.6-3.3 5.6-8.1 0-4.2-3-7.2-7.4-7.2-4.8 0-7.6 3.6-7.6 7.3 0 1.5.6 3 1.3 3.9.1.2.2.3.1.5-.1.5-.4 1.6-.4 1.8-.1.2-.2.3-.4.2-2.1-.9-3.4-3.9-3.4-6.3 0-5.1 3.7-9.8 10.7-9.8 5.6 0 10 4 10 9.3 0 5.6-3.5 10.1-8.4 10.1-1.6 0-3.2-.8-3.7-1.8 0 0-.9 3.4-1.1 4.1-.4 1.5-1.4 3.3-2.1 4.1L8 20z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className=" w-full bg-black text-white pt-16 md:pt-24 pb-12 relative">
      <div className="container mx-auto px-6 lg:px-24">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center">
        {/* Contact Column */}
        <div className="space-y-6 md:text-left">
          <h4 className="uppercase text-[17px] font-lato tracking-[0.08em] mb-4 md:mb-8 ">Contact</h4>
          <div className="font-cormorant italic text-[#999] text-[17px] space-y-1">
            <p>Address: Seestrasse 21, Zurich</p>
            <p>E-mail: biagiotti@qodeinteractive.com</p>
            <p>Phone : + 99 411 725 39 12</p>
          </div>
          <div className="flex justify-center md:justify-start gap-2 pt-4">
             {/* Payment Icons Placeholder */}
             <div className="flex gap-2 opacity-80 border border-white/10 p-1 px-2">
                <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
             </div>
          </div>
        </div>

        {/* Logo/Center Column */}
        <div className="flex flex-col items-center space-y-8">
          <Link href="/">
            <img src="/Images/logo.png" alt="Biagiotti Logo" className="h-16 w-auto invert" />
          </Link>
          <p className="font-cormorant italic text-[#999] text-[18px] text-center leading-relaxed">
            An oasis of online beauty built specifically so your 
            new cosmetics site can take everyone&apos;s breaths away.
          </p>
          <div className="flex gap-4">
            <Link href={socialLinks.facebook} target="_blank" className="border border-white/20 p-3 hover:border-white transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </Link>
            <Link href={socialLinks.tiktok} target="_blank" className="border border-white/20 p-3 hover:border-white transition-colors">
              <TikTok size={16} strokeWidth={1.5} />
            </Link>
            <Link href={socialLinks.instagram} target="_blank" className="border border-white/20 p-3 hover:border-white transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Collections/Links Column */}
        <div className="md:text-right flex flex-col items-center md:items-end gap-3">
          <Link href="/" className="uppercase text-[17px] font-lato tracking-[0.08em] hover:text-[#d4b1a4] transition-colors">HOME</Link>
          <Link href="/shop" className="uppercase text-[17px] font-lato tracking-[0.08em] hover:text-[#d4b1a4] transition-colors">SHOP</Link>
          <Link href="/about" className="uppercase text-[17px] font-lato tracking-[0.08em] hover:text-[#d4b1a4] transition-colors">ABOUT</Link>
          <Link href="/contact" className="uppercase text-[17px] font-lato tracking-[0.08em] hover:text-[#d4b1a4] transition-colors">CONTACT</Link>
          <Link href="/blog" className="uppercase text-[17px] font-lato tracking-[0.08em] hover:text-[#d4b1a4] transition-colors">BLOG</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 md:mt-24 border-t border-white/10 pt-6 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 uppercase text-[12px] font-lato tracking-[0.08em]">
          <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">Terms and Conditions</Link>
          <Link href="#" className="hover:text-gray-400 transition-colors">FAQ</Link>
        </div>
        <p className="text-[11px] font-lato tracking-[0.08em] text-[#666] uppercase">
          © Pozo Beauty 2026 | Powered by <Link href="https://thebigdogdigital.com/" target="_blank" className="font-extrabold text-[#888] hover:text-white transition-colors">BigDogDigital</Link>
        </p>
      </div>

      </div>
    </footer>
  );
}
