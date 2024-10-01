import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { title, name } = await request.json();

  try {
    const response = await fetch('http://45.55.50.247:3000/submit-job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, name }),
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit job' }, { status: 500 });
  }
}