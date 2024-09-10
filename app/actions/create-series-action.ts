'use server'

import { revalidatePath } from 'next/cache'

export async function createSeries(prevState: { message: string }, formData: FormData) {
  // Extract form data
  const destination = formData.get('destination')
  const content = formData.get('content')
  const customPrompt = formData.get('customPrompt')
  const narrationVoice = formData.get('narrationVoice')
  const artStyle = formData.get('artStyle')
  const videoLanguage = formData.get('videoLanguage')
  const durationPreference = formData.get('durationPreference')

  // Here you would typically save this data to your database
  // For now, we'll just log it
  console.log({
    destination,
    content,
    customPrompt,
    narrationVoice,
    artStyle,
    videoLanguage,
    durationPreference
  })

  // Revalidate the current path to reflect any changes
  revalidatePath('/')

  

  return { message: 'Series created successfully!' }
}