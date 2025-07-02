
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockLearningPaths } from '../data/learningPaths';
import { mockChallenges } from '../data/challenges';
import { Layout } from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Award, ArrowLeft, CheckCircle, Lock, Play, Zap } from 'lucide-react';
import { DifficultyBadge } from '../components/DifficultyBadge';
import { StatusTag } from '../components/StatusTag';

// Mock function to get user's completed challenges (replace with actual logic)
const getCompletedChallenges = (userId: string) => {
  // In a real app, this would fetch from a backend
  const completed = {
    'user123': ['1', '2', '5', '9'], // Example: user123 completed some challenges
  };
  return completed[userId] || [];
};

export const LearningPathDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const learningPath = mockLearningPaths.find(path => path.id === id);
  const userId = 'user123'; // Mock user ID
  const completedChallenges = getCompletedChallenges(userId);

  if (!learningPath) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-white">Learning Path Not Found</h1>
          <p className="text-gray-400 mt-2">The learning path you are looking for does not exist.</p>
          <Link to="/learning-paths">
            <Button className="mt-6">Back to Learning Paths</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const challengesInPath = learningPath.challenges.map(challengeId => {
    const challenge = mockChallenges.find(c => c.id === challengeId);
    if (!challenge) return null; // Should not happen if data is consistent

    const isCompleted = completedChallenges.includes(challenge.id);
    const status: 'Locked' | 'In Progress' | 'Completed' | 'Available' = isCompleted ? 'Completed' : 'Available'; // Simplified status for demo

    return { ...challenge, status };
  }).filter(Boolean);

  const completedChallengesInPathCount = challengesInPath.filter(c => c?.status === 'Completed').length;
  const allChallengesCompleted = completedChallengesInPathCount === challengesInPath.length;

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/learning-paths" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {learningPath.title}
            </h1>
            <p className="text-gray-400 mt-1">
              {learningPath.description}
            </p>
          </div>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
      </div>

      {/* Reward Banner */}
      {allChallengesCompleted && learningPath.xpReward && (
        <div className="bg-green-500/20 border border-green-500/50 text-green-400 rounded-xl p-4 mb-8 flex items-center justify-center gap-3 shadow-lg">
          <Award className="w-6 h-6" />
          <span className="font-bold text-lg">Path Completed! You earned {learningPath.xpReward} XP!</span>
        </div>
      )}

      {/* Challenges in Path */}
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <Zap className="w-6 h-6 text-yellow-400" />
        Challenges in this Path ({completedChallengesInPathCount}/{challengesInPath.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challengesInPath.map(challenge => (
          <Card key={challenge?.id} className="bg-gray-900 border-gray-700 shadow-2xl hover:border-blue-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                {challenge?.status === 'Completed' ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : challenge?.status === 'In Progress' ? (
                  <Play className="w-5 h-5 text-blue-400" />
                ) : (
                  <Lock className="w-5 h-5 text-gray-400" />
                )}
                {challenge?.title}
              </CardTitle>
              <CardDescription className="text-gray-400">{challenge?.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <DifficultyBadge difficulty={challenge?.difficulty || 'Beginner'} />
              <StatusTag status={challenge?.status || 'Locked'} />
            </CardContent>
            <CardContent>
              <Link to={`/challenges/${challenge?.id}`}>
                <Button variant="outline" className="w-full">View Challenge</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Keep progressing through the path to earn your reward!
          </p>
        </div>
      </div>
    </Layout>
  );
};
