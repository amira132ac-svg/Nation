import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withMonogram?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  withMonogram = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col select-none ${className}`}>
      {withMonogram && (
        <div className="flex items-center mb-1 text-white opacity-95">
          {/* Stylized TM mark from reference image */}
          <svg className={size === 'xl' ? 'w-16 h-12' : size === 'lg' ? 'w-12 h-9' : 'w-8 h-6'} viewBox="0 0 100 70" fill="none" stroke="currentColor">
            {/* T */}
            <path d="M12 18 Q26 12 42 16" strokeWidth="6" strokeLinecap="round" />
            <path d="M26 16 L29 58" strokeWidth="6" strokeLinecap="round" />
            {/* M */}
            <path d="M46 54 L52 14 L68 44 L82 16 L88 56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      
      <div className="flex items-stretch gap-2.5">
        {/* Official vertical white brand line */}
        <div className={`bg-white rounded-full shrink-0 ${
          size === 'sm' ? 'w-0.5 my-0.5' :
          size === 'md' ? 'w-1 my-0.5' :
          size === 'lg' ? 'w-1.5 my-0.5' :
          'w-2 my-1'
        }`} />

        <div className="flex flex-col justify-center leading-none">
          <span className={`tracking-widest uppercase font-semibold text-slate-200 ${
            size === 'sm' ? 'text-[9px] tracking-[0.2em]' :
            size === 'md' ? 'text-[11px] tracking-[0.22em]' :
            size === 'lg' ? 'text-[14px] tracking-[0.24em]' :
            'text-[18px] tracking-[0.25em]'
          }`}>
            TMPROCLUB
          </span>
          <span className={`font-black tracking-tight uppercase text-white mt-0.5 ${
            size === 'sm' ? 'text-sm' :
            size === 'md' ? 'text-lg' :
            size === 'lg' ? 'text-2xl' :
            'text-4xl'
          }`}>
            NATIONS LEAGUE
          </span>
        </div>
      </div>
    </div>
  );
};
