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
      className="absolute cursor-pointer bg-transparent hotspot-pulse focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
        height: position.height,
        minWidth: '44px',
        minHeight: '44px'
      }}
      aria-label={ariaLabel}
      tabIndex={0}
    />
  );
}
