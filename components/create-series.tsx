"use client"

import * as React from "react"
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

export function CreateSeries() {
  const [selectedStyle, setSelectedStyle] = React.useState("")

  return (
    <div className="min-h-screen bg-[#1e1b2e] text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold text-center mb-2">CREATE A SERIES</h1>
        <p className="text-center text-lg mb-8">
          Schedule a series of Faceless Videos to post on auto-pilot.
        </p>
        <div className="bg-white text-[#1e1b2e] rounded-lg p-8 space-y-8">
          {/* Step 1 and 2 remain unchanged */}
          
          {/* Updated Step 3 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-[#7c3aed] text-white px-3 py-1 rounded-full text-sm">
                Step 3
              </span>
              <h2 className="text-2xl font-semibold text-[#7c3aed]">Series Settings</h2>
            </div>
            <p>Preferences for every video in your series</p>
            
            <div className="space-y-2">
              <Label htmlFor="narration-voice" className="flex items-center space-x-2">
                <Mic className="w-4 h-4" />
                <span>Narration Voice</span>
              </Label>
              <Select>
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
                  {["Autoshorts", "Comic Book", "Disney Toon", "Studio Ghibli", "Chill Beats"].map((style) => (
                    <ArtStyleCard 
                      key={style} 
                      name={style} 
                      isSelected={selectedStyle === style}
                      onClick={() => setSelectedStyle(style)}
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
              <Select>
                <SelectTrigger id="video-language" className="w-full">
                  <SelectValue placeholder="English US" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english-us">English US</SelectItem>
                  {/* Add more language options as needed */}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration-preference" className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Duration Preference</span>
              </Label>
              <Select>
                <SelectTrigger id="duration-preference" className="w-full">
                  <SelectValue placeholder="60 to 90 seconds" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="60-90">60 to 90 seconds</SelectItem>
                  {/* Add more duration options as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* New Step 4 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-[#7c3aed] text-white px-3 py-1 rounded-full text-sm">
                Step 4
              </span>
              <h2 className="text-2xl font-semibold text-[#7c3aed]">Create</h2>
            </div>
            <p>You will be able to preview your upcoming videos before posting</p>
            <Button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white">
              CREATE SERIES +
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArtStyleCard({ name, isSelected, onClick }: { name: string; isSelected: boolean; onClick: () => void }) {
  return (
    <div 
      className={`flex flex-col items-center space-y-2 cursor-pointer ${isSelected ? "'ring-2 ring-[#7c3aed] rounded-lg'" : "''"}`}
      onClick={onClick}
    >
      <div className="w-40 h-40 rounded-lg bg-gray-200 flex items-center justify-center relative">
        {/* Placeholder for art style image */}
        <span className="text-gray-500">{name}</span>
        {isSelected && (
          <div className="absolute top-2 right-2 bg-[#7c3aed] rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}