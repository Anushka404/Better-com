import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-accentPrimary py-10 px-15 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Section */}
        <div>
          <h2 className="font-bold text-3xl">Better</h2>
          <p className="mt-2 text-gray-700">
            Better is a family of companies serving all your homeownership needs.
          </p>

          <div className="mt-6 space-y-4">
            {[
              { title: "Mortgage", subtitle: "Apply 100% online, with expert customer support." },
              { title: "Real Estate", subtitle: "Find all the ways you can save." },
              { title: "Cover", subtitle: "Bundle and save on home, auto, and life insurance." },
              { title: "Inspect", subtitle: "Get 100-day inspection guarantees." },
              { title: "Settlement Services", subtitle: "Shop for title insurance in one place." },
            ].map((item, index) => (
              <div key={index}>
                <Link
                  href="#"
                  className="block font-semibold text-lg text-accentPrimary cursor-pointer "
                >
                  Better <span className="text-gray-500">{item.title}</span>
                </Link>
                <p className="text-gray-600 text-sm">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="mt-4 space-y-2 ">
            {[
              "Home affordability calculator",
              "Mortgage calculator",
              "Free mortgage calculator",
              "Mortgage calculator with taxes",
              "Mortgage calculator with PMI",
              "Rent vs buy calculator",
              "HELOC payment calculator",
              "HELOC vs cash-out refinance calculator",
              "Buy a home",
              "Sell a home",
              "Get iome inspection"
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="relative inline-block text-gray-950 hover:text-black transition duration-200 after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="mt-4 space-y-2">
            {[
              "About Us",
              "Careers",
              "Media",
              "Partner With Us",
              "Learning center",
              "FAQs",
              "Investor Relations",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="relative inline-block text-gray-950 hover:text-black transition duration-200 after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            {["hello@better.com", "415-523-8837", "FAQ", "Glossary"].map(
              (item, index) => (
                <li key={index}>
                  <Link href="#" className="relative inline-block text-gray-950 hover:text-black transition duration-200 after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>

          <h3 className="font-bold text-lg mt-6">Legal</h3>
          <ul className="mt-4 space-y-2">
            {[
              "NMLS Consumer Access",
              "Privacy Policy",
              "Terms of Use",
              "Disclosures & Licensing",
              "Affiliated Business",
              "Browser Disclaimer",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="relative inline-block text-gray-950 hover:text-black transition duration-200 after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
       
      </div>
      <div className="container mx-auto mt-[180px] text-gray-700 text-xs">
            <p>1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer.
                Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval.
                See <span className="underline hover:cursor-pointer">One Day Mortgage™ Terms and Conditions.</span>
                <br/>
                <br />
                2Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See <span className="underline hover:cursor-pointer">One Day Mortgage™ Terms and Conditions.</span>
            </p>
            <br />
            <br />
            3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.
            <hr className="border-gray-500 border-t-1 my-10" />
            © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
            <br /><br/>
            Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <span className="underline hover:cursor-pointer">NMLS Consumer Access.</span>
            <br/><br/>
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
            <br/><br/><span className="underline hover:cursor-pointer">New York State Housing and Anti-Discrimination Notice</span><br/><br/>
            <span className="underline hover:cursor-pointer">New York Standard Operating Procedures</span>
            <br/><br/>
            Texas Real Estate Commission: <span className="underline hover:cursor-pointer">Information About Brokerage Services | Consumer Protection Notice</span>
            <br/><br/>
            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
            <br/><br/>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
            <br/><br/>Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s <span className="underline hover:cursor-pointer">license numbers.</span>
            <br/><br/>Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
            <br /><br />Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
            <br /><br />Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
        </div>
    </footer>
  );
};

export default Footer;
