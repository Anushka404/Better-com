
import React from 'react'

const Hero = () => {
  return (
    <>
<section id='hero' className="bg-accentPrimary min-h-screen flex items-center justify-center text-center px-6">
  <div className="max-w-screen-2xl">
    <h1 className="text-5xl md:text-7xl font-bold text-green-300">
      Mortgages <br /> made simple
    </h1>
    <div className="mt-6 flex justify-center">
      <button className="bg-green-400 text-black font-medium px-6 py-3 rounded-full text-lg shadow-lg">
        Start my approval
      </button>
    </div>
    <p className="mt-4 text-gray-200 text-sm">
      ⏳ 3 min | No credit impact
    </p>
  </div>
</section>
    </>
  )
}

export default Hero