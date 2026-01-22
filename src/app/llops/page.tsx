/**
 * LLOps Control Center Route
 * Next.js App Router page for the admin dashboard
 * Protected route - requires admin or reviewer role
 */

import LLOpsControlCenter from '@/components/LLOpsControlCenter';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function LLOpsPage() {
  return (
    <ProtectedRoute requiredRole="reviewer">
      <LLOpsControlCenter />
    </ProtectedRoute>
  );
}

// Optional: Add metadata
export const metadata = {
  title: 'LLOps Control Center',
  description: 'Admin dashboard for Ledger Leadership operations',
};
