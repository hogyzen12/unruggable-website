// app/api/waitlist/route.ts
import { NextResponse } from 'next/server'
import { addToWaitlist } from '@/lib/redis'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email?.includes('@')) {
      return NextResponse.json({ 
        error: 'Please enter a valid email address'
      }, { status: 400 })
    }

    const success = await addToWaitlist(email)
    if (!success) {
      return NextResponse.json({ 
        error: 'This email is already on our waitlist!'
      }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (_error) {
    return NextResponse.json({ 
      error: 'Unable to join waitlist at this time'
    }, { status: 500 })
  }
}