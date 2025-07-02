import { Challenge, Role } from '../types';

/**
 * Filter challenges based on user role and lifecycle status
 * - Learners: Only see published challenges
 * - Instructors: See published and draft challenges
 * - Admins: See all challenges (published, draft, archived)
 */
export const filterChallengesByRole = (challenges: Challenge[], userRole: Role): Challenge[] => {
  switch (userRole) {
    case 'learner':
      return challenges.filter(challenge => 
        challenge.lifecycleStatus === 'published' || !challenge.lifecycleStatus
      );
    
    case 'instructor':
      return challenges.filter(challenge => 
        challenge.lifecycleStatus === 'published' || 
        challenge.lifecycleStatus === 'draft' ||
        !challenge.lifecycleStatus
      );
    
    case 'admin':
      return challenges; // Admins see everything
    
    default:
      return challenges.filter(challenge => 
        challenge.lifecycleStatus === 'published' || !challenge.lifecycleStatus
      );
  }
};

/**
 * Get challenges by lifecycle status (for admin management)
 */
export const getChallengesByLifecycleStatus = (
  challenges: Challenge[], 
  status: 'draft' | 'published' | 'archived'
): Challenge[] => {
  return challenges.filter(challenge => challenge.lifecycleStatus === status);
};

/**
 * Check if user can edit a challenge
 */
export const canEditChallenge = (userRole: Role, challenge: Challenge, userId?: string): boolean => {
  if (userRole === 'admin') return true;
  
  if (userRole === 'instructor') {
    // Instructors can edit their own challenges or draft challenges
    return challenge.createdBy === userId || challenge.lifecycleStatus === 'draft';
  }
  
  return false;
};

/**
 * Get challenge statistics for analytics
 */
export const getChallengeStats = (challenges: Challenge[]) => {
  const stats = {
    total: challenges.length,
    published: 0,
    draft: 0,
    archived: 0,
    byDifficulty: {
      Beginner: 0,
      Intermediate: 0,
      Advanced: 0
    },
    byCategory: {} as Record<string, number>,
    totalSolves: 0,
    averageRating: 0
  };

  let totalRating = 0;
  let ratedChallenges = 0;

  challenges.forEach(challenge => {
    // Lifecycle status counts
    if (challenge.lifecycleStatus === 'published' || !challenge.lifecycleStatus) {
      stats.published++;
    } else if (challenge.lifecycleStatus === 'draft') {
      stats.draft++;
    } else if (challenge.lifecycleStatus === 'archived') {
      stats.archived++;
    }

    // Difficulty counts
    stats.byDifficulty[challenge.difficulty]++;

    // Category counts
    stats.byCategory[challenge.category] = (stats.byCategory[challenge.category] || 0) + 1;

    // Total solves
    stats.totalSolves += challenge.solves;

    // Average rating calculation
    if (challenge.rating > 0) {
      totalRating += challenge.rating;
      ratedChallenges++;
    }
  });

  stats.averageRating = ratedChallenges > 0 ? totalRating / ratedChallenges : 0;

  return stats;
};
