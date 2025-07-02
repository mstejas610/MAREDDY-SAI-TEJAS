import React from 'react';
import { CheckCircle, Trophy, Zap, Clock } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, color }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:border-gray-600 transition-all duration-300 group">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg ${color} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-white mb-1">{value}</p>
          <p className="text-gray-400 text-sm font-medium">{label}</p>
        </div>
      </div>
    </div>
  );
};

interface SummaryStatsProps {
  challengesSolved: number;
  badgesEarned: number;
  totalXP: number;
  timeSpent: string;
}

export const SummaryStats: React.FC<SummaryStatsProps> = ({ 
  challengesSolved, 
  badgesEarned, 
  totalXP, 
  timeSpent 
}) => {
  const stats = [
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      label: "Challenges Solved",
      value: challengesSolved.toString(),
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      label: "Badges Earned",
      value: badgesEarned.toString(),
      color: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      label: "Total XP",
      value: totalXP.toLocaleString(),
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      label: "Time Spent",
      value: timeSpent,
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};