
import React from 'react';

export const LeaderboardRowSkeleton: React.FC = () => {
  return (
    <tr className="border-b border-gray-700 animate-pulse">
      <td className="px-6 py-4">
        <div className="h-6 w-8 bg-gray-700 rounded"></div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <div className="h-6 w-32 bg-gray-700 rounded mb-1"></div>
          <div className="h-4 w-24 bg-gray-700 rounded"></div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="h-6 w-20 bg-gray-700 rounded"></div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col gap-1">
          <div className="h-2 w-24 bg-gray-700 rounded-full"></div>
          <div className="h-4 w-16 bg-gray-700 rounded"></div>
        </div>
      </td>
    </tr>
  );
};
