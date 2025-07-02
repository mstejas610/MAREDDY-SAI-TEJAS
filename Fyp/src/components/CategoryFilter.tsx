import React from 'react';
import { Globe, Lock, Search, Code, Shield, Database, Terminal, Cpu } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const categories = [
  { id: 'all', name: 'All', icon: Shield },
  { id: 'web', name: 'Web', icon: Globe },
  { id: 'crypto', name: 'Crypto', icon: Lock },
  { id: 'forensics', name: 'Forensics', icon: Search },
  { id: 'reverse', name: 'Reverse', icon: Code },
  { id: 'pwn', name: 'PWN', icon: Terminal },
  { id: 'misc', name: 'Misc', icon: Cpu },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategories, 
  onCategoryChange 
}) => {
  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'all') {
      onCategoryChange([]);
      return;
    }

    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  const isActive = (categoryId: string) => {
    if (categoryId === 'all') {
      return selectedCategories.length === 0;
    }
    return selectedCategories.includes(categoryId);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const Icon = category.icon;
        const active = isActive(category.id);
        
        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              active
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};