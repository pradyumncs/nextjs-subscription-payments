import React from 'react'
import { Pricing } from '@/landingpage/sections/Pricing'
import { Footer } from '@/landingpage/sections/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 ">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
         <Pricing/>
        </div>
      </div>
<Footer/>
    </div>
  )
}