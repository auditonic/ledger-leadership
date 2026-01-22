/**
 * Home Page
 * Main landing page for Ledger Leadership
 */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="py-20">
          <h1 className="text-4xl font-bold mb-4">Ledger Leadership</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Operational command center and public site for LedgerLeadership.com
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Public Site</h2>
              <p className="text-muted-foreground">
                Browse field notes and learn about the Ledger Leadership framework.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">LLOps Control Center</h2>
              <p className="text-muted-foreground">
                <a href="/llops" className="text-primary hover:underline">
                  Admin dashboard
                </a> for managing field notes and operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
