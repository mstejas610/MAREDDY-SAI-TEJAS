
import React from 'react';
import { LucideIcon, Ghost } from 'lucide-react';

interface EmptyStateProps {
  icon?: LucideIcon;
  message: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = Ghost,
  message,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-4 text-gray-500">
        <Icon className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
    </div>
  );
};
