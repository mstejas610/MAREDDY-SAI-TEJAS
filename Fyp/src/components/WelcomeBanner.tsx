import React from 'react';
import { User } from 'lucide-react';

interface WelcomeBannerProps {
  userName: string;
  nextRank: string;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName, nextRank }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-2">
            Welcome back, <span className="text-green-400">{userName}</span>!
          </h1>
          <p className="text-gray-300 text-lg">
            Keep hacking, you're almost at <span className="text-purple-400 font-semibold">{nextRank}</span>!
          </p>
        </div>
      </div>
    </div>
  );
};