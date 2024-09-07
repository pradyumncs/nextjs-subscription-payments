"use client"

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import step1Image from "@/landingpage/assets/productimages/product-image.png"
import step2Image from "@/landingpage/assets/productimages/product-image.png"
import step3Image from "@/landingpage/assets/productimages/product-image.png"

import afterStep1Image from "@/landingpage/assets/productimages/dot1.png"
import afterStep2Image from "@/landingpage/assets/productimages/dot2.png"

import ArrowRight from "@/landingpage/assets/arrow-right.svg"
import springImage from "@/landingpage/assets/spring.png"
import starImage from "@/landingpage/assets/star.png"

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
            className="mb-5 mt-5 md:my-0" // Added margin for mobile view
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
  return (
    <>
      <section className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip">
        <div className="container mx-auto px-4">
          <div className="section-heading mb-5 mt-5">
            <div className="flex justify-center"></div>
            <h2 className="section-title mt-15 text-center">How Does It Work?</h2>
            <p className="section-description mt-5 text-center">Create Your Videos Today</p>
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
        </div>
      </section>
      
    </>
  );
};

export default MultiStepComponent;