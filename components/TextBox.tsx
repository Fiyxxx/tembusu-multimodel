'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

interface TextBoxProps {
  text: string;
  onContinue?: () => void;
  showContinue?: boolean;
  speed?: number; // milliseconds per character
}

export default function TextBox({
  text,
  onContinue,
  showContinue = false,
  speed = 40
}: TextBoxProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setIsComplete(false);

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="bg-white border-4 border-black p-6 max-w-2xl mx-auto">
      <p className="font-mono text-base leading-relaxed min-h-[3rem]">
        {displayedText}
        {!isComplete && <span className="typewriter-cursor">▌</span>}
      </p>
      {showContinue && isComplete && onContinue && (
        <div className="mt-4 flex justify-end">
          <Button text="Continue" onClick={onContinue} variant="secondary" />
        </div>
      )}
    </div>
  );
}
