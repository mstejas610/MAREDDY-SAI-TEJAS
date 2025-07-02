import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { X, Flame, Trophy } from 'lucide-react';

export const StreakNotification: React.FC = () => {
  const { streakMessage, clearStreakMessage } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (streakMessage) {
      setIsVisible(true);
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [streakMessage]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      clearStreakMessage();
    }, 300); // Wait for animation to complete
  };

  if (!streakMessage) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 shadow-2xl border border-orange-400 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            {streakMessage.includes('Bonus XP') ? (
              <Trophy className="w-6 h-6 text-white" />
            ) : (
              <Flame className="w-6 h-6 text-white" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-bold text-sm mb-1">
              Streak Achievement!
            </h4>
            <p className="text-orange-100 text-sm leading-relaxed">
              {streakMessage}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 text-orange-200 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
