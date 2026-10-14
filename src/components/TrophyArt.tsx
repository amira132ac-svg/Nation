import React from 'react';
import { motion } from 'motion/react';

interface TrophyArtProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const TrophyArt: React.FC<TrophyArtProps> = ({
  className = '',
  size = 'hero',
}) => {
  const dimensions = {
    sm: 'w-28 h-36',
    md: 'w-52 h-68',
    lg: 'w-72 h-92',
    hero: 'w-full max-w-[440px] aspect-[4/5]',
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center select-none ${dimensions[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Dynamic Ambient Stadium Lights behind Trophy */}
      <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none transform -translate-y-6 scale-95 animate-pulse-glow" />
      <div className="absolute -inset-6 bg-gradient-to-t from-blue-700/20 via-sky-400/20 to-transparent rounded-full blur-[70px] pointer-events-none" />
      <div className="absolute top-1/4 -right-8 w-40 h-40 bg-amber-400/15 rounded-full blur-[60px] pointer-events-none" />

      {/* Photorealistic Nations League Spiral Trophy Vector Art */}
      <svg
        viewBox="0 0 520 720"
        className="w-full h-full drop-shadow-[0_30px_50px_rgba(0,10,40,0.9)] filter"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Hyper-realistic Chrome & Silver Gradients with Mirror Blue Reflections */}
          <linearGradient id="chromeFlute" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B152B" />
            <stop offset="12%" stopColor="#3B82F6" />
            <stop offset="28%" stopColor="#FFFFFF" />
            <stop offset="42%" stopColor="#CBD5E1" />
            <stop offset="55%" stopColor="#1E3A8A" />
            <stop offset="70%" stopColor="#93C5FD" />
            <stop offset="85%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#070E22" />
          </linearGradient>

          <linearGradient id="silverGloss" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#E2E8F0" />
            <stop offset="35%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#1E40AF" />
            <stop offset="65%" stopColor="#0F172A" />
            <stop offset="80%" stopColor="#BFDBFE" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id="spiralCore" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="22%" stopColor="#60A5FA" />
            <stop offset="48%" stopColor="#1D4ED8" />
            <stop offset="75%" stopColor="#0B132B" />
            <stop offset="90%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id="outerCrown" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#DBEAFE" />
            <stop offset="45%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#0F172A" />
            <stop offset="88%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id="pedestalSteel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="25%" stopColor="#F1F5F9" />
            <stop offset="50%" stopColor="#64748B" />
            <stop offset="75%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="rimSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- TROPHY BASE & STEM --- */}
        <g id="trophy-base">
          {/* Base bottom rim */}
          <ellipse cx="260" cy="682" rx="42" ry="10" fill="#040814" />
          <path
            d="M218 648 L302 648 L290 682 L230 682 Z"
            fill="url(#pedestalSteel)"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          {/* Base top collar */}
          <ellipse cx="260" cy="648" rx="46" ry="8" fill="url(#pedestalSteel)" />
          {/* Chrome bevel rim lines */}
          <line x1="238" y1="648" x2="244" y2="680" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" />
          <line x1="280" y1="648" x2="274" y2="680" stroke="#1D4ED8" strokeWidth="3" opacity="0.75" />
        </g>

        {/* --- LOWER FLUTED CHALICE (Tapering from base to middle) --- */}
        <g id="lower-body">
          {/* Backside inner shadow */}
          <path
            d="M205 645 C185 550 160 420 185 295 C195 265 235 270 260 305 C275 340 270 490 255 645 Z"
            fill="#050C1F"
            opacity="0.9"
          />

          {/* Main front flaring silver chalice */}
          <path
            d="M215 645 L305 645 C350 520 405 375 425 255 C370 295 240 295 185 255 C165 375 195 530 215 645 Z"
            fill="url(#chromeFlute)"
            stroke="url(#rimSpecular)"
            strokeWidth="1.8"
          />

          {/* High-gloss specular reflections on lower body */}
          <path
            d="M235 645 C250 515 275 405 305 282 L332 282 C302 405 275 515 250 645 Z"
            fill="#FFFFFF"
            opacity="0.32"
          />
          {/* Razor-sharp specular light line */}
          <path
            d="M212 305 C202 405 208 505 220 635"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
          {/* Blue reflection band */}
          <path
            d="M360 315 C390 415 392 500 385 585"
            stroke="#60A5FA"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>

        {/* --- MIDDLE SPIRAL WRAP (Ascending Helical Ribbon) --- */}
        <g id="middle-spiral">
          {/* Inner spiral cavity */}
          <path
            d="M185 255 C215 285 295 300 390 268 C420 215 415 125 370 68 C315 88 245 88 200 68 C158 115 158 205 185 255 Z"
            fill="url(#spiralCore)"
            opacity="0.95"
          />

          {/* Outer sweeping ribbon wrap */}
          <path
            d="M165 268 C245 328 375 328 450 252 C468 175 448 102 380 58 C328 115 235 120 165 268 Z"
            fill="url(#silverGloss)"
            stroke="#FFFFFF"
            strokeWidth="2.2"
          />

          {/* Top Lip of the Ribbon */}
          <path
            d="M165 268 C245 325 370 325 450 252"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
          <path
            d="M175 276 C250 330 365 330 440 260"
            stroke="#93C5FD"
            strokeWidth="2.5"
            opacity="0.9"
          />
        </g>

        {/* --- TOP HELICAL CROWN & CHALICE OPENING --- */}
        <g id="top-crown">
          {/* Top ascending ribbon loop */}
          <path
            d="M192 78 C235 105 325 105 372 78 C388 38 360 8 305 4 C250 4 210 35 192 78 Z"
            fill="url(#outerCrown)"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          {/* Chalice inner bowl */}
          <ellipse cx="282" cy="34" rx="48" ry="17" fill="url(#pedestalSteel)" opacity="0.9" />
          <ellipse cx="282" cy="34" rx="38" ry="12" fill="#070D1E" opacity="0.75" />
          
          {/* Crown upper rim glint */}
          <path
            d="M235 22 Q285 14 330 22"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
        </g>

        {/* --- GEOMETRIC FACET ENGRAVINGS (Matching IMG_1728) --- */}
        <g stroke="#FFFFFF" strokeWidth="1" opacity="0.32" strokeLinecap="round">
          {/* Facets on lower chalice */}
          <line x1="240" y1="410" x2="270" y2="445" />
          <line x1="270" y1="445" x2="250" y2="490" />
          <line x1="250" y1="490" x2="295" y2="525" />
          <line x1="295" y1="525" x2="265" y2="570" />
          <line x1="300" y1="375" x2="335" y2="420" />
          <line x1="335" y1="420" x2="310" y2="465" />
          <line x1="310" y1="465" x2="355" y2="505" />
          <line x1="355" y1="505" x2="330" y2="550" />
          {/* Facets on upper spiral ribbon */}
          <line x1="195" y1="175" x2="225" y2="208" />
          <line x1="225" y1="208" x2="248" y2="185" />
          <line x1="248" y1="185" x2="278" y2="228" />
        </g>

        {/* --- CIRCULAR NATIONS LEAGUE METALLIC MEDALLION SEAL --- */}
        <g id="trophy-medallion" transform="translate(325, 235)">
          {/* Drop shadow */}
          <circle cx="0" cy="0" r="46" fill="#050A19" opacity="0.75" />
          {/* Outer high-polish silver ring */}
          <circle cx="0" cy="0" r="44" fill="url(#pedestalSteel)" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Deep blue inner circular seal */}
          <circle cx="0" cy="0" r="38" fill="url(#chromeFlute)" stroke="#93C5FD" strokeWidth="1.5" />
          {/* Inner ring */}
          <circle cx="0" cy="0" r="34" fill="url(#spiralCore)" />
          {/* Relief continent / map globe outline */}
          <path
            d="M-20 -10 Q-10 -22 4 -18 Q18 -14 22 -4 Q24 12 12 22 Q-6 26 -16 16 Q-24 6 -20 -10 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <path
            d="M-2 -8 L8 -12 L14 -3 L5 9 L-5 5 Z"
            fill="#1E3A8A"
            opacity="0.8"
          />
          {/* Glint curve on medallion */}
          <path
            d="M-30 -20 A34 34 0 0 1 22 -26"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.95"
            filter="url(#softGlow)"
          />
        </g>

        {/* --- STARBURST SPECULAR FLARES --- */}
        <g transform="translate(375, 205)">
          <circle cx="0" cy="0" r="9" fill="#FFFFFF" opacity="0.85" filter="url(#softGlow)" />
          <line x1="-22" y1="0" x2="22" y2="0" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="-22" x2="0" y2="22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="-12" y1="-12" x2="12" y2="12" stroke="#BFDBFE" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="-12" x2="-12" y2="12" stroke="#BFDBFE" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Lower Left Subtle Edge Flare */}
        <g transform="translate(182, 265)">
          <circle cx="0" cy="0" r="5" fill="#FFFFFF" opacity="0.8" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      </svg>
    </motion.div>
  );
};
