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
      <div className="container mx-auto mt-10 text-gray-700 text-xs">
            <p>1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer.
                Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval.
                See <span className="underline">One Day Mortgage™ Terms and Conditions.</span></p>
        </div>
    </footer>
  );
};

export default Footer;
