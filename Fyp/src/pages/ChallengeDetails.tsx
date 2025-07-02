import React, { useState, useEffect } from 'react';
import { ChallengeDetailsHeader } from '../components/ChallengeDetailsHeader';
import { ChallengeDescription } from '../components/ChallengeDescription';
import { LaunchLabButton } from '../components/LaunchLabButton';
import { FlagSubmission } from '../components/FlagSubmission';
import { HintBox } from '../components/HintBox';
import { useUser } from '../contexts/UserContext';
import { analytics } from '../utils/analytics';

interface Challenge {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Locked' | 'In Progress' | 'Completed' | 'Available';
  points: number;
  rating: number;
  solves: number;
  description: string;
  fullDescription?: string;
  correctFlag?: string;
}

interface Hint {
  id: string;
  title: string;
  content: string;
  cost: number;
}

interface ChallengeDetailsProps {
  challenge: Challenge;
  onBack: () => void;
}

export const ChallengeDetails: React.FC<ChallengeDetailsProps> = ({ challenge, onBack }) => {
  const { user, addXP } = useUser();
  const [isLabLaunched, setIsLabLaunched] = useState(false);
  const [labUrl, setLabUrl] = useState<string>('');
  const [unlockedHints, setUnlockedHints] = useState<string[]>([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [challengeStartTime] = useState(Date.now());

  useEffect(() => {
    // Track challenge view
    if (user) {
      analytics.trackChallengeView(challenge.id, user.id);
    }
  }, [challenge.id, user]);

  useEffect(() => {
    // Track challenge start when user first interacts
    if (user && (isLabLaunched || attemptCount > 0)) {
      analytics.trackChallengeStart(challenge.id, user.id);
    }
  }, [isLabLaunched, attemptCount, challenge.id, user]);

  // Mock hints data
  const hints: Hint[] = [
    {
      id: 'hint1',
      title: 'Getting Started',
      content: 'Look for input fields that might not be properly sanitized. Try entering special characters.',
      cost: 10
    },
    {
      id: 'hint2',
      title: 'SQL Injection Basics',
      content: 'Try using single quotes (\') to break out of the SQL query. Look for error messages.',
      cost: 25
    },
    {
      id: 'hint3',
      title: 'Union Attack',
      content: 'Use UNION SELECT to extract data. Remember to match the number of columns in the original query.',
      cost: 50
    }
  ];

  const handleLaunchLab = () => {
    // Simulate lab URL generation
    const mockLabUrl = `https://lab-${challenge.id}.cybersec-platform.com:8080`;
    setLabUrl(mockLabUrl);
    setIsLabLaunched(true);
  };

  const handleFlagSubmission = async (flag: string): Promise<'correct' | 'incorrect' | 'already_solved'> => {
    const newAttemptCount = attemptCount + 1;
    setAttemptCount(newAttemptCount);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (challenge.status === 'Completed') {
      return 'already_solved';
    }

    // Mock correct flag for demo
    const correctFlag = challenge.correctFlag || 'flag{sql_injection_master}';
    const isCorrect = flag === correctFlag;

    // Track flag submission
    if (user) {
      analytics.trackFlagSubmission(challenge.id, isCorrect, newAttemptCount, user.id);

      if (isCorrect) {
        // Track challenge completion
        const timeSpent = Math.floor((Date.now() - challengeStartTime) / 1000);
        analytics.trackChallengeComplete(challenge.id, timeSpent, newAttemptCount, user.id);

        // Award XP
        addXP(challenge.points, 'challenge_completion');
      }
    }

    return isCorrect ? 'correct' : 'incorrect';
  };

  const handleUnlockHint = (hintId: string) => {
    const hint = hints.find(h => h.id === hintId);
    if (hint && user && user.xp >= hint.cost) {
      setUnlockedHints(prev => [...prev, hintId]);
      // Deduct XP and track hint unlock
      addXP(-hint.cost, 'hint_unlock');
      analytics.trackHintUnlocked(challenge.id, hintId, hint.cost, user.id);
    }
  };

  const fullDescription = challenge.fullDescription || `${challenge.description}

## Objective
Your goal is to exploit a SQL injection vulnerability in the login form to gain unauthorized access to the admin panel.

## Background
The target application is a simple web portal with a login system. The developers have made a critical mistake in how they handle user input, leaving the application vulnerable to SQL injection attacks.

## Instructions
1. Launch the lab environment
2. Navigate to the login page
3. Identify the SQL injection vulnerability
4. Craft a payload to bypass authentication
5. Extract the flag from the admin panel

## Resources
- Basic SQL injection techniques
- Union-based SQL injection
- Error-based SQL injection

Good luck, and remember: always test ethically!`;

  return (
    <div className="min-h-screen bg-gray-950 font-mono">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="space-y-8">
            {/* Challenge Header */}
            <ChallengeDetailsHeader 
              challenge={challenge} 
              onBack={onBack} 
            />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Description and Lab */}
              <div className="lg:col-span-2 space-y-8">
                <ChallengeDescription 
                  description={challenge.description}
                  fullDescription={fullDescription}
                />
                
                <LaunchLabButton 
                  isLaunched={isLabLaunched}
                  onLaunch={handleLaunchLab}
                  labUrl={labUrl}
                  estimatedTime="~3 mins"
                />
              </div>

              {/* Right Column - Flag Submission and Hints */}
              <div className="space-y-8">
                <FlagSubmission 
                  onSubmit={handleFlagSubmission}
                  isCompleted={challenge.status === 'Completed'}
                />
                
                <HintBox 
                  hints={hints}
                  unlockedHints={unlockedHints}
                  onUnlockHint={handleUnlockHint}
                  userXP={userXP}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Remember: Always practice ethical hacking. Only test on systems you own or have explicit permission to test.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};