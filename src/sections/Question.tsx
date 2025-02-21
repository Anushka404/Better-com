import React from "react";

const Question = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Buttons Wrapper */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between">
          {/* Heading */}
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight sm:text-5xl">
            Got questions? <br /> We've got answers
          </h2>

          {/* Buttons */}
          <div className="mt-6 sm:mt-16 flex flex-wrap gap-4">
            <button className="px-6 py-2 border-2 border-green-700 text-green-700 rounded-full font-medium hover:bg-green-100 transition">
              Our products
            </button>
            <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition">
              Calculators
            </button>
            <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition">
              Guides & FAQs
            </button>
          </div>
        </div>

        {/* Bento Boxes Container */}
        {/* Bento Boxes Container */}
      <div className="mt-10 grid gap-6 md:grid-cols-3 auto-rows-fr min-h-[250px]">
        {/* Row 1 */}
  
        { /* Card 1 - Small Square */}
          <div className="relative bg-gray-100 rounded-xl p-6 flex flex-col space-y-4 shadow-md hover:shadow-lg transition min-h-[250px] md:col-span-1">
             <h3 className="text-xl font-semibold text-gray-900">
              Buying your first home with Better
             </h3>
             <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200 transition">
              ➝
             </button>
             <img
               src="https://via.placeholder.com/400"
               alt="House"
               className="rounded-md w-full mt-auto"
             />
          </div>

          {/* Card 2 - Wide */}
          <div className="relative bg-green-50 rounded-xl p-6 flex flex-col space-y-4 shadow-md hover:shadow-lg transition min-h-[250px] md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">
              One Day Mortgage<sup>1</sup>
            </h3>
            <p className="text-gray-700 text-sm">
              Kick your home loan into hyperdrive. Going from locked rate to Commitment
              Letter takes weeks for traditional lenders. We do it in a single day.
                    </p>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200 transition">
              ➝
            </button>
            <div className="bg-green-200 p-4 rounded-lg mt-auto flex items-center justify-center">
              <img src="https://via.placeholder.com/150" alt="One Day Mortgage" className="w-32" />
            </div>
          </div>

          {/* Row 2 */}
  
          {/* Card 3 - Wide */}
          <div className="relative bg-green-50 rounded-xl p-6 flex flex-col space-y-4 shadow-md hover:shadow-lg transition min-h-[250px] md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">
              Better HELOC
            </h3>
            <p className="text-gray-700 text-sm">
              Introducing One Day HELOC™—your express lane to getting cash from
              your home with our Home Equity Line of Credit². Access up to 90%
              of your home equity as cash in as little as 7 days.
            </p>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200 transition">
              ➝
            </button>
            <img
              src="https://via.placeholder.com/400"
              alt="HELOC"
              className="rounded-md w-full mt-auto"
            />
          </div>

           {/* Card 4 - Small Square */}
          <div className="relative bg-green-50 rounded-xl p-6 flex flex-col space-y-4 shadow-md hover:shadow-lg transition min-h-[250px] md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900">Insurance</h3>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200 transition">
              ➝
            </button>
            <img
              src="https://via.placeholder.com/400"
              alt="Insurance"
              className="rounded-md w-full mt-auto"
            />
          </div>
       </div>

      </div>
    </section>
  );
};

export default Question;
