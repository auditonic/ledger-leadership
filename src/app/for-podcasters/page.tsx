import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Podcasters — Ledger Leadership',
  description: 'Interview Ledger Leadership. A conversation about why every system keeps a ledger—and what happens when leaders stop pretending otherwise.',
};

export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <a href="/" class="logo">
                <span class="logo-symbol">⚖</span>
                <span class="logo-text">Ledger Leadership</span>
            </a>
            
            <div class="nav-links">
                <a href="/">Home</a>
                <a href="/edges">The Five Edges</a>
                <a href="/practice">Practice</a>
                <a href="/field-notes">Field Notes</a>
                <a href="/contribute">Contribute</a>
                <a href="/for-podcasters" class="active">For Podcasters</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">Interview Ledger Leadership</h1>
            <p class="page-subtitle">A conversation about what happens when leaders stop pretending the ledger balances.</p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="about-content">
        <div class="container-narrow">
            <div class="main-content">
                <div class="section">
                    <h2>What This Conversation Is About</h2>
                    <p>
                        Every system keeps a ledger whether leaders acknowledge it or not. 
                        Promises vs. outcomes. Authority vs. accountability. Confidence vs. evidence.
                    </p>
                    <p>
                        Most leadership approaches work until they don't—collapsing under pressure 
                        because they rely on trust without audit, alignment without evidence, values without enforcement.
                    </p>
                    <p>
                        <strong>Ledger Leadership is different.</strong> It's an emerging discipline built for stress—because 
                        pressure doesn't create problems, it reveals accounting errors.
                    </p>
                    
                    <h2 style="margin-top: 2rem;">What We'd Explore</h2>
                    <ul class="talking-points">
                        <li>Why every system keeps a ledger—and what happens when leaders pretend otherwise</li>
                        <li>The five edges that cut through organizational ambiguity</li>
                        <li>Why most leadership models collapse under pressure (and what survives)</li>
                        <li>The single question that reorients power in any meeting</li>
                        <li>What this discipline refuses to do—and why that matters</li>
                    </ul>
                    
                    <div class="format-box">
                        <div class="format-label">Format</div>
                        <p class="format-text">
                            45-minute conversation. No prep required on your end—I'll walk through the thinking 
                            and you ask whatever comes up. We'll make it relevant to your specific audience.
                        </p>
                    </div>
                    
                    <div class="format-box">
                        <div class="format-label">Why Now</div>
                        <p class="format-text">
                            Every leadership model promises alignment. Few survive contact with pressure. 
                            Organizations are leaner, faster, and more fragile than ever. Your listeners 
                            need a discipline designed for reality, not aspirations.
                        </p>
                    </div>
                    
                    <h2 style="margin-top: 2rem;">Before We Talk</h2>
                    <p>
                        Want to get familiar first? The <a href="/edges" class="download-link">Five Edges page</a> 
                        explains the core mechanism (5 minutes to read).
                    </p>
                    <p>
                        Or just book a time. We'll make it work regardless.
                    </p>
                </div>
                
                <div class="sidebar">
                    <h2>Next Steps</h2>
                    <p style="font-size: 0.95rem;">
                        Pick a time that works. We'll handle the rest.
                    </p>
                    
                    <a href="https://calendly.com/[your-calendly-link]" class="cta-button">Check Availability</a>
                    
                    <div class="sidebar-divider">
                        <p style="font-size: 0.9rem;">
                            <strong>Prefer email first?</strong><br/>
                            No problem. Send a note to <strong>connect@ledgerleadership.com</strong> with your 
                            podcast name and audience size.
                        </p>
                    </div>
                    
                    <div class="sidebar-divider">
                        <p style="font-size: 0.85rem; margin-bottom: 0.75rem;"><strong>Quick Links</strong></p>
                        <ul class="sidebar-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/edges">The Five Edges</a></li>
                            <li><a href="/practice">Practice</a></li>
                            <li><a href="/field-notes">Field Notes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="quote-box">
                <p>"Leadership is not direction—it is the continuous reconciliation of reality, obligation, and consequence."</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="logo">
                        <span class="logo-symbol">⚖</span>
                        <span class="logo-text">Ledger Leadership</span>
                    </div>
                    <p>Balancing Reality, Accountable Delivery</p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Framework</h4>
                        <a href="/">Home</a>
                        <a href="/edges">The Five Edges</a>
                        <a href="/practice">Practice</a>
                    </div>
                    <div class="footer-column">
                        <h4>Company</h4>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p style="margin-bottom: 0.5rem;">Questions before scheduling? Reach out: connect@ledgerleadership.com</p>
                <p>&copy; 2025 Ledger Leadership. All rights reserved.</p>
            </div>
        </div>
    </footer>
` }} />
  );
}
