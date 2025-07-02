import React from 'react';
import { Calendar, Users, Globe } from 'lucide-react';

interface FilterToggleProps {
  timeFilter: 'weekly' | 'monthly' | 'all-time';
  onTimeFilterChange: (filter: 'weekly' | 'monthly' | 'all-time') => void;
  scopeFilter: 'global' | 'institution' | 'class';
  onScopeFilterChange: (filter: 'global' | 'institution' | 'class') => void;
}

export const FilterToggle: React.FC<FilterToggleProps> = ({
  timeFilter,
  onTimeFilterChange,
  scopeFilter,
  onScopeFilterChange
}) => {
  const timeOptions = [
    { id: 'weekly' as const, name: 'This Week', icon: Calendar },
    { id: 'monthly' as const, name: 'This Month', icon: Calendar },
    { id: 'all-time' as const, name: 'All Time', icon: Calendar }
  ];

  const scopeOptions = [
    { id: 'global' as const, name: 'Global', icon: Globe },
    { id: 'institution' as const, name: 'Institution', icon: Users },
    { id: 'class' as const, name: 'My Class', icon: Users }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Time Filter */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gray-300">Time Period</span>
        <div className="flex bg-gray-800 rounded-lg p-1">
          {timeOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => onTimeFilterChange(option.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
                  timeFilter === option.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{option.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scope Filter */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-gray-300">Scope</span>
        <div className="flex bg-gray-800 rounded-lg p-1">
          {scopeOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => onScopeFilterChange(option.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
                  scopeFilter === option.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{option.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};