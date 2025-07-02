
import { LearningPath } from '../types';

export const mockLearningPaths: LearningPath[] = [
  {
    id: 'lp-web-basics',
    title: 'Web Hacking Fundamentals',
    description: 'Master the basics of web vulnerabilities like XSS, SQLi, and CSRF.',
    challenges: ['1', '5', '9', '11'], // Challenge IDs from mockChallenges
    xpReward: 500,
  },
  {
    id: 'lp-crypto-mastery',
    title: 'Cryptography Deep Dive',
    description: 'Explore various cryptographic algorithms and their weaknesses.',
    challenges: ['2', '6'],
    xpReward: 400,
  },
  {
    id: 'lp-reverse-engineering',
    title: 'Reverse Engineering Essentials',
    description: 'Learn to analyze compiled binaries and understand their logic.',
    challenges: ['7'],
    xpReward: 300,
  },
  {
    id: 'lp-network-security',
    title: 'Network Security & Forensics',
    description: 'Understand network protocols, traffic analysis, and incident response.',
    challenges: ['8'],
    xpReward: 350,
  },
];
