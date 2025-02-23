"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import FiPhone from "@/assets/call.png";
import greenPhone from "@/assets/call-green.png";
import MenuIcon from "@/assets/menu.svg";
import MenuWi from "@/assets/menu-white.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    if (pathname === "/about") setIsScrolled(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className={`py-4 sticky top-0 z-30 transition-all duration-300 ${isScrolled ? "bg-white text-[#004733]" : "bg-[#004733] text-white"}`}>
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <nav className="flex items-center space-x-8">
          <span className={`font-bold text-2xl hover:cursor-pointer transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}>
            <Link href={"/"}>Better</Link>
          </span>
          <ul className={`hidden md:flex space-x-6 font-normal transition-all duration-300 ${isScrolled ? "text-[#004733]" : "text-white"}`}>
            <Link href={"/start"}>
              <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Buy</li>
            </Link>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Refinance</li>
            <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>HELOC</li>
            <Link href={"/mortgageCalc"}>
              <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>Mortgage Calculator</li>
            </Link>
            <Link href={"/About"}>
              <li className={`btn-theme hover:cursor-pointer ${isScrolled ? "text-[#004733]" : "text-white"}`}>About Us</li>
            </Link>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <Image src={isScrolled ? MenuIcon : MenuWi} alt="Menu Icon" width={24} height={24} />
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden">
            <Link href="/start" className="block text-black" onClick={() => setIsMenuOpen(false)}>Buy</Link>
            <Link href="#" className="block text-black" onClick={() => setIsMenuOpen(false)}>Refinance</Link>
            <Link href="#" className="block text-black" onClick={() => setIsMenuOpen(false)}>HELOC</Link>
            <Link href="/mortgageCalc" className="block text-black" onClick={() => setIsMenuOpen(false)}>Mortgage Calculator</Link>
            <Link href="/About" className="block text-black" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </div>
        )}

        {/* Call & Sign In */}
        <div className="flex items-center space-x-4">
          <button className={`w-11 h-11 flex items-center justify-center border-2 rounded-full transition-all duration-300 ${isScrolled ? "border-[#004733] text-[#004733] hover:bg-[#bad3cc]" : "border-gray-50 text-white hover:bg-gray-500"}`}>
            <Image src={isScrolled ? greenPhone : FiPhone} alt="Phone Icon" height={25} width={25} />
          </button>
          <button className={`px-5 py-3 border rounded-full transition-all duration-300 ${isScrolled ? "border-[#004733] text-[#004733] hover:bg-[#004733] hover:text-white" : "border-transparent text-white hover:bg-white hover:text-[#004733]"}`}>
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
