"use client"

import avatar1 from "@/landingpage/assets/avatar-1.png";
import avatar2 from "@/landingpage/assets/avatar-2.png";
import avatar3 from "@/landingpage/assets/avatar-3.png";
import avatar4 from "@/landingpage/assets/avatar-4.png";
import avatar5 from "@/landingpage/assets/avatar-5.png";
import avatar6 from "@/landingpage/assets/avatar-6.png";
import avatar7 from "@/landingpage/assets/avatar-7.png";
import avatar8 from "@/landingpage/assets/avatar-8.png";
import avatar9 from "@/landingpage/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import React from "react";

const testimonials = [
  {
    text: "YouShorts.ai has revolutionized my content creation process. I can now generate engaging shorts on any topic in minutes!",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamiecontentcreator",
  },
  {
    text: "Our social media engagement has skyrocketed since we started using YouShorts.ai. It's a game-changer for our brand!",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmithmarketing",
  },
  {
    text: "As a small business owner, YouShorts.ai has allowed me to compete with bigger brands on social media. It's incredibly easy to use!",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleebusiness",
  },
  {
    text: "I was amazed at how quickly YouShorts.ai generated a viral-worthy short about quantum physics. It's perfect for educational content!",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyjscience",
  },
  {
    text: "YouShorts.ai has become an essential tool for my influencer marketing campaigns. It creates diverse, engaging content effortlessly.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkiminfluencer",
  },
  {
    text: "The customizability of YouShorts.ai is impressive. I can tailor the content to match my brand's voice perfectly.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmithbranding",
  },
  {
    text: "Our news outlet has been using YouShorts.ai to create quick, informative shorts on breaking stories. It's transformed our social media strategy.",
    imageSrc: avatar7.src,
    name: "Jordan Patel",
    username: "@jpatelsnews",
  },
  {
    text: "With YouShorts.ai, I can create shorts on complex coding topics that are actually engaging and easy to understand. My followers love it!",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsoncodertips",
  },
  {
    text: "YouShorts.ai's ability to generate shorts on literally any topic has helped me diversify my content and grow my audience exponentially.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@caseyharpertrends",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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
    className={twMerge("flex flex-col gap-6 pd-6 -translate-y-1/2")}>
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div key={username} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}        
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users says</h2>
          <p className="section-description mt-5">Get our Honest Feedback from our Users to know that it is the best software in the market </p>
        </div>
        <div className="flex justify-center gap-6  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
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

