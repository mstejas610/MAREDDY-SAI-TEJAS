import React, { useState } from 'react';
import { Award, Lock, Star, Shield, Target, Zap, Globe, Code } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  earned: boolean;
  earnedDate?: string;
  category: string;
}

interface BadgeWallProps {
  badges: Badge[];
}

export const BadgeWall: React.FC<BadgeWallProps> = ({ badges }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Badges' },
    { id: 'challenges', name: 'Challenges' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'milestones', name: 'Milestones' },
    { id: 'special', name: 'Special' }
  ];

  const filteredBadges = selectedCategory === 'all' 
    ? badges 
    : badges.filter(badge => badge.category === selectedCategory);

  const earnedCount = badges.filter(badge => badge.earned).length;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white mb-4 md:mb-0 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Award className="w-4 h-4 text-white" />
          </div>
          Badge Collection
          <span className="text-green-400 text-lg">({earnedCount}/{badges.length})</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredBadges.map((badge) => (
          <div
            key={badge.id}
            className={`relative bg-gray-900 rounded-xl p-4 border transition-all duration-300 cursor-pointer group ${
              badge.earned 
                ? 'border-gray-600 hover:border-gray-500 hover:shadow-lg' 
                : 'border-gray-700 opacity-60'
            }`}
            onMouseEnter={() => setHoveredBadge(badge.id)}
            onMouseLeave={() => setHoveredBadge(null)}
          >
            {/* Badge Icon */}
            <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center transition-all duration-300 ${
              badge.earned 
                ? `${badge.color} group-hover:scale-110` 
                : 'bg-gray-700'
            }`}>
              {badge.earned ? badge.icon : <Lock className="w-6 h-6 text-gray-400" />}
            </div>

            {/* Badge Name */}
            <h3 className={`text-center text-sm font-semibold mb-1 ${
              badge.earned ? 'text-white' : 'text-gray-500'
            }`}>
              {badge.name}
            </h3>

            {/* Earned Date */}
            {badge.earned && badge.earnedDate && (
              <p className="text-center text-xs text-green-400">
                {badge.earnedDate}
              </p>
            )}

            {/* Tooltip */}
            {hoveredBadge === badge.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                <div className="bg-gray-800 text-white text-xs rounded-lg p-3 shadow-xl border border-gray-600 max-w-48">
                  <p className="font-semibold mb-1">{badge.name}</p>
                  <p className="text-gray-300">{badge.description}</p>
                  {badge.earned && badge.earnedDate && (
                    <p className="text-green-400 mt-1">Earned: {badge.earnedDate}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredBadges.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No badges in this category</div>
          <div className="text-gray-500 text-sm">Complete challenges to earn badges!</div>
        </div>
      )}
    </div>
  );
};