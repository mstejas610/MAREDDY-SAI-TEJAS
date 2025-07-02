export type LearningPath = {
  id: string;
  title: string;
  description: string;
  challenges: string[]; // Array of challenge IDs
  xpReward?: number;
};

export type Role = 'learner' | 'instructor' | 'admin';

export interface User {
  id: string;
  name: string;
  role: Role;
  xp: number;
  lastLoginDate?: string;
  streakCount?: number;
}

// Challenge lifecycle status for admin management
export type ChallengeLifecycleStatus = 'draft' | 'published' | 'archived';

// User progress status for challenges
export type ChallengeUserStatus = 'Locked' | 'Available' | 'In Progress' | 'Completed';

export interface Challenge {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: ChallengeUserStatus; // User's progress status
  lifecycleStatus?: ChallengeLifecycleStatus; // Admin lifecycle status
  points: number;
  rating: number;
  solves: number;
  description: string;
  fullDescription?: string;
  correctFlag?: string;
  tags: string[];
  estimatedTime: string;
  owaspCategory: string;
  createdAt: string;
  createdBy?: string; // User ID of creator
  lastModified?: string;
}