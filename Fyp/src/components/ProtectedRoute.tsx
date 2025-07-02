import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Role } from '../types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: Role | Role[];
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  role, 
  redirectTo = '/unauthorized' 
}) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const allowedRoles = Array.isArray(role) ? role : [role];
  const hasPermission = allowedRoles.includes(user.role);

  if (!hasPermission) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};
