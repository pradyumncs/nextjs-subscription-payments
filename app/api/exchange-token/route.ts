import { NextResponse } from 'next/server'

// Replace these with your actual values
const THREADS_APP_ID = '1072279067810721'
const THREADS_APP_SECRET = '1fabdce0e5ddd741670c5679c0624f46'
const REDIRECT_URI = 'https://youshorts.ai/auth/threadcallback'

export async function POST(request: Request) {
  const { code } = await request.json()

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 })
  }

  try {
    const response = await fetch('https://graph.threads.net/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: THREADS_APP_ID,
        client_secret: THREADS_APP_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code: code,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to exchange code for token')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error exchanging code for token:', error)
    return NextResponse.json({ error: 'Failed to exchange code for token' }, { status: 500 })
  }
}