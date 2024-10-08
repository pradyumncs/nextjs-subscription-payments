"use client"

import cogImage from '@/landingpage/assets/cog.png';
import cylinderImage from '@/landingpage/assets/cylinder.png';
import noodleImage from '@/landingpage/assets/noodle.png';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';


export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateYY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(scrollYProgress, 'change', (latestValue) =>
    console.log(latestValue)
  );
  return (
    <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFA_100%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Faceless Videos on Auto-Pilot.</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">Our powerful video creation platform allows you to fully automate a faceless channel.</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
              </button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img src={cogImage.src} 
              alt="Cog Image" 
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: 'easeInOut',
              }}
            />
            <motion.img 
              src={cylinderImage.src} 
              alt="cylinder Image" 
              width={220} height={220} 
              className='hidden md:block -top-8 -left-32 md:absolute' 
              style={{  
                translateY: translateYY,
              }}
            />
            <motion.img 
              src={noodleImage.src} 
              alt="noodle Image" width={220} height={220} 
              className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' 
              style={{
                rotate: 30,
                translateY: translateYY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
