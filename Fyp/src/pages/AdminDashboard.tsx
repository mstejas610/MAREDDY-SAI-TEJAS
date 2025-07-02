import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { mockChallenges } from '../data/challenges';
import { filterChallengesByRole, getChallengeStats, getChallengesByLifecycleStatus } from '../utils/challengeFilters';
import { Challenge } from '../types';
import { Layout } from '../components/Layout';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Settings, 
  Plus,
  Edit,
  Archive,
  Eye,
  BarChart3,
  Shield
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<'overview' | 'challenges' | 'users' | 'analytics'>('overview');
  
  if (!user || user.role !== 'admin') {
    return (
      <Layout>
        <div className="text-center py-12">
          <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Access Denied</h2>
          <p className="text-gray-400">You need admin privileges to access this page.</p>
        </div>
      </Layout>
    );
  }

  const allChallenges = mockChallenges;
  const stats = getChallengeStats(allChallenges);
  const draftChallenges = getChallengesByLifecycleStatus(allChallenges, 'draft');
  const publishedChallenges = getChallengesByLifecycleStatus(allChallenges, 'published');
  const archivedChallenges = getChallengesByLifecycleStatus(allChallenges, 'archived');

  const handleChallengeStatusChange = (challengeId: string, newStatus: 'draft' | 'published' | 'archived') => {
    // In a real app, this would make an API call
    console.log(`Changing challenge ${challengeId} status to ${newStatus}`);
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Total Challenges</h3>
          </div>
          <p className="text-3xl font-bold text-blue-400">{stats.total}</p>
          <p className="text-sm text-gray-400 mt-1">
            {stats.published} published, {stats.draft} draft, {stats.archived} archived
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Total Solves</h3>
          </div>
          <p className="text-3xl font-bold text-green-400">{stats.totalSolves.toLocaleString()}</p>
          <p className="text-sm text-gray-400 mt-1">Across all challenges</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Avg Rating</h3>
          </div>
          <p className="text-3xl font-bold text-purple-400">{stats.averageRating.toFixed(1)}</p>
          <p className="text-sm text-gray-400 mt-1">Out of 5.0</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Categories</h3>
          </div>
          <p className="text-3xl font-bold text-orange-400">{Object.keys(stats.byCategory).length}</p>
          <p className="text-sm text-gray-400 mt-1">Active categories</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Create Challenge</span>
          </button>
          <button className="flex items-center gap-3 p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium">Manage Users</span>
          </button>
          <button className="flex items-center gap-3 p-4 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">System Settings</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderChallengeManagement = () => (
    <div className="space-y-6">
      {/* Challenge Status Tabs */}
      <div className="flex gap-4 border-b border-gray-700">
        {[
          { key: 'published', label: 'Published', count: publishedChallenges.length },
          { key: 'draft', label: 'Draft', count: draftChallenges.length },
          { key: 'archived', label: 'Archived', count: archivedChallenges.length }
        ].map(tab => (
          <button
            key={tab.key}
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border-b-2 border-transparent hover:border-blue-400"
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Challenge List */}
      <div className="space-y-4">
        {publishedChallenges.slice(0, 10).map(challenge => (
          <div key={challenge.id} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white">{challenge.title}</h4>
                <p className="text-gray-400 text-sm">{challenge.category} • {challenge.difficulty}</p>
                <p className="text-gray-500 text-xs mt-1">{challenge.solves} solves • {challenge.rating}★</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  challenge.lifecycleStatus === 'published' ? 'bg-green-600 text-white' :
                  challenge.lifecycleStatus === 'draft' ? 'bg-yellow-600 text-white' :
                  'bg-gray-600 text-white'
                }`}>
                  {challenge.lifecycleStatus || 'published'}
                </span>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Archive className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400 mt-1">Manage challenges, users, and platform analytics</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">Admin Mode</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-6 border-b border-gray-700">
          {[
            { key: 'overview', label: 'Overview', icon: BarChart3 },
            { key: 'challenges', label: 'Challenges', icon: BookOpen },
            { key: 'users', label: 'Users', icon: Users },
            { key: 'analytics', label: 'Analytics', icon: TrendingUp }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'text-blue-400 border-blue-400'
                    : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'challenges' && renderChallengeManagement()}
          {activeTab === 'users' && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">User Management</h3>
              <p className="text-gray-400">User management features coming soon...</p>
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="text-center py-12">
              <TrendingUp className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
              <p className="text-gray-400">Detailed analytics dashboard coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
