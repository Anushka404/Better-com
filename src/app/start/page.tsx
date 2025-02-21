import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import React from 'react'
import { FaHome, FaDollarSign } from "react-icons/fa";

const page = () => {
  return (
    <>
    <Header />
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
        
        <h1 className="mt-10 text-4xl text-center
            font-bold text-black lg:max-w-lg">
               Hi, I'm Betsy! <br/>
               What can I help you with?       
            </h1>
        {/* Buttons */}
        <div className=" space-y-4 w-full max-w-md">
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
          <h3 className="text-4xl font-semibold">$100B</h3>
          <p className="text-gray-600 py-2">home loans funded entirely online</p>
        </div>
        <div>
          <h3 className="text-4xl font-semibold">400K</h3>
          <p className="text-gray-600 py-2">Customers who chose a Better Mortgage</p>
        </div>
      </div>
              
           
      </div>
    </section>    
    <Footer />
    </>
  )
}

export default page