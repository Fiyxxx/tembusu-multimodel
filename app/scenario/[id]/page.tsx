'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getScenarioById, Scenario } from '@/lib/scenarios';
import ScenarioImage from '@/components/ScenarioImage';
import TextBox from '@/components/TextBox';
import Button from '@/components/Button';

export default function ScenarioPage() {
  const router = useRouter();
  const params = useParams();
  const id = parseInt(params.id as string);

  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [showLesson, setShowLesson] = useState(false);
  const [showLessonButton, setShowLessonButton] = useState(false);

  // Scenario 3 specific states
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizMessage, setQuizMessage] = useState('');

  useEffect(() => {
    const foundScenario = getScenarioById(id);
    if (!foundScenario) {
      router.push('/');
      return;
    }
    setScenario(foundScenario);
  }, [id, router]);

  if (!scenario) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-white border-4 border-black p-8">
          <p className="font-mono text-xl">Loading scenario...</p>
        </div>
      </main>
    );
  }

  const handleAllHotspotsClicked = () => {
    setShowLessonButton(true);
  };

  const handleQuizAnswer = (answer: 'yes' | 'no') => {
    setQuizAnswered(true);
    setQuizMessage(answer === 'yes' ? 'ding ding!' : 'look again!');
    setTimeout(() => {
      setQuizMessage('');
      setShowLesson(true);
    }, 2000);
  };

  const handleContinue = () => {
    if (id < 3) {
      router.push(`/scenario/${id + 1}`);
    } else {
      router.push('/thank-you');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 gap-4 md:gap-8">
      <h1 className="font-mono text-xl md:text-2xl font-bold text-center px-4">{scenario.title}</h1>

      {scenario.type === 'clickable' ? (
        <>
          <ScenarioImage
            imageSrc={scenario.image}
            imageAlt={scenario.imageAlt}
            hotspots={scenario.hotspots}
            onAllClicked={handleAllHotspotsClicked}
          />

          {showLessonButton && !showLesson && (
            <Button
              text="What is the lesson here?"
              onClick={() => setShowLesson(true)}
              className="celebrate"
            />
          )}

          {showLesson && scenario.lesson && (
            <TextBox
              text={scenario.lesson}
              onContinue={handleContinue}
              showContinue={true}
            />
          )}
        </>
      ) : (
        <>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video">
              <img
                src={scenario.image}
                alt={scenario.imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {!quizAnswered && (
            <div className="bg-white border-4 border-black p-6">
              <p className="font-mono text-lg mb-4">Something off about this photo?</p>
              <div className="flex gap-4">
                <Button text="Yes" onClick={() => handleQuizAnswer('yes')} />
                <Button text="No" onClick={() => handleQuizAnswer('no')} />
              </div>
            </div>
          )}

          {quizMessage && (
            <div className="bg-white border-4 border-black p-6">
              <p className="font-mono text-2xl font-bold">{quizMessage}</p>
            </div>
          )}

          {showLesson && scenario.lesson && (
            <TextBox
              text={scenario.lesson}
              onContinue={handleContinue}
              showContinue={true}
            />
          )}
        </>
      )}
    </main>
  );
}
