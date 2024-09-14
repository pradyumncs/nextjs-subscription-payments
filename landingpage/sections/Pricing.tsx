"use client"
import { twMerge } from "tailwind-merge";
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "✅Creates 1 video",
      "✅ 1 Series",
      "✅ Edit & preview videos",
      "❌ Auto-post to channel",
      "❌ HD Video Resolution",
      "❌ Background Music",
      "❌ Voice Cloning",
      "❌ No Watermark"
    ] 
  },
  
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "✅ Posts 3 times a week",
      "✅ 1 Series",
      "✅ Edit & preview videos",
      "✅ Auto-post to channel",
      "✅ HD Video Resolution",
      "✅ Background Music",
      "✅ Voice Cloning",
      "✅ No Watermark"
    ]
  },
  
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "✅ Posts once a day",
      "✅ 1 Series",
      "✅ Edit & preview videos",
      "✅ Auto-post to channel",
      "✅ HD Video Resolution",
      "✅ Background Music",
      "✅ Voice Cloning",
      "✅ No Watermark"
    ]
  }
];  

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">Simple pricing. No hidden fees.</p>
        </div>
      <div className=' flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-ends lg:justify-center'>
        {pricingTiers.map (
          ({ 
            title, 
            monthlyPrice, 
            buttonText, 
            popular, 
            inverse, 
            features 
          }) => (
            <div key={title} className={twMerge(
              "card", 
              inverse === true && 'bg-black border-black text-white')}
            >
              <div className='flex justify-between'>
                <h3 className={twMerge(
                  "text-lg font-bold text-black/50", 
                  inverse === true && 'text-white')}
                > 
                  {title} 
                </h3>
                {popular === true && (
                <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 '>
                  <motion.span 
                  animate={{
                    backgroundPositionX: "100%",
                  }}
                  transition={{
                    duration: 1, 
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium'>
                    Popular
                  </motion.span>
                </div>
                )}
              </div>
              <div className="flex items-baseline gao-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none "> ${monthlyPrice} </span>
                <span className={twMerge(
                  " tracking-tight font-bold text-black/50", 
                  inverse === true && 'text-white/60')}
                > 
                  /month 
                </span>
              </div>
              <button className={twMerge(
                'btn btn-primary w-full mt-[30px]', 
                inverse === true && 'bg-white text-black')}
              > 
                {buttonText} 
              </button>
              <ul className='flex flex-col gap-5 mt-8'>
                {features.map((feature, index) => (
                  <li key={index} className='text-sm flex items-center gap-4'>
                    <span> {feature} </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
      </div>
    </section>
  );
};
