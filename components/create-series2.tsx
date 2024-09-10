"'use client'"

import * as React from "react"
import { Mail } from "lucide-react"
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

export function CreateSeries() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold text-center mb-2">CREATE A SERIES</h1>
        <p className="text-center text-lg mb-8">
          Schedule a series of Faceless Videos to post on auto-pilot.
        </p>
        <div className="bg-white text-[#1e1b2e] rounded-lg p-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-[#7c3aed] text-white px-3 py-1 rounded-full text-sm">
                Step 1
              </span>
              <h2 className="text-2xl font-semibold text-[#7c3aed]">Destination</h2>
            </div>
            <p>The account where your video series will be posted</p>
            <Select>
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
                Step 2
              </span>
              <h2 className="text-2xl font-semibold text-[#7c3aed]">Content</h2>
            </div>
            <p>What will your video series be about?</p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Content" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom Topic</SelectItem>
              </SelectContent>
            </Select>
            <div className="space-y-2">
              <Label htmlFor="custom-prompt">Custom Prompt</Label>
              <Textarea
                id="custom-prompt"
                placeholder="Example: Please share a concise and captivating account of lesser-known, yet intriguing, historical event. The event MUST be real factual. Begin with introduction or question"
                className="h-32"
              />
            </div>
            <div className="text-right text-sm text-gray-500">0 / 2500</div>
            <Button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9]">
              Prompt Writing Tool
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}