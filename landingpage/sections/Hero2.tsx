import React from 'react';
import Image from 'next/image';
import Tiktok from '@/landingpage/assets/tiktok.png';
import Instagram from '@/landingpage/assets/instagram.png';
import Youtube from '@/landingpage/assets/youtube.png';
import landing1 from '@/landingpage/assets/videoimages/1.png';

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
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left side content */}
      <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
          Faceless Videos on Auto-Pilot.
        </h1>
        <p className="text-2xl md:text-2xl text-gray-600 mb-8">
          Our powerful AI video creation platform allows you to fully automate a faceless channel.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xl md:text-2xl font-semibold py-4 px-8 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition duration-300">
          Try AutoShorts.ai for Free
        </button>
        <p className="text-base md:text-lg text-gray-500 mt-4 items-center  ">
          (No credit card required)
        </p>
      </div>

      {/* Right side feature showcase */}
      <div className="md:w-1/2 w-full">
        <div className="relative w-full h-[500px]">
          <p className="text-center mb-2 font-semibold">Perfect for</p>
          <div className="flex justify-center space-x-2 mb-4 z-30 relative">
            <Image src={Tiktok} alt="TikTok" width={40} height={40} />
            <Image src={Instagram} alt="YouTube" width={40} height={40} className="text-red-600" />
            <Image src={Youtube} alt="Instagram" width={40} height={40} className="text-pink-600" />
            <Image src={Youtube} alt="Instagram" width={40} height={40} className="text-pink-600" />
          </div>

          <div className="absolute inset-0 flex justify-center items-center">
            {/* Left image */}
            <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10">
              <div className="relative">
                <Image
                  src={landing1}
                  alt="Girl in nature"
                  width={160}
                  height={280}
                  className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300" 
                />
              </div>
            </div>

            {/* Center image */}
            <div className="relative z-20">
              <div className="relative">
                <Image
                  src={landing1}
                  alt="Butterflies flutter"
                  width={180}
                  height={320}
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
                  width={160}
                  height={280}
                  className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300" 
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero2;