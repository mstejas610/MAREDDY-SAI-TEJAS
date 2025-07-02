import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';

interface ChallengeDescriptionProps {
  description: string;
  fullDescription?: string;
}

export const ChallengeDescription: React.FC<ChallengeDescriptionProps> = ({ 
  description, 
  fullDescription 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded && fullDescription ? fullDescription : description;

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <FileText className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">Challenge Description</h2>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
        <div className="text-gray-300 leading-relaxed font-mono text-sm whitespace-pre-wrap">
          {displayText}
        </div>

        {fullDescription && fullDescription !== description && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 mt-4 text-green-400 hover:text-green-300 transition-colors duration-300 font-medium"
          >
            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};