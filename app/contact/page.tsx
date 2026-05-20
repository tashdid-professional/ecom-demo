"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", website: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { placeholder, value } = e.target;
    // Mapping placeholder to state keys
    const keyMap: { [key: string]: string } = {
      "Full Name": "name",
      "E-mail address": "email",
      "Telephone": "phone",
      "Website": "website",
      "Message": "message"
    };
    const key = keyMap[placeholder];
    if (key) {
      setFormData(prev => ({ ...prev, [key]: value }));
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1]"
              />
              <input
                type="email"
                placeholder="E-mail address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Telephone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1]"
              />
              <input
                type="url"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1]"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border border-gray-300 focus:border-[#d4b1a4] outline-none text-[#a1a1a1] italic font-cormorant text-lg transition-colors placeholder:text-[#a1a1a1] resize-none"
            ></textarea>

            <div className=" flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-black text-white text-[12px] tracking-[0.08em] font-light py-5 px-12 hover:bg-[#d4b1a4] transition-colors duration-300 uppercase disabled:opacity-50"
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </button>
              
              {status === "success" && (
                <p className="text-green-600 font-cormorant italic">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-cormorant italic">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
