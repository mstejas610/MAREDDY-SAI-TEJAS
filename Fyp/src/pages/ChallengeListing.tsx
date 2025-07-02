import React, { useState, useMemo } from 'react';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { SortDropdown } from '../components/SortDropdown';
import { ChallengeGrid } from '../components/ChallengeGrid';
import { useUser } from '../contexts/UserContext';
import { filterChallengesByRole } from '../utils/challengeFilters';
import { ArrowLeft, Filter } from 'lucide-react';

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
  createdAt: string;
  correctFlag?: string;
  tags: string[];
  estimatedTime: string;
  owaspCategory: string;
}

interface ChallengeListingProps {
  onChallengeClick: (challenge: Challenge) => void;
  onBackToDashboard: () => void;
}

import { mockChallenges } from '../data/challenges';
  

export const ChallengeListing: React.FC<ChallengeListingProps> = ({
  onChallengeClick,
  onBackToDashboard
}) => {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recent');

  const filteredAndSortedChallenges = useMemo(() => {
    // First filter by user role (learners only see published challenges)
    let filtered = user ? filterChallengesByRole(mockChallenges, user.role) : mockChallenges;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(challenge =>
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(challenge =>
        selectedCategories.includes(challenge.category)
      );
    }

    // Sort challenges
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'easiest':
        filtered.sort((a, b) => {
          const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        });
        break;
      case 'hardest':
        filtered.sort((a, b) => {
          const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
        });
        break;
      case 'points':
        filtered.sort((a, b) => b.points - a.points);
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategories, sortBy]);

  return (
    <div className="min-h-screen bg-gray-950 font-mono">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={onBackToDashboard}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Challenge <span className="text-green-400">Arena</span>
                </h1>
                <p className="text-gray-400 mt-1">
                  Test your skills across {mockChallenges.length} cybersecurity challenges
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {/* Filters Row */}
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Filter className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">Categories</span>
                </div>
                <CategoryFilter 
                  selectedCategories={selectedCategories}
                  onCategoryChange={setSelectedCategories}
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-white font-semibold text-sm">Sort by</span>
                <SortDropdown 
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-gray-400">
              Showing <span className="text-green-400 font-semibold">{filteredAndSortedChallenges.length}</span> challenges
              {selectedCategories.length > 0 && (
                <span> in <span className="text-purple-400 font-semibold">{selectedCategories.join(', ')}</span></span>
              )}
              {searchTerm && (
                <span> matching "<span className="text-blue-400 font-semibold">{searchTerm}</span>"</span>
              )}
            </p>
          </div>

          {/* Challenge Grid */}
          <ChallengeGrid 
            challenges={filteredAndSortedChallenges}
            onChallengeClick={onChallengeClick}
          />

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                New challenges added weekly. Keep hacking, keep learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};