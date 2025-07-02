import React from 'react';
import { ChallengeCard } from './ChallengeCard';

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

interface ChallengeGridProps {
  challenges: Challenge[];
  onChallengeClick: (challenge: Challenge) => void;
}

export const ChallengeGrid: React.FC<ChallengeGridProps> = ({ challenges, onChallengeClick }) => {
  if (challenges.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">No challenges found</div>
        <div className="text-gray-500 text-sm">Try adjusting your filters or search terms</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <ChallengeCard 
          key={challenge.id} 
          challenge={challenge} 
          onClick={onChallengeClick}
        />
      ))}
    </div>
  );
};