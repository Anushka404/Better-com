import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Image from "next/image";
import Reviewcard from "@/sections/Reviewcard";
import Question from "@/sections/Question";


export default function Home() {
  return (
   <>
   <Header />
   <Hero />
   <Reviewcard/>
   <Question/>
   <Footer />
   </>
  );
}
