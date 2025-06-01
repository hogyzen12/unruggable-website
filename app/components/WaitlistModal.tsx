// app/components/WaitlistModal.tsx
'use client'

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import Image from 'next/image';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setEmail('');
      }, 2000);
    } catch (_err) {
      setError('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-800 border border-gray-700 text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Join our waitlist</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center p-4">
        <Image 
          src="/app_icon_2.webp" 
          alt="Logo" 
          width={64}
          height={64}
          className="w-16 h-16 rounded-full mb-4" 
        />
          <p className="text-center mb-6 text-gray-300">
            Enter your email below to join our waitlist
          </p>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:border-transparent"
              disabled={isSubmitting || success}
            />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            {success && (
              <p className="text-green-400 text-sm text-center">
                Successfully joined the waitlist!
              </p>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#FF7043] hover:bg-[#FF7043]/90 text-white rounded-md transition-colors disabled:opacity-50"
              disabled={isSubmitting || success}
            >
              {isSubmitting ? 'Joining...' : success ? 'Joined!' : 'Confirm'}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}