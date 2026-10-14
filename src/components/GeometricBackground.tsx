import React from 'react';

interface GeometricBackgroundProps {
  className?: string;
  variant?: 'hero' | 'subtle' | 'full';
}

export const GeometricBackground: React.FC<GeometricBackgroundProps> = ({
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
      {/* Base Deep Midnight Navy */}
      <div className="absolute inset-0 bg-[#070D1E]" />

      {/* Subtle diagonal grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #3B82F6 0, #3B82F6 1px, transparent 0, transparent 40px)`,
        }}
      />

      {/* Dynamic Diagonal Slices & Bands from Reference Images */}
      {/* Deep Blue Diagonal Ribbon 1 */}
      <div
        className="absolute -top-[20%] left-[10%] w-[120%] h-[160px] bg-gradient-to-r from-blue-950/40 via-blue-900/25 to-transparent transform -rotate-[32deg] origin-top-left blur-[1px]"
      />
      {/* Electric Blue Diagonal Accent Ribbon 2 */}
      <div
        className="absolute top-[15%] -left-[10%] w-[130%] h-[100px] bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent transform -rotate-[32deg] origin-top-left blur-[0.5px]"
      />
      {/* Royal Blue Diagonal Strip 3 */}
      <div
        className="absolute top-[40%] -left-[20%] w-[140%] h-[120px] bg-gradient-to-r from-blue-950/50 via-[#1E40AF]/15 to-transparent transform -rotate-[32deg] origin-top-left"
      />

      {/* Signature Red Circular Graphic Element (Top Right) from Reference */}
      <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-64 h-64 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full bg-[#E11D48] opacity-90 transform translate-x-12 -translate-y-12 shadow-[0_0_60px_rgba(225,29,72,0.3)]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-black/30" />
      </div>

      {/* Signature Green Triangle Graphic Element (Mid-Right) from Reference */}
      <div className="absolute top-[28%] -right-4 sm:right-0 md:right-4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 opacity-90 drop-shadow-[0_0_35px_rgba(5,150,105,0.25)]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="100,0 100,100 0,100" fill="#059669" />
        </svg>
      </div>

      {/* Signature Yellow Arc Graphic Element (Bottom Left) from Reference */}
      <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full bg-[#F59E0B] opacity-95 transform -translate-x-10 translate-y-10 shadow-[0_0_70px_rgba(245,158,11,0.25)]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-600/30 via-transparent to-white/20" />
      </div>

      {/* Soft Vignette Overlay to maintain supreme text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070D1E]/40 via-transparent to-[#070D1E]/80" />
    </div>
  );
};
