
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const UnauthorizedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl font-bold mb-4">403 - Unauthorized Access</h1>
      <p className="text-lg text-gray-400 mb-8">
        You do not have the necessary permissions to view this page.
      </p>
      <Link to="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  );
};
