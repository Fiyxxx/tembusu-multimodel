'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ThoughtBubbleProps {
  text: string;
  position: { top: string; left: string };
  onClose: () => void;
  autoCloseDelay?: number; // milliseconds
}

export default function ThoughtBubble({
  text,
  position,
  onClose,
  autoCloseDelay = 4000
}: ThoughtBubbleProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, autoCloseDelay);

    return () => clearTimeout(timer);
  }, [autoCloseDelay, onClose]);

  const bubble = (
    <div
      className="fixed z-50 bubble-enter px-4"
      style={{
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -100%)',
        maxWidth: 'min(300px, 90vw)'
      }}
    >
      <div className="bg-white border-3 border-black p-4 relative">
        <p className="font-mono text-sm leading-relaxed">{displayedText}</p>
        <button
          onClick={onClose}
          className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center hover:bg-gray-100 border border-black"
          aria-label="Close thought bubble"
        >
          ✕
        </button>
        {/* Triangle pointer */}
        <div
          className="absolute border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"
          style={{
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
        <div
          className="absolute border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"
          style={{
            bottom: '-5px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(bubble, document.body);
}
