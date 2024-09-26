// app/run-script.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { runPythonScript } from '@/app/actions/server'

export default function RunScript() {
  const [csvFilename, setCsvFilename] = useState('')
  const [startingRow, setStartingRow] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult('')

    try {
      const response = await runPythonScript(csvFilename, startingRow)

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
          <label htmlFor="csvFilename" className="block text-sm font-medium text-gray-700">
            CSV Filename
          </label>
          <input
            type="text"
            id="csvFilename"
            value={csvFilename}
            onChange={(e) => setCsvFilename(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="startingRow" className="block text-sm font-medium text-gray-700">
            Starting Row
          </label>
          <input
            type="number"
            id="startingRow"
            value={startingRow}
            onChange={(e) => setStartingRow(e.target.value)}
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