
import React, { ReactNode } from 'react';
import { useUser } from '../../contexts/UserContext';
import { Role } from '../../types';

interface RoleGateProps {
  role: Role; // The required role to render children
  children: ReactNode;
  fallback?: ReactNode; // Optional fallback UI if role doesn't match
}

export const RoleGate: React.FC<RoleGateProps> = ({
  role,
  children,
  fallback = null, // Default to null if no fallback is provided
}) => {
  const { user } = useUser();

  if (!user) {
    // User is not logged in, so they don't have any role
    return <>{fallback}</>;
  }

  if (user.role === role) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};
