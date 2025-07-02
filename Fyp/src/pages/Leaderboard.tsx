import React, { useState } from 'react';
import { ArrowLeft, Trophy, Users, TrendingUp } from 'lucide-react';
import { LeaderboardTable } from '../components/LeaderboardTable';
import { FilterToggle } from '../components/FilterToggle';

interface LeaderboardProps {
  onBack: () => void;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ onBack }) => {
  const [timeFilter, setTimeFilter] = useState<'weekly' | 'monthly' | 'all-time'>('all-time');
  const [scopeFilter, setScopeFilter] = useState<'global' | 'institution' | 'class'>('global');

  // Mock leaderboard data
  const leaderboardUsers = [
    {
      rank: 1,
      username: "CyberNinja",
      totalXP: 2450,
      currentLevelXP: 450,
      nextLevelXP: 500,
      country: "USA",
      institution: "MIT",
      isCurrentUser: false
    },
    {
      rank: 2,
      username: "HackMaster",
      totalXP: 2380,
      currentLevelXP: 380,
      nextLevelXP: 500,
      country: "Germany",
      institution: "TU Berlin",
      isCurrentUser: false
    },
    {
      rank: 3,
      username: "SecurityPro",
      totalXP: 2250,
      currentLevelXP: 250,
      nextLevelXP: 500,
      country: "Japan",
      institution: "Tokyo Tech",
      isCurrentUser: false
    },
    {
      rank: 4,
      username: "CodeBreaker",
      totalXP: 2100,
      currentLevelXP: 100,
      nextLevelXP: 500,
      country: "UK",
      institution: "Oxford",
      isCurrentUser: false
    },
    {
      rank: 5,
      username: "CryptoKing",
      totalXP: 1950,
      currentLevelXP: 450,
      nextLevelXP: 500,
      country: "Canada",
      institution: "UofT",
      isCurrentUser: false
    },
    {
      rank: 6,
      username: "WebWarrior",
      totalXP: 1800,
      currentLevelXP: 300,
      nextLevelXP: 500,
      country: "Australia",
      institution: "ANU",
      isCurrentUser: false
    },
    {
      rank: 7,
      username: "PwnExpert",
      totalXP: 1650,
      currentLevelXP: 150,
      nextLevelXP: 500,
      country: "France",
      institution: "Sorbonne",
      isCurrentUser: false
    },
    {
      rank: 8,
      username: "ForensicAce",
      totalXP: 1500,
      currentLevelXP: 0,
      nextLevelXP: 500,
      country: "Sweden",
      institution: "KTH",
      isCurrentUser: false
    },
    {
      rank: 9,
      username: "ReverseGuru",
      totalXP: 1350,
      currentLevelXP: 350,
      nextLevelXP: 500,
      country: "Netherlands",
      institution: "TU Delft",
      isCurrentUser: false
    },
    {
      rank: 10,
      username: "BinaryBeast",
      totalXP: 1200,
      currentLevelXP: 200,
      nextLevelXP: 500,
      country: "Switzerland",
      institution: "ETH Zurich",
      isCurrentUser: false
    }
  ];

  // Current user (not in top 10)
  const currentUser = {
    rank: 47,
    username: "Tejas",
    totalXP: 850,
    currentLevelXP: 350,
    nextLevelXP: 500,
    country: "India",
    institution: "CyberSec University",
    isCurrentUser: true
  };

  const getFilteredUsers = () => {
    // In a real app, this would filter based on timeFilter and scopeFilter
    return leaderboardUsers;
  };

  const getLeaderboardTitle = () => {
    const timeText = timeFilter === 'weekly' ? 'Weekly' : timeFilter === 'monthly' ? 'Monthly' : 'All-Time';
    const scopeText = scopeFilter === 'global' ? 'Global' : scopeFilter === 'institution' ? 'Institution' : 'Class';
    return `${timeText} ${scopeText} Leaderboard`;
  };

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
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={onBack}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  <span className="text-yellow-400">Leaderboard</span>
                </h1>
                <p className="text-gray-400 mt-1">
                  See how you rank against other cyber warriors
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">#{currentUser.rank}</p>
                  <p className="text-gray-400 text-sm">Your Rank</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1,247</p>
                  <p className="text-gray-400 text-sm">Total Users</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">+12</p>
                  <p className="text-gray-400 text-sm">Rank Change</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <FilterToggle 
              timeFilter={timeFilter}
              onTimeFilterChange={setTimeFilter}
              scopeFilter={scopeFilter}
              onScopeFilterChange={setScopeFilter}
            />
          </div>

          {/* Leaderboard Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              {getLeaderboardTitle()}
            </h2>
          </div>

          {/* Leaderboard Table */}
          <LeaderboardTable 
            users={getFilteredUsers()}
            currentUser={currentUser}
          />

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Rankings update every hour. Keep solving challenges to climb higher!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};