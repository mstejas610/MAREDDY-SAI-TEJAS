import { analytics } from './analytics';

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastLoginDate: string;
  streakStartDate: string;
  totalLoginDays: number;
  streakBonusXP: number;
}

export interface StreakMilestone {
  days: number;
  title: string;
  bonusXP: number;
  emoji: string;
}

// Streak milestones with rewards
export const STREAK_MILESTONES: StreakMilestone[] = [
  { days: 3, title: "Getting Started", bonusXP: 15, emoji: "🔥" },
  { days: 7, title: "Week Warrior", bonusXP: 50, emoji: "⚡" },
  { days: 14, title: "Two Week Champion", bonusXP: 100, emoji: "💪" },
  { days: 30, title: "Monthly Master", bonusXP: 250, emoji: "🏆" },
  { days: 60, title: "Dedication Demon", bonusXP: 500, emoji: "👹" },
  { days: 100, title: "Century Slayer", bonusXP: 1000, emoji: "💯" },
  { days: 365, title: "Year-Long Legend", bonusXP: 5000, emoji: "🌟" }
];

class StreakService {
  private readonly STORAGE_KEY = 'cybersec_streak_data';

  private getStoredStreakData(userId: string): StreakData | null {
    try {
      const stored = localStorage.getItem(`${this.STORAGE_KEY}_${userId}`);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.warn('Failed to load streak data:', error);
      return null;
    }
  }

  private saveStreakData(userId: string, data: StreakData) {
    try {
      localStorage.setItem(`${this.STORAGE_KEY}_${userId}`, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save streak data:', error);
    }
  }

  private isConsecutiveDay(lastDate: string, currentDate: string): boolean {
    const last = new Date(lastDate);
    const current = new Date(currentDate);
    const diffTime = current.getTime() - last.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
  }

  private isSameDay(date1: string, date2: string): boolean {
    return date1.split('T')[0] === date2.split('T')[0];
  }

  private getTodayString(): string {
    return new Date().toISOString().split('T')[0];
  }

  checkAndUpdateStreak(userId: string): { 
    streakData: StreakData; 
    isNewStreak: boolean; 
    milestoneReached?: StreakMilestone;
    bonusXP: number;
  } {
    const today = this.getTodayString();
    const existingData = this.getStoredStreakData(userId);

    if (!existingData) {
      // First time user
      const newStreakData: StreakData = {
        currentStreak: 1,
        longestStreak: 1,
        lastLoginDate: today,
        streakStartDate: today,
        totalLoginDays: 1,
        streakBonusXP: 0
      };

      this.saveStreakData(userId, newStreakData);
      analytics.trackStreakAchieved(1, userId);
      
      return { 
        streakData: newStreakData, 
        isNewStreak: true, 
        bonusXP: 0 
      };
    }

    // Check if user already logged in today
    if (this.isSameDay(existingData.lastLoginDate, today)) {
      return { 
        streakData: existingData, 
        isNewStreak: false, 
        bonusXP: 0 
      };
    }

    let updatedData: StreakData;
    let milestoneReached: StreakMilestone | undefined;
    let bonusXP = 0;

    if (this.isConsecutiveDay(existingData.lastLoginDate, today)) {
      // Consecutive day - extend streak
      updatedData = {
        ...existingData,
        currentStreak: existingData.currentStreak + 1,
        longestStreak: Math.max(existingData.longestStreak, existingData.currentStreak + 1),
        lastLoginDate: today,
        totalLoginDays: existingData.totalLoginDays + 1
      };

      // Check for milestone
      milestoneReached = STREAK_MILESTONES.find(
        milestone => milestone.days === updatedData.currentStreak
      );

      if (milestoneReached) {
        bonusXP = milestoneReached.bonusXP;
        updatedData.streakBonusXP = existingData.streakBonusXP + bonusXP;
        analytics.trackStreakAchieved(updatedData.currentStreak, userId);
        analytics.trackXPGained(bonusXP, 'streak_milestone', userId);
      }

    } else {
      // Streak broken - reset
      updatedData = {
        ...existingData,
        currentStreak: 1,
        lastLoginDate: today,
        streakStartDate: today,
        totalLoginDays: existingData.totalLoginDays + 1
      };
    }

    this.saveStreakData(userId, updatedData);

    return { 
      streakData: updatedData, 
      isNewStreak: true, 
      milestoneReached,
      bonusXP 
    };
  }

  getStreakData(userId: string): StreakData | null {
    return this.getStoredStreakData(userId);
  }

  getStreakStatus(userId: string): {
    currentStreak: number;
    daysUntilNextMilestone: number;
    nextMilestone: StreakMilestone | null;
    streakEmoji: string;
  } {
    const data = this.getStoredStreakData(userId);
    
    if (!data) {
      return {
        currentStreak: 0,
        daysUntilNextMilestone: 3,
        nextMilestone: STREAK_MILESTONES[0],
        streakEmoji: "🔥"
      };
    }

    const nextMilestone = STREAK_MILESTONES.find(
      milestone => milestone.days > data.currentStreak
    );

    const currentMilestone = STREAK_MILESTONES
      .slice()
      .reverse()
      .find(milestone => milestone.days <= data.currentStreak);

    return {
      currentStreak: data.currentStreak,
      daysUntilNextMilestone: nextMilestone ? nextMilestone.days - data.currentStreak : 0,
      nextMilestone,
      streakEmoji: currentMilestone?.emoji || "🔥"
    };
  }

  getStreakMessage(streakData: StreakData, milestoneReached?: StreakMilestone): string {
    if (milestoneReached) {
      return `${milestoneReached.emoji} ${streakData.currentStreak}-Day ${milestoneReached.title}! +${milestoneReached.bonusXP} Bonus XP`;
    }

    if (streakData.currentStreak === 1) {
      return "🔥 Welcome back! Start your hacking streak!";
    }

    const status = this.getStreakStatus(''); // We don't need userId for this
    return `${status.streakEmoji} ${streakData.currentStreak}-Day Hacking Streak!`;
  }

  // Get leaderboard of users by streak (would need user management system)
  getStreakLeaderboard(): Array<{ userId: string; currentStreak: number; longestStreak: number }> {
    // This would require a proper user management system
    // For now, return empty array
    return [];
  }

  // Reset streak (for testing or admin purposes)
  resetStreak(userId: string) {
    localStorage.removeItem(`${this.STORAGE_KEY}_${userId}`);
  }

  // Get streak statistics
  getStreakStats(userId: string): {
    totalLoginDays: number;
    longestStreak: number;
    currentStreak: number;
    streakBonusXP: number;
    averageStreakLength: number;
  } {
    const data = this.getStoredStreakData(userId);
    
    if (!data) {
      return {
        totalLoginDays: 0,
        longestStreak: 0,
        currentStreak: 0,
        streakBonusXP: 0,
        averageStreakLength: 0
      };
    }

    // Simple average calculation - in a real app, you'd track all streaks
    const averageStreakLength = data.totalLoginDays > 0 ? data.longestStreak : 0;

    return {
      totalLoginDays: data.totalLoginDays,
      longestStreak: data.longestStreak,
      currentStreak: data.currentStreak,
      streakBonusXP: data.streakBonusXP,
      averageStreakLength
    };
  }
}

// Export singleton instance
export const streakService = new StreakService();

// Convenience functions
export const checkStreak = (userId: string) => streakService.checkAndUpdateStreak(userId);
export const getStreakStatus = (userId: string) => streakService.getStreakStatus(userId);
export const getStreakMessage = (streakData: StreakData, milestone?: StreakMilestone) => 
  streakService.getStreakMessage(streakData, milestone);
