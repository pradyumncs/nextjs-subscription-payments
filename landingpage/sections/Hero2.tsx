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
    <div className="min-h-[80vh] md:min-h-[75vh] flex flex-col py-8 md:py-16" style={{
      background: `
        radial-gradient(circle at top left, 
          rgba(252, 229, 216, 1) 0%, 
          rgba(252, 229, 216, 0) 70%
        ),
        radial-gradient(circle at top right, 
          rgba(243, 190, 195, 1) 0%, 
          rgba(243, 190, 195, 0) 70%
        ),
        linear-gradient(to right, 
          white,
          rgba(255, 255, 255, 0) 10%,
          rgba(255, 255, 255, 0) 90%,
          white
        ),
        linear-gradient(to bottom, 
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 80%,
          white
        ),
        linear-gradient(135deg, 
          #fce5d8 0%,
          #f9dbd2 25%,
          #f7d2cd 50%,
          #f5c8c8 75%,
          #f3bec3 100%
        )
      `
    }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4 md:mb-6">
            Faceless Videos on Auto-Pilot.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 md:mb-8">
            Our powerful AI video creation platform allows you to fully automate a faceless channel.
          </p>
          <Link href="/create">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg md:text-xl lg:text-2xl font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition duration-300">
            Try Youshorts.ai for Free
          </button>
          </Link>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-3 md:mt-4 items-center">
            (No credit card required)
          </p>
        </div>

        {/* Right side feature showcase */}
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-[400px] md:h-[450px]">
            <p className="text-center mb-2 font-semibold">Perfect for</p>
            <div className="flex justify-center space-x-2 mb-4 z-30 relative">
              <Image src={Tiktok} alt="TikTok" width={32} height={32} />
              <Image src={Instagram} alt="YouTube" width={32} height={32} className="text-red-600" />
              <Image src={Youtube} alt="Instagram" width={32} height={32} className="text-pink-600" />
              <Image src={Facebook} alt="Facebook" width={32} height={32} className="text-pink-600" />
              <Image src={Snapchat} alt="Snapchat" width={32} height={28} className="text-pink-600" /> 
            </div>

            <div className="absolute inset-0 flex justify-center items-center">
              {/* Left image */}
              <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10">
                <div className="relative">
                  <Image
                    src={landing3}
                    alt="Girl in nature"
                    width={140}
                    height={240}
                    className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300" 
                  />
                </div>
              </div>

              {/* Center image */}
              <div className="relative z-20">
                <div className="relative">
                  <Image
                    src={landing2}
                    alt="Butterflies flutter"
                    width={160}
                    height={280}
                    className="rounded-lg shadow-xl transform hover:scale-110 transition duration-300" 
                  />
                </div>
              </div>

              {/* Right image */}
              <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-12 z-10">
                <div className="relative">
                  <Image
                    src={landing1}
                    alt="Lions roaring"
                    width={140}
                    height={240}
                    className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300" 
                  />
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