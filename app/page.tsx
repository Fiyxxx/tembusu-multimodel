'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black p-12 max-w-2xl w-full text-center">
        <h1 className="font-mono text-3xl mb-4 font-bold">
          Spectacles and Society in the Local context!
        </h1>
        <p className="font-mono text-lg mb-8">
          by Chloe, Megan, Han Sheng
        </p>
        <Button
          text="Start"
          onClick={() => router.push('/scenario/1')}
          className="text-xl px-12 py-4"
        />
      </div>
    </main>
  );
}
