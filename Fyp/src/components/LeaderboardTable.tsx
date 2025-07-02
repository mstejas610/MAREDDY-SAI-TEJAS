import React from 'react';
import { Crown, Medal, Award, Flag } from 'lucide-react';
import { XPInlineBar } from './XPInlineBar';

interface LeaderboardUser {
  rank: number;
  username: string;
  totalXP: number;
  currentLevelXP: number;
  nextLevelXP: number;
  country?: string;
  institution?: string;
  isCurrentUser?: boolean;
}

interface LeaderboardTableProps {
  users: LeaderboardUser[];
  currentUser: LeaderboardUser;
}

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ users, currentUser }) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-300" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-400" />;
      default:
        return <span className="text-gray-400 font-bold">#{rank}</span>;
    }
  };

  const getCountryFlag = (country?: string) => {
    if (!country) return null;
    return (
      <div className="flex items-center gap-1">
        <Flag className="w-3 h-3 text-gray-400" />
        <span className="text-xs text-gray-400">{country}</span>
      </div>
    );
  };

  const UserRow: React.FC<{ user: LeaderboardUser; isHighlighted?: boolean }> = ({ 
    user, 
    isHighlighted = false 
  }) => (
    <tr className={`border-b border-gray-700 transition-all duration-300 ${
      isHighlighted 
        ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/50' 
        : 'hover:bg-gray-800'
    }`}>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {getRankIcon(user.rank)}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className={`font-semibold ${isHighlighted ? 'text-green-400' : 'text-white'}`}>
            {user.username}
            {isHighlighted && <span className="ml-2 text-xs text-green-400">(You)</span>}
          </span>
          <div className="flex items-center gap-2 mt-1">
            {getCountryFlag(user.country)}
            {user.institution && (
              <span className="text-xs text-purple-400">{user.institution}</span>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-white font-bold">{user.totalXP.toLocaleString()}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col gap-1">
          <XPInlineBar 
            currentXP={user.currentLevelXP} 
            maxXP={user.nextLevelXP}
            className="w-24"
          />
          <span className="text-xs text-gray-400">
            {user.currentLevelXP}/{user.nextLevelXP}
          </span>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800 border-b border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Total XP</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Level Progress</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow 
                key={user.username} 
                user={user} 
                isHighlighted={user.isCurrentUser}
              />
            ))}
            
            {/* Current User Row (if not in top list) */}
            {!users.some(user => user.isCurrentUser) && (
              <>
                <tr>
                  <td colSpan={4} className="px-6 py-2">
                    <div className="border-t border-gray-600"></div>
                  </td>
                </tr>
                <UserRow user={currentUser} isHighlighted={true} />
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};