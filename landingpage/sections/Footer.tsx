import Image from "next/image";
import logo from "@/landingpage/assets/logosaas.png";


export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center"> 
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute ">
          <Image src={logo} height={40} alt="SaaS logo" className="relative"/>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">About</a>
          <a href="">Feaatures</a>
          <a href="">Customers</a>
          <a href="">Pricing</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact us</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
        
        </div>
        <p className="mt-6">&copy; 2024 Youshorts.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};
