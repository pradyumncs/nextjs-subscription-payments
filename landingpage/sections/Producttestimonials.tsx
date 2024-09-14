"use client"

import avatar1 from "@/landingpage/assets/videoimages/1.png";
import avatar2 from "@/landingpage/assets/videoimages/2.png";
import avatar3 from "@/landingpage/assets/videoimages/3.png";
import avatar4 from "@/landingpage/assets/videoimages/4.png";
import avatar5 from "@/landingpage/assets/videoimages/5.png";
import avatar6 from "@/landingpage/assets/videoimages/6.png";
import avatar7 from "@/landingpage/assets/videoimages/7.png";
import avatar8 from "@/landingpage/assets/videoimages/8.png";
import avatar9 from "@/landingpage/assets/videoimages/9.png";
import avatar10 from "@/landingpage/assets/videoimages/10.png";
import avatar11 from "@/landingpage/assets/videoimages/11.png";
import avatar12 from "@/landingpage/assets/videoimages/12.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar10.src,
    name: "Casey Harper",
    username: "@casey09",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar11.src,
    name: "Casey Harper",
    username: "@casey09",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar12.src,
    name: "Casey Harper",
    username: "@casey09",
  },

];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

const TestimonialsColumn = (props: {className?: string; testimonials: typeof testimonials; duration?: number}) => (
  <div className={props.className}>
    <motion.div 
      animate={{
        translateY: '-50%',
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }}
      className={twMerge("flex flex-col gap-6 -translate-y-1/2")}
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
        {props.testimonials.map(({ text, imageSrc, name, username }) => (
          <div
            key={username}
            className="card relative h-[400px] w-[250px] md:w-[350px] lg:w-[400px]" // Increased width here
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          >
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 "></div>

              {/* Text Content */}
              <div className="absolute bottom-4 left-4 p-4 text-white">
                <div className="flex flex-col">
              
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);


export const Producttestimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center p-6">
            <div className="tag">Results</div>
          </div>
          <h2 className="section-title mt-5">Create Videos Fast</h2>
          <p className="section-description mt-5">Create AI Videos in minutes, post automatically on your Social Media. Our AI creation tool creates viral AI videos for you. </p>
        </div>
        <div className="flex justify-center gap-6  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[1200px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} 
          className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} 
          className="hidden lg:block" duration={17}  />
        </div>
      </div>
    </section>
  );
};

