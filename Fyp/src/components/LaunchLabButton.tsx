
import React, { useState } from 'react';
import { Play, ExternalLink, Clock, Server, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Button } from './ui/button';

interface LaunchLabButtonProps {
  isLaunched: boolean;
  onLaunch: () => void;
  labUrl?: string;
  estimatedTime?: string;
}

export const LaunchLabButton: React.FC<LaunchLabButtonProps> = ({ 
  isLaunched, 
  onLaunch, 
  labUrl,
  estimatedTime = "~5 mins"
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLaunch = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate lab startup
    onLaunch();
    setIsLoading(false);
    toast({
      title: "Lab Launched Successfully",
      description: "Your lab environment is ready.",
    });
  };

  if (isLaunched && labUrl) {
    return (
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <Server className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">Lab Environment</h2>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Lab is running</span>
          </div>
          
          <div className="text-gray-300 text-sm mb-4">
            <p className="mb-2">Your lab environment is ready. Click below to access:</p>
            <code className="bg-gray-700 px-2 py-1 rounded text-green-400 font-mono text-xs">
              {labUrl}
            </code>
          </div>

          <a
            href={labUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Access Lab Environment
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <Play className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">Launch Lab</h2>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 mb-4">
        <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
          <Clock className="w-4 h-4" />
          <span>Estimated startup time: {estimatedTime}</span>
        </div>
        <p className="text-gray-400 text-sm">
          This will spin up a dedicated lab environment for you to work on this challenge.
        </p>
      </div>

      <Button
        onClick={handleLaunch}
        disabled={isLoading}
        className="w-full"
        aria-live="polite"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Launching...
          </>
        ) : (
          <>
            <Play className="mr-2 h-4 w-4" />
            Launch Lab Environment
          </>
        )}
      </Button>
    </div>
  );
};
