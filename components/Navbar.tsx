"use client";

import { useEffect, useState } from "react";
import { Search, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // For now, redirect to a search page or shop with query
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Past banner usually means the height of the banner + initial navbar
      // Since the banner is likely 100vh or a large fixed height, 
      // we increase this to ensure the banner is fully cleared.
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Past banner usually means more than 100px-200px scroll
  const isHomePage = pathname === "/";
  return (
    <>
      {/* Static White Navbar above Banner */}
      {!isScrolled && (
        <header className="w-full bg-white relative z-40">
          <div className="hidden md:flex bg-black text-white text-[11px] px-6 py-2 justify-between items-center uppercase tracking-widest font-cormorant">
            <div className="  tracking-normal">
              biagiotti@qodeinteractive.com
            </div>
            <div className="hidden md:block">
              Free shipping on international orders of $150+
            </div>
            <div className="flex items-center gap-2">
                Log In 
            </div>
          </div>

          <nav className="px-6 flex items-center relative border-b border-gray-100 h-[70px] md:h-[90px]">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="absolute inset-0 bg-white z-50 flex items-center px-6 md:px-10">
                <input
                  autoFocus
                  type="text"
                  placeholder="Search..."
                  className="w-full text-lg md:text-xl font-cormorant outline-none border-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" onClick={() => setIsSearchOpen(false)} className="ml-4 text-black">
                  <X size={26} strokeWidth={1} />
                </button>
              </form>
            ) : (
              <>
                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1"></div>
                <div className="hidden lg:flex items-center space-x-12 uppercase text-[11px] tracking-[0.2em] font-lato absolute left-1/2 -translate-x-1/2 text-black">
                  <Link href="/" className={`relative py-1 border-b transition-all duration-300 ${pathname === "/" ? "border-black" : "border-transparent"} hover:border-black`}>Home</Link>
                  <Link href="/shop" className={`relative py-1 border-b transition-all duration-300 ${pathname === "/shop" ? "border-black" : "border-transparent"} hover:border-black`}>Shop</Link>
                  <Link href="/" className="px-10">
                    <img src="/Images/logo.png" alt="Biagiotti Logo" className="h-10 w-auto" />
                  </Link>
                  <Link href="/contact" className={`relative py-1 border-b transition-all duration-300 ${pathname === "/contact" ? "border-black" : "border-transparent"} hover:border-black`}>Contact</Link>
                  <Link href="/about" className={`relative py-1 border-b transition-all duration-300 ${pathname === "/about" ? "border-black" : "border-transparent"} hover:border-black`}>About</Link>
                </div>

                {/* Mobile & Tablet Layout */}
                <div className="flex lg:hidden items-center justify-between w-full">
                  <Link href="/">
                    <img src="/Images/logo.png" alt="Biagiotti Logo" className="h-8 w-auto" />
                  </Link>
                  <button onClick={() => setIsSideMenuOpen(true)} className="text-black">
                    <Menu size={26} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Desktop Icons */}
                <div className="hidden lg:flex items-center gap-6 ml-auto relative z-10 text-black">
                  <button onClick={() => setIsSearchOpen(true)}><Search size={22} strokeWidth={1.5} /></button>
                  <button onClick={() => setIsSideMenuOpen(true)}>
                    <Menu size={26} strokeWidth={1.5} />
                  </button>
                </div>
              </>
            )}
          </nav>
        </header>
      )}

      {/* Sticky Black Navbar for Scroll */}
      <header className={`w-full fixed top-0 z-50 transition-all duration-500 bg-black  ${
        isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}>
        <nav className="px-6 flex items-center relative transition-all duration-500 h-[60px] md:h-[50px]">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="absolute inset-0 bg-white z-50 flex items-center px-6 md:px-10">
              <input
                autoFocus
                type="text"
                placeholder="SEARCH PRODUCTS..."
                className="w-full text-xl md:text-2xl font-lato uppercase tracking-[0.2em] outline-none border-none text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" onClick={() => setIsSearchOpen(false)} className="ml-4 text-black">
                <X size={26} strokeWidth={1} />
              </button>
            </form>
          ) : (
            <>
              {/* Desktop Sticky Menu */}
              <div className="hidden lg:flex flex-1"></div>
              <div className="hidden lg:flex items-center space-x-12 uppercase text-[11px] tracking-[0.2em] font-lato absolute left-1/2 -translate-x-1/2 text-white">
                <Link href="/" className={`relative py-1 border-b transition-all duration-300 ${pathname === "/" ? "border-white" : "border-transparent"} hover:border-white`}>Home</Link>
                <Link href="/shop" className={`relative py-1 border-b transition-all duration-300 ${pathname === "/shop" ? "border-white" : "border-transparent"} hover:border-white`}>Shop</Link>
                <Link href="/" className="px-10">
                  <img src="/Images/logo.png" alt="Biagiotti Logo" className="h-8 w-auto invert" />
                </Link>
                <Link href="/contact" className={`relative py-1 border-b transition-all duration-300 ${pathname === "/contact" ? "border-white" : "border-transparent"} hover:border-white`}>Contact</Link>
                <Link href="/about" className={`relative py-1 border-b transition-all duration-300 ${pathname === "/about" ? "border-white" : "border-transparent"} hover:border-white`}>About</Link>
              </div>

              {/* Mobile Sticky Layout */}
              <div className="flex lg:hidden items-center justify-between w-full">
                <Link href="/">
                  <img src="/Images/logo.png" alt="Biagiotti Logo" className="h-7 w-auto invert" />
                </Link>
                <button onClick={() => setIsSideMenuOpen(true)} className="text-white">
                  <Menu size={26} strokeWidth={1.5} />
                </button>
              </div>
            </>
          )}
        </nav>
      </header>

      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </>
  );
}
