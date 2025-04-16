import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import MortgageRates from "./components/rate";
import HousingPulseSection from "./components/housing";
import MortgageCalculator from "./components/mortgageCalculator";
import PathToHomeownership from "./components/path";
import Footer from "./components/footer";


export default function Home() {
  return (
   
        <>
          <Navbar/>
          <HeroSection/>
          <MortgageRates/>
          <HousingPulseSection/>
          <MortgageCalculator/>
          <PathToHomeownership/>
          <Footer/>
        </>
        
  );
}

