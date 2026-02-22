'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black p-8 text-center">
        <h2 className="font-mono text-xl mb-4">Something went wrong!</h2>
        <Button text="Try again" onClick={reset} />
      </div>
    </main>
  );
}
