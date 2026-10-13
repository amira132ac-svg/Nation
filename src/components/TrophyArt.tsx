import React from 'react';

interface TrophyArtProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const TrophyArt: React.FC<TrophyArtProps> = ({
  className = '',
  size = 'hero',
}) => {
  const dimensions = {
    sm: 'w-24 h-32',
    md: 'w-48 h-64',
    lg: 'w-64 h-84',
    hero: 'w-full max-w-[420px] aspect-[4/5]',
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${dimensions[size]} ${className}`}>
      {/* Ambient Lighting & Glow behind Trophy */}
      <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl pointer-events-none transform -translate-y-4 scale-90" />
      <div className="absolute -inset-4 bg-gradient-to-t from-blue-700/10 via-sky-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* High-fidelity Vector Render of the Spiral Nations League Trophy */}
      <svg
        viewBox="0 0 500 700"
        className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,10,30,0.8)] filter transition-transform duration-500 hover:scale-[1.02]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Silver-Cobalt Gradients */}
          <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#D4E4F7" />
            <stop offset="50%" stopColor="#85A8D8" />
            <stop offset="75%" stopColor="#1C407D" />
            <stop offset="100%" stopColor="#0B1A3D" />
          </linearGradient>

          <linearGradient id="silverBase" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="20%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#CBD5E1" />
            <stop offset="60%" stopColor="#94A3B8" />
            <stop offset="80%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="deepReflect" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="35%" stopColor="#1E3A8A" />
            <stop offset="70%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="innerSpiralCore" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#93C5FD" />
            <stop offset="65%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>

          <linearGradient id="tier1Grad" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="20%" stopColor="#93C5FD" />
            <stop offset="45%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#1E3A8A" />
            <stop offset="90%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="tier2Grad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="18%" stopColor="#BFDBFE" />
            <stop offset="40%" stopColor="#1D4ED8" />
            <stop offset="75%" stopColor="#0F172A" />
            <stop offset="95%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="tier3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="25%" stopColor="#60A5FA" />
            <stop offset="55%" stopColor="#1E40AF" />
            <stop offset="85%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          <linearGradient id="specularRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
          </linearGradient>

          <filter id="metalNoise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.12 0" />
            <feComposite in2="SourceGraphic" in="glint" operator="in" />
          </filter>
        </defs>

        {/* Base Pedestal (Lower stem of the trophy) */}
        <g id="trophy-base">
          <path
            d="M210 650 L290 650 L275 680 L225 680 Z"
            fill="url(#silverBase)"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          <ellipse cx="250" cy="680" rx="35" ry="8" fill="#0F172A" />
          <ellipse cx="250" cy="650" rx="42" ry="7" fill="url(#silverBase)" />
          {/* Base reflections */}
          <line x1="230" y1="650" x2="238" y2="678" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
          <line x1="268" y1="650" x2="262" y2="678" stroke="#1E3A8A" strokeWidth="3" opacity="0.6" />
        </g>

        {/* Lower Spiral Flute - Ascending Ribbon 1 */}
        <path
          d="M185 645 C170 560 145 420 170 300 C175 270 210 270 235 305 C255 340 250 480 235 645 Z"
          fill="url(#deepReflect)"
          opacity="0.85"
        />

        {/* Main Lower Cone - Flaring outward upward */}
        <path
          d="M195 645 L305 645 C345 530 395 380 415 260 C365 295 240 295 185 260 C165 380 180 540 195 645 Z"
          fill="url(#tier3Grad)"
          stroke="url(#specularRim)"
          strokeWidth="1.5"
        />

        {/* Specular high-gloss stripes on bottom section */}
        <path
          d="M220 645 C235 520 260 410 290 285 L320 285 C290 410 260 520 235 645 Z"
          fill="#FFFFFF"
          opacity="0.25"
        />
        <path
          d="M345 320 C375 420 380 500 375 580"
          stroke="#93C5FD"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M195 310 C185 410 190 510 200 600"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Inner Spiral Flange (Middle Tier Ribbon) */}
        <path
          d="M185 260 C210 285 290 300 380 270 C410 220 405 130 365 75 C310 95 245 95 200 75 C160 120 160 210 185 260 Z"
          fill="url(#innerSpiralCore)"
          opacity="0.95"
        />

        {/* Middle Ascending Spiral Ribbon Wrap */}
        <path
          d="M165 270 C240 325 360 325 435 255 C450 180 435 110 370 65 C320 120 230 125 165 270 Z"
          fill="url(#tier2Grad)"
          stroke="#E2E8F0"
          strokeWidth="1.8"
        />

        {/* Top Helical Spiral Lip & Crown */}
        <path
          d="M190 85 C230 110 320 110 360 85 C375 45 350 15 300 10 C250 10 210 40 190 85 Z"
          fill="url(#tier1Grad)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <ellipse cx="275" cy="40" rx="45" ry="16" fill="url(#silverBase)" opacity="0.9" />
        <ellipse cx="275" cy="40" rx="36" ry="11" fill="#0B132B" opacity="0.6" />

        {/* Top Rim Specular Lighting */}
        <path
          d="M170 260 C240 310 350 310 430 250"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M180 268 C245 315 345 315 420 258"
          stroke="#93C5FD"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Circular Competition Emblem Badge mounted on the trophy surface */}
        <g id="trophy-emblem" transform="translate(310, 240)">
          {/* Circular badge shadow */}
          <circle cx="0" cy="0" r="42" fill="#070D1E" opacity="0.6" />
          {/* Badge outer metallic ring */}
          <circle cx="0" cy="0" r="40" fill="url(#silverBase)" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="0" cy="0" r="35" fill="url(#deepReflect)" stroke="#CBD5E1" strokeWidth="1" />
          {/* Inner ring */}
          <circle cx="0" cy="0" r="32" fill="url(#tier1Grad)" />
          {/* Stylized continent / globe map relief */}
          <path
            d="M-18 -8 Q-10 -18 2 -15 Q14 -12 18 -4 Q20 10 10 18 Q-4 22 -14 15 Q-20 6 -18 -8 Z"
            fill="#FFFFFF"
            opacity="0.85"
          />
          <path
            d="M-2 -6 L6 -10 L12 -2 L4 8 L-4 4 Z"
            fill="#1E3A8A"
            opacity="0.75"
          />
          {/* Specular curved glint on badge */}
          <path
            d="M-28 -18 A32 32 0 0 1 20 -24"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>

        {/* Specular Light Flare near emblem */}
        <g transform="translate(355, 215)">
          <circle cx="0" cy="0" r="8" fill="#FFFFFF" opacity="0.7" />
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
          <line x1="0" y1="-18" x2="0" y2="18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        </g>

        {/* Helical edge highlights */}
        <path
          d="M170 270 Q205 390 200 640"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          opacity="0.8"
          strokeLinecap="round"
        />
        <path
          d="M430 260 Q385 410 305 640"
          stroke="#60A5FA"
          strokeWidth="2.5"
          opacity="0.5"
          strokeLinecap="round"
        />

        {/* Delicate geometric pattern reflections on metal ribbon (from reference image) */}
        <g stroke="#FFFFFF" strokeWidth="0.8" opacity="0.25" strokeLinecap="round">
          <line x1="220" y1="420" x2="250" y2="450" />
          <line x1="250" y1="450" x2="230" y2="490" />
          <line x1="230" y1="490" x2="270" y2="520" />
          <line x1="270" y1="520" x2="245" y2="560" />
          <line x1="280" y1="380" x2="310" y2="420" />
          <line x1="310" y1="420" x2="290" y2="460" />
          <line x1="290" y1="460" x2="330" y2="500" />
          <line x1="330" y1="500" x2="310" y2="540" />
          <line x1="180" y1="180" x2="210" y2="210" />
          <line x1="210" y1="210" x2="230" y2="190" />
          <line x1="230" y1="190" x2="260" y2="230" />
        </g>
      </svg>
    </div>
  );
};
