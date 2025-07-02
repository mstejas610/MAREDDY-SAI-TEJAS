import React from 'react';
import { Shield } from 'lucide-react';

interface RankBadgeProps {
  rank: string;
  level: number;
}

export const RankBadge: React.FC<RankBadgeProps> = ({ rank, level }) => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 rounded-xl p-6 border border-purple-500/30 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 font-medium">Current Rank</h3>
            <p className="text-xl font-bold text-white mb-1">{rank}</p>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-sm font-semibold">Level {level}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < level ? 'bg-purple-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};