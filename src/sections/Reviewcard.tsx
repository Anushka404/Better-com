'use client';

import React, { useState } from "react";
import Image from "next/image";
import Eren from "@/assets/Eren.jpg";
import John from "@/assets/John Wick.jpg";
import Tyrion from "@/assets/Tyrion.jpg";

// Sample reviews
const reviews = [
  {
    name: "Arian",
    text: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.",
    image: Eren,
  },
  {
    name: "John",
    text: "Better made the mortgage process so simple. I never imagined it could be this smooth and transparent.",
    image: John,
  },
  {
    name: "Paul",
    text: "With Better, I got a competitive rate and an easy online process. Highly recommended!",
    image: Tyrion,
  },
];

const ReviewSection = () => {
  const [selectedReview, setSelectedReview] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-center px-6 py-12 gap-10 md:gap-6 bg-gray-50">
  {/* Left: Review Image + Buttons */}
  <div className="flex flex-col lg:ml-40  items-center md:items-start w-full md:w-1/2 px-0">
    {/* Review Card */}
    <div className="relative w-64 sm:w-72 md:w-80 h-[450px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={reviews[selectedReview].image}
        alt={reviews[selectedReview].name}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 w-full bg-black/70 text-white p-4">
        <p className="text-lg leading-snug mb-2">"{reviews[selectedReview].text}"</p>
        <p className="text-sm opacity-80">{reviews[selectedReview].name} — Better Mortgage Customer</p>
      </div>
    </div>

    {/* Buttons Below Image */}
    <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-3">
      {reviews.map((review, index) => (
        <button
          key={index}
          onClick={() => setSelectedReview(index)}
          className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${
            selectedReview === index
              ? "bg-green-900 text-white border-green-900"
              : "border-gray-300 text-gray-700 hover:border-gray-500"
          }`}
        >
          {review.name}
        </button>
      ))}
    </div>
  </div>

  {/* Right: Text and Button Section */}
  <div className="max-w-md w-full text-center md:text-left md:w-1/2 px-4 lg:mr-80">
    <h2 className="text-5xl lg:text-[68px] sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
      Find out why <br /> we&apos;re better.
    </h2>
    <button className="mt-4 bg-green-900 text-white px-6 py-3 rounded-lg text-lg md:text-xl hover:bg-green-800 transition">
      See all our stories
    </button>

    {/* Trustpilot Rating */}
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
      <span className="text-green-600 font-medium">⭐ Trustpilot</span>
      <span className="text-gray-800 font-medium">Excellent</span>
      <span className="text-sm">4.4 out of 5</span>
    </div>
  </div>
</div>

  );
};

export default ReviewSection;
