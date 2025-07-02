
import React, { useState } from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
  onDismiss?: () => void;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({
  message,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div className="relative flex items-center justify-between gap-4 p-4 rounded-lg bg-red-900/20 border border-red-500/50 text-red-400 shadow-lg">
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        <span className="font-medium text-sm">{message}</span>
      </div>
      {onDismiss && (
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-red-400 hover:text-red-300 transition-colors"
          aria-label="Dismiss alert"
        >
          <XCircle className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
