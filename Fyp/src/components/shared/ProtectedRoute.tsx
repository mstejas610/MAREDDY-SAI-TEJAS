
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Role } from '../types';

interface ProtectedRouteProps {
  role?: Role | Role[]; // Optional: single role or array of roles
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, children }) => {
  const { user } = useUser();

  // If no user is logged in, redirect to login page (or unauthorized)
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If roles are specified, check if the user's role matches
  if (role) {
    const requiredRoles = Array.isArray(role) ? role : [role];
    if (!requiredRoles.includes(user.role)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  // If user is logged in and role matches (or no role is specified), render children
  return <>{children}</>;
};
