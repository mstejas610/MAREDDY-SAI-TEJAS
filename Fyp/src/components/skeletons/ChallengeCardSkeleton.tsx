
import React from 'react';

export const ChallengeCardSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl animate-pulse">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-gray-700"></div>
        <div className="flex flex-col items-end gap-2">
          <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
          <div className="h-6 w-16 bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Title and Category */}
      <div className="mb-3">
        <div className="h-5 w-3/4 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
      </div>

      {/* Description */}
      <div className="h-4 w-full bg-gray-700 rounded mb-2"></div>
      <div className="h-4 w-5/6 bg-gray-700 rounded mb-4"></div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="h-6 w-24 bg-gray-700 rounded-full"></div>
        <div className="flex items-center gap-4">
          <div className="h-4 w-10 bg-gray-700 rounded"></div>
          <div className="h-4 w-10 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};
