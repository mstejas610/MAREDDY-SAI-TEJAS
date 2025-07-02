import React from 'react';

interface XPInlineBarProps {
  currentXP: number;
  maxXP: number;
  className?: string;
}

export const XPInlineBar: React.FC<XPInlineBarProps> = ({ currentXP, maxXP, className = '' }) => {
  const progressPercentage = Math.min((currentXP / maxXP) * 100, 100);

  return (
    <div className={`w-full bg-gray-800 rounded-full h-2 overflow-hidden ${className}`}>
      <div 
        className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progressPercentage}%` }}
      >
        <div className="h-full bg-white opacity-20 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
};