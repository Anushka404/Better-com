import React from "react";
import Phone from "@/assets/hold-phone.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-accentPrimary min-h-screen flex items-center justify-center text-center px-6 bg-cover bg-center bg-no-repeat w-full relative"
      style={{
        backgroundImage: `url(${Phone.src})`,
        backgroundSize: "auto 90%",
        backgroundPosition: "center bottom -90px", 
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center px-6 md:px-12 w-full">
    <h1 className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-green-400 leading-tight">
    Mortgages <br className="hidden sm:block" /> made simple
  </h1>
    </div>

      <div className="lg:mr-[600px] mt-36">
        <div className="py-4 mt-8 flex justify-center">
          <Link href={"/start"}>
            <button className="bg-green-400 text-black font-medium px-10 py-5 rounded-full text-xl
             shadow-lg hover:bg-green-500 transition-all duration-300
            ">
              Start my approval
            </button>
          </Link>
        </div>
        <p className="text-gray-200 text-base flex items-center justify-center gap-2">
          🕒 3 min | No credit impact
        </p>
      </div>

      <div className="absolute right-80 bottom-64 lg:bottom-52 hidden lg:flex flex-col items-end">
  <div className="py-4 ">
    <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
    <p className="text-gray-200 text-base flex items-center justify-center gap-2">4.6 Stars | 3177 Google reviews</p>
  </div>
</div>


    </section>
  );
};

export default Hero;
