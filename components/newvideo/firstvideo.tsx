"use client"

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Download, Play } from "lucide-react"

export default function Firstvideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoUrl = "https://pmoney.s3.ap-south-1.amazonaws.com/history+(10).mp4"

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = videoUrl
    link.download = 'video.mp4' // You can set a default name here
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EAEEFE]">
      <div className="relative w-full max-w-md">
        <div className="mb-4">
          <Button onClick={handleDownload} className="w-full">
            <Download className="mr-2 h-6 w-6" /> Download Video
          </Button>
        </div>
        <div className="relative bg-[#EAEEFE] rounded-lg shadow-lg overflow-hidden" style={{ paddingBottom: '170%' }}>
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={videoUrl}
              onClick={togglePlay}
            />
            {!isPlaying && (
              <button
                className="absolute inset-0 flex items-center justify-center"
                onClick={togglePlay}
              >
                <Play className="w-20 h-20 text-white opacity-70 hover:opacity-100 transition-opacity" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}