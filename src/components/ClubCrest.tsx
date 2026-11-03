import React from 'react';
import { RegisteredClub } from '../data/tmproData';

interface ClubCrestProps {
  club: RegisteredClub;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ClubCrest: React.FC<ClubCrestProps> = ({
  club,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-2xl',
  }[size];

  if (club.logoUrl) {
    return (
      <div
        className={`relative rounded-xl overflow-hidden flex items-center justify-center bg-[#090F26] border border-white/15 shrink-0 ${sizeClasses} ${className}`}
      >
        <img
          src={club.logoUrl}
          alt={club.name}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 select-none ${sizeClasses} ${className}`}
    >
      {/* Shield SVG Backdrop */}
      <svg
        viewBox="0 0 64 72"
        className="w-full h-full drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`shield-grad-${club.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={club.accentColor} stopOpacity="0.95" />
            <stop offset="55%" stopColor="#080B1A" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#03050C" stopOpacity="1" />
          </linearGradient>
          <linearGradient id={`shield-border-${club.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={club.secondaryColor} />
            <stop offset="50%" stopColor={club.accentColor} />
            <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
          </linearGradient>
        </defs>
        <path
          d="M32 3L58 12V33C58 50.5 46.8 63.2 32 69C17.2 63.2 6 50.5 6 33V12L32 3Z"
          fill={`url(#shield-grad-${club.id})`}
          stroke={`url(#shield-border-${club.id})`}
          strokeWidth="2.5"
        />
        <path
          d="M32 8L53 15.2V32.5C53 46.9 43.9 57.5 32 62.5C20.1 57.5 11 46.9 11 32.5V15.2L32 8Z"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
      </svg>

      {/* Monogram Letters */}
      <span
        dir="ltr"
        className="absolute inset-0 flex items-center justify-center font-display font-black tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
      >
        {club.monogram}
      </span>
    </div>
  );
};
