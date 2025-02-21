import React from 'react';
import Image from 'next/image';
import Eren from '@/assets/Eren.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-gray-900 px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-green-700 text-lg font-semibold mb-2">Our mission</h2>
        <h1 className="text-4xl font-bold mb-4">
          We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
        </h1>
      </div>
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">The status quo is broken</h2>
          <p className="text-gray-700 mb-6">
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="bg-green-700 text-white py-3 px-6 rounded-md text-lg font-medium">Read Vishal’s story</button>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <Image src={Eren} alt="Vishal Garg" className="rounded-lg shadow-md" />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white p-4 rounded-full shadow-lg">
                <svg className="w-10 h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

