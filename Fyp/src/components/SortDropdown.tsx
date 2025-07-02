import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SortDropdownProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const sortOptions = [
  { id: 'recent', name: 'Most Recent' },
  { id: 'rating', name: 'Highest Rated' },
  { id: 'easiest', name: 'Easiest First' },
  { id: 'hardest', name: 'Most Difficult' },
  { id: 'points', name: 'Highest Points' },
];

export const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = sortOptions.find(option => option.id === sortBy);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white hover:border-gray-600 transition-all duration-300 min-w-[180px] justify-between"
      >
        <span>{selectedOption?.name || 'Sort by'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-10 overflow-hidden">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                onSortChange(option.id);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors duration-200 ${
                sortBy === option.id ? 'bg-gray-800 text-green-400' : 'text-white'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};