
import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const { login } = useUser();

  const handleLogin = () => {
    if (username.trim()) {
      login(username.trim());
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-700">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Login</h1>
          <p className="text-gray-400">Enter your username to continue</p>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="username" className="text-gray-300">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., CyberNinja"
              className="mt-2"
            />
          </div>
          <Button onClick={handleLogin} className="w-full">Login</Button>
        </div>
      </div>
    </div>
  );
};
