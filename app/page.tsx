// app/page.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "./components/ui/button"
import { WaitlistModal } from './components/WaitlistModal'

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white overflow-hidden">
      {/* Header */}
      <header className="flex justify-start items-center p-6 relative z-10">
        <div className="flex items-center gap-4">
          {/* Twitter/X Link */}
          <a 
            href="https://x.com/unruggable_io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* GitHub Link */}
          <a 
            href="https://github.com/hogyzen12/unruggable-app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-8 lg:py-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl mb-12 lg:mb-0">
          {/* Logo/Brand */}
          <div className="flex items-center mb-8">
            <Image
              src="/white_seethru_logo.png"
              alt="Unruggable Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4"
            />
            <h1 className="text-4xl lg:text-6xl font-bold">unruggable</h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            THE FIRST SOLANA<br />
            NATIVE HARDWARE<br />
            WALLET.
          </h2>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl mb-8 font-medium">
            Hot wallet UX. Cold wallet security.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              onClick={() => setIsWaitlistOpen(true)}
              className="relative bg-white text-orange-500 hover:bg-white/90 rounded-full px-8 py-4 text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105
              before:absolute before:inset-[-2px] before:rounded-full before:bg-white/30 
              before:animate-ping before:duration-[6000ms]
              ring-1 ring-white/30 
              hover:ring-white/50 hover:shadow-white/30 hover:shadow-xl"
            >
              <span className="relative z-10">Join Our Waitlist!</span>
            </Button>
          </div>
        </div>

        {/* Right Content - Device Mockups */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Phone Mockup - Left */}
            <div className="flex justify-center transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2">
              <Image
                src="/phone-mockup.png"
                alt="Unruggable Mobile Interface"
                width={200}
                height={400}
                className="w-[140px] h-[280px] sm:w-[160px] sm:h-[320px] lg:w-[180px] lg:h-[360px] object-contain drop-shadow-xl"
                style={{ 
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                  imageRendering: 'crisp-edges' 
                }}
              />
            </div>
            
            {/* Tablet Mockup - Right */}
            <div className="flex justify-center transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2">
              <Image
                src="/tablet-mockup.png"
                alt="Unruggable Tablet Interface"
                width={280}
                height={400}
                className="w-[180px] h-[280px] sm:w-[220px] sm:h-[320px] lg:w-[260px] lg:h-[360px] object-contain drop-shadow-xl"
                style={{ 
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                  imageRendering: 'crisp-edges' 
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  )
}