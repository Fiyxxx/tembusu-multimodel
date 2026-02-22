'use client';

interface ClickableHotspotProps {
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  onClick: (event: React.MouseEvent) => void;
  isClicked: boolean;
  ariaLabel: string;
}

export default function ClickableHotspot({
  position,
  onClick,
  isClicked,
  ariaLabel
}: ClickableHotspotProps) {
  if (isClicked) return null;

  return (
    <button
      onClick={(e) => onClick(e)}
      className="absolute cursor-pointer bg-white/40 hover:bg-white/60 border-2 border-white rounded-full hotspot-pulse-visible focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all"
      style={{
        top: position.top,
        left: position.left,
        width: '48px',
        height: '48px',
        transform: 'translate(-50%, -50%)'
      }}
      aria-label={ariaLabel}
      tabIndex={0}
    />
  );
}
