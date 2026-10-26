import React from 'react';
import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Multi-layered Championship Studio Rim Lighting */}
      <div
        className="absolute inset-x-8 top-6 bottom-12 rounded-full pointer-events-none opacity-85"
        style={{
          background:
            'radial-gradient(ellipse at 50% 38%, rgba(251, 191, 36, 0.28) 0%, rgba(59, 130, 246, 0.22) 45%, rgba(7, 13, 30, 0) 75%)',
          filter: 'blur(42px)',
        }}
      />

      {/* Symmetrical 3D-Shaded Championship Cup Vector Masterpiece */}
      <svg
        viewBox="0 0 520 680"
        className="w-full h-full drop-shadow-[0_28px_48px_rgba(0,6,24,0.95)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Mirror-Polished Sterling Silver Gradient */}
          <linearGradient id="sterlingSilver" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="14%" stopColor="#94A3B8" />
            <stop offset="28%" stopColor="#FFFFFF" />
            <stop offset="44%" stopColor="#E2E8F0" />
            <stop offset="56%" stopColor="#475569" />
            <stop offset="72%" stopColor="#F8FAFC" />
            <stop offset="88%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Left Helical Wing Silver-Blue Gradient */}
          <linearGradient id="leftWingSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="22%" stopColor="#E2E8F0" />
            <stop offset="48%" stopColor="#93C5FD" />
            <stop offset="74%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Right Helical Wing Silver-Gold Gradient */}
          <linearGradient id="rightWingSilver" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#FEF9C3" />
            <stop offset="45%" stopColor="#CBD5E1" />
            <stop offset="72%" stopColor="#334155" />
            <stop offset="100%" stopColor="#090F24" />
          </linearGradient>

          {/* 24K Championship Gold Gradient */}
          <linearGradient id="royalGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="18%" stopColor="#FDE047" />
            <stop offset="42%" stopColor="#F59E0B" />
            <stop offset="68%" stopColor="#B45309" />
            <stop offset="86%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FEF08A" />
          </linearGradient>

          {/* Horizontal Gold Rim Gradient */}
          <linearGradient id="goldHorizontal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="20%" stopColor="#FBBF24" />
            <stop offset="35%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="68%" stopColor="#FEF08A" />
            <stop offset="85%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Deep Obsidian Pedestal Gradient */}
          <linearGradient id="obsidianBase" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#030712" />
            <stop offset="22%" stopColor="#1E293B" />
            <stop offset="38%" stopColor="#334155" />
            <stop offset="52%" stopColor="#0F172A" />
            <stop offset="76%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* 3D Championship Globe Core */}
          <radialGradient id="globeSphere" cx="42%" cy="35%" r="62%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#FEF08A" />
            <stop offset="48%" stopColor="#F59E0B" />
            <stop offset="78%" stopColor="#92400E" />
            <stop offset="100%" stopColor="#451A03" />
          </radialGradient>

          {/* Inner Royal Navy Cavity */}
          <linearGradient id="deepCavity" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#09132E" />
            <stop offset="50%" stopColor="#172554" />
            <stop offset="100%" stopColor="#04091A" />
          </linearGradient>

          {/* Specular Glow Filter */}
          <filter id="specularGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* 1. STAGE SHADOW & MULTI-TIERED OBSIDIAN/GOLD PEDESTAL BASE   */}
        {/* ============================================================ */}
        <g id="pedestal-assembly">
          {/* Floor Ambient Shadow */}
          <ellipse cx="260" cy="642" rx="142" ry="18" fill="#020510" opacity="0.85" />
          <ellipse cx="260" cy="638" rx="118" ry="11" fill="url(#goldHorizontal)" opacity="0.28" />

          {/* Lower Tier Plinth */}
          <path
            d="M142 604 L378 604 L392 632 C392 642 332 650 260 650 C188 650 128 642 128 632 Z"
            fill="url(#obsidianBase)"
            stroke="url(#goldHorizontal)"
            strokeWidth="1.5"
          />
          <ellipse
            cx="260"
            cy="604"
            rx="118"
            ry="13"
            fill="url(#obsidianBase)"
            stroke="url(#goldHorizontal)"
            strokeWidth="1.5"
          />

          {/* Middle Tier Pedestal Drum (Holds Championship Nameplate) */}
          <path
            d="M162 542 L358 542 L370 602 C370 611 320 618 260 618 C200 618 150 611 150 602 Z"
            fill="url(#obsidianBase)"
            stroke="#475569"
            strokeWidth="1"
          />

          {/* Gold Championship Engraving Plate on Pedestal */}
          <path
            d="M182 558 C215 564 305 564 338 558 L344 592 C308 599 212 599 176 592 Z"
            fill="url(#goldHorizontal)"
            stroke="#FEF08A"
            strokeWidth="1.2"
          />
          <path
            d="M186 562 C216 567 304 567 334 562 L339 588 C305 594 215 594 181 588 Z"
            fill="#070E24"
          />
          <text
            x="260"
            y="575"
            textAnchor="middle"
            fill="#FDE047"
            fontSize="9.5"
            fontWeight="900"
            letterSpacing="2.8"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            TM PROCLUBS
          </text>
          <text
            x="260"
            y="586"
            textAnchor="middle"
            fill="#E2E8F0"
            fontSize="7"
            fontWeight="700"
            letterSpacing="3.2"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            NATIONS LEAGUE
          </text>

          {/* Upper Pedestal Collar Ring (Gold & Sterling Silver Bevel) */}
          <ellipse
            cx="260"
            cy="542"
            rx="98"
            ry="11"
            fill="url(#sterlingSilver)"
            stroke="url(#goldHorizontal)"
            strokeWidth="2"
          />
          <path
            d="M182 520 L338 520 L350 541 C350 547 310 551 260 551 C210 551 170 547 170 541 Z"
            fill="url(#sterlingSilver)"
          />
          <ellipse
            cx="260"
            cy="520"
            rx="78"
            ry="9"
            fill="url(#goldHorizontal)"
            stroke="#FFFBEB"
            strokeWidth="1.2"
          />
        </g>

        {/* ============================================================ */}
        {/* 2. SCULPTED TWIN HANDLES / AERODYNAMIC CHAMPIONSHIP WINGS    */}
        {/* ============================================================ */}
        <g id="championship-handles">
          {/* Left Outer Handle Wing */}
          <path
            d="M158 142 C96 146 82 222 114 286 C136 330 176 358 206 382 L214 360 C188 338 154 312 136 272 C112 220 122 166 168 162 Z"
            fill="url(#leftWingSilver)"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          />
          {/* Left Handle Inner Gold Trim */}
          <path
            d="M166 158 C118 164 108 220 132 274 C150 314 184 340 212 362"
            stroke="url(#royalGold)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Right Outer Handle Wing */}
          <path
            d="M362 142 C424 146 438 222 406 286 C384 330 344 358 314 382 L306 360 C332 338 366 312 384 272 C408 220 398 166 352 162 Z"
            fill="url(#rightWingSilver)"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          />
          {/* Right Handle Inner Gold Trim */}
          <path
            d="M354 158 C402 164 412 220 388 274 C370 314 336 340 308 362"
            stroke="url(#royalGold)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* ============================================================ */}
        {/* 3. INNER CHALICE CAVITY & 3D GOLDEN GLOBE CORE               */}
        {/* ============================================================ */}
        <g id="inner-chalice-and-globe">
          {/* Deep Royal Navy Inner Chalice Backdrop */}
          <path
            d="M155 112 C155 245 202 365 225 516 L295 516 C318 365 365 245 365 112 Z"
            fill="url(#deepCavity)"
          />

          {/* Inner Backside Gold Flutes */}
          <path
            d="M195 106 C215 190 235 300 245 516 L275 516 C285 300 305 190 325 106 Z"
            fill="url(#royalGold)"
            opacity="0.35"
          />

          {/* 3D Championship World Globe Suspended in Upper Cradle */}
          <circle
            cx="260"
            cy="210"
            r="74"
            fill="url(#globeSphere)"
            stroke="#FEF08A"
            strokeWidth="2"
          />

          {/* Globe Latitude & Longitude Gold Filigree Rings */}
          <ellipse
            cx="260"
            cy="210"
            rx="74"
            ry="26"
            stroke="#FFFBEB"
            strokeWidth="1.3"
            strokeDasharray="4 3"
            opacity="0.7"
          />
          <ellipse
            cx="260"
            cy="210"
            rx="36"
            ry="74"
            stroke="#FFFBEB"
            strokeWidth="1.3"
            opacity="0.65"
          />
          <line
            x1="260"
            y1="136"
            x2="260"
            y2="284"
            stroke="#FFFBEB"
            strokeWidth="1.4"
            opacity="0.65"
          />

          {/* Globe Specular Highlight */}
          <ellipse
            cx="236"
            cy="176"
            rx="26"
            ry="14"
            transform="rotate(-24 236 176)"
            fill="#FFFFFF"
            opacity="0.55"
            filter="url(#specularGlow)"
          />
        </g>

        {/* ============================================================ */}
        {/* 4. SYMMETRICAL HELICAL SILVER-PLATINUM CHALICE RIBBONS       */}
        {/* ============================================================ */}
        <g id="helical-chalice-ribbons">
          {/* Left Sweeping Helical Blade (Wraps from Base to Upper Left Crown) */}
          <path
            d="M188 518 C196 420 182 332 146 218 C134 176 138 132 154 102 C182 138 214 198 238 282 C256 346 258 432 248 518 Z"
            fill="url(#leftWingSilver)"
            stroke="#FFFFFF"
            strokeWidth="1.8"
          />

          {/* Right Sweeping Helical Blade (Wraps from Base to Upper Right Crown) */}
          <path
            d="M332 518 C324 420 338 332 374 218 C386 176 382 132 366 102 C338 138 306 198 282 282 C264 346 262 432 272 518 Z"
            fill="url(#rightWingSilver)"
            stroke="#FFFFFF"
            strokeWidth="1.8"
          />

          {/* Center Ascending V-Pillar (Interlocks the Helical Ribbons at X=260) */}
          <path
            d="M214 520 C224 410 218 318 186 226 C218 258 244 292 260 328 C276 292 302 258 334 226 C302 318 296 410 306 520 Z"
            fill="url(#sterlingSilver)"
            stroke="url(#goldHorizontal)"
            strokeWidth="1.8"
          />

          {/* Central Gold Spine Highlight */}
          <path
            d="M260 316 L268 435 L260 520 L252 435 Z"
            fill="url(#royalGold)"
            opacity="0.92"
          />

          {/* Razor-Sharp Specular Edge Lines on Ribbons */}
          <path
            d="M154 106 C180 144 212 204 235 288 C252 350 254 432 245 514"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#specularGlow)"
          />
          <path
            d="M366 106 C340 144 308 204 285 288 C268 350 266 432 275 514"
            stroke="#FEF08A"
            strokeWidth="2.8"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>

        {/* ============================================================ */}
        {/* 5. UPPER ROYAL CROWN RIM & CENTRAL CHAMPIONSHIP CREST        */}
        {/* ============================================================ */}
        <g id="upper-crown-and-crest">
          {/* Upper Chalice Crown Opening Ellipse */}
          <ellipse
            cx="260"
            cy="102"
            rx="108"
            ry="22"
            fill="url(#obsidianBase)"
            stroke="url(#goldHorizontal)"
            strokeWidth="3"
          />
          <ellipse
            cx="260"
            cy="102"
            rx="96"
            ry="15"
            fill="#050B1C"
            stroke="#93C5FD"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* Sculpted Crown Front Arch Rim */}
          <path
            d="M152 102 C182 128 338 128 368 102 C356 134 316 146 260 146 C204 146 164 134 152 102 Z"
            fill="url(#sterlingSilver)"
            stroke="#FFFFFF"
            strokeWidth="1.8"
          />

          {/* Center Medallion Shield (Anchored Symmetrically at X=260, Y=306) */}
          <g transform="translate(260, 306)">
            {/* Medallion Outer Shadow */}
            <circle cx="0" cy="4" r="42" fill="#020617" opacity="0.75" />
            {/* Outer Gold Bezel */}
            <circle
              cx="0"
              cy="0"
              r="39"
              fill="url(#royalGold)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            {/* Inner Deep Navy Enamel Ring */}
            <circle
              cx="0"
              cy="0"
              r="32"
              fill="#071029"
              stroke="#FDE047"
              strokeWidth="1.2"
            />
            {/* 8-Pointed Faceted Championship Star */}
            <polygon
              points="0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7"
              fill="url(#royalGold)"
              stroke="#FFFBEB"
              strokeWidth="1"
            />
            <circle cx="0" cy="1" r="6" fill="#FFFFFF" opacity="0.9" />
          </g>

          {/* Upper Crown Rim Specular Glint */}
          <path
            d="M180 116 Q260 134 340 116"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#specularGlow)"
          />
        </g>
      </svg>
    </motion.div>
  );
};
