'use client';
import React, { useState } from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Image from "next/image";
import formula from "@/assets/dti-formula.jpg"
import dtiExample from "@/assets/dti-example.jpg"
import mortgageFormula from "@/assets/monthly-mortgage-payments-formula.jpg"
import mortgageExample from "@/assets/monthly-mortgage-payments-example.jpg"

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
    <Header />
    <section className="bg-green-100 p-14 w-full ">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-4xl font-bold">Mortgage calculator</h2>
        <p className="text-gray-600 mt-2">
          Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 gap-8 items-center">
        <div>
          <label className="font-bold">Home price</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full border p-4 text-4xl font-bold text-black rounded-md mt-2"
          />
        </div>
        <div className="p-6 space-y-2">
          <label className="font-bold">Monthly payment</label>
          <p className="text-4xl font-bold">${monthlyPayment.toFixed(0)}/mo</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-4 border-t border-gray-300 pt-6 flex flex-col gap-4">
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
          <div className="p-1 rounded-lg hover:outline hover:outline-3 hover:outline-green-700">
            <label className="text-gray-500">ZIP code</label>
            <p className="font-bold">110043</p>
          </div>
          <div className="p-1 rounded-lg hover:outline hover:outline-3 hover:outline-green-700">
            <label className="text-gray-500">Down payment</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="p-1 rounded-lg hover:outline hover:outline-3 hover:outline-green-700">
            <label className="text-gray-500">Interest rate</label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="p-1 rounded-lg hover:outline hover:outline-3 hover:outline-green-700">
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


    {/* FAQ Part */}
    <section className="bg-background py-10 px-6 max-w-[1240px] mx-auto my-6">
      <div className="border-b border-gray-300 pb-10 mb-10">
        <h2 className="text-3xl font-semibold mb-4">
          How does a mortgage calculator help me?
        </h2>
        <p className="text-gray-500 text-md leading-relaxed">
          When deciding how much house you can afford, one of the most important pieces 
          to determine is whether a home will fit into your monthly budget. A mortgage 
          calculator helps you understand the monthly cost of a home. And ours will allow 
          you to enter different down payments and interest rates to help determine what is 
          affordable for you.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4">
          How much monthly mortgage payment can I afford?
        </h2>
        <p className="text-gray-500 text-md leading-relaxed">
          Lenders determine how much you can afford on a monthly housing payment by 
          calculating your{" "}
          <a href="#" className="text-green-600 underline">
            debt-to-income ratio (DTI)
          </a>
          . The maximum DTI you can have in order to qualify for most mortgage loans 
          is often between 50%, with your anticipated housing costs included.
        </p>
        <p className="text-gray-500 text-md leading-relaxed mt-4">
          Your DTI is the balance between your income and your debt. It helps lenders 
          understand how safe or risky it is for them to approve your loan. A DTI ratio 
          represents how much of your gross monthly income is spoken for by creditors, and 
          how much of it is left over to you as disposable income. It&apos;s most commonly written 
          as a percentage. For example, if you pay half your monthly income in debt payments, 
          you would have a DTI of 50%.
        </p>
      </div>
    </section>

    

    <section className="bg-background py-10 px-6 flex justify-center">
  <div className="max-w-[1240px] w-full">
    {/* Formula Section */}
    <div className="mb-10 text-center">
      <h3 className="text-xl font-semibold mb-4">
        Formula for calculating your debt-to-income (DTI) ratio:
      </h3>
      <div className="bg-gray-100 p-6 rounded-lg flex justify-center">
        <Image src={formula} alt="DTI Formula"
        width={900} />
      </div>
    </div>

    {/* Example Section */}
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">
        Here&apos;s an example of what calculating your DTI might look like:
      </h3>
      <div className="bg-gray-100 p-6 rounded-lg flex justify-center">
        <Image src={dtiExample} alt="DTI Example"
        height={500} />
      </div>
    </div>
  </div>
</section>

  <section className="bg-background  px-6 flex justify-center">
    <div className="max-w-[1240px] w-full">
    
    <div className="border-t border-gray-300 my-10"></div>

    
      <div className="bg-gray-100 p-6 rounded-lg inline-block">
      <div>
        <h2 className="text-3xl font-semibold mb-4">
        How to calculate monthly mortgage payments?
        </h2>
        <p className="text-gray-500 text-md leading-relaxed">
        Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI),
        if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees,
        so it&apos;s a good idea to factor these into your monthly budget.
        This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
        </p>

        <h2 className="mt-5 text-2xl font-semibold mb-4">
        Formula for calculating monthly mortgage payments
        </h2>
        <p className="text-gray-500 text-md leading-relaxed mt-4">
        The easiest way to calculate your mortgage payment is to use a calculator,
        but for the curious or mathematically inclined, here&apos;s the formula for calculating principal and interest yourself:
        </p>
      </div>
        <Image src={mortgageFormula} alt="Mortgage Formula"/>
         <div className="text-center space-y-4">
          <p className="font-semibold">Where:</p>
          <ul className="text-left list-disc inline-block space-y-2">
          <li>M is monthly mortgage payments</li>
          <li>P is the principal loan amount (the amount you borrow)</li>
          <li>r is the monthly interest rate<br/> (annual interest rate divided by 12 and expressed as a decimal)</li>
          <li>n is the total number of payments in months</li>
          </ul>
          <p className="flex justify-center mt-4 text-start font-semibold">Here&apos;s a simple example:</p>
          <div className="flex justify-center">
          
          <Image src={mortgageExample} alt="Mortgage Formula"
          height={400} width={700}/>
          </div>
         </div>

      </div>
    </div>
    </section>

    <section className="bg-background  px-6 flex justify-center">
    <div className="max-w-[1240px] w-full">
      <div className="border-t border-gray-300 my-10"></div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">
        How is Better&apos;s mortgage calculator different?
        </h2>
        <p className="text-gray-500 text-md leading-relaxed">
        The property taxes you contribute are used to finance the services provided by your local government to the community. 
        These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. 
        Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
        <br /><br />
        Your lender will usually require you to have homeowners insurance while you're settling your mortgage. 
        This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.
        <br /><br />
        Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. 
        However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, 
        it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
        </p>

        <h2 className="mt-5 text-2xl font-semibold mb-4">
        This mortgage calculator shows your mortgage costs with PMI
        </h2>
        <p className="text-gray-500 text-md leading-relaxed mt-4">
        PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for 
        a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner,
         begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.
         <br /><br />
         Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021.
         In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn&apos;t risen above 10% since 1989.
         <br /><br />
         PMI is automatically removed from conventional mortgages once your home equity reaches 22%. 
         Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.
        </p>
      </div>
      <div className="border-t border-gray-300 my-10"></div>
      </div>
      
    </section>
    <Footer />




  </>
  );
};

export default MortgageCalculator;
