import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';

interface Hint {
  id: string;
  title: string;
  content: string;
  cost: number; // XP cost to unlock hint
}

interface HintBoxProps {
  hints: Hint[];
  unlockedHints: string[];
  onUnlockHint: (hintId: string) => void;
  userXP: number;
}

export const HintBox: React.FC<HintBoxProps> = ({ 
  hints, 
  unlockedHints, 
  onUnlockHint, 
  userXP 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [revealedHints, setRevealedHints] = useState<string[]>([]);

  const toggleHintReveal = (hintId: string) => {
    setRevealedHints(prev => 
      prev.includes(hintId) 
        ? prev.filter(id => id !== hintId)
        : [...prev, hintId]
    );
  };

  if (hints.length === 0) return null;

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            Need a Hint?
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">
            {unlockedHints.length}/{hints.length} unlocked
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="mt-6 space-y-4">
          {hints.map((hint, index) => {
            const isUnlocked = unlockedHints.includes(hint.id);
            const isRevealed = revealedHints.includes(hint.id);
            const canAfford = userXP >= hint.cost;

            return (
              <div
                key={hint.id}
                className={`border rounded-lg p-4 transition-all duration-300 ${
                  isUnlocked 
                    ? 'border-yellow-500/50 bg-yellow-500/10' 
                    : 'border-gray-600 bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">
                    Hint #{index + 1}: {hint.title}
                  </h3>
                  {!isUnlocked && (
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 text-sm font-semibold">
                        {hint.cost} XP
                      </span>
                      <button
                        onClick={() => onUnlockHint(hint.id)}
                        disabled={!canAfford}
                        className={`px-3 py-1 rounded text-xs font-semibold transition-all duration-300 ${
                          canAfford
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Unlock
                      </button>
                    </div>
                  )}
                </div>

                {isUnlocked ? (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 text-sm font-semibold">Unlocked</span>
                      <button
                        onClick={() => toggleHintReveal(hint.id)}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {isRevealed ? (
                          <>
                            <EyeOff className="w-4 h-4" />
                            Hide
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4" />
                            Reveal
                          </>
                        )}
                      </button>
                    </div>
                    
                    {isRevealed ? (
                      <div className="bg-gray-700 rounded p-3 text-gray-300 text-sm font-mono">
                        {hint.content}
                      </div>
                    ) : (
                      <div className="bg-gray-700 rounded p-3 text-gray-500 text-sm italic">
                        Click "Reveal" to show the hint content
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-gray-400 text-sm">
                    {canAfford 
                      ? 'Unlock this hint to get help with the challenge'
                      : `You need ${hint.cost - userXP} more XP to unlock this hint`
                    }
                  </div>
                )}
              </div>
            );
          })}

          <div className="text-gray-400 text-xs mt-4 p-3 bg-gray-800 rounded-lg">
            💡 Hints cost XP but can help you learn and progress faster. Use them wisely!
          </div>
        </div>
      )}
    </div>
  );
};