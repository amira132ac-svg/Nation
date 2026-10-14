import React from 'react';

interface FlagProps {
  country: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'stadium' | 'standard';
}

export const Flag: React.FC<FlagProps> = ({
  country,
  className = '',
  size = 'md',
  variant = 'stadium',
}) => {
  const sizeClasses = {
    sm: 'w-7 h-5 rounded-md',
    md: 'w-10 h-7 rounded-lg',
    lg: 'w-14 h-9.5 rounded-xl',
    xl: 'w-20 h-13 rounded-2xl',
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
                  <path d="M400,206 L406,188 L400,180 L394,188 Z" fill="#F6B40E" />
                  <path d="M400,208 Q410,195 402,182 Q396,194 400,208" fill="#853406" opacity="0.35" />
                </g>
              );
            })}
            <circle cx="392" cy="246" r="3" fill="#853406" />
            <circle cx="408" cy="246" r="3" fill="#853406" />
            <path d="M394,258 Q400,264 406,258" stroke="#853406" strokeWidth="2" fill="none" />
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
            <rect width="900" height="200" fill="#C8102E" />
            <rect y="200" width="900" height="200" fill="#FFFFFF" />
            <rect y="400" width="900" height="200" fill="#003882" />
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
                height={400 / 13 + 0.5}
                fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'}
              />
            ))}
            {/* Canton */}
            <rect width="304" height={(400 * 7) / 13} fill="#3C3B6E" />
            {/* 50 Stars constellation */}
            <g fill="#FFFFFF">
              {[...Array(5)].map((_, row) => (
                <g key={`r1-${row}`}>
                  {[...Array(6)].map((_, col) => (
                    <polygon
                      key={`s1-${col}`}
                      points="0,-4 1.2,-1.2 4,-1.2 1.8,0.5 2.6,3.6 0,1.8 -2.6,3.6 -1.8,0.5 -4,-1.2 -1.2,-1.2"
                      transform={`translate(${24 + col * 46}, ${20 + row * 40}) scale(1.15)`}
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
                      transform={`translate(${47 + col * 46}, ${40 + row * 40}) scale(1.15)`}
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
            <rect y="226" width="600" height="28" fill="#CF2027" />
            {/* Circle of 10 golden stars */}
            <g transform="translate(210, 240)">
              {[...Array(10)].map((_, i) => {
                const angle = (i * 360) / 10;
                const rad = (angle * Math.PI) / 180;
                const x = 72 * Math.sin(rad);
                const y = -72 * Math.cos(rad);
                return (
                  <polygon
                    key={i}
                    points="0,-9 2.7,-2.7 9,-2.7 4,1.2 5.8,8.1 0,4 -5.8,8.1 -4,1.2 -9,-2.7 -2.7,-2.7"
                    fill="#FFD100"
                    transform={`translate(${x}, ${y}) scale(0.95)`}
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
            {/* Authentic Spanish Coat of Arms emblem */}
            <g transform="translate(200, 250) scale(0.85)">
              {/* Crown */}
              <path d="M-30,-75 L0,-92 L30,-75 L22,-60 L-22,-60 Z" fill="#F1BF00" stroke="#78350F" strokeWidth="2.5" />
              <circle cx="0" cy="-94" r="4" fill="#F1BF00" />
              {/* Pillars of Hercules */}
              <rect x="-56" y="-50" width="10" height="80" rx="3" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
              <rect x="46" y="-50" width="10" height="80" rx="3" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
              <path d="M-60,-15 Q-51,-5 -60,5" stroke="#AA151B" strokeWidth="3" fill="none" />
              <path d="M50,-15 Q59,-5 50,5" stroke="#AA151B" strokeWidth="3" fill="none" />
              {/* Shield body */}
              <path
                d="M-34,-55 L34,-55 L34,5 Q34,42 0,55 Q-34,42 -34,5 Z"
                fill="#AA151B"
                stroke="#78350F"
                strokeWidth="3"
              />
              {/* Shield 4 quarters */}
              <rect x="-30" y="-50" width="30" height="42" fill="#AA151B" />
              <rect x="0" y="-50" width="30" height="42" fill="#F1BF00" />
              <rect x="-30" y="-8" width="30" height="42" fill="#F1BF00" />
              <rect x="0" y="-8" width="30" height="42" fill="#AA151B" />
              {/* Castle silhouette in quarter 1 */}
              <path d="M-22,-20 L-22,-40 L-8,-40 L-8,-20 Z" fill="#F1BF00" />
              {/* Lion silhouette in quarter 2 */}
              <circle cx="15" cy="-28" r="7" fill="#7C2D12" />
              {/* Center inescutcheon (Bourbon-Anjou) */}
              <ellipse cx="0" cy="-4" rx="8" ry="12" fill="#003882" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="0" cy="-4" r="3" fill="#F1BF00" />
            </g>
          </svg>
        );

      case 'brazil':
        return (
          <svg viewBox="0 0 720 504" className="w-full h-full object-cover">
            <rect width="720" height="504" fill="#009739" />
            <polygon points="360,45 675,252 360,459 45,252" fill="#FEDD00" />
            <circle cx="360" cy="252" r="108" fill="#012169" />
            {/* Celestial starry band */}
            <path
              d="M255,270 Q360,222 465,264"
              stroke="#FFFFFF"
              strokeWidth="13"
              fill="none"
            />
            {/* Southern Cross constellation */}
            <circle cx="338" cy="292" r="3.5" fill="#FFFFFF" />
            <circle cx="360" cy="310" r="3.5" fill="#FFFFFF" />
            <circle cx="382" cy="292" r="3.5" fill="#FFFFFF" />
            <circle cx="360" cy="274" r="3.5" fill="#FFFFFF" />
            <circle cx="372" cy="301" r="2.5" fill="#FFFFFF" />
          </svg>
        );

      case 'israel':
        return (
          <svg viewBox="0 0 880 640" className="w-full h-full object-cover">
            <rect width="880" height="640" fill="#FFFFFF" />
            <rect y="55" width="880" height="105" fill="#0038B8" />
            <rect y="480" width="880" height="105" fill="#0038B8" />
            {/* Star of David */}
            <g transform="translate(440, 320) scale(1.25)">
              <polygon
                points="0,-76 65.8,38 -65.8,38"
                fill="none"
                stroke="#0038B8"
                strokeWidth="15"
              />
              <polygon
                points="0,76 65.8,-38 -65.8,-38"
                fill="none"
                stroke="#0038B8"
                strokeWidth="15"
              />
            </g>
          </svg>
        );

      case 'portugal':
        return (
          <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
            <rect width="240" height="400" fill="#046A38" />
            <rect x="240" width="360" height="400" fill="#DA291C" />
            {/* Armillary sphere and royal shield */}
            <g transform="translate(240, 200) scale(0.9)">
              <circle cx="0" cy="0" r="60" fill="none" stroke="#FED100" strokeWidth="8" />
              <ellipse cx="0" cy="0" rx="48" ry="22" fill="none" stroke="#FED100" strokeWidth="6" />
              <ellipse cx="0" cy="0" rx="22" ry="48" fill="none" stroke="#FED100" strokeWidth="6" />
              <line x1="-60" y1="0" x2="60" y2="0" stroke="#FED100" strokeWidth="7" />
              <line x1="0" y1="-60" x2="0" y2="60" stroke="#FED100" strokeWidth="7" />
              {/* Central Portuguese shield */}
              <path
                d="M-28,-32 L28,-32 L28,8 Q28,42 0,52 Q-28,42 -28,8 Z"
                fill="#FFFFFF"
                stroke="#DA291C"
                strokeWidth="8"
              />
              {/* Inner blue quinas */}
              <circle cx="0" cy="-14" r="4.5" fill="#002B7F" />
              <circle cx="-13" cy="0" r="4.5" fill="#002B7F" />
              <circle cx="0" cy="0" r="4.5" fill="#002B7F" />
              <circle cx="13" cy="0" r="4.5" fill="#002B7F" />
              <circle cx="0" cy="14" r="4.5" fill="#002B7F" />
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
            <rect x="235" y="0" width="170" height="640" fill="#FFFFFF" />
            <rect x="0" y="235" width="880" height="170" fill="#FFFFFF" />
            {/* Dark Blue Scandinavian cross */}
            <rect x="275" y="0" width="90" height="640" fill="#00205B" />
            <rect x="0" y="275" width="880" height="90" fill="#00205B" />
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
      className={`relative inline-flex shrink-0 overflow-hidden select-none border-2 border-white/90 shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-transform ${sizeClasses[size]} ${className}`}
      title={`${country} Flag`}
      aria-label={`${country} National Flag`}
    >
      {renderFlagContent()}
      
      {/* Subtle glossy glass highlight on top half of flag (matching stadium broadcast graphics in IMG_1730) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/15 pointer-events-none" />
    </div>
  );
};
