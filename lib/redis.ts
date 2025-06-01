// lib/redis.ts
import { kv } from '@vercel/kv'

const WAITLIST_KEY = 'waitlist'

interface WaitlistEntry {
  email: string;
  timestamp: string;
}

export async function addToWaitlist(email: string): Promise<boolean> {
  const entries: WaitlistEntry[] = await kv.get(WAITLIST_KEY) || []
  
  // Check for duplicate
  if (entries.some(entry => entry.email === email)) {
    return false
  }
  
  // Add new entry
  const newEntry: WaitlistEntry = {
    email,
    timestamp: new Date().toISOString()
  }
  
  await kv.set(WAITLIST_KEY, [...entries, newEntry])
  return true
}

export async function getWaitlistEmails(): Promise<WaitlistEntry[]> {
  const entries: WaitlistEntry[] = await kv.get(WAITLIST_KEY) || []
  return entries.sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )
}

export async function getWaitlistCount(): Promise<number> {
  const entries: WaitlistEntry[] = await kv.get(WAITLIST_KEY) || []
  return entries.length
}