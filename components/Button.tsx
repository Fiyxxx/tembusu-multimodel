'use client';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({
  text,
  onClick,
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = "px-6 py-3 border-2 border-black font-mono button-hover";
  const variantStyles = variant === 'primary'
    ? "bg-white hover:bg-gray-100"
    : "bg-gray-100 hover:bg-gray-200";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={text}
    >
      {text}
    </button>
  );
}
