import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
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

interface ChallengeDetailsHeaderProps {
  challenge: Challenge;
  onBack: () => void;
}

const categoryColors = {
  web: 'from-blue-500 to-cyan-500',
  crypto: 'from-yellow-500 to-orange-500',
  forensics: 'from-purple-500 to-pink-500',
  reverse: 'from-red-500 to-rose-500',
  pwn: 'from-green-500 to-emerald-500',
  misc: 'from-indigo-500 to-blue-500',
};

export const ChallengeDetailsHeader: React.FC<ChallengeDetailsHeaderProps> = ({ 
  challenge, 
  onBack 
}) => {
  const colorGradient = categoryColors[challenge.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600';

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-6 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Back to Challenges</span>
      </button>

      {/* Header Content */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorGradient} flex items-center justify-center shadow-lg`}>
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{challenge.title}</h1>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-lg text-sm font-semibold capitalize bg-gradient-to-r ${colorGradient} text-white`}>
                  {challenge.category}
                </span>
                <DifficultyBadge difficulty={challenge.difficulty} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <StatusTag status={challenge.status} />
          <div className="text-right">
            <div className="text-3xl font-bold text-green-400 mb-1">
              {challenge.points} pts
            </div>
            <div className="text-gray-400 text-sm">
              {challenge.solves} solves • {challenge.rating}★
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};