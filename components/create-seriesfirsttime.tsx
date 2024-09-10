'use client'

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
import { useFormState, useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { createSeriesWithAuth, State } from '../app/actions/firstimeagain'

const initialState: State = {
  message: '',
}

export function CreateSeries() {
  const [selectedStyle, setSelectedStyle] = React.useState("")
  const [state, formAction] = useFormState(createSeriesWithAuth, initialState)
  const router = useRouter()

  React.useEffect(() => {
    if (state.message === 'Series created successfully!') {
      router.push('/dashboard')
    } else if (state.message === 'Authentication required') {
      router.push('/signin')
    }
  }, [state.message, router])

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold text-center mb-2">CREATE A SERIES</h1>
        <p className="text-center text-lg mb-8">
          Schedule a series of Faceless Videos to post on auto-pilot.
        </p>
        <form action={formAction} className="bg-white text-[#1e1b2e] rounded-lg p-8 space-y-8">
          {/* ... (rest of the form remains the same) ... */}
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-[#7c3aed] text-white px-3 py-1 rounded-full text-sm">
                Step 4
              </span>
              <h2 className="text-3xl font-semibold text-[#7c3aed]">Create</h2>
            </div>
            <p>You will be able to preview your upcoming videos before posting</p>
            <SubmitButton />
          </div>
          
          {state?.message && (
            <p className="mt-4 text-green-600">{state.message}</p>
          )}
        </form>
      </div>
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <Button type="submit" className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white" disabled={pending}>
      {pending ? 'Creating...' : 'CREATE SERIES +'}
    </Button>
  )
}

function ArtStyleCard({ name, isSelected, onClick }: { name: string; isSelected: boolean; onClick: () => void }) {
  return (
    <div 
      className={`flex flex-col items-center space-y-2 cursor-pointer ${isSelected ? 'ring-2 ring-[#7c3aed] rounded-lg' : ''}`}
      onClick={onClick}
    >
      <div className="w-40 h-40 rounded-lg bg-gray-200 flex items-center justify-center relative">
        <span className="text-gray-500">{name}</span>
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
  )
}