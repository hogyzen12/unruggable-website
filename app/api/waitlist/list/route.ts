// app/api/waitlist/list/route.ts
import { NextResponse } from 'next/server'
import { getWaitlistEmails } from '@/lib/redis'
import { isValidAdminToken } from '@/lib/auth'

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization')
  const token = authHeader?.replace('Bearer ', '')

  if (!token || !isValidAdminToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const emails = await getWaitlistEmails()
    return NextResponse.json({ emails })
  } catch (_error) {
    return NextResponse.json({ 
      error: 'Failed to fetch waitlist'
    }, { status: 500 })
  }
}