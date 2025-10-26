'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "./components/ui/button"
import { WaitlistModal } from './components/WaitlistModal'
import { useValidatorData } from './hooks/useValidatorData'
import { useProgressiveTipData } from './hooks/useProgressiveTipData'
import { useAnimatedCounter } from './hooks/useAnimatedCounter'

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { data: validatorData, loading: validatorLoading, error: validatorError } = useValidatorData(60000); // Refresh every 60 seconds
  const tipData = useProgressiveTipData();
  
  // Animated counters for smooth number transitions
  const animatedTVL = useAnimatedCounter(validatorData?.totalValueUSD || 0, 1500);
  const animatedStake = useAnimatedCounter(validatorData?.activatedStake || 0, 1500);
  const animatedTransactions = useAnimatedCounter(tipData.totalTransactions, 800);

  // Helper function to format numbers with commas
  const formatNumber = (num: number, decimals: number = 0): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(num);
  };

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* SUBTLE DARK GRADIENT BACKGROUND BASED ON PROVIDED IMAGE */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-stone-900 to-amber-900/40"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-amber-700/20 via-transparent to-zinc-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/10 to-transparent"></div>
      
      {/* SUBTLE ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Gentle rotating gradient */}
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-conic from-amber-600/20 via-zinc-700/10 via-amber-700/15 to-amber-600/20 animate-spin-ultra-slow opacity-40"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] bg-gradient-radial from-amber-600/30 via-amber-700/10 to-transparent rounded-full blur-3xl animate-morph-refined-1"></div>
        <div className="absolute bottom-[-8%] left-[5%] w-[250px] h-[250px] bg-gradient-radial from-amber-500/20 via-zinc-600/15 to-transparent rounded-full blur-2xl animate-morph-refined-2"></div>
        
        {/* Accent streaks matching the provided image style */}
        <div className="absolute top-[10%] left-[20%] w-20 h-1 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent rotate-12 animate-drift-refined-1"></div>
        <div className="absolute top-[80%] right-[25%] w-16 h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent rotate-45 animate-drift-refined-2"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center px-6 lg:px-12 py-6">
          <div className="flex items-center">
            <Image
              src="/logo_white.svg"
              alt="Unruggable Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-2xl font-bold">unruggable</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://twitter.com/unruggable_io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/hogyzen12/unruggable-app/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </header>

        {/* Hero Section - Improved Layout with Video Higher */}
        <main className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 py-8 lg:py-12 min-h-[70vh]">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl mb-8 lg:mb-0 lg:pr-12 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
              THE FIRST SOLANA<br />
              NATIVE HARDWARE<br />
              WALLET.
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl mb-6 text-white/80 font-medium">
              Hot wallet UX. Cold wallet security.
            </p>

            {/* Status Badge */}
            <div className="flex items-center mb-8 justify-center lg:justify-start">
              <div className="bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-amber-200">Closed Alpha • Q4 2025 Release</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video Positioned Higher */}
          <div className="flex-1 max-w-2xl relative flex flex-col items-center lg:items-end">
            {/* Video moved higher with reduced bottom margin */}
            <div className="relative group w-full max-w-[700px] mb-6">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                style={{ 
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
                }}
              >
                <source src="/Unruggable_Animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay for better integration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Join Waitlist Button - Centered under the video */}
            <div className="flex justify-center w-full max-w-[700px]">
              <Button 
                onClick={() => setIsWaitlistOpen(true)}
                className="px-12 py-6 text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </main>

        {/* Metrics Dashboard Section - Updated */}
        <section className="px-6 lg:px-12 py-16 mt-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header - Dynamic */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
                {validatorData && !validatorLoading 
                  ? `Unruggable secures over $${Math.floor(validatorData.totalValueUSD / 1000000)}M in value`
                  : 'Unruggable secures over $10M in value'
                }
              </h2>
              <p className="text-lg text-white/60">
                Real-time insights into the Unruggable ecosystem
              </p>
            </div>

            {/* Metrics Grid - Live Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* TVL Card - Live Data */}
              <div className="text-center">
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-amber-500/30 hover:scale-105">
                  <h3 className="text-sm font-medium text-white/60 mb-2">Total Value Secured</h3>
                  {validatorLoading ? (
                    <div className="text-3xl font-bold text-white/50 animate-pulse">Loading...</div>
                  ) : validatorError ? (
                    <div className="text-xl font-bold text-red-400">Error</div>
                  ) : validatorData ? (
                    <div className="text-3xl font-bold text-white">${formatNumber(animatedTVL, 0)}</div>
                  ) : (
                    <div className="text-3xl font-bold text-white">$0</div>
                  )}
                </div>
              </div>

              {/* Staked SOL Card - Live Data */}
              <div className="text-center">
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:scale-105">
                  <h3 className="text-sm font-medium text-white/60 mb-2">Validator Staked</h3>
                  {validatorLoading ? (
                    <div className="text-3xl font-bold text-white/50 animate-pulse">Loading...</div>
                  ) : validatorError ? (
                    <div className="text-xl font-bold text-red-400">Error</div>
                  ) : validatorData ? (
                    <div className="text-3xl font-bold text-white">{formatNumber(animatedStake, 0)} SOL</div>
                  ) : (
                    <div className="text-3xl font-bold text-white">0 SOL</div>
                  )}
                </div>
              </div>

              {/* Transactions Card - Live Data with Progress */}
              <div className="text-center">
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-blue-500/30 hover:scale-105">
                  <h3 className="text-sm font-medium text-white/60 mb-2">Total Transactions</h3>
                  {tipData.isLoading ? (
                    <div>
                      <div className="text-3xl font-bold text-white">{formatNumber(animatedTransactions, 0)}</div>
                      <div className="mt-2 w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 animate-pulse"></div>
                      </div>
                      <div className="text-xs text-white/50 mt-1">
                        Loading...
                      </div>
                    </div>
                  ) : tipData.error ? (
                    <div className="text-xl font-bold text-red-400">Error</div>
                  ) : (
                    <div className="text-3xl font-bold text-white">{formatNumber(animatedTransactions, 0)}</div>
                  )}
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Pre-orders Coming Soon Section */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/30 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-12 relative overflow-hidden">
              
              {/* Background decorations matching your theme */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-20 h-20 bg-amber-600/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
                  PRE-ORDERS COMING SOON...
                </h2>
                
                <Button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Join Waitlist Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Advertisement Video Section - FIXED */}
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                style={{ 
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
                }}
                onError={(e) => console.error('Video failed to load:', e)}
              >
                <source src="/advert_web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay for better integration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Waitlist Modal */}
        <WaitlistModal 
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
        />
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes spin-ultra-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-ultra-slow {
          animation: spin-ultra-slow 60s linear infinite;
        }
        
        @keyframes morph-refined-1 {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% { 
            transform: scale(1.1) rotate(180deg);
            border-radius: 40% 60% 70% 30% / 30% 70% 40% 60%;
          }
        }
        
        .animate-morph-refined-1 {
          animation: morph-refined-1 15s ease-in-out infinite;
        }
        
        @keyframes morph-refined-2 {
          0%, 100% { 
            transform: scale(1) translateX(0px) translateY(0px);
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
          }
          50% { 
            transform: scale(1.05) translateX(15px) translateY(-10px);
            border-radius: 60% 40% 30% 70% / 40% 60% 30% 70%;
          }
        }
        
        .animate-morph-refined-2 {
          animation: morph-refined-2 20s ease-in-out infinite;
        }
        
        @keyframes drift-refined-1 {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(12deg); }
          50% { transform: translateX(20px) translateY(-15px) rotate(15deg); }
        }
        
        .animate-drift-refined-1 {
          animation: drift-refined-1 8s ease-in-out infinite;
        }
        
        @keyframes drift-refined-2 {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(45deg); }
          50% { transform: translateX(-15px) translateY(10px) rotate(42deg); }
        }
        
        .animate-drift-refined-2 {
          animation: drift-refined-2 12s ease-in-out infinite;
        }

        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
        
        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}