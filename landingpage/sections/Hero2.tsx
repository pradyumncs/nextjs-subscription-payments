"use client"
import React from 'react';
import Image from 'next/image';
import Tiktok from '@/landingpage/assets/tiktok.png';
import Instagram from '@/landingpage/assets/instagram.png';
import Youtube from '@/landingpage/assets/youtube.png';
import Facebook from '@/landingpage/assets/facebook.png';
import Snapchat from '@/landingpage/assets/snapchat.png';
import landing1 from '@/landingpage/assets/videoimages/hero1.png';
import landing2 from '@/landingpage/assets/videoimages/hero2.png';
import landing3 from '@/landingpage/assets/videoimages/hero3.png';
import Link from "next/link";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -ml-2 first:ml-0">
    <Image src={src} alt={alt} width={32} height={32} />
  </div>
);

const Hero2: React.FC = () => {
  const avatars = [
    '/avatar1.jpg',
    '/avatar2.jpg',
    '/avatar3.jpg',
    '/avatar4.jpg',
    '/avatar5.jpg',
    '/avatar6.jpg',
    '/avatar7.jpg',
  ];

  return (
    <div className="min-h-[80vh] md:min-h-[75vh] flex flex-col py-12 md:py-20" style={{
      background: `
        linear-gradient(135deg, 
          #ffffff 0%,
          #fafafa 25%,
          #f8f8f8 50%,
          #f5f5f5 75%,
          #f2f2f2 100%
        )
      `
    }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 md:mb-8 leading-tight">
            Create Viral Videos on <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">Auto-Pilot.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
            Our powerful AI video creation platform allows you to fully automate a faceless channel.
          </p>
          <Link href="/create">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg md:text-xl lg:text-2xl font-semibold py-4 px-8 md:py-5 md:px-10 rounded-full hover:from-purple-600 hover:to-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Try Youshorts.ai for Free
            </button>
          </Link>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-4 md:mt-6 items-center">
            (No credit card required)
          </p>
        </div>

        {/* Right side feature showcase */}
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-[450px] md:h-[500px]">
            <p className="text-center mb-4 font-semibold text-gray-700">Perfect for</p>
            <div className="flex justify-center space-x-4 mb-8 z-30 relative">
              <Image src={Tiktok} alt="TikTok" width={36} height={36} className="transform hover:scale-110 transition duration-300" />
              <Image src={Instagram} alt="YouTube" width={36} height={36} className="transform hover:scale-110 transition duration-300" />
              <Image src={Youtube} alt="Instagram" width={36} height={36} className="transform hover:scale-110 transition duration-300" />
              <Image src={Facebook} alt="Facebook" width={36} height={36} className="transform hover:scale-110 transition duration-300" />
              <Image src={Snapchat} alt="Snapchat" width={36} height={32} className="transform hover:scale-110 transition duration-300" /> 
            </div>

            <div className="absolute inset-0 flex justify-center items-center">
              {/* Left image */}
              <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10">
                <div className="relative group">
                  <Image
                    src={landing3}
                    alt="Girl in nature"
                    width={160}
                    height={280}
                    className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl"></div>
                </div>
              </div>

              {/* Center image */}
              <div className="relative z-20 group">
                <div className="relative">
                  <Image
                    src={landing2}
                    alt="Butterflies flutter"
                    width={180}
                    height={320}
                    className="rounded-2xl shadow-2xl transform group-hover:scale-110 transition duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-transparent opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl"></div>
                </div>
              </div>

              {/* Right image */}
              <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-12 z-10">
                <div className="relative group">
                  <Image
                    src={landing1}
                    alt="Lions roaring"
                    width={160}
                    height={280}
                    className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;