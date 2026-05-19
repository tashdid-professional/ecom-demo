"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            <span className="font-tuesday-night text-4xl md:text-5xl text-[#d4b1a4] block mb-2 opacity-60">
              perfect shades
            </span>
            <h1 className="text-2xl md:text-3xl tracking-[0.08em]  uppercase mb-3 md:mb-1">
              ASK US ANYTHING
            </h1>
            <p className="text-[#8c8888] italic font-cormorant text-lg md:text-[22px] max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui <br className="hidden md:block" />
              blanditiis praesentium voluptatum deleniti atque.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-3 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1]"
              />
              <input
                type="email"
                placeholder="E-mail address"
                className="w-full px-6 py-3 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Telephone"
                className="w-full px-6 py-3 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1]"
              />
              <input
                type="url"
                placeholder="Website"
                className="w-full px-6 py-3 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1]"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-6 py-4 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1] resize-none"
            ></textarea>

            <div className=" flex justify-center">
              <button
                type="submit"
                className="bg-black text-white text-[12px] tracking-[0.08em] font-light py-5 px-12 hover:bg-[#d4b1a4] transition-colors duration-300 uppercase"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
