// app/admin/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'

interface WaitlistEntry {
  email: string;
  timestamp: string;
}

export default function AdminPanel() {
  const [token, setToken] = useState('')
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Try to load token from localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken')
    if (savedToken) {
      setToken(savedToken)
      fetchEmails(savedToken)
    }
  }, [])

  const fetchEmails = async (currentToken: string) => {
    try {
      // Log the token being used (remove in production)
      console.log('Using token:', currentToken)
      
      // Explicitly construct the headers
      const headers = new Headers()
      headers.append('Authorization', `Bearer ${currentToken}`)
      
      const response = await fetch('/api/waitlist/list', {
        method: 'GET',
        headers: headers
      })
  
      if (response.ok) {
        const data = await response.json()
        setEntries(data.emails)
        setIsAuthenticated(true)
        localStorage.setItem('adminToken', currentToken)
      } else {
        // Log the error response (remove in production)
        const errorData = await response.json()
        console.error('Authentication failed:', errorData)
        
        setIsAuthenticated(false)
        localStorage.removeItem('adminToken')
      }
    } catch (_error) {
      console.error('Request failed:', _error)
      setIsAuthenticated(false)
    }
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchEmails(token)
  }

  const handleLogout = () => {
    setToken('')
    setEntries([])
    setIsAuthenticated(false)
    localStorage.removeItem('adminToken')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-center text-gray-100">Admin Access</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent"
              placeholder="Enter admin token"
              required
            />
            <Button 
              type="submit"
              className="w-full bg-[#FF7043] hover:bg-[#FF7043]/90"
            >
              Access Admin Panel
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Waitlist Admin Panel</h1>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="border-[#FF7043]/20 text-gray-300 hover:bg-[#FF7043]/10"
          >
            Logout
          </Button>
        </div>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">
            Waitlist Entries ({entries.length})
          </h2>
          
          <div className="relative overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-300">Email</TableHead>
                  <TableHead className="text-gray-300">Date Added</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.email}>
                    <TableCell className="text-gray-300">{entry.email}</TableCell>
                    <TableCell className="text-gray-400">
                      {new Date(entry.timestamp).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}