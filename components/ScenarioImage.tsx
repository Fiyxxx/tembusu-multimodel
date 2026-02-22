'use client';

import { useState } from 'react';
import Image from 'next/image';
import ClickableHotspot from './ClickableHotspot';
import ThoughtBubble from './ThoughtBubble';
import { Hotspot } from '@/lib/scenarios';

interface ScenarioImageProps {
  imageSrc: string;
  imageAlt: string;
  hotspots: Hotspot[];
  onAllClicked: () => void;
  onClickedCountChange?: (count: number) => void;
}

export default function ScenarioImage({
  imageSrc,
  imageAlt,
  hotspots,
  onAllClicked,
  onClickedCountChange
}: ScenarioImageProps) {
  const [clickedHotspots, setClickedHotspots] = useState<Set<number>>(new Set());
  const [activeThought, setActiveThought] = useState<{
    text: string;
    position: { top: string; left: string };
  } | null>(null);

  const handleHotspotClick = (hotspot: Hotspot, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const bubbleX = rect.left + rect.width / 2;
    const bubbleY = rect.top;

    setActiveThought({
      text: hotspot.thought,
      position: {
        top: `${bubbleY}px`,
        left: `${bubbleX}px`
      }
    });

    const newClicked = new Set(clickedHotspots);
    newClicked.add(hotspot.id);
    setClickedHotspots(newClicked);

    if (onClickedCountChange) {
      onClickedCountChange(newClicked.size);
    }

    if (newClicked.size === hotspots.length) {
      setTimeout(() => onAllClicked(), 500);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-video">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          priority
        />
        {hotspots.map((hotspot) => (
          <ClickableHotspot
            key={hotspot.id}
            position={hotspot.position}
            onClick={(e) => handleHotspotClick(hotspot, e)}
            isClicked={clickedHotspots.has(hotspot.id)}
            ariaLabel={hotspot.ariaLabel}
          />
        ))}
      </div>
      {activeThought && (
        <ThoughtBubble
          text={activeThought.text}
          position={activeThought.position}
          onClose={() => setActiveThought(null)}
        />
      )}
    </div>
  );
}
