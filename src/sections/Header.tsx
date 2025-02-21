"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FiPhone from "@/assets/phone-white.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 sticky top-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-white  text-[#004733]" : "bg-[#004733] text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-[60px]">
        {/* Left Section - Logo & Menu */}
        <nav className="flex items-center space-x-8">
          <span className={`font-bold text-2xl hover:cursor-pointer transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
            Better
          </span>
          <ul
            className={`flex space-x-6 font-normal transition-all duration-300 ${
              isScrolled ? "text-[#004733]" : "text-white"
            }`}
          >
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Buy</li>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Refinance</li>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>HELOC</li>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Rates</li>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Better+</li>
          </ul>
        </nav>

        {/* Right Section - Call & Sign In */}
        <div className="flex items-center space-x-4">
          {/* Phone Button */}
          <button
            className={`w-10 h-10 flex items-center justify-center border-2 rounded-full transition-all duration-300 ${
              isScrolled
                ? "border-[#004733] text-[#004733] hover:bg-[#004733] hover:text-white"
                : "border-gray-50 text-white hover:bg-white hover:text-[#004733]"
            }`}
          >
            <Image src={FiPhone} alt="Phone Icon" height={25} />
          </button>

          {/* Sign-in Button */}
          <button
            className={`px-5 py-3 flex items-center justify-center border rounded-full transition-all duration-300 ${
              isScrolled
                ? "border-[#004733] text-[#004733] hover:bg-[#004733] hover:text-white"
                : "border-transparent text-white hover:bg-white hover:text-[#004733]"
            }`}
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
