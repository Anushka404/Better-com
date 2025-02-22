import Footer from '@/sections/Footer'
import React from 'react'
import { FaHome, FaDollarSign, FaPhone } from "react-icons/fa";
import Image from "next/image";
import profile from "@/assets/profile.jpg";

const page = () => {
  return (
    <>
       <header className="sticky top-0 flex flex-col items-center px-8 lg:px-20 bg-white text-[#004733] pb-6">
      
      <div className="w-full flex justify-between items-center py-4">
        
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-green-800">Better</span>
          <span className="text-sm text-gray-600">Mortgage</span>
        </div>

        
        <div className="flex items-center gap-2 hover:cursor-pointer">
          <FaPhone className="text-green-600 text-lg" />
          <span className="text-sm font-medium">Need help? Call (415) 523 8837</span>
        </div>
      </div>

      {/* Bottom Line with Image */}
      <div className="relative w-full">
        {/* Single Line */}
        <div className="border-t border-gray-300 absolute w-full top-1/2"></div>

        
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
          <Image
            src={profile} 
            alt="Agent"
            width={48}
            height={48}
            className="rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    </header>
      {/* Main Section */}
      <section className="flex justify-between items-center max-lg:flex-col gap-10 py-7 w-full max-container">
        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <h1 className="mt-10 text-4xl text-center font-bold text-black lg:max-w-lg">
            Hi, I'm Betsy! <br />
            What can I help you with?
          </h1>

          {/* Buttons */}
          <div className="space-y-4 w-full max-w-md">
            <button className="w-full flex items-center gap-4 border-2 border-black rounded-xl py-3 px-6 text-lg font-medium transition-all duration-100 hover:border-green-800 hover:outline hover:outline-3 hover:outline-green-800 hover:text-green-800">
              <FaHome className="text-green-600 text-2xl" />
              Buying a home
            </button>

            <button className="w-full flex items-center gap-4 border-2 border-black rounded-xl py-3 px-6 text-lg font-medium transition-all duration-100 hover:border-green-800 hover:outline hover:outline-3 hover:outline-green-800 hover:text-green-800">
              <FaHome className="text-green-600 text-2xl" />
              Refinance my mortgage
            </button>

            <button className="w-full flex items-center gap-4 border-2 border-black rounded-xl py-3 px-6 text-lg font-medium transition-all duration-100 hover:border-green-800 hover:outline hover:outline-3 hover:outline-green-800 hover:text-green-800">
              <FaDollarSign className="text-green-600 text-2xl" />
              Get cash from my home
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">$100B</h3>
              <p className="text-gray-600 py-2">home loans funded entirely online</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">400K</h3>
              <p className="text-gray-600 py-2">Customers who chose a Better Mortgage</p>
            </div>
          </div>
        </div>
      </section>    

      <Footer />
    </>
  )
}

export default page;
