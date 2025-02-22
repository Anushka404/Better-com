'use client';
import React, { useState } from "react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const loanAmount = homePrice - downPayment;

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  return (
    <>
    <section className="bg-[#bddeb2] p-10 w-full">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-4xl font-bold">Mortgage calculator</h2>
        <p className="text-gray-600 mt-2">
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 gap-8 items-center">
        <div>
          <label className="font-bold">Home price</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full border p-4 text-2xl font-bold text-black rounded-md mt-2"
          />
        </div>
        <div>
          <label className="font-bold">Monthly payment</label>
          <p className="text-3xl font-bold">${monthlyPayment.toFixed(0)}/mo</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-4 border-t border-gray-300 pt-6 flex flex-col gap-4">
        <input
          type="range"
          min="50000"
          max="1000000"
          step="1000"
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
          className="w-full"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="text-gray-500">ZIP code</label>
            <p className="font-bold">110043</p>
          </div>
          <div>
            <label className="text-gray-500">Down payment</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="text-gray-500">Interest rate</label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="text-gray-500">Length of loan</label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            >
              <option value={15}>15 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-6 text-center">
        <button className="bg-green-700 text-white px-6 py-3 rounded-md font-bold">Get pre-approved</button>
      </div>
    </section>

<section className="bg-[#fcfbf8] p-10 mt-10">
<div className="max-w-4xl mx-auto">
  <h3 className="text-xl font-semibold text-gray-700">Monthly payment breakdown</h3>
  <p className="text-4xl font-bold mt-2">${monthlyPayment.toFixed(0)}/mo</p>

  <div className="flex items-center mt-4">
    <div className="flex-1 bg-green-700 h-10 rounded-l-full"></div>
    <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
    <div className="w-6 h-10 bg-indigo-400 rounded-full"></div>
    <div className="w-6 h-10 bg-yellow-400 rounded-full"></div>
    <div className="w-6 h-10 bg-red-400 rounded-full rounded-r-full"></div>
  </div>

  <ul className="mt-6 space-y-2">
    <li className="flex items-center">
      <span className="w-2 h-2 bg-green-700 inline-block mr-2"></span> Principal & interest
      <span className="ml-auto font-bold">${(monthlyPayment * 0.7).toFixed(0)}</span>
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-purple-500 inline-block mr-2"></span> Property taxes
      <span className="ml-auto font-bold">$265</span>
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-indigo-400 inline-block mr-2"></span> Homeowners insurance
      <span className="ml-auto font-bold">$132</span>
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-yellow-400 inline-block mr-2"></span> HOA fees
      <span className="ml-auto font-bold">$132</span>
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-red-400 inline-block mr-2"></span> Utilities
      <span className="ml-auto font-bold">$100</span>
    </li>
  </ul>

  <div className="text-center mt-6">
    <button className="bg-gray-200 px-6 py-3 rounded-md font-semibold text-gray-700">
      Copy estimate link
    </button>
  </div>
</div>
</section>
  </>
  );
};

export default MortgageCalculator;
