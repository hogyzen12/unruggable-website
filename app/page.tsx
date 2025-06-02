// app/page.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "./components/ui/button"
import { WaitlistModal } from './components/WaitlistModal'

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      {/* REFINED MONOCHROMATIC ORANGE & WHITE GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-orange-400/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-800/30 via-transparent to-white/15"></div>
      
      {/* REFINED ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Gentle rotating conic gradient */}
        <div className="absolute top-[-15%] left-[-15%] w-[130%] h-[130%] bg-gradient-conic from-orange-400/40 via-white/20 via-orange-500/30 via-white/15 to-orange-400/40 animate-spin-ultra-slow"></div>
        
        {/* Elegant floating orbs - Orange & White theme */}
        <div className="absolute top-[15%] right-[-8%] w-[400px] h-[400px] bg-gradient-radial from-orange-400/50 via-white/20 to-transparent rounded-full blur-3xl animate-morph-refined-1"></div>
        <div className="absolute bottom-[-12%] left-[3%] w-[350px] h-[350px] bg-gradient-radial from-white/30 via-orange-500/25 to-transparent rounded-full blur-2xl animate-morph-refined-2"></div>
        <div className="absolute top-[25%] left-[12%] w-[250px] h-[250px] bg-gradient-radial from-orange-300/35 via-white/15 to-transparent rounded-full blur-xl animate-drift-refined-1"></div>
        <div className="absolute top-[55%] right-[18%] w-[200px] h-[200px] bg-gradient-radial from-white/25 via-orange-400/20 to-transparent rounded-full blur-lg animate-drift-refined-2"></div>
        
        {/* Subtle contrast elements */}
        <div className="absolute top-[35%] left-[55%] w-[180px] h-[180px] bg-gradient-radial from-orange-800/20 via-orange-900/10 to-transparent rounded-full blur-xl animate-drift-refined-1"></div>
        
        {/* Refined mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-mesh-refined opacity-25 animate-mesh-shift-refined"></div>
        
        {/* Elegant particle system - Orange & White */}
        <div className="absolute top-[12%] left-[28%] w-3 h-3 bg-white/60 rounded-full animate-particle-refined-1 shadow-lg shadow-white/30"></div>
        <div className="absolute top-[68%] left-[78%] w-2 h-2 bg-orange-300/70 rounded-full animate-particle-refined-2 shadow-md shadow-orange-300/40"></div>
        <div className="absolute top-[38%] right-[12%] w-2.5 h-2.5 bg-white/50 rounded-full animate-particle-refined-3 shadow-lg shadow-white/25"></div>
        <div className="absolute bottom-[28%] left-[58%] w-2 h-2 bg-orange-400/60 rounded-full animate-particle-refined-4 shadow-md shadow-orange-400/35"></div>
        <div className="absolute top-[78%] right-[38%] w-1.5 h-1.5 bg-white/45 rounded-full animate-particle-refined-1 shadow-sm shadow-white/20"></div>
        
        {/* Gentle light beams */}
        <div className="absolute top-[0%] left-[25%] w-1 h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-beam-rotate-refined-1 opacity-30"></div>
        <div className="absolute top-[0%] right-[35%] w-0.5 h-full bg-gradient-to-b from-transparent via-orange-300/20 to-transparent animate-beam-rotate-refined-2 opacity-25"></div>
      </div>
      
      {/* Refined texture overlays */}
      <div className="absolute inset-0 opacity-[0.03] bg-noise-refined"></div>
      <div className="absolute inset-0 opacity-[0.06] bg-gradient-to-br from-white/8 via-orange-300/5 to-white/8 animate-shimmer-refined"></div>
      
      {/* Elegant glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.5px] bg-gradient-to-b from-white/[0.04] via-transparent to-orange-900/[0.02]"></div>
      
      {/* Content */}
      <div className="relative z-20">
        {/* Header with EXTREME styling */}
        <header className="flex justify-start items-center p-6 relative z-20">
          <div className="flex items-center gap-4">
            {/* Twitter/X Link */}
            <a 
              href="https://x.com/unruggable_io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-200 transition-all duration-300 backdrop-blur-md hover:backdrop-blur-lg p-3 rounded-full hover:bg-white/30 hover:shadow-2xl hover:shadow-white/50 border-2 border-white/30 hover:border-white/70 hover:scale-110 transform"
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
              className="text-white hover:text-yellow-200 transition-all duration-300 backdrop-blur-md hover:backdrop-blur-lg p-3 rounded-full hover:bg-white/30 hover:shadow-2xl hover:shadow-white/50 border-2 border-white/30 hover:border-white/70 hover:scale-110 transform"
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
              <div className="relative flex justify-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-3 group">
                {/* Hover Text */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30 pointer-events-none">
                  Desktop, Android and iOS app
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-black/90"></div>
                </div>
                <Image
                  src="/phone-mockup.png"
                  alt="Unruggable Mobile Interface"
                  width={200}
                  height={400}
                  className="w-[120px] h-[240px] xs:w-[140px] xs:h-[280px] sm:w-[160px] sm:h-[320px] md:w-[180px] md:h-[360px] lg:w-[200px] lg:h-[400px] xl:w-[220px] xl:h-[440px] object-contain drop-shadow-xl transition-all duration-500"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                    imageRendering: 'crisp-edges' 
                  }}
                />
              </div>
              
              {/* Tablet Mockup - Right */}
              <div className="relative flex justify-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-3 group">
                {/* Hover Text */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30 pointer-events-none">
                  Aerospace Aluminium Chassis, USBC connectivity
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-black/90"></div>
                </div>
                <Image
                  src="/A1.png"
                  alt="Unruggable Tablet Interface"
                  width={280}
                  height={400}
                  className="w-[150px] h-[240px] xs:w-[180px] xs:h-[280px] sm:w-[220px] sm:h-[320px] md:w-[260px] md:h-[360px] lg:w-[280px] lg:h-[400px] xl:w-[320px] xl:h-[440px] object-contain drop-shadow-xl transition-all duration-500"
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

      {/* REFINED CSS for elegant animations and effects */}
      <style jsx global>{`
        @keyframes spin-ultra-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        
        @keyframes drift-refined-1 {
          0%, 100% { transform: translateX(0px) translateY(0px) scale(1); }
          50% { transform: translateX(20px) translateY(-15px) scale(1.05); }
        }
        
        @keyframes drift-refined-2 {
          0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          50% { transform: translateX(-15px) translateY(10px) rotate(180deg); }
        }
        
        @keyframes mesh-shift-refined {
          0%, 100% { background-position: 0% 0%, 100% 100%, 50% 50%; }
          50% { background-position: 100% 0%, 0% 100%, 25% 75%; }
        }
        
        @keyframes particle-refined-1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-80px) translateX(30px);
            opacity: 1;
          }
        }
        
        @keyframes particle-refined-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(60px) translateX(-20px) scale(1.2);
            opacity: 0.4;
          }
        }
        
        @keyframes particle-refined-3 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-100px) rotate(180deg);
            opacity: 1;
          }
        }
        
        @keyframes particle-refined-4 {
          0%, 100% { 
            transform: translateX(0px) translateY(0px);
            opacity: 0.6;
          }
          50% { 
            transform: translateX(-50px) translateY(-40px);
            opacity: 1;
          }
        }
        
        @keyframes beam-rotate-refined-1 {
          0%, 100% { 
            transform: rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: rotate(180deg);
            opacity: 0.5;
          }
        }
        
        @keyframes beam-rotate-refined-2 {
          0%, 100% { 
            transform: rotate(0deg);
            opacity: 0.25;
          }
          50% { 
            transform: rotate(-180deg);
            opacity: 0.4;
          }
        }
        
        @keyframes shimmer-refined {
          0%, 100% { 
            background-position: -200% 0%;
          }
          50% { 
            background-position: 200% 0%;
          }
        }
        
        .animate-spin-ultra-slow { animation: spin-ultra-slow 50s linear infinite; }
        .animate-morph-refined-1 { animation: morph-refined-1 12s ease-in-out infinite; }
        .animate-morph-refined-2 { animation: morph-refined-2 15s ease-in-out infinite; }
        .animate-drift-refined-1 { animation: drift-refined-1 8s ease-in-out infinite; }
        .animate-drift-refined-2 { animation: drift-refined-2 10s ease-in-out infinite; }
        .animate-mesh-shift-refined { animation: mesh-shift-refined 25s ease-in-out infinite; }
        .animate-particle-refined-1 { animation: particle-refined-1 6s ease-in-out infinite; }
        .animate-particle-refined-2 { animation: particle-refined-2 8s ease-in-out infinite; }
        .animate-particle-refined-3 { animation: particle-refined-3 7s ease-in-out infinite; }
        .animate-particle-refined-4 { animation: particle-refined-4 9s ease-in-out infinite; }
        .animate-beam-rotate-refined-1 { animation: beam-rotate-refined-1 20s linear infinite; }
        .animate-beam-rotate-refined-2 { animation: beam-rotate-refined-2 25s linear infinite; }
        .animate-shimmer-refined { animation: shimmer-refined 12s ease-in-out infinite; }
        
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
        
        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
        
        .bg-gradient-mesh-refined {
          background: 
            radial-gradient(circle at 25% 75%, rgba(255, 165, 0, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.3) 0%, transparent 70%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 165, 0, 0.2) 100%);
          background-size: 300% 300%, 250% 250%, 400% 400%, 100% 100%;
        }
        
        .bg-noise-refined {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.1) 0.5px, transparent 0.5px);
          background-size: 20px 20px, 15px 15px;
          background-position: 0 0, 10px 10px;
        }
      }</style>(1.2);
          }
          20% { 
            transform: scale(1.3) rotate(72deg) skew(5deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            filter: hue-rotate(30deg) brightness(1.5);
          }
          40% { 
            transform: scale(0.7) rotate(144deg) skew(-3deg);
            border-radius: 50% 60% 30% 60% / 60% 40% 60% 40%;
            filter: hue-rotate(60deg) brightness(1.8);
          }
          60% { 
            transform: scale(1.1) rotate(216deg) skew(8deg);
            border-radius: 60% 40% 30% 70% / 30% 60% 70% 40%;
            filter: hue-rotate(90deg) brightness(1.3);
          }
          80% { 
            transform: scale(1.4) rotate(288deg) skew(-5deg);
            border-radius: 40% 70% 60% 30% / 70% 40% 30% 60%;
            filter: hue-rotate(120deg) brightness(2);
          }
        }
        
        @keyframes morph-extreme-2 {
          0%, 100% { 
            transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
            border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
            filter: hue-rotate(0deg) contrast(1.5);
          }
          25% { 
            transform: scale(1.4) translateX(40px) translateY(-30px) rotate(90deg);
            border-radius: 60% 40% 30% 70% / 40% 60% 30% 70%;
            filter: hue-rotate(45deg) contrast(2);
          }
          50% { 
            transform: scale(0.6) translateX(-30px) translateY(40px) rotate(180deg);
            border-radius: 30% 70% 40% 60% / 60% 40% 60% 40%;
            filter: hue-rotate(90deg) contrast(1.8);
          }
          75% { 
            transform: scale(1.2) translateX(35px) translateY(-20px) rotate(270deg);
            border-radius: 70% 30% 60% 40% / 30% 70% 40% 60%;
            filter: hue-rotate(135deg) contrast(2.2);
          }
        }
        
        @keyframes drift-extreme-1 {
          0%, 100% { 
            transform: translateX(0px) translateY(0px) scale(1) rotate(0deg);
            filter: brightness(1.3) saturate(1.5);
          }
          25% { 
            transform: translateX(60px) translateY(-40px) scale(1.3) rotate(90deg);
            filter: brightness(1.8) saturate(2);
          }
          50% { 
            transform: translateX(-20px) translateY(-60px) scale(0.7) rotate(180deg);
            filter: brightness(2.2) saturate(1.2);
          }
          75% { 
            transform: translateX(-50px) translateY(20px) scale(1.1) rotate(270deg);
            filter: brightness(1.6) saturate(1.8);
          }
        }
        
        @keyframes drift-extreme-2 {
          0%, 100% { 
            transform: translateX(0px) translateY(0px) rotate(0deg) scale(1);
            filter: hue-rotate(0deg) brightness(1.4);
          }
          16% { 
            transform: translateX(-40px) translateY(30px) rotate(60deg) scale(1.2);
            filter: hue-rotate(30deg) brightness(1.8);
          }
          33% { 
            transform: translateX(50px) translateY(-20px) rotate(120deg) scale(0.8);
            filter: hue-rotate(60deg) brightness(2.1);
          }
          50% { 
            transform: translateX(20px) translateY(50px) rotate(180deg) scale(1.3);
            filter: hue-rotate(90deg) brightness(1.5);
          }
          66% { 
            transform: translateX(-30px) translateY(-40px) rotate(240deg) scale(0.9);
            filter: hue-rotate(120deg) brightness(1.9);
          }
          83% { 
            transform: translateX(45px) translateY(15px) rotate(300deg) scale(1.1);
            filter: hue-rotate(150deg) brightness(1.7);
          }
        }
        
        @keyframes float-extreme {
          0%, 100% { 
            transform: translateX(0px) translateY(0px) scale(1) rotate(0deg) skew(0deg);
            opacity: 0.7;
            filter: brightness(1.2) contrast(1.5);
          }
          20% { 
            transform: translateX(-60px) translateY(-80px) scale(1.5) rotate(72deg) skew(3deg);
            opacity: 0.9;
            filter: brightness(2) contrast(2);
          }
          40% { 
            transform: translateX(40px) translateY(-40px) scale(0.6) rotate(144deg) skew(-5deg);
            opacity: 0.5;
            filter: brightness(1.8) contrast(1.8);
          }
          60% { 
            transform: translateX(80px) translateY(60px) scale(1.2) rotate(216deg) skew(7deg);
            opacity: 0.8;
            filter: brightness(1.6) contrast(2.2);
          }
          80% { 
            transform: translateX(-20px) translateY(40px) scale(1.3) rotate(288deg) skew(-2deg);
            opacity: 0.6;
            filter: brightness(2.2) contrast(1.7);
          }
        }
        
        @keyframes mesh-shift-extreme {
          0%, 100% { 
            background-position: 0% 0%, 100% 100%, 50% 50%, 0% 100%, 100% 0%, 25% 75%;
            filter: hue-rotate(0deg) brightness(1.3);
          }
          20% { 
            background-position: 20% 80%, 80% 20%, 70% 30%, 20% 80%, 80% 20%, 60% 40%;
            filter: hue-rotate(30deg) brightness(1.6);
          }
          40% { 
            background-position: 100% 0%, 0% 100%, 30% 70%, 100% 0%, 0% 100%, 90% 10%;
            filter: hue-rotate(60deg) brightness(1.9);
          }
          60% { 
            background-position: 80% 20%, 20% 80%, 90% 10%, 80% 20%, 20% 80%, 30% 70%;
            filter: hue-rotate(90deg) brightness(1.4);
          }
          80% { 
            background-position: 0% 100%, 100% 0%, 10% 90%, 0% 100%, 100% 0%, 70% 30%;
            filter: hue-rotate(120deg) brightness(1.7);
          }
        }
        
        @keyframes particle-extreme-1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.9;
            filter: brightness(2) blur(0px);
          }
          50% { 
            transform: translateY(-200px) translateX(100px) scale(2) rotate(180deg);
            opacity: 1;
            filter: brightness(3) blur(1px);
          }
        }
        
        @keyframes particle-extreme-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.8;
            filter: brightness(1.8) hue-rotate(0deg);
          }
          33% { 
            transform: translateY(160px) translateX(-60px) scale(2.5) rotate(120deg);
            opacity: 0.4;
            filter: brightness(2.5) hue-rotate(60deg);
          }
          66% { 
            transform: translateY(-80px) translateX(120px) scale(0.5) rotate(240deg);
            opacity: 1;
            filter: brightness(3) hue-rotate(120deg);
          }
        }
        
        @keyframes particle-extreme-3 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.9;
            filter: brightness(2.2) contrast(2);
          }
          50% { 
            transform: translateY(-300px) rotate(360deg) scale(1.8);
            opacity: 1;
            filter: brightness(3.5) contrast(2.5);
          }
        }
        
        @keyframes particle-extreme-4 {
          0%, 100% { 
            transform: translateX(0px) translateY(0px) scale(1) rotate(0deg);
            opacity: 0.85;
            filter: brightness(1.9) saturate(2);
          }
          25% { 
            transform: translateX(-160px) translateY(-120px) scale(2) rotate(90deg);
            opacity: 0.5;
            filter: brightness(2.8) saturate(2.5);
          }
          50% { 
            transform: translateX(80px) translateY(-160px) scale(0.7) rotate(180deg);
            opacity: 1;
            filter: brightness(3.2) saturate(1.8);
          }
          75% { 
            transform: translateX(120px) translateY(80px) scale(1.5) rotate(270deg);
            opacity: 0.7;
            filter: brightness(2.4) saturate(2.2);
          }
        }
        
        @keyframes lightning-1 {
          0%, 90%, 100% { 
            opacity: 0;
            transform: scaleY(0) translateX(0px);
          }
          5%, 15% { 
            opacity: 1;
            transform: scaleY(1) translateX(-5px);
            filter: brightness(5) blur(0px);
          }
          10% { 
            opacity: 0.7;
            transform: scaleY(0.8) translateX(3px);
            filter: brightness(3) blur(1px);
          }
        }
        
        @keyframes lightning-2 {
          0%, 85%, 100% { 
            opacity: 0;
            transform: scaleY(0) translateX(0px);
          }
          8%, 18% { 
            opacity: 1;
            transform: scaleY(1) translateX(4px);
            filter: brightness(4.5) blur(0px);
          }
          13% { 
            opacity: 0.6;
            transform: scaleY(0.9) translateX(-2px);
            filter: brightness(2.8) blur(1px);
          }
        }
        
        @keyframes beam-rotate-1 {
          0%, 100% { 
            transform: rotate(0deg) translateX(0px);
            opacity: 0.4;
          }
          50% { 
            transform: rotate(180deg) translateX(20px);
            opacity: 0.7;
          }
        }
        
        @keyframes beam-rotate-2 {
          0%, 100% { 
            transform: rotate(0deg) translateX(0px);
            opacity: 0.5;
          }
          50% { 
            transform: rotate(-180deg) translateX(-15px);
            opacity: 0.8;
          }
        }
        
        @keyframes shimmer-extreme {
          0%, 100% { 
            background-position: -300% 0%, -200% 0%, -400% 0%;
            filter: brightness(1.5);
          }
          50% { 
            background-position: 300% 0%, 200% 0%, 400% 0%;
            filter: brightness(2.2);
          }
        }
        
        .animate-spin-ultra-slow { animation: spin-ultra-slow 40s linear infinite; }
        .animate-morph-extreme-1 { animation: morph-extreme-1 6s ease-in-out infinite; }
        .animate-morph-extreme-2 { animation: morph-extreme-2 8s ease-in-out infinite; }
        .animate-drift-extreme-1 { animation: drift-extreme-1 4s ease-in-out infinite; }
        .animate-drift-extreme-2 { animation: drift-extreme-2 7s ease-in-out infinite; }
        .animate-float-extreme { animation: float-extreme 10s ease-in-out infinite; }
        .animate-mesh-shift-extreme { animation: mesh-shift-extreme 12s ease-in-out infinite; }
        .animate-particle-extreme-1 { animation: particle-extreme-1 3s ease-in-out infinite; }
        .animate-particle-extreme-2 { animation: particle-extreme-2 4s ease-in-out infinite; }
        .animate-particle-extreme-3 { animation: particle-extreme-3 3.5s ease-in-out infinite; }
        .animate-particle-extreme-4 { animation: particle-extreme-4 5s ease-in-out infinite; }
        .animate-lightning-1 { animation: lightning-1 2s ease-in-out infinite; }
        .animate-lightning-2 { animation: lightning-2 2.5s ease-in-out infinite; }
        .animate-beam-rotate-1 { animation: beam-rotate-1 8s linear infinite; }
        .animate-beam-rotate-2 { animation: beam-rotate-2 10s linear infinite; }
        .animate-shimmer-extreme { animation: shimmer-extreme 6s ease-in-out infinite; }
        
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
        
        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
        
        .bg-gradient-mesh-extreme {
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(255, 140, 0, 0.6) 30%, transparent 70%),
            radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.8) 0%, rgba(255, 69, 0, 0.5) 40%, transparent 80%),
            radial-gradient(circle at 40% 40%, rgba(255, 69, 0, 0.7) 0%, rgba(255, 0, 0, 0.4) 35%, transparent 65%),
            radial-gradient(circle at 60% 90%, rgba(255, 0, 0, 0.6) 0%, rgba(139, 69, 19, 0.3) 50%, transparent 80%),
            radial-gradient(circle at 10% 50%, rgba(255, 215, 0, 0.8) 0%, rgba(255, 140, 0, 0.4) 45%, transparent 75%),
            linear-gradient(135deg, rgba(255, 200, 0, 0.4) 0%, rgba(255, 100, 0, 0.6) 50%, rgba(255, 0, 0, 0.5) 100%);
          background-size: 600% 600%, 500% 500%, 400% 400%, 700% 700%, 450% 450%, 100% 100%;
        }
        
        .bg-noise-extreme {
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.2) 0.5px, transparent 0.5px),
            radial-gradient(circle at 60% 40%, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 30% 70%, rgba(255, 200, 0, 0.3) 0.8px, transparent 0.8px),
            radial-gradient(circle at 70% 30%, rgba(255, 100, 0, 0.25) 1.2px, transparent 1.2px);
          background-size: 25px 25px, 18px 18px, 12px 12px, 20px 20px, 28px 28px, 22px 22px;
          background-position: 0 0, 8px 8px, 4px 4px, 12px 12px, 16px 16px, 20px 20px;
        }
      `}</style>
    </div>
  )
}