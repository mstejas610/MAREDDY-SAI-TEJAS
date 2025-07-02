import React from 'react';
import { Zap } from 'lucide-react';

interface XPProgressBarProps {
  currentXP: number;
  maxXP: number;
  nextRank: string;
}

export const XPProgressBar: React.FC<XPProgressBarProps> = ({ currentXP, maxXP, nextRank }) => {
  const progressPercentage = (currentXP / maxXP) * 100;

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <Zap className="w-6 h-6 text-green-400" />
        <h3 className="text-xl font-bold text-white">Experience Points</h3>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300 font-medium">
            {currentXP} / {maxXP} XP to {nextRank}
          </span>
          <span className="text-green-400 font-bold">{Math.round(progressPercentage)}%</span>
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out shadow-lg relative"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-400">
        <span className="text-green-400 font-semibold">{maxXP - currentXP} XP</span> remaining to next rank
      </div>
    </div>
  );
};