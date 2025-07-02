
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { LearningPath } from '../types';
import { ArrowLeft, BookOpen, Award } from 'lucide-react';

// Mock Data for Learning Paths
const mockLearningPaths: LearningPath[] = [
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

// Mock function to get user's completed challenges (replace with actual logic)
const getCompletedChallenges = (userId: string) => {
  // In a real app, this would fetch from a backend
  const completed = {
    'user123': ['1', '2'], // Example: user123 completed challenge 1 and 2
  };
  return completed[userId] || [];
};

export const LearningPathsPage: React.FC = () => {
  const userId = 'user123'; // Mock user ID
  const completedChallenges = getCompletedChallenges(userId);

  return (
    <div className="min-h-screen bg-gray-950 font-mono">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/dashboard" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                <ArrowLeft className="w-5 h-5 text-white" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Learning <span className="text-purple-400">Paths</span>
                </h1>
                <p className="text-gray-400 mt-1">
                  Structured roadmaps to master cybersecurity domains
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
          </div>

          {/* Learning Paths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockLearningPaths.map((path) => {
              const completedCount = path.challenges.filter(challengeId =>
                completedChallenges.includes(challengeId)
              ).length;
              const totalChallenges = path.challenges.length;
              const progressPercentage = totalChallenges > 0 ? (completedCount / totalChallenges) * 100 : 0;

              return (
                <Card key={path.id} className="bg-gray-900 border-gray-700 shadow-2xl hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-purple-400" />
                      {path.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Progress: {completedCount}/{totalChallenges} Challenges</p>
                      <Progress value={progressPercentage} className="w-full" />
                    </div>
                    {path.xpReward && (
                      <div className="flex items-center text-yellow-400 font-semibold text-sm">
                        <Award className="w-4 h-4 mr-1" />
                        <span>{path.xpReward} XP Reward</span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Link to={`/learning-paths/${path.id}`} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        View Path
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Embark on a learning journey and become a cybersecurity expert!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
