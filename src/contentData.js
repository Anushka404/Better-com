// contentData.js
import oneDay from "@/assets/one dat.png"
import heloc from "@/assets/better-heloc.webp"
import house from "@/assets/buy-house-without-realtor.webp"
import loanTime from "@/assets/loan-timeline.webp"
import afordCalc from "@/assets/affordability-calculator.webp"
import helocCalc from "@/assets/heloc-calculator.webp"

const content = {
    products: [
      {
        title: "Buying your first home with Better",
        description: "",
        img: "https://media.better.com/better-com/homepage/learning-center/first-home.webp",
        alt: "House",
        type: "small",
      },
      {
        title: "One Day Mortgage",
        description:
          "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
        img: oneDay,
        alt: "One Day Mortgage",
        type: "wide",
      },
      {
        title: "Better HELOC",
        description:
          "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.",
        img: heloc,
        alt: "HELOC",
        type: "wide",
      },
      {
        title: "Insurance",
        description: "",
        img: "https://media.better.com/better-com/homepage/learning-center/insurance.webp",
        alt: "Insurance",
        type: "small",
      },
    ],
    calculators: [
      {
        title: "Mortgage Calculator",
        description:
          "Estimate your monthly mortgage payments with taxes and insurance.",
        img: "https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp",
        alt: "Mortgage Calculator",
        type: "small",
      },
      {
        title: "Home Affordability Calculator",
        description:
          "Find out how much home you can afford based on your income, debts, and savings.",
        img: afordCalc,
        alt: "Affordability Calculator",
        type: "wide",
      },
      {
        title: "Refinance Calculator",
        description:
          "See how much you can save by refinancing your mortgage with Better.",
        img: helocCalc,
        alt: "Refinance Calculator",
        type: "wide",
      },
      {
        title: "Loan Comparison",
        description: "",
        img: "https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp",
        alt: "Loan Comparison",
        type: "small",
      },
    ],
    guides: [
      {
        title: "What is a Good DTI ratio for a home loan?",
        description:
          "",
        img: "https://media.better.com/better-com/homepage/learning-center/good-dti.webp",
        alt: "Home Buying Guide",
        type: "small",
      },
      {
        title: "Buying a Home Without a Realtor",
        description:
          "Thinking about buying a home without a realtor? Here's what you need to know.",
        img: house,
        alt: "First-Time Homebuyer",
        type: "wide",
      },
      {
        title: "Timeline for homebuying process",
        description:
          "Does the process of buying a home seem daunting? Here's a timeline to help you navigate the process.",
        img: loanTime,
        alt: "loan timeline",
        type: "wide",
      },
      {
        title: "Mortgage FAQs",
        description: "",
        img: "https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp",
        alt: "Mortgage FAQs",
        type: "small",
      },
    ],
  };
  
  export default content;
  