'use client'

import * as React from "react"
import { useState, useEffect } from "react"
import { Mail, Mic, Brush, Globe, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { createSeries } from "../app/actions/tagfirstcombined"
import { useFormState, useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { runPythonScript } from '@/app/actions/server'


// Import images
import youShortsImage from '@/assets/work/1.webp'
import comicBookImage from '@/assets/work/2.webp'
import disneyImage from '@/assets/work/3.png'
import studioGhibliImage from '@/assets/work/5.webp'
import ChillBeatsImage from '@/assets/work/4.png'

type ArtStyle = "YouShorts" | "Comic Book" | "Disney Toon" | "Studio Ghibli" | "Chill Beats"


interface FirsttimeProps {
  userEmail: string;
  
}

interface StyleImage {
  src: any // Using 'any' here as a workaround for the StaticImageData type
  alt: string
}

type StyleImages = {
  [key in ArtStyle]: StyleImage
}

const styleImages: StyleImages = {
  "YouShorts": { src: youShortsImage, alt: "YouShorts Style" },
  "Comic Book": { src: comicBookImage, alt: "Comic Book Style" },
  "Disney Toon": { src: disneyImage, alt: "Disney Toon Style" },
  "Studio Ghibli": { src: studioGhibliImage, alt: "Studio Ghibli Style" },
  "Chill Beats": { src: ChillBeatsImage, alt: "Chill Beats Style" },
}

const artStyles: ArtStyle[] = ["YouShorts", "Comic Book", "Disney Toon", "Studio Ghibli", "Chill Beats"]

const initialState = {
  message: '',
}

export default function Component({ userEmail }: FirsttimeProps) {
  const [email, setEmail] = useState(userEmail || "");
  const [selectedStyle, setSelectedStyle] = React.useState<ArtStyle>("YouShorts")
  const [selectedTopic, setSelectedTopic] = useState("scary")
  const [state, formAction] = useFormState(createSeries, initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  const router = useRouter()
  const [title, setTitle] = useState('')

  console.log(email)
  console.log(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult('')

    try {
      const response = await runPythonScript(title, email)

      if ('error' in response) {
        setResult(`Error: ${response.error}`)
      } else {
        setResult(`Script executed successfully. Output: ${response.output}`)
        // Redirect to /congrats page on successful submission
        router.push('/congrats')
      }
    } catch (error) {
      setResult('An error occurred while running the script.')
    } finally {
      setIsLoading(false)
    }
  }
 

  useEffect(() => {
    // Set the initial art style in the form
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = 'artStyle'
    input.value = selectedStyle
    document.querySelector('form')?.appendChild(input)
  }, [])

  return (
<div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col items-center justify-center p-4 rounded-2xl">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold text-center mb-2">CREATE A VIDEO</h1>
        <p className="text-center text-lg mb-8">
          Schedule a series of Faceless Videos to post on auto-pilot.
        </p>
        <form onSubmit={handleSubmit} className="bg-white text-[#1e1b2e] rounded-lg p-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-[#7c3aed] text-white px-3 py-1 rounded-full text-sm">
                Step 1
              </span>
              <h2 className="text-3xl font-semibold text-[#7c3aed]">Destination</h2>
            </div>
            <p className="text-lg">The account where your video series will be posted</p>
            <Select name="destination" defaultValue="email">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Email Me Instead" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email Me Instead</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-[#7c3aed] text-white px-3 py-1 rounded-full text-sm">
                Step 4
              </span>
              <h2 className="text-3xl font-semibold text-[#7c3aed]">Create</h2>
            </div>
            <p className="text-lg">You will be able to preview your upcoming videos before posting</p>
            <Input
              type="text"
              placeholder="Enter video title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
            
          </div>
        

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-[#7c3aed] text-white px-3 py-1 rounded-full text-sm">
                Step 3
              </span>
              <h2 className="text-3xl font-semibold text-[#7c3aed]">Series Settings</h2>
            </div>
            <p className="text-lg">Preferences for every video in your series</p>
            
            <div className="space-y-2">
              <Label htmlFor="narration-voice" className="flex items-center space-x-2">
                <Mic className="w-4 h-4" />
                <span>Narration Voice</span>
              </Label>
              <Select name="narrationVoice" defaultValue="onyx">
                <SelectTrigger id="narration-voice" className="w-full">
                  <SelectValue placeholder="Select a voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="onyx">Onyx</SelectItem>
                  <SelectItem value="fable">Fable</SelectItem>
                  <SelectItem value="nova">Nova</SelectItem>
                  <SelectItem value="shimmer">Shimmer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="art-style" className="flex items-center space-x-2">
                <Brush className="w-4 h-4" />
                <span>Art Style</span>
              </Label>
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                  {artStyles.map((style) => (
                    <ArtStyleCard 
                      key={style} 
                      name={style} 
                      isSelected={selectedStyle === style}
                      onClick={() => {
                        setSelectedStyle(style)
                        const input = document.querySelector('input[name="artStyle"]')
                        if (input) {
                          (input as HTMLInputElement).value = style
                        } else {
                          const newInput = document.createElement('input')
                          newInput.type = 'hidden'
                          newInput.name = 'artStyle'
                          newInput.value = style
                          document.querySelector('form')?.appendChild(newInput)
                        }
                      }}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <div className="space-y-2">
              <Label htmlFor="video-language" className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Video Language</span>
              </Label>
              <Select name="videoLanguage" defaultValue="english-us">
                <SelectTrigger id="video-language" className="w-full">
                  <SelectValue placeholder="English US" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english-us">English US</SelectItem>
                  <SelectItem value="english-uk">English UK</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration-preference" className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Duration Preference</span>
              </Label>
              <Select name="durationPreference" defaultValue="30-60">
                <SelectTrigger id="duration-preference" className="w-full">
                  <SelectValue placeholder="30 to 60 seconds" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30-60">30 to 60 seconds</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <SubmitButton isLoading={isLoading} />

         
          
          {result && (
            <div className={`mt-4 text-center p-2 rounded ${
              result.includes('Error') 
                ? 'bg-red-100 text-red-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
interface ArtStyleCardProps {
  name: ArtStyle
  isSelected: boolean
  onClick: () => void
}

function ArtStyleCard({ name, isSelected, onClick }: ArtStyleCardProps) {
  return (
    <div 
      className={`flex flex-col items-center space-y-2 cursor-pointer ${isSelected ? 'ring-2 ring-[#7c3aed] rounded-lg' : ''}`}
      onClick={onClick}
    >
      <div className="w-40 h-40 rounded-lg bg-gray-200 flex items-center justify-center relative overflow-hidden">
        {styleImages[name] ? (
          <Image 
            src={styleImages[name]!.src} 
            alt={styleImages[name]!.alt} 
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <span className="text-gray-500">{name}</span>
        )}
        {isSelected && (
          <div className="absolute top-2 right-2 bg-[#7c3aed] rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

interface SubmitButtonProps {
  isLoading: boolean;
}
function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <Button type="submit" className="w-full p-7 bg-[#7c3aed] hover:bg-[#6d28d9] text-white" disabled={isLoading}>
      {isLoading ? 'Creating...' : 'CREATE VIDEO'}
    </Button>
  );
}
