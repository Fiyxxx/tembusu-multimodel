'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black p-12 max-w-2xl w-full text-center fade-in">
        <p className="font-mono text-2xl mb-8 leading-relaxed">
          we hope you learnt more about spectacles! now go out there and be your own spectacle!
        </p>
        <Button
          text="Play Again"
          onClick={() => router.push('/')}
          variant="secondary"
        />
      </div>
    </main>
  );
}
