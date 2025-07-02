import React from 'react';
import { Lock, Play, CheckCircle } from 'lucide-react';

interface StatusTagProps {
  status: 'Locked' | 'In Progress' | 'Completed' | 'Available';
}

export const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const getStyles = () => {
    switch (status) {
      case 'Locked':
        return {
          className: 'bg-gray-600/20 text-gray-400 border-gray-600/30',
          icon: Lock
        };
      case 'In Progress':
        return {
          className: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
          icon: Play
        };
      case 'Completed':
        return {
          className: 'bg-green-500/20 text-green-400 border-green-500/30',
          icon: CheckCircle
        };
      case 'Available':
        return {
          className: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
          icon: Play
        };
      default:
        return {
          className: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
          icon: Play
        };
    }
  };

  const { className, icon: Icon } = getStyles();

  return (
    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${className}`}>
      <Icon className="w-3 h-3" />
      {status}
    </span>
  );
};