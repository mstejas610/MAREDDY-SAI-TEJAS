// Basic analytics tracking system
// This starts with localStorage and console logging
// Later can be swapped with actual backend/analytics tools like PostHog or Supabase Edge Functions

export interface AnalyticsEvent {
  eventType: string;
  userId?: string;
  challengeId?: string;
  metadata?: Record<string, any>;
  timestamp: string;
}

export interface UserSession {
  sessionId: string;
  userId: string;
  startTime: string;
  lastActivity: string;
  eventsCount: number;
}

class AnalyticsService {
  private events: AnalyticsEvent[] = [];
  private currentSession: UserSession | null = null;
  private readonly STORAGE_KEY = 'cybersec_analytics';
  private readonly SESSION_KEY = 'cybersec_session';

  constructor() {
    this.loadStoredEvents();
    this.loadCurrentSession();
  }

  private loadStoredEvents() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.events = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load stored analytics events:', error);
    }
  }

  private loadCurrentSession() {
    try {
      const stored = localStorage.getItem(this.SESSION_KEY);
      if (stored) {
        this.currentSession = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load current session:', error);
    }
  }

  private saveEvents() {
    try {
      // Keep only last 1000 events to prevent localStorage bloat
      const eventsToStore = this.events.slice(-1000);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(eventsToStore));
    } catch (error) {
      console.warn('Failed to save analytics events:', error);
    }
  }

  private saveSession() {
    try {
      if (this.currentSession) {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(this.currentSession));
      }
    } catch (error) {
      console.warn('Failed to save session:', error);
    }
  }

  startSession(userId: string) {
    this.currentSession = {
      sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      startTime: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      eventsCount: 0
    };
    this.saveSession();
    this.logEvent('session_start', userId);
  }

  endSession() {
    if (this.currentSession) {
      this.logEvent('session_end', this.currentSession.userId);
      localStorage.removeItem(this.SESSION_KEY);
      this.currentSession = null;
    }
  }

  updateActivity() {
    if (this.currentSession) {
      this.currentSession.lastActivity = new Date().toISOString();
      this.saveSession();
    }
  }

  logEvent(eventType: string, userId?: string, metadata?: Record<string, any>) {
    const event: AnalyticsEvent = {
      eventType,
      userId: userId || this.currentSession?.userId,
      timestamp: new Date().toISOString(),
      metadata
    };

    this.events.push(event);
    
    if (this.currentSession) {
      this.currentSession.eventsCount++;
      this.updateActivity();
    }

    // Console logging for development
    console.log('📊 Analytics Event:', event);

    this.saveEvents();
  }

  // Specific event tracking methods
  trackChallengeView(challengeId: string, userId?: string) {
    this.logEvent('challenge_view', userId, { challengeId });
  }

  trackChallengeStart(challengeId: string, userId?: string) {
    this.logEvent('challenge_start', userId, { challengeId });
  }

  trackFlagSubmission(challengeId: string, isCorrect: boolean, attemptNumber: number, userId?: string) {
    this.logEvent('flag_submission', userId, { 
      challengeId, 
      isCorrect, 
      attemptNumber,
      result: isCorrect ? 'success' : 'failure'
    });
  }

  trackChallengeComplete(challengeId: string, timeSpent: number, attempts: number, userId?: string) {
    this.logEvent('challenge_complete', userId, { 
      challengeId, 
      timeSpent, 
      attempts 
    });
  }

  trackPageView(page: string, userId?: string) {
    this.logEvent('page_view', userId, { page });
  }

  trackLogin(userId: string, method: string = 'local') {
    this.logEvent('user_login', userId, { method });
  }

  trackLogout(userId?: string) {
    this.logEvent('user_logout', userId);
  }

  trackStreakAchieved(streakCount: number, userId?: string) {
    this.logEvent('streak_achieved', userId, { streakCount });
  }

  trackXPGained(amount: number, source: string, userId?: string) {
    this.logEvent('xp_gained', userId, { amount, source });
  }

  trackHintUnlocked(challengeId: string, hintId: string, cost: number, userId?: string) {
    this.logEvent('hint_unlocked', userId, { challengeId, hintId, cost });
  }

  // Analytics queries
  getEventsByType(eventType: string, limit: number = 100): AnalyticsEvent[] {
    return this.events
      .filter(event => event.eventType === eventType)
      .slice(-limit);
  }

  getEventsByUser(userId: string, limit: number = 100): AnalyticsEvent[] {
    return this.events
      .filter(event => event.userId === userId)
      .slice(-limit);
  }

  getChallengeStats(challengeId: string) {
    const challengeEvents = this.events.filter(
      event => event.metadata?.challengeId === challengeId
    );

    const views = challengeEvents.filter(e => e.eventType === 'challenge_view').length;
    const starts = challengeEvents.filter(e => e.eventType === 'challenge_start').length;
    const completions = challengeEvents.filter(e => e.eventType === 'challenge_complete').length;
    const submissions = challengeEvents.filter(e => e.eventType === 'flag_submission');
    
    const successfulSubmissions = submissions.filter(e => e.metadata?.isCorrect).length;
    const failedSubmissions = submissions.filter(e => !e.metadata?.isCorrect).length;

    return {
      views,
      starts,
      completions,
      submissions: submissions.length,
      successfulSubmissions,
      failedSubmissions,
      conversionRate: starts > 0 ? (completions / starts) * 100 : 0,
      successRate: submissions.length > 0 ? (successfulSubmissions / submissions.length) * 100 : 0
    };
  }

  getDailyActiveUsers(days: number = 7): Record<string, number> {
    const now = new Date();
    const dailyUsers: Record<string, Set<string>> = {};

    for (let i = 0; i < days; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];
      dailyUsers[dateKey] = new Set();
    }

    this.events.forEach(event => {
      if (event.userId) {
        const eventDate = event.timestamp.split('T')[0];
        if (dailyUsers[eventDate]) {
          dailyUsers[eventDate].add(event.userId);
        }
      }
    });

    const result: Record<string, number> = {};
    Object.keys(dailyUsers).forEach(date => {
      result[date] = dailyUsers[date].size;
    });

    return result;
  }

  getTopChallenges(limit: number = 10) {
    const challengeStats: Record<string, number> = {};
    
    this.events
      .filter(event => event.eventType === 'challenge_view' && event.metadata?.challengeId)
      .forEach(event => {
        const challengeId = event.metadata!.challengeId;
        challengeStats[challengeId] = (challengeStats[challengeId] || 0) + 1;
      });

    return Object.entries(challengeStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([challengeId, views]) => ({ challengeId, views }));
  }

  // Export data for external analytics tools
  exportEvents(startDate?: string, endDate?: string): AnalyticsEvent[] {
    let filteredEvents = this.events;

    if (startDate) {
      filteredEvents = filteredEvents.filter(event => event.timestamp >= startDate);
    }

    if (endDate) {
      filteredEvents = filteredEvents.filter(event => event.timestamp <= endDate);
    }

    return filteredEvents;
  }

  // Clear old data
  clearOldEvents(daysToKeep: number = 30) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
    const cutoffISO = cutoffDate.toISOString();

    this.events = this.events.filter(event => event.timestamp >= cutoffISO);
    this.saveEvents();
  }
}

// Export singleton instance
export const analytics = new AnalyticsService();

// Convenience function for quick logging
export const logEvent = (eventType: string, userId?: string, metadata?: Record<string, any>) => {
  analytics.logEvent(eventType, userId, metadata);
};
