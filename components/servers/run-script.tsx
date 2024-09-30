'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { runPythonScript } from '@/app/actions/server'

export default function RunScript() {
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult('')

    try {
      const response = await runPythonScript(title,email)

      if ('error' in response) {
        setResult(`Error: ${response.error}`)
      } else {
        setResult(`Script executed successfully. Output: ${response.output}`)
      }
    } catch (error) {
      setResult('An error occurred while running the script.')
    } finally {
      setIsLoading(false)
      router.refresh()
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Run Python Script</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
     
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
        >
          {isLoading ? 'Running...' : 'Run Script'}
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  )
}
