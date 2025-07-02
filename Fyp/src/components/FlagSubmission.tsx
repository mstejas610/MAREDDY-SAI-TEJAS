import React, { useState } from 'react';
import { Flag, Send, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface FlagSubmissionProps {
  onSubmit: (flag: string) => Promise<'correct' | 'incorrect' | 'already_solved'>;
  isCompleted: boolean;
}

export const FlagSubmission: React.FC<FlagSubmissionProps> = ({ onSubmit, isCompleted }) => {
  const [flag, setFlag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'incorrect' | 'already_solved' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!flag.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setFeedback({ type: null, message: '' });

    try {
      const result = await onSubmit(flag.trim());
      
      switch (result) {
        case 'correct':
          setFeedback({
            type: 'correct',
            message: 'Congratulations! You solved the challenge!'
          });
          setFlag('');
          break;
        case 'incorrect':
          setFeedback({
            type: 'incorrect',
            message: 'Incorrect flag. Keep trying!'
          });
          break;
        case 'already_solved':
          setFeedback({
            type: 'already_solved',
            message: 'You have already solved this challenge.'
          });
          break;
      }
    } catch (error) {
      setFeedback({
        type: 'incorrect',
        message: 'An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFeedbackStyles = () => {
    switch (feedback.type) {
      case 'correct':
        return 'bg-green-500/20 border-green-500/50 text-green-400';
      case 'incorrect':
        return 'bg-red-500/20 border-red-500/50 text-red-400';
      case 'already_solved':
        return 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400';
      default:
        return '';
    }
  };

  const getFeedbackIcon = () => {
    switch (feedback.type) {
      case 'correct':
        return <CheckCircle className="w-5 h-5" />;
      case 'incorrect':
        return <XCircle className="w-5 h-5" />;
      case 'already_solved':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return null;
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">Challenge Completed</h2>
        </div>
        
        <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
          <div className="flex items-center gap-3 text-green-400">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">You have successfully completed this challenge!</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
          <Flag className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">Submit Flag</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
            placeholder="Enter your flag here..."
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 font-mono"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={!flag.trim() || isSubmitting}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 ${
              !flag.trim() || isSubmitting
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transform hover:scale-105 shadow-lg'
            }`}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send className="w-5 h-5" />
            )}
            <span className="hidden sm:inline">Submit</span>
          </button>
        </div>

        {feedback.type && (
          <div className={`flex items-center gap-3 p-4 rounded-lg border ${getFeedbackStyles()}`}>
            {getFeedbackIcon()}
            <span className="font-semibold">{feedback.message}</span>
          </div>
        )}
      </form>

      <div className="mt-4 text-gray-400 text-sm">
        <p>💡 Flags typically follow the format: <code className="bg-gray-800 px-2 py-1 rounded text-green-400 font-mono">flag{'{example_flag}'}</code></p>
      </div>
    </div>
  );
};