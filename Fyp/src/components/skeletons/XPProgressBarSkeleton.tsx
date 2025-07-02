
import React from 'react';

export const XPProgressBarSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-6 bg-gray-700 rounded"></div>
        <div className="h-6 w-48 bg-gray-700 rounded"></div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="h-4 w-32 bg-gray-700 rounded"></div>
          <div className="h-4 w-16 bg-gray-700 rounded"></div>
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden shadow-inner">
          <div className="h-full w-1/2 bg-gray-700 rounded-full"></div>
        </div>
      </div>
      
      <div className="h-4 w-40 bg-gray-700 rounded"></div>
    </div>
  );
};
