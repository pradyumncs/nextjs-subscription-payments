"use client"
import ArrowRight  from "@/landingpage/assets/arrow-right.svg"
import springImage  from "@/landingpage/assets/spring.png"
import starImage  from "@/landingpage/assets/star.png"
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#ffffff] py-24 overflow-x-clip">
      <div className="contaimer">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free</h2>
          <p className="section-description mt-5">Create your first Video today </p>
          <motion.img src={starImage.src} 
          alt="Star Image" width={360} 
          className="absolute -left-[350px] -top-[132px]" 
          style={{
            translateY,
          }} 
          />
          <motion.img src={springImage.src} 
          alt="Spring Image" width={360} 
          className="absolute -right-[331px] -top-[91px]" 
          style={{
            translateY,
          }} 
          />
        </div>
        <div className="flex flex-col gap-2 mt-10 justify-center items-center">
        <Link href="/create">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg md:text-xl lg:text-2xl font-semibold py-4 px-8 md:py-5 md:px-10 rounded-full hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Try Youshorts.ai for Free
            </button>
          </Link>
  <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-3 md:mt-4">
    (No credit card required)
  </p>
</div>


      </div>
    </section>
  );
};
