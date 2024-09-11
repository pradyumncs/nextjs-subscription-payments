"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  comment: string
  avatar: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Travis M",
    role: "Marketer",
    comment: "They ship insanely fast. I've got the fastest feature implementation based on my suggestion ever.",
    avatar: "/placeholder.svg?height=24&width=24",
    stars: 5
  },
  {
    id: 2,
    name: "Dennis",
    role: "Founder",
    comment: "Mind-blowing experience!",
    avatar: "/placeholder.svg?height=24&width=24",
    stars: 5
  },
  {
    id: 3,
    name: "Aleks J",
    role: "Marketer",
    comment: "Wow, the best content conversion tool I've used so far. Happy customer.",
    avatar: "/placeholder.svg?height=24&width=24",
    stars: 5
  },
  {
    id: 4,
    name: "Guin W",
    role: "Partner",
    comment: "It truly is so cool, mind-blowing what it can do relatively quickly! I love it.",
    avatar: "/placeholder.svg?height=24&width=24",
    stars: 5
  },
  {
    id: 5,
    name: "Anna B",
    role: "Marketer",
    comment: "I can't believe I was creating videos manually before. This is a game-changer.",
    avatar: "/placeholder.svg?height=24&width=24",
    stars: 5
  }
]

const TestimonialRow = ({ speed, testimonials }: { speed: number, testimonials: Testimonial[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const scroll = () => {
        scrollElement.scrollLeft += 1
        if (scrollElement.scrollLeft >= (scrollElement.scrollWidth - scrollElement.clientWidth) / 2) {
          scrollElement.scrollLeft = 0
        }
      }
      const intervalId = setInterval(scroll, speed)
      return () => clearInterval(intervalId)
    }
  }, [speed])

  return (
    <div 
      ref={scrollRef} 
      className="flex overflow-x-hidden space-x-4 py-2"
      style={{ width: '200%' }}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div key={index} className="flex-none w-56 bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <div>
                <h3 className="font-semibold text-xs">{testimonial.name}</h3>
                <p className="text-xs text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-700 line-clamp-2">{testimonial.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default function ScrollingTestimonials() {
  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div className="space-y-2">
        <TestimonialRow speed={50} testimonials={testimonials} />
        <TestimonialRow speed={70} testimonials={testimonials.slice().reverse()} />
      </div>
    </div>
  )
}