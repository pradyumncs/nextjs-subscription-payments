'use client'

import React from 'react'
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function CongratsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Fireworks
        autorun={{ speed: 1 }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      />
      <div className="text-center space-y-8 relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
          Congratulations!
        </h1>
        <p className="text-2xl text-white mb-8">
          Your video will be sent to your email shortly.
        </p>
        <div className="space-y-4">
          <p className="text-xl text-white">
            Get ready to share your amazing content with the world!
          </p>
          <p className="text-lg text-white opacity-80">
            Keep an eye on your inbox for the finished product.
          </p>
        </div>
        <Link href="/">
          <Button className="mt-8 px-8 py-4 bg-white text-purple-600 rounded-full text-xl font-semibold hover:bg-opacity-90 transition duration-300">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}