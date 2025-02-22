"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FiPhone from "@/assets/call.png";
import greenPhone from "@/assets/call-green.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

   
    if (pathname === "/about") {
      setIsScrolled(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); 

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
            <Link href={"/"}>Better</Link>
            
          </span>
          <ul
            className={`flex space-x-6 font-normal transition-all duration-300 ${
              isScrolled ? "text-[#004733]" : "text-white"
            }`}
          >
            <Link href={"/start"}>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Buy</li></Link>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Refinance</li>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>HELOC</li>
            <Link href={"/mortgageCalc"}>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Rates</li></Link>
            <Link href={"/About"}>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>About Us</li>
            </Link>
          </ul>
        </nav>

        {/* Call & Sign In */}
        <div className="flex items-center space-x-4">
          {/* Phone Button */}
          <button
            className={`w-11 h-11 flex items-center justify-center border-2 rounded-full transition-all duration-300 ${
              isScrolled
                ? "border-[#004733] text-[#004733] hover:bg-[#bad3cc] hover:text-white"
                : "border-gray-50 text-white hover:bg-gray-500 hover:text-[#004733]"
            }`}
          >
            <Image
              src={isScrolled ? greenPhone : FiPhone}
              alt="Phone Icon"
              height={25}
              width={25} 
  />
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
