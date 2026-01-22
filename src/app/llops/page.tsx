/**
 * LLOps Control Center Route
 * Next.js App Router page for the admin dashboard
 * Protected route - requires admin or reviewer role
 * Force dynamic rendering to avoid build-time auth checks
 */

import LLOpsControlCenter from '@/components/LLOpsControlCenter';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

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
