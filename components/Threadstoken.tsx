'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Replace these with your actual values
const THREADS_APP_ID = '1072279067810721'
const REDIRECT_URI = 'https://youshorts.ai/auth/threadcallback'
const SCOPES = ['threads_basic', 'threads_content_publish']

export default function ThreadsAuth() {
    const [accessToken, setAccessToken] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

  const handleLogin = () => {
    const authUrl = `https://threads.net/oauth/authorize?client_id=${THREADS_APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${SCOPES.join(',')}&response_type=code`
    window.location.href = authUrl
  }

  useEffect(() => {
    // Check if there's a code in the URL (after redirect)
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    if (code) {
      // Exchange the code for an access token
      exchangeCodeForToken(code)
    }
  }, [])

  const exchangeCodeForToken = async (code: string) => {
    try {
      const response = await fetch('/api/exchange-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to exchange code for token')
      }

      setAccessToken(data.access_token)
      setError(null)
      
      // Clear the code from the URL
      router.replace('/auth/callback')
    } catch (error: unknown) {
      console.error('Error exchanging code for token:', error)
      setError(error instanceof Error ? error.message : 'An unknown error occurred')
      setAccessToken(null)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      ) : accessToken ? (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Authentication Successful</h2>
          <p className="mb-4">Your access token:</p>
          <pre className="bg-gray-200 p-4 rounded overflow-x-auto max-w-lg">
            {accessToken}
          </pre>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login with Threads
        </button>
      )}
    </div>
  )
}