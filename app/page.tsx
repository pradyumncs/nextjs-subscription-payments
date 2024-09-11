import { Header } from "@/landingpage/sections/Header";
import { Hero } from "@/landingpage/sections/Hero";
import { LogoTicker } from "@/landingpage/sections/LogoTicker";
import { ProductShowcase } from "@/landingpage/sections/ProductShowcase";
import { Pricing } from "@/landingpage/sections/Pricing";
import { Testimonials } from "@/landingpage/sections/Testimonials";
import { CallToAction } from "@/landingpage/sections/CallToAction";
import { Footer } from "@/landingpage/sections/Footer";
import { Carousel } from "@/components/ui/carousel";
import { FAQs } from "@/landingpage/sections/FAQ";
import { Producttestimonials } from "@/landingpage/sections/Producttestimonials";
import Step1 from "@/landingpage/sections/Step1";
import Hero2 from "@/landingpage/sections/Hero2";
export default function Home() {
  return (
    <>
     
      <Hero2/>
      <LogoTicker/>
      <Producttestimonials/>
      <ProductShowcase/>
      <Step1/>
      <Pricing/>
    <Carousel/>
      <Testimonials/>
    
      <CallToAction/>
      <FAQs/>
      <Footer/>
    
    </>
  );
}
