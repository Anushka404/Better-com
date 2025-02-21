"use client"
import React from "react";
import Image from "next/image";
import FiPhone  from "@/assets/phone-white.png"; 

const Header = () => {
  return (
    <header className="bg-[#004733] py-4 sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center px-[60px]">
        {/* Left Section - Logo & Menu */}
        <nav className="flex items-center space-x-8">
          <span className="text-white font-bold text-2xl hover:cursor-pointer">Better</span>
          <ul className="flex space-x-6 text-white font-normal">
            <li className="btn-theme hover:cursor-pointer">Buy</li>
            <li className="btn-theme">Refinance</li>
            <li className="btn-theme">HELOC</li>
            <li className="btn-theme">Rates</li>
            <li className="btn-theme">Better+</li>
          </ul>
        </nav>

        {/* Right Section - Call & Sign In */}
        <div className="flex items-center space-x-4">
          {/* Phone Button */}
          <button className="w-10 h-10 flex items-center justify-center border-2 border-gray-50 rounded-full text-white hover:bg-white hover:text-[#004733] transition">
            <Image src={FiPhone} alt="Phone Icon" height={25}/>
          </button>

          {/* Sign-in Button */}
          <button className="px-5 py-3 flex items-center justify-center border border-transparent hover:border-gray-50 rounded-full text-white hover:bg-white hover:text-[#004733] transition duration-300">
            Sign in
        </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
