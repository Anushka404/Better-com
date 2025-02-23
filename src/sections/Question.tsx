"use client";
import React, { useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image component
import content from "@/contentData"; // Importing the content array

const Question = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Buttons Wrapper */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between">
          {/* Heading */}
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight sm:text-5xl">
            Got questions? <br /> We&apos;ve got answers
          </h2>

          {/* Buttons */}
          <div className="mt-6 sm:mt-16 flex flex-wrap gap-4">
            {["products", "calculators", "guides"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 border-2 rounded-full font-medium transition hover:border-green-800 hover:outline hover:outline-3 hover:outline-green-800 hover:text-green-800 ${
                  activeTab === tab
                    ? "border-green-800 outline outline-3 text-green-700 "
                    : "border-gray-300 text-gray-700 hover:border-green-800 hover:text-green-800"
                }`}
              >
                {tab === "products"
                  ? "Our products"
                  : tab === "calculators"
                  ? "Calculators"
                  : "Guides & FAQs"}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Boxes Container */}
        <div className="bg-green-50 mt-10 grid gap-6 md:grid-cols-3 auto-rows-fr min-h-[250px]">
        {content[activeTab as keyof typeof content].map((item, index) => (
            <div
              key={index}
              className={`relative bg-${
                activeTab === "products"
                  ? "green-50"
                  : activeTab === "calculators"
                  ? "blue-50"
                  : "yellow-50"
              } rounded-xl p-6 flex flex-col space-y-4 shadow-md hover:shadow-lg transition min-h-[250px] ${
                item.type === "wide" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-700 text-sm">{item.description}</p>
              )}
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200 transition">
                ➝
              </button>

              {/* ✅ Dynamically set image sizes based on item type */}
              <div
                className={`flex ${
                  item.type === "wide" ? "justify-end items-end" : ""
                } w-full`}
              >
              {typeof item.img === "string" ? (
                <img
                  src={item.img}
                  alt={item.alt}
                  className={`rounded-md mt-auto ${
                    item.type === "wide" ? "w-[600px] h-[200px]" : "w-[800px] h-[200px]"
                  } object-cover`}
                />
              ) : (
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={item.type === "wide" ? 300 : 300} // Square: 400x400, Rectangular: 300x200
                  height={item.type === "wide" ? 200 : 200}
                  className="rounded-md mt-auto object-cover"
                />
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
