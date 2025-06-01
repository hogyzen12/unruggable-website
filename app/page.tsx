// page.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "./components/ui/button"
import { WaitlistModal } from './components/WaitlistModal'

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main>
        {/* Banner Section */}
        <section>
          <div className="relative w-full">
            <Image
              src="/banner.png"
              alt="Unruggable Banner"
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="max-w-4xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
              The future of Self-custody is on Solana.
            </h2>
            <div className="text-center text-gray-300 mb-8 space-y-4">
              <p className="font-semibold text-[#FF7043]">
                Open Source Solana Wallet | 2x Honourable Mentions in Global Solana Hackathons
              </p>
              <div className="space-y-2">
                <p className="text-lg">
                  Unruggable is the first ever hardware wallet designed exclusively for Solana.
                </p>
                <p className="text-lg font-semibold text-[#FF7043]">
                  Your keys, your crypto, your Solana.
                </p>
                <p className="text-lg">
                  Launching soon.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button 
                variant="default" 
                className="group relative bg-[#FF7043] text-white text-lg py-6 px-12 transition-all duration-500 ease-in-out transform hover:scale-105 rounded-xl
                animate-[pulse_3s_ease-in-out_infinite]
                before:absolute before:inset-0 before:rounded-xl before:bg-[#FF7043]/20 
                before:animate-[ping_3s_ease-in-out_infinite]
                after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r 
                after:from-[#FF7043]/0 after:via-white/20 after:to-[#FF7043]/0 
                after:animate-[shimmer_3s_infinite] after:bg-[length:200%_100%]
                shadow-lg shadow-[#FF7043]/30 hover:shadow-2xl hover:shadow-[#FF7043]/70
                ring-2 ring-[#FF7043]/20 hover:ring-[#FF7043]/60
                hover:before:bg-gradient-to-r hover:before:from-[#FF7043] hover:before:via-orange-400 hover:before:to-[#FF7043]
                hover:before:blur-xl hover:before:animate-[gradient_3s_ease-in-out_infinite]
                hover:before:opacity-70"
                onClick={() => setIsWaitlistOpen(true)}
              >
                <span className="relative z-10 font-semibold">Join Waitlist for Release</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FF7043] via-orange-400 to-[#FF7043] opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_200%] blur-xl"></div>
              </Button>

              {/* Add the keyframes for the gradient animation */}
              <style jsx global>{`
                @keyframes gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}</style>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <video 
              controls 
              className="w-full h-full"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Social Links */}
        <section className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/logo.jpg"
                alt="Unruggable Logo"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-100">Connect With Us</h2>
            <p className="text-center text-gray-300 mb-6">
              Join our community and stay updated on the latest Unruggable news.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-[#FF7043]/20 text-gray-300 hover:bg-[#FF7043]/10 hover:text-white transition-colors"
                onClick={() => window.open('https://github.com/hogyzen12/unruggable', '_blank')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View on GitHub
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-[#FF7043]/20 text-gray-300 hover:bg-[#FF7043]/10 hover:text-white transition-colors"
                onClick={() => window.open('https://x.com/unruggable_io', '_blank')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                Follow on Twitter
              </Button>
            </div>
          </div>
        </section>

        <WaitlistModal 
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/30 backdrop-blur-sm text-gray-300 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Unruggable. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}