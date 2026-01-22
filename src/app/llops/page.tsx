/**
 * LLOps Control Center Route
 * Next.js App Router page for the admin dashboard
 */

import LLOpsControlCenter from '@/components/LLOpsControlCenter';

export default function LLOpsPage() {
  return <LLOpsControlCenter />;
}

// Optional: Add metadata
export const metadata = {
  title: 'LLOps Control Center',
  description: 'Admin dashboard for Ledger Leadership operations',
};
