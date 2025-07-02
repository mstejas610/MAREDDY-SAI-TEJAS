import React from 'react';
import { useUser } from '../contexts/UserContext';
import { Role } from '../types';
import { Shield, User, GraduationCap } from 'lucide-react';

// Development component for easy role testing
export const RoleSwitcher: React.FC = () => {
  const { user, setUserRole } = useUser();

  if (!user) return null;

  const roles: { value: Role; label: string; icon: React.ReactNode; color: string }[] = [
    { value: 'learner', label: 'Learner', icon: <User className="w-4 h-4" />, color: 'bg-blue-600' },
    { value: 'instructor', label: 'Instructor', icon: <GraduationCap className="w-4 h-4" />, color: 'bg-green-600' },
    { value: 'admin', label: 'Admin', icon: <Shield className="w-4 h-4" />, color: 'bg-red-600' }
  ];

  // Only show in development
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-gray-900 rounded-lg p-3 border border-gray-700 shadow-2xl">
      <div className="text-xs text-gray-400 mb-2">Dev: Switch Role</div>
      <div className="flex gap-2">
        {roles.map(role => (
          <button
            key={role.value}
            onClick={() => setUserRole(role.value)}
            className={`flex items-center gap-2 px-3 py-2 rounded text-xs font-medium transition-all ${
              user.role === role.value 
                ? `${role.color} text-white` 
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            {role.icon}
            {role.label}
          </button>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-2">
        Current: {user.role} | XP: {user.xp}
      </div>
    </div>
  );
};
