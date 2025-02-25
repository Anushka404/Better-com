import React from 'react';
import Image from 'next/image';
import Eren from '@/assets/vishal-mission.jpg';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import Link from 'next/link';

import ally from "@/assets/ally.png";
import softBank from "@/assets/soft.png";
import citi from "@/assets/citi.png";
import goldman from "@/assets/goldman.png";
import kpcb from "@/assets/KPCB-logo.webp";
import ping from "@/assets/ping.png";
import AE from "@/assets/american.png";

const AboutPage = () => {
  return (
    <>
    <Header/>
  <section id='about'>
    <div className="bg-[#FAF9F6] text-gray-900">
      {/* Full-Screen Text Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12">
        <div className="max-w-4xl">
          <h2 className="text-green-700 text-lg font-semibold mb-2">Our mission</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">The status quo is broken</h2>
          <p className="text-gray-700 mb-6">
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="bg-green-700 text-white py-3 px-6 rounded-md text-lg font-medium">
            Read Vishal’s story
          </button>
        </div>

        {/* Right Side - Image with Video Button */}
        <div className="md:w-1/2">
          <div className="relative">
            <Link href="https://www.youtube.com/watch?v=1KjYlLBM9j4&t=1s">
            <Image src={Eren} alt="Vishal Garg" className="rounded-lg shadow-md h-80 object-cover w-full" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white p-4 rounded-full shadow-lg">
                <svg className="w-10 h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
            </Link>
          </div>
        </div>
        
      </section>
      <section className="mt-28 mb-20 pb-12 bg-[#00824A] text-white py-12 px-6 md:px-12 flex justify-center">
      <div className="max-w-4xl w-full">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
      How we’re changing things
      </h2>
      <p className="mb-4">
      Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion.
      Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
      </p>
      <p>
      That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more
      efficient, and humans to help make it friendly and enjoyable.
      </p>
      </div>
      </section>

      <section className="sm:py-44 bg-background h-[400px] flex flex-col justify-center items-center py-20">
      <h2 className="text-2xl font-medium text-center mb-10">Backed by</h2>
      <div className="flex flex-wrap justify-center gap-10 px-6 max-w-6xl">
        <div className="flex items-center">
          <Image src={softBank} alt="SoftBank" width={120} height={48} className="object-contain" />
        </div>
        <div className="flex items-center">
          <Image src={ally} alt="Ally" width={80} height={48} className="object-contain" />
        </div>
        <div className="flex items-center">
          <Image src={citi} alt="Citi" width={80} height={48} className="object-contain" />
        </div>
        <div className="flex items-center">
          <Image src={ping} alt="Ping An Bank" width={120} height={48} className="object-contain" />
        </div>
        <div className="flex items-center">
          <Image src={goldman} alt="Goldman Sachs" width={120} height={48} className="object-contain" />
        </div>
        <div className="flex items-center">
          <Image src={kpcb} alt="KPCB" width={120} height={48} className="object-contain" />
        </div>
        <div className="flex items-center">
          <Image src={AE} alt="American Express" width={120} height={48} className="object-contain" />
        </div>
      </div>
    </section>



      <section className="bg-background py-20">
  <h2 className="text-2xl font-medium text-center mb-16">Company Timeline</h2>

  <div className="relative max-w-4xl mx-auto">
    {/* Vertical Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-200 h-full"></div>

    {/* Timeline Items */}
    <div className="relative space-y-16">
      
      {/* 2014 - Left */}
      <div className="flex items-center w-full">
        <div className="w-1/2 pr-8 flex justify-end">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              After Vishal Garg’s first attempt to purchase his own dream home, 
              he realized that the homebuying process is broken. This inspired him to create a 
              tech-first company led by engineers and data experts.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-start">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2014</div>
        </div>
      </div>

      {/* 2015 - Right */}
      <div className="flex items-center w-full">
        <div className="w-1/2 flex justify-end">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2015</div>
        </div>
        <div className="w-1/2 pl-8 flex justify-start">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
            </p>
          </div>
        </div>
      </div>

      {/* 2016 - Left */}
      <div className="flex items-center w-full">
        <div className="w-1/2 pr-8 flex justify-end">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Continued growth and expansion into more states.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-start">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2016</div>
        </div>
      </div>

       {/* 2017 - Right */}
       <div className="flex items-center w-full">
        <div className="w-1/2 flex justify-end">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2017</div>
        </div>
        <div className="w-1/2 pl-8 flex justify-start">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            Better expands into the real estate market with Better Real Estate.
            </p>
          </div>
        </div>
      </div>

      {/* 2018 - Left */}
      <div className="flex items-center w-full">
        <div className="w-1/2 pr-8 flex justify-end">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            Better Mortgage partners with Ally Bank to build Ally powered by Better.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-start">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2018</div>
        </div>
      </div>

      {/* 2019 - Right */}
      <div className="flex items-center w-full">
        <div className="w-1/2 flex justify-end">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2019</div>
        </div>
        <div className="w-1/2 pl-8 flex justify-start">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
            </p>
          </div>
        </div>
      </div>

       {/* 2021 - Left */}
       <div className="flex items-center w-full">
        <div className="w-1/2 pr-8 flex justify-end">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            Better acquires Trussle — The UK’s most innovative online mortgage broker.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-start">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2021</div>
        </div>
      </div>

      {/* 2022 - Right */}
      <div className="flex items-center w-full">
        <div className="w-1/2 flex justify-end">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2022</div>
        </div>
        <div className="w-1/2 pl-8 flex justify-start">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
            </p>
          </div>
        </div>
      </div>

      {/* 2023 - Left */}
      <div className="flex items-center w-full">
        <div className="w-1/2 pr-8 flex justify-end">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-start">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">2023</div>
        </div>
      </div>
      {/* Right */}
       <div className="flex items-center w-full">
        <div className="w-1/2 flex justify-end">
          
        </div>
        <div className="w-1/2 pl-8 flex justify-start">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            Better Mortgage launches the fully digital 3-day HELOC².
            </p>
          </div>
        </div>
      </div>
      {/* Left */}
      <div className="flex items-center w-full">
        <div className="w-1/2 pr-8 flex justify-end">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            Better Mortgage launches One Day Verified Approval Letter.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-start">  
        </div>
      </div>

      {/* Today */}
      <div className="flex items-center w-full">
        <div className="w-1/2 flex justify-end">
          <div className="bg-green-700 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">Today</div>
        </div>
        <div className="w-1/2 pl-8 flex justify-start">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
            You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
            </p>
            <Link href={"/start"}>
            <button className="mt-3 bg-green-700 text-white  px-5 py-2 font-medium  rounded-xl text-lg
             shadow-lg hover:bg-green-600 transition-all duration-300
            ">
              Get Started
            </button>
          </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>





    </div>
    <Footer/>
    </section>
    </>
  );
};

export default AboutPage;
