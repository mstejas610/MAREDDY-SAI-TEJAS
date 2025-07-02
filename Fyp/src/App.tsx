import React, { useState } from 'react';
import { WelcomeBanner } from './components/WelcomeBanner';
import { XPProgressBar } from './components/XPProgressBar';
import { RankBadge } from './components/RankBadge';
import { SummaryStats } from './components/SummaryStats';
import { ChallengeListing } from './pages/ChallengeListing';
import { ChallengeDetails } from './pages/ChallengeDetails';
import { Profile } from './pages/Profile';
import { Leaderboard } from './pages/Leaderboard';
import { LearningPathsPage } from './pages/LearningPathsPage';
import { LearningPathDetailsPage } from './pages/LearningPathDetailsPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { mockChallenges } from './data/challenges';
import { UserProvider, useUser } from './contexts/UserContext';
import { LoginPage } from './pages/LoginPage';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { StreakDisplay } from './components/StreakDisplay';
import { StreakNotification } from './components/StreakNotification';
import { RoleSwitcher } from './components/RoleSwitcher';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';

interface Challenge {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Locked' | 'In Progress' | 'Completed' | 'Available';
  points: number;
  rating: number;
  solves: number;
  description: string;
  correctFlag?: string;
  tags: string[];
  estimatedTime: string;
  owaspCategory: string;
}

type PageType = 'dashboard' | 'challenges' | 'challenge-details' | 'profile' | 'leaderboard' | 'learning-paths';

function AppContent() {
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  // Mock data - in a real app, this would come from an API
  const userData = {
    name: user?.name || "Tejas",
    currentXP: user?.xp || 850,
    maxXP: 1000,
    currentRank: "Cyber Cadet",
    nextRank: "Cyber Guardian",
    rankLevel: 3,
    challengesSolved: 18,
    badgesEarned: 5,
    totalXP: user?.xp || 850,
    timeSpent: "14 hrs"
  };

  const handleChallengeClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setCurrentPage('challenge-details');
  };

  const handleBackToListing = () => {
    setCurrentPage('challenges');
    setSelectedChallenge(null);
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
    setSelectedChallenge(null);
  };

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleNavigateToLeaderboard = () => {
    setCurrentPage('leaderboard');
  };

  const handleNavigateToChallenges = () => {
    setCurrentPage('challenges');
  };

  const handleNavigateToLearningPaths = () => {
    setCurrentPage('learning-paths');
  };

  // Route to different pages
  if (currentPage === 'profile') {
    return <Profile onBack={handleBackToDashboard} />;
  }

  if (currentPage === 'leaderboard') {
    return <Leaderboard onBack={handleBackToDashboard} />;
  }

  if (currentPage === 'challenge-details' && selectedChallenge) {
    return (
      <ChallengeDetails 
        challenge={selectedChallenge} 
        onBack={handleBackToListing}
      />
    );
  }

  if (currentPage === 'challenges') {
    return (
      <ChallengeListing 
        onChallengeClick={handleChallengeClick}
        onBackToDashboard={handleBackToDashboard}
      />
    );
  }

  if (currentPage === 'learning-paths') {
    return <LearningPathsPage />;
  }

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">CS</span>
          </div>
          <h1 className="text-3xl font-bold text-white">
            Cyber<span className="text-green-400">Sec</span> Dashboard
          </h1>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="space-y-8">
        {/* Top Section - Welcome and Rank */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WelcomeBanner 
              userName={userData.name} 
              nextRank={userData.nextRank} 
            />
          </div>
          <div>
            <RankBadge 
              rank={userData.currentRank} 
              level={userData.rankLevel} 
            />
          </div>
        </div>

        {/* XP Progress */}
        <XPProgressBar 
          currentXP={userData.currentXP}
          maxXP={userData.maxXP}
          nextRank={userData.nextRank}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SummaryStats
              challengesSolved={userData.challengesSolved}
              badgesEarned={userData.badgesEarned}
              totalXP={userData.totalXP}
              timeSpent={userData.timeSpent}
            />
          </div>
          <div>
            <StreakDisplay showDetails={true} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </div>
              Quick Access
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Link */}
              <button
                onClick={handleNavigateToProfile}
                className="block bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:scale-105 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg bg-gradient-to-br from-green-500 to-teal-500 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">👤</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      Profile
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">View your achievements and customize your hacker profile</p>
                    <div className="flex items-center gap-2 text-green-400 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Explore</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Leaderboard Link */}
              <button
                onClick={handleNavigateToLeaderboard}
                className="block bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:scale-105 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg bg-gradient-to-br from-purple-500 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      Leaderboard
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">See how you rank against other cyber warriors</p>
                    <div className="flex items-center gap-2 text-green-400 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Explore</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Admin Panel Link (only for admins) */}
              {user?.role === 'admin' && (
                <a
                  href="/admin-panel"
                  className="block bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg bg-gradient-to-br from-red-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">⚙️</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                        Admin Panel
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">Manage challenges, users, and platform settings</p>
                      <div className="flex items-center gap-2 text-green-400 font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Manage</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {/* Certifications Link */}
              <a
                href="/certifications"
                className="block bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg bg-gradient-to-br from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      Certifications
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">Track your progress towards industry certifications</p>
                    <div className="flex items-center gap-2 text-green-400 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Explore</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Learning Paths Link */}
          <div className="text-center mt-8">
            <button
              onClick={handleNavigateToLearningPaths}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Learning Paths
            </button>
          </div>

          {/* Challenge Preview Button */}
          <div className="text-center mt-4">
            <button
              onClick={handleNavigateToChallenges}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse All Challenges
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 CyberSec Platform. Keep learning, keep hacking.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">System Online</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function App() {
  const { user } = useUser();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<AppContent />} />
        <Route path="/profile" element={<Profile onBack={() => {}} />} />
        <Route path="/leaderboard" element={<Leaderboard onBack={() => {}} />} />
        <Route path="/challenges" element={<ChallengeListing onChallengeClick={() => {}} onBackToDashboard={() => {}} />} />
        <Route path="/learning-paths" element={<LearningPathsPage />} />
        <Route path="/learning-paths/:id" element={<LearningPathDetailsPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        
        {/* Protected Routes Examples */}
        <Route
          path="/admin-panel"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/instructor-dashboard"
          element={
            <ProtectedRoute role={['instructor', 'admin']}>
              <div>Instructor Dashboard (Protected)</div>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

const Root = () => (
  <UserProvider>
    <App />
    <StreakNotification />
    <RoleSwitcher />
    <Toaster />
  </UserProvider>
);

export default Root;