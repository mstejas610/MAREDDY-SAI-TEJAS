import React, { useState } from 'react';
import { ArrowLeft, Star, Shield, Target, Zap, Globe, Code, Award, Lock } from 'lucide-react';
import { UserHeader } from '../components/UserHeader';
import { XPProgressBar } from '../components/XPProgressBar';
import { RankBadge } from '../components/RankBadge';
import { ProfileStats } from '../components/ProfileStats';
import { BadgeWall } from '../components/BadgeWall';

import { useUser } from '../contexts/UserContext';
import { Button } from '../components/ui/button';

interface ProfileProps {
  onBack: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ onBack }) => {
  const { logout } = useUser();
  // Mock user data
  const userData = {
    username: "Tejas",
    email: "tejas@cybersec.edu",
    joinDate: "January 2024",
    country: "India",
    institution: "CyberSec University",
    currentXP: 850,
    maxXP: 1000,
    currentRank: "Cyber Cadet",
    nextRank: "Cyber Guardian",
    rankLevel: 3
  };

  const userStats = {
    challengesSolved: 18,
    totalChallenges: 50,
    totalXP: 850,
    certificationsUnlocked: 3,
    timeSpent: "24 hrs",
    streakDays: 7,
    averageRating: 4.2
  };

  // Mock badges data
  const badges = [
    {
      id: 'first-blood',
      name: 'First Blood',
      description: 'Solved your first challenge',
      icon: <Star className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      earned: true,
      earnedDate: 'Jan 15, 2024',
      category: 'milestones'
    },
    {
      id: 'web-warrior',
      name: 'Web Warrior',
      description: 'Completed 5 web challenges',
      icon: <Globe className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      earned: true,
      earnedDate: 'Jan 22, 2024',
      category: 'challenges'
    },
    {
      id: 'crypto-crusher',
      name: 'Crypto Crusher',
      description: 'Solved 3 cryptography challenges',
      icon: <Lock className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      earned: true,
      earnedDate: 'Feb 1, 2024',
      category: 'challenges'
    },
    {
      id: 'speed-demon',
      name: 'Speed Demon',
      description: 'Solved a challenge in under 5 minutes',
      icon: <Zap className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      earned: false,
      category: 'achievements'
    },
    {
      id: 'code-breaker',
      name: 'Code Breaker',
      description: 'Completed 10 reverse engineering challenges',
      icon: <Code className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-red-500 to-rose-500',
      earned: false,
      category: 'challenges'
    },
    {
      id: 'elite-hacker',
      name: 'Elite Hacker',
      description: 'Reached 1000 XP',
      icon: <Shield className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      earned: false,
      category: 'milestones'
    },
    {
      id: 'streak-master',
      name: 'Streak Master',
      description: 'Maintained a 30-day solving streak',
      icon: <Target className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      earned: false,
      category: 'achievements'
    },
    {
      id: 'mentor',
      name: 'Mentor',
      description: 'Helped 10 other students',
      icon: <Award className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-teal-500 to-green-500',
      earned: false,
      category: 'special'
    }
  ];

  const handleEditProfile = () => {
    // Handle profile editing
    console.log('Edit profile clicked');
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
                  User <span className="text-green-400">Profile</span>
                </h1>
                <p className="text-gray-400 mt-1">
                  Track your progress and achievements
                </p>
              </div>
            </div>
            <Button onClick={logout} variant="destructive">Logout</Button>
          </div>

          <div className="space-y-8">
            {/* User Header */}
            <UserHeader user={userData} onEdit={handleEditProfile} />

            {/* XP and Rank Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <XPProgressBar 
                  currentXP={userData.currentXP}
                  maxXP={userData.maxXP}
                  nextRank={userData.nextRank}
                />
              </div>
              <div>
                <RankBadge 
                  rank={userData.currentRank} 
                  level={userData.rankLevel} 
                />
              </div>
            </div>

            {/* Profile Stats */}
            <ProfileStats stats={userStats} />

            {/* Badge Wall */}
            <BadgeWall badges={badges} />
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Keep learning and earning badges to climb the ranks!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};