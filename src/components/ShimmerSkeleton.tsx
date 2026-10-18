import React from 'react';

interface ShimmerBoxProps {
  className?: string;
  rounded?: string;
}

export const ShimmerBox: React.FC<ShimmerBoxProps> = ({
  className = 'h-4 w-full',
  rounded = 'rounded-md',
}) => {
  return <div className={`shimmer-skeleton ${rounded} ${className}`} />;
};

/**
 * Standings Table Shimmer Loading Skeleton
 * Perfectly matches the layout and dimensions of the group standings table
 */
export const StandingsTableSkeleton: React.FC<{ isGroupA?: boolean; groupTitle?: string }> = ({
  isGroupA = true,
  groupTitle = 'GROUP',
}) => {
  return (
    <div className="bg-[#0A1432]/95 border border-blue-900/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm animate-pulse-subtle">
      {/* Table Group Header Skeleton */}
      <div
        className={`px-6 py-4 flex items-center justify-between border-b ${
          isGroupA ? 'border-yellow-500/30 bg-yellow-500/10' : 'border-blue-500/30 bg-blue-500/10'
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`w-3.5 h-3.5 rounded-sm shadow-sm ${
              isGroupA ? 'bg-[#FFCC00]/70' : 'bg-[#0052FF]/70'
            }`}
          />
          <div className="flex items-center gap-2">
            <span className="font-black text-white/80 text-base sm:text-lg tracking-wide uppercase">
              {groupTitle}
            </span>
            <ShimmerBox className="w-16 h-4" rounded="rounded" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ShimmerBox className="w-24 h-6" rounded="rounded-md" />
        </div>
      </div>

      {/* Table Structure Skeleton */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead>
            <tr className="border-b border-blue-950/80 bg-[#060D20]/90 text-xs font-bold text-slate-500 tracking-wider uppercase">
              <th scope="col" className="py-3.5 px-4 w-12 text-center">
                <ShimmerBox className="w-5 h-3 mx-auto" />
              </th>
              <th scope="col" className="py-3.5 px-4 min-w-[190px]">
                <ShimmerBox className="w-20 h-3" />
              </th>
              <th scope="col" className="py-3.5 px-3 text-center w-12">
                <ShimmerBox className="w-4 h-3 mx-auto" />
              </th>
              <th scope="col" className="py-3.5 px-3 text-center w-12">
                <ShimmerBox className="w-4 h-3 mx-auto" />
              </th>
              <th scope="col" className="py-3.5 px-3 text-center w-12">
                <ShimmerBox className="w-4 h-3 mx-auto" />
              </th>
              <th scope="col" className="py-3.5 px-3 text-center w-12">
                <ShimmerBox className="w-4 h-3 mx-auto" />
              </th>
              <th scope="col" className="py-3.5 px-3 text-center w-12">
                <ShimmerBox className="w-4 h-3 mx-auto" />
              </th>
              <th scope="col" className="py-3.5 px-3 text-center w-12">
                <ShimmerBox className="w-4 h-3 mx-auto" />
              </th>
              <th scope="col" className="py-3.5 px-3 text-center w-12">
                <ShimmerBox className="w-4 h-3 mx-auto" />
              </th>
              <th scope="col" className="py-3.5 px-4 text-center w-16">
                <ShimmerBox className="w-6 h-3 mx-auto" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-950/60 font-mono">
            {[1, 2, 3, 4, 5, 6].map((rowIdx) => (
              <tr key={rowIdx} className="border-b border-blue-950/40">
                {/* Pos Badge */}
                <td className="py-3.5 px-4 text-center">
                  <ShimmerBox className="w-6 h-6 mx-auto" rounded="rounded-md" />
                </td>
                {/* Team & Flag */}
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <ShimmerBox className="w-6 h-4 shrink-0" rounded="rounded-sm" />
                    <ShimmerBox className="w-24 sm:w-32 h-4" rounded="rounded" />
                    <ShimmerBox className="w-8 h-3 ml-auto mr-2" rounded="rounded" />
                  </div>
                </td>
                {/* Stat Numbers */}
                <td className="py-3.5 px-3 text-center">
                  <ShimmerBox className="w-4 h-4 mx-auto" rounded="rounded" />
                </td>
                <td className="py-3.5 px-3 text-center">
                  <ShimmerBox className="w-4 h-4 mx-auto" rounded="rounded" />
                </td>
                <td className="py-3.5 px-3 text-center">
                  <ShimmerBox className="w-4 h-4 mx-auto" rounded="rounded" />
                </td>
                <td className="py-3.5 px-3 text-center">
                  <ShimmerBox className="w-4 h-4 mx-auto" rounded="rounded" />
                </td>
                <td className="py-3.5 px-3 text-center">
                  <ShimmerBox className="w-4 h-4 mx-auto" rounded="rounded" />
                </td>
                <td className="py-3.5 px-3 text-center">
                  <ShimmerBox className="w-4 h-4 mx-auto" rounded="rounded" />
                </td>
                <td className="py-3.5 px-3 text-center">
                  <ShimmerBox className="w-6 h-4 mx-auto" rounded="rounded" />
                </td>
                {/* Points */}
                <td className="py-3.5 px-4 text-center">
                  <ShimmerBox className="w-7 h-5 mx-auto" rounded="rounded-md" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * Stats Overview & Leaderboard Shimmer Loading Skeleton
 */
export const StatsSectionSkeleton: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 4 Overview Metric Cards Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-[#0A1432]/90 border border-blue-900/50 rounded-xl p-4 sm:p-5 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <ShimmerBox className="w-20 sm:w-24 h-3.5" rounded="rounded" />
              <ShimmerBox className="w-6 h-6 rounded-lg" />
            </div>
            <div className="space-y-2">
              <ShimmerBox className="w-16 h-7 sm:h-8" rounded="rounded-md" />
              <ShimmerBox className="w-28 h-2.5" rounded="rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard Table Skeleton */}
      <div className="bg-[#0A1432]/95 border border-blue-900/50 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-blue-900/40">
          <div className="flex items-center gap-3">
            <ShimmerBox className="w-8 h-8 rounded-lg" />
            <div className="space-y-1.5">
              <ShimmerBox className="w-36 h-4" rounded="rounded" />
              <ShimmerBox className="w-24 h-3" rounded="rounded" />
            </div>
          </div>
          <ShimmerBox className="w-20 h-6 rounded-lg" />
        </div>

        {/* 6 Player Rows Skeleton */}
        <div className="divide-y divide-blue-950/60">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="py-3.5 flex items-center justify-between gap-4 first:pt-1 last:pb-1"
            >
              {/* Left: Rank & Player info */}
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <ShimmerBox className="w-7 h-7 shrink-0" rounded="rounded-lg" />
                <ShimmerBox className="w-10 h-10 shrink-0" rounded="rounded-full" />
                <div className="space-y-1.5 min-w-0">
                  <ShimmerBox className="w-28 sm:w-40 h-4" rounded="rounded" />
                  <div className="flex items-center gap-2">
                    <ShimmerBox className="w-5 h-3 rounded-sm" />
                    <ShimmerBox className="w-16 h-3" rounded="rounded" />
                  </div>
                </div>
              </div>

              {/* Right: Progress bar & Value pill */}
              <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                <div className="hidden sm:block w-32 md:w-48">
                  <ShimmerBox className="w-full h-2" rounded="rounded-full" />
                </div>
                <ShimmerBox className="w-12 sm:w-16 h-7" rounded="rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
