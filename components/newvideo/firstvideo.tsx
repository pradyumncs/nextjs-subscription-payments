'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Download, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FirstvideoProps {
  videoUrl: string;
}

export default function Firstvideo({ videoUrl }: FirstvideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 100) // Add a small delay before showing the video
          return 100
        }
        return prev + 1
      })
    }, 200)// 20 seconds / 100 steps = 200ms per step

    return () => clearInterval(timer)
  }, [])

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
    link.download = 'video.mp4'
    link.target = '_blank'  // Open in a new tab
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EAEEFE]">
      <div className="relative w-full max-w-md">
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Button onClick={handleDownload} className="w-full">
                <Download className="mr-2 h-6 w-6" /> Download Video
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative bg-[#EAEEFE] rounded-lg shadow-lg overflow-hidden" style={{ paddingBottom: '170%' }}>
          <AnimatePresence>
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500"
              >
                <motion.div
                  className="text-6xl font-bold text-white"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {loadingProgress}%
                </motion.div>
                <motion.div
                  className="w-64 h-2 bg-white/30 rounded-full mt-4 overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: 256 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}