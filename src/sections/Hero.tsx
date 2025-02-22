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
        backgroundPosition: "center bottom -50px", 
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="max-w-screen-lg absolute top-1/4 transform -translate-y-1/4">
        <h1 className="text-7xl md:text-7xl font-bold text-green-400 leading-tight">
          Mortgages <br /> made simple
        </h1>
        
      </div>
      <div className="mr-[600px]">
      <div className="py-4 mt-6 flex justify-center">
          <Link href={"/start"}>
          <button className="bg-green-400 text-black font-medium px-8 py-4 rounded-full text-lg shadow-lg
          hover:bg-green-500 transition-all duration-300">
            Start my approval
          </button></Link>
        </div>
        <p className="mt-4 text-gray-200 text-sm flex items-center justify-center gap-2">
          🕒 3 min | No credit impact
        </p>
      </div>
    </section>
  );
};

export default Hero;
