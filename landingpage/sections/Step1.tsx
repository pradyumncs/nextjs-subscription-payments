"use client"

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import step1Image from "@/landingpage/assets/productimages/step1.png"
import step2Image from "@/landingpage/assets/productimages/step2.png"
import step3Image from "@/landingpage/assets/productimages/step3.png"

import afterStep1Image from "@/landingpage/assets/productimages/dot1.png"
import afterStep2Image from "@/landingpage/assets/productimages/dot2.png"

import productImage from "@/landingpage/assets/product-image.png"
import tubeImage from "@/landingpage/assets/tube.png"
import pyramidImage from "@/landingpage/assets/pyramid.png"

interface StepProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  isReversed: boolean;
  afterStepImage?: StaticImageData;
}

const Step: React.FC<StepProps> = ({ title, description, imageSrc, imageAlt, isReversed, afterStepImage }) => {
  return (
    <>
      <div className={`flex flex-col md:flex-row items-center justify-between ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
  <Image
    src={imageSrc}
    alt={imageAlt}
    width={500}
    height={500}
    layout="responsive"
    className="mb-5 mt-5 md:my-0 rounded-md"
  />
</div>

        <div className="w-full md:w-1/2 md:px-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-4">{description}</p>
        </div>
      </div>
      {afterStepImage && (
        <div className="hidden md:flex justify-center my-4">
          <div className="relative">
            <Image
              src={afterStepImage}
              alt={`After ${title}`}
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

const MultiStepComponent: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <>
      <section ref={sectionRef} className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip">
        <div className="container mx-auto px-4 relative">
          <motion.img 
            src={pyramidImage.src} 
            alt="Pyramid Image" 
            height={262} 
            width={262} 
            className="hidden md:block absolute right-0 -top-32"
            style={{
              translateY,
              translateX: '-25%',
            }}
          />
          <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag">Boost your productivity</div>
            </div>
            <h2 className="section-title mt-5 ">Step by Step</h2>
            <p className="section-description mt-5 mb-10">Here is the way to create videos Super Fast </p>
          </div>
          
          <Step
            title="Step 1: Choose a Topic"
            description="Choose a topic for your faceless video series. Select from our preset list or create a custom prompt. Our AI will begin crafting your first unique video immediately."
            imageSrc={step1Image}
            imageAlt="Create Series"
            isReversed={false}
            afterStepImage={afterStep1Image}
          />
          
          <Step
            title="Step 2: Customize Your Content"
            description="Tailor your video content to your preferences. Adjust the script, select visuals, and fine-tune the AI's output to match your vision perfectly."
            imageSrc={step2Image}
            imageAlt="Customize Content"
            isReversed={true}
            afterStepImage={afterStep2Image}
          />
          
          <Step
            title="Step 3: Generate and Publish"
            description="With a single click, generate your complete video series. Review the final product, make any last-minute adjustments, and publish your content across various platforms."
            imageSrc={step3Image}
            imageAlt="Generate and Publish"
            isReversed={false}
          />
          
          <motion.img 
            src={tubeImage.src} 
            alt="Tube Image" 
            height={248} 
            width={248} 
            className="hidden md:block absolute left-0 bottom-0"
            style={{
              translateY,
              translateX: '-40%',
            }} 
          />
        </div>
      </section>
      <div className="relative">
      </div>
    </>
  );
};

export default MultiStepComponent;