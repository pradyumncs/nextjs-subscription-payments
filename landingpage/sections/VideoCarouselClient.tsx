'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface VideoCarouselClientProps {
  videos: string[];
}

const VideoCarouselClient: React.FC<VideoCarouselClientProps> = ({ videos }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useEffect(() => {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach((video) => {
      video.play().catch((error) => console.log('Auto-play was prevented:', error));
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="flex space-x-4 animate-carousel">
        {videos.map((video, index) => (
          <div key={index} className="flex-none w-64 h-36">
            <video 
              src={video} 
              className="w-full h-full object-cover rounded-lg" 
              autoPlay 
              loop 
              muted 
              playsInline 
            />
          </div>
        ))}
      </div>
      <motion.div 
        className="hidden md:block absolute -right-36 -top-32 w-64 h-64 bg-blue-200 rounded-full"
        style={{ translateY }}
      />
      <motion.div 
        className="hidden md:block absolute -left-36 bottom-24 w-64 h-64 bg-purple-200 rounded-full"
        style={{ translateY }}
      />
    </div>
  );
};

export default VideoCarouselClient;
