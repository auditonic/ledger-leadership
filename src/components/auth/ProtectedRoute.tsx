"use client";

/**
 * Protected Route Component
 * Wraps routes that require authentication and specific roles
 */

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'reviewer' | 'user';
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({
  children,
  requiredRole = 'user',
  fallback,
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
        return;
      }

      if (requiredRole !== 'user' && user.profile) {
        const roleHierarchy = { user: 1, reviewer: 2, admin: 3 };
        const userLevel = roleHierarchy[user.profile.role as keyof typeof roleHierarchy] || 0;
        const requiredLevel = roleHierarchy[requiredRole];

        if (userLevel < requiredLevel) {
          router.push('/unauthorized');
          return;
        }
      }
    }
  }, [user, loading, requiredRole, router]);

  if (loading) {
    return (
      fallback || (
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mx-auto"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      )
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  if (requiredRole !== 'user' && user.profile) {
    const roleHierarchy = { user: 1, reviewer: 2, admin: 3 };
    const userLevel = roleHierarchy[user.profile.role as keyof typeof roleHierarchy] || 0;
    const requiredLevel = roleHierarchy[requiredRole];

    if (userLevel < requiredLevel) {
      return null; // Will redirect
    }
  }

  return <>{children}</>;
}
