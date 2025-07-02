import React from 'react';
import { Globe, Lock, Search, Code, Terminal, Cpu, Star, Users } from 'lucide-react';
import { DifficultyBadge } from './DifficultyBadge';
import { StatusTag } from './StatusTag';

interface Challenge {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Locked' | 'In Progress' | 'Completed' | 'Available';
  points: number;
  rating: number;
  solves: number;
  description: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
  onClick: (challenge: Challenge) => void;
}

const categoryIcons = {
  web: Globe,
  crypto: Lock,
  forensics: Search,
  reverse: Code,
  pwn: Terminal,
  misc: Cpu,
};

const categoryColors = {
  web: 'from-blue-500 to-cyan-500',
  crypto: 'from-yellow-500 to-orange-500',
  forensics: 'from-purple-500 to-pink-500',
  reverse: 'from-red-500 to-rose-500',
  pwn: 'from-green-500 to-emerald-500',
  misc: 'from-indigo-500 to-blue-500',
};

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onClick }) => {
  const Icon = categoryIcons[challenge.category as keyof typeof categoryIcons] || Code;
  const colorGradient = categoryColors[challenge.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600';
  
  const isLocked = challenge.status === 'Locked';

  return (
    <div 
      onClick={() => !isLocked && onClick(challenge)}
      className={`bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl transition-all duration-300 group ${
        isLocked 
          ? 'opacity-60 cursor-not-allowed' 
          : 'hover:border-gray-600 hover:shadow-green-500/10 hover:shadow-2xl cursor-pointer transform hover:scale-105'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <StatusTag status={challenge.status} />
          <div className="text-green-400 font-bold text-lg">
            {challenge.points} pts
          </div>
        </div>
      </div>

      {/* Title and Category */}
      <div className="mb-3">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
          {challenge.title}
        </h3>
        <p className="text-gray-400 text-sm capitalize font-medium">
          {challenge.category}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {challenge.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <DifficultyBadge difficulty={challenge.difficulty} />
        
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{challenge.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{challenge.solves}</span>
          </div>
        </div>
      </div>
    </div>
  );
};