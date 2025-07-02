import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User, Role } from '../types';
import { analytics } from '../utils/analytics';
import { streakService, getStreakMessage } from '../utils/streakSystem';

interface UserContextType {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
  setUserRole: (role: Role) => void;
  addXP: (amount: number, source: string) => void;
  streakMessage: string | null;
  clearStreakMessage: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [streakMessage, setStreakMessage] = useState<string | null>(null);

  useEffect(() => {
    // Read from localStorage on init
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (name: string) => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name,
      role: 'learner', // Default role
      xp: 850, // Default XP (matching the mock data)
      lastLoginDate: new Date().toISOString(),
      streakCount: 0
    };
    setUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    // Start analytics session
    analytics.startSession(newUser.id);
    analytics.trackLogin(newUser.id);

    // Check and update streak
    const streakResult = streakService.checkAndUpdateStreak(newUser.id);
    if (streakResult.isNewStreak) {
      const message = getStreakMessage(streakResult.streakData, streakResult.milestoneReached);
      setStreakMessage(message);

      // Update user with streak info
      const updatedUser = {
        ...newUser,
        streakCount: streakResult.streakData.longestStreak,
        xp: newUser.xp + streakResult.bonusXP
      };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  const logout = () => {
    if (user) {
      analytics.trackLogout(user.id);
      analytics.endSession();
    }
    setUser(null);
    localStorage.removeItem('currentUser');
    setStreakMessage(null);
  };

  const setUserRole = (role: Role) => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  const addXP = (amount: number, source: string) => {
    if (user) {
      const updatedUser = { ...user, xp: user.xp + amount };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      analytics.trackXPGained(amount, source, user.id);
    }
  };

  const clearStreakMessage = () => {
    setStreakMessage(null);
  };

  return (
    <UserContext.Provider value={{
      user,
      login,
      logout,
      setUserRole,
      addXP,
      streakMessage,
      clearStreakMessage
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};