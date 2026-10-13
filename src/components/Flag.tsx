import React from 'react';

interface FlagProps {
  country: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Flag: React.FC<FlagProps> = ({ country, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-4',
    md: 'w-8 h-5.5',
    lg: 'w-10 h-7',
    xl: 'w-14 h-9.5',
  };

  const normalized = country.toLowerCase().trim();

  // Authentic vector flags with official ratios and colors
  const renderFlagContent = () => {
    switch (normalized) {
      case 'argentina':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full object-cover">
            <rect width="800" height="166.6" fill="#74ACDF" />
            <rect y="166.6" width="800" height="166.8" fill="#FFFFFF" />
            <rect y="333.4" width="800" height="166.6" fill="#74ACDF" />
            {/* Sun of May */}
            <circle cx="400" cy="250" r="38" fill="#F6B40E" stroke="#853406" strokeWidth="2.5" />
            <circle cx="400" cy="250" r="16" fill="#F6B40E" />
            {/* Sun rays */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 360) / 16;
              return (
                <g key={i} transform={`rotate(${angle} 400 250)`}>
                  <path d="M400,208 L405,190 L400,182 L395,190 Z" fill="#F6B40E" />
                  <path d="M400,210 Q408,198 402,185 Q398,195 400,210" fill="#853406" opacity="0.3" />
                </g>
              );
            })}
            <circle cx="393" cy="246" r="3" fill="#853406" />
            <circle cx="407" cy="246" r="3" fill="#853406" />
            <path d="M394,258 Q400,263 406,258" stroke="#853406" strokeWidth="2" fill="none" />
          </svg>
        );

      case 'france':
        return (
          <svg viewBox="0 0 900 600" className="w-full h-full object-cover">
            <rect width="300" height="600" fill="#002654" />
            <rect x="300" width="300" height="600" fill="#FFFFFF" />
            <rect x="600" width="300" height="600" fill="#ED2939" />
          </svg>
        );

      case 'netherlands':
        return (
          <svg viewBox="0 0 900 600" className="w-full h-full object-cover">
            <rect width="900" height="200" fill="#AE1C28" />
            <rect y="200" width="900" height="200" fill="#FFFFFF" />
            <rect y="400" width="900" height="200" fill="#21468B" />
          </svg>
        );

      case 'usa':
      case 'united states':
        return (
          <svg viewBox="0 0 760 400" className="w-full h-full object-cover">
            {/* 13 Stripes */}
            {[...Array(13)].map((_, i) => (
              <rect
                key={i}
                y={(i * 400) / 13}
                width="760"
                height={400 / 13}
                fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'}
              />
            ))}
            {/* Canton */}
            <rect width="304" height={(400 * 7) / 13} fill="#3C3B6E" />
            {/* Constellation pattern dots representing stars */}
            <g fill="#FFFFFF">
              {[...Array(5)].map((_, row) => (
                <g key={`r1-${row}`}>
                  {[...Array(6)].map((_, col) => (
                    <polygon
                      key={`s1-${col}`}
                      points="0,-4 1.2,-1.2 4,-1.2 1.8,0.5 2.6,3.6 0,1.8 -2.6,3.6 -1.8,0.5 -4,-1.2 -1.2,-1.2"
                      transform={`translate(${24 + col * 46}, ${20 + row * 40}) scale(1.1)`}
                    />
                  ))}
                </g>
              ))}
              {[...Array(4)].map((_, row) => (
                <g key={`r2-${row}`}>
                  {[...Array(5)].map((_, col) => (
                    <polygon
                      key={`s2-${col}`}
                      points="0,-4 1.2,-1.2 4,-1.2 1.8,0.5 2.6,3.6 0,1.8 -2.6,3.6 -1.8,0.5 -4,-1.2 -1.2,-1.2"
                      transform={`translate(${47 + col * 46}, ${40 + row * 40}) scale(1.1)`}
                    />
                  ))}
                </g>
              ))}
            </g>
          </svg>
        );

      case 'colombia':
        return (
          <svg viewBox="0 0 900 600" className="w-full h-full object-cover">
            <rect width="900" height="300" fill="#FCD116" />
            <rect y="300" width="900" height="150" fill="#003893" />
            <rect y="450" width="900" height="150" fill="#CE1126" />
          </svg>
        );

      case 'cape verde':
      case 'cabo verde':
        return (
          <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
            <rect width="600" height="400" fill="#003893" />
            <rect y="200" width="600" height="80" fill="#FFFFFF" />
            <rect y="225" width="600" height="30" fill="#CF2027" />
            {/* Circle of 10 yellow stars */}
            <g transform="translate(200, 240)">
              {[...Array(10)].map((_, i) => {
                const angle = (i * 360) / 10;
                const rad = (angle * Math.PI) / 180;
                const x = 70 * Math.sin(rad);
                const y = -70 * Math.cos(rad);
                return (
                  <polygon
                    key={i}
                    points="0,-8 2.4,-2.4 8,-2.4 3.6,1 5.2,7.2 0,3.6 -5.2,7.2 -3.6,1 -8,-2.4 -2.4,-2.4"
                    fill="#FFD100"
                    transform={`translate(${x}, ${y}) scale(0.9)`}
                  />
                );
              })}
            </g>
          </svg>
        );

      case 'spain':
        return (
          <svg viewBox="0 0 750 500" className="w-full h-full object-cover">
            <rect width="750" height="125" fill="#AA151B" />
            <rect y="125" width="750" height="250" fill="#F1BF00" />
            <rect y="375" width="750" height="125" fill="#AA151B" />
            {/* Spanish Coat of Arms emblem */}
            <g transform="translate(190, 250) scale(0.65)">
              <rect x="-35" y="-55" width="70" height="70" rx="8" fill="#AA151B" stroke="#000" strokeWidth="2" opacity="0.8" />
              <circle cx="-50" cy="-20" r="12" fill="#E5E7EB" stroke="#000" strokeWidth="2" />
              <circle cx="50" cy="-20" r="12" fill="#E5E7EB" stroke="#000" strokeWidth="2" />
              <path d="M-30,-75 L0,-90 L30,-75 L20,-60 L-20,-60 Z" fill="#F1BF00" stroke="#000" strokeWidth="2" />
              <path d="M-25,-45 L-5,-45 L-5,-10 L-25,-10 Z" fill="#AA151B" />
              <path d="M5,-45 L25,-45 L25,-10 L5,-10 Z" fill="#F1BF00" />
              <path d="M-25, -5 L-5,-5 L-5,25 L-25,25 Z" fill="#F1BF00" />
              <path d="M5,-5 L25,-5 L25,25 L5,25 Z" fill="#AA151B" />
            </g>
          </svg>
        );

      case 'brazil':
        return (
          <svg viewBox="0 0 720 504" className="w-full h-full object-cover">
            <rect width="720" height="504" fill="#009739" />
            <polygon points="360,50 670,252 360,454 50,252" fill="#FEDD00" />
            <circle cx="360" cy="252" r="105" fill="#012169" />
            {/* Celestial band */}
            <path
              d="M260,265 Q360,225 460,260"
              stroke="#FFFFFF"
              strokeWidth="11"
              fill="none"
            />
            {/* Southern Cross stars */}
            <circle cx="340" cy="290" r="3" fill="#FFFFFF" />
            <circle cx="360" cy="305" r="3" fill="#FFFFFF" />
            <circle cx="380" cy="290" r="3" fill="#FFFFFF" />
            <circle cx="360" cy="275" r="3" fill="#FFFFFF" />
            <circle cx="370" cy="298" r="2" fill="#FFFFFF" />
          </svg>
        );

      case 'israel':
        return (
          <svg viewBox="0 0 880 640" className="w-full h-full object-cover">
            <rect width="880" height="640" fill="#FFFFFF" />
            <rect y="60" width="880" height="100" fill="#0038B8" />
            <rect y="480" width="880" height="100" fill="#0038B8" />
            {/* Star of David */}
            <g transform="translate(440, 320) scale(1.2)">
              <polygon
                points="0,-75 64.9,37.5 -64.9,37.5"
                fill="none"
                stroke="#0038B8"
                strokeWidth="14"
              />
              <polygon
                points="0,75 64.9,-37.5 -64.9,-37.5"
                fill="none"
                stroke="#0038B8"
                strokeWidth="14"
              />
            </g>
          </svg>
        );

      case 'portugal':
        return (
          <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
            <rect width="240" height="400" fill="#046A38" />
            <rect x="240" width="360" height="400" fill="#DA291C" />
            {/* Armillary sphere and shield */}
            <g transform="translate(240, 200) scale(0.8)">
              <circle cx="0" cy="0" r="55" fill="none" stroke="#FED100" strokeWidth="8" />
              <ellipse cx="0" cy="0" rx="45" ry="20" fill="none" stroke="#FED100" strokeWidth="6" />
              <ellipse cx="0" cy="0" rx="20" ry="45" fill="none" stroke="#FED100" strokeWidth="6" />
              <line x1="-55" y1="0" x2="55" y2="0" stroke="#FED100" strokeWidth="6" />
              <line x1="0" y1="-55" x2="0" y2="55" stroke="#FED100" strokeWidth="6" />
              {/* Central shield */}
              <path
                d="M-25,-30 L25,-30 L25,5 Q25,35 0,45 Q-25,35 -25,5 Z"
                fill="#FFFFFF"
                stroke="#DA291C"
                strokeWidth="7"
              />
              {/* Inner blue quinas */}
              <circle cx="0" cy="-12" r="4" fill="#002B7F" />
              <circle cx="-12" cy="0" r="4" fill="#002B7F" />
              <circle cx="0" cy="0" r="4" fill="#002B7F" />
              <circle cx="12" cy="0" r="4" fill="#002B7F" />
              <circle cx="0" cy="12" r="4" fill="#002B7F" />
            </g>
          </svg>
        );

      case 'italy':
        return (
          <svg viewBox="0 0 900 600" className="w-full h-full object-cover">
            <rect width="300" height="600" fill="#009246" />
            <rect x="300" width="300" height="600" fill="#FFFFFF" />
            <rect x="600" width="300" height="600" fill="#CE2B37" />
          </svg>
        );

      case 'norway':
        return (
          <svg viewBox="0 0 880 640" className="w-full h-full object-cover">
            <rect width="880" height="640" fill="#BA0C2F" />
            {/* White cross */}
            <rect x="240" y="0" width="160" height="640" fill="#FFFFFF" />
            <rect x="0" y="240" width="880" height="160" fill="#FFFFFF" />
            {/* Blue cross */}
            <rect x="280" y="0" width="80" height="640" fill="#00205B" />
            <rect x="0" y="280" width="880" height="80" fill="#00205B" />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-300 font-bold uppercase">
            {country.slice(0, 3)}
          </div>
        );
    }
  };

  return (
    <div
      className={`inline-flex shrink-0 overflow-hidden rounded-[2px] shadow-sm border border-white/20 select-none ${sizeClasses[size]} ${className}`}
      title={`${country} Flag`}
      aria-label={`${country} National Flag`}
    >
      {renderFlagContent()}
    </div>
  );
};
