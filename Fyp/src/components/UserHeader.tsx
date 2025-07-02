import React, { useState } from 'react';
import { User, Edit3, Mail, Calendar } from 'lucide-react';

interface UserHeaderProps {
  user: {
    username: string;
    email: string;
    avatar?: string;
    joinDate: string;
    country?: string;
    institution?: string;
  };
  onEdit: () => void;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ user, onEdit }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar Section */}
        <div className="relative">
          <div 
            className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User className="w-12 h-12 text-white" />
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-white">{user.username}</h1>
            <button
              onClick={onEdit}
              className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>

          <div className="space-y-2 text-gray-400">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Calendar className="w-4 h-4" />
              <span>Joined {user.joinDate}</span>
            </div>
            {user.institution && (
              <div className="text-sm">
                <span className="text-purple-400 font-semibold">{user.institution}</span>
                {user.country && <span> • {user.country}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};