import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { streakService, getStreakStatus, StreakMilestone } from '../utils/streakSystem';
import { Flame, Target, Trophy, Calendar } from 'lucide-react';

interface StreakDisplayProps {
  showDetails?: boolean;
  className?: string;
}

export const StreakDisplay: React.FC<StreakDisplayProps> = ({ 
  showDetails = false, 
  className = "" 
}) => {
  const { user } = useUser();
  const [streakStatus, setStreakStatus] = useState({
    currentStreak: 0,
    daysUntilNextMilestone: 0,
    nextMilestone: null as StreakMilestone | null,
    streakEmoji: "🔥"
  });

  useEffect(() => {
    if (user) {
      const status = getStreakStatus(user.id);
      setStreakStatus(status);
    }
  }, [user]);

  if (!user || streakStatus.currentStreak === 0) {
    return (
      <div className={`bg-gray-900 rounded-lg p-4 border border-gray-700 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <Flame className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400">Start Your Streak</h3>
            <p className="text-xs text-gray-500">Login daily to build your hacking streak!</p>
          </div>
        </div>
      </div>
    );
  }

  const progressPercentage = streakStatus.nextMilestone 
    ? ((streakStatus.currentStreak % streakStatus.nextMilestone.days) / streakStatus.nextMilestone.days) * 100
    : 100;

  if (!showDetails) {
    // Compact version for header/sidebar
    return (
      <div className={`bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-3 border border-orange-500/30 ${className}`}>
        <div className="flex items-center gap-2">
          <span className="text-lg">{streakStatus.streakEmoji}</span>
          <div>
            <div className="text-sm font-bold text-orange-400">
              {streakStatus.currentStreak} Day Streak
            </div>
            {streakStatus.nextMilestone && (
              <div className="text-xs text-orange-300">
                {streakStatus.daysUntilNextMilestone} days to {streakStatus.nextMilestone.title}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Detailed version for dashboard
  return (
    <div className={`bg-gray-900 rounded-xl p-6 border border-gray-700 ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
          <Flame className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Hacking Streak</h3>
          <p className="text-gray-400 text-sm">Keep the momentum going!</p>
        </div>
      </div>

      {/* Current Streak */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{streakStatus.streakEmoji}</span>
          <span className="text-3xl font-bold text-orange-400">
            {streakStatus.currentStreak}
          </span>
          <span className="text-gray-400">days</span>
        </div>
        <p className="text-sm text-gray-400">
          Current streak • Keep logging in daily!
        </p>
      </div>

      {/* Next Milestone */}
      {streakStatus.nextMilestone && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white">
                Next: {streakStatus.nextMilestone.title}
              </span>
            </div>
            <span className="text-xs text-gray-400">
              {streakStatus.daysUntilNextMilestone} days left
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{streakStatus.currentStreak} days</span>
            <div className="flex items-center gap-1">
              <Trophy className="w-3 h-3" />
              <span>+{streakStatus.nextMilestone.bonusXP} XP</span>
            </div>
          </div>
        </div>
      )}

      {/* Streak Stats */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
        <div className="text-center">
          <div className="text-lg font-bold text-green-400">
            {user.streakCount || streakStatus.currentStreak}
          </div>
          <div className="text-xs text-gray-400">Longest Streak</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-blue-400">
            {streakService.getStreakStats(user.id).totalLoginDays}
          </div>
          <div className="text-xs text-gray-400">Total Days</div>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="mt-4 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-orange-400" />
          <span className="text-sm text-orange-300">
            {streakStatus.currentStreak >= 7 
              ? "Amazing dedication! You're on fire! 🔥" 
              : "Great start! Keep building that streak! 💪"
            }
          </span>
        </div>
      </div>
    </div>
  );
};
