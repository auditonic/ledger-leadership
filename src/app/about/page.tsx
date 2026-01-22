import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Ledger Leadership',
  description: 'Why Ledger Leadership exists and what it',
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
                <a href="/for-podcasters">For Podcasters</a>
                <a href="/about" class="active">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">About Ledger Leadership</h1>
            <p class="page-subtitle">Why this exists and what it's designed to do</p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="about-content">
        <div class="container-narrow">
            <div class="content">
                <h2>What We Observed</h2>
                <p>
                    The same pattern, everywhere: smart leaders failing for systems reasons, not personal ones. 
                    Not failures of intelligence or effort. Failures of accounting.
                </p>
                <p>
                    Every time, the problem traced back to the same root: a ledger that didn't balance. 
                    Promises not matched to outcomes. Authority not matched to accountability. 
                    Confidence not matched to evidence.
                </p>
                <p>
                    And every time, the gap between what was said and what was true was the actual operating system—invisible, 
                    unacknowledged, and accumulating debt.
                </p>
                
                <h2>The Core Insight</h2>
                <p>
                    <strong>Every system keeps a ledger whether you acknowledge it or not.</strong>
                </p>
                <p>
                    Leadership failure is not moral. It is unreconciled imbalance. The tensions are always the same:
                </p>
                
                <div class="tensions-grid">
                    <div class="tension-item">Promises <span>vs.</span> Outcomes</div>
                    <div class="tension-item">Authority <span>vs.</span> Accountability</div>
                    <div class="tension-item">Decisions <span>vs.</span> Consequences</div>
                    <div class="tension-item">Speed <span>vs.</span> Margin</div>
                    <div class="tension-item">Confidence <span>vs.</span> Evidence</div>
                </div>
                
                <p>
                    Most leadership approaches ignore this. They rely on trust without audit, alignment without evidence, 
                    values without enforcement. They work until they don't—collapsing under pressure because pressure 
                    reveals the accounting error.
                </p>
                
                <h2>What We Built</h2>
                <p>
                    Ledger Leadership is the practice of forcing reality to balance. Not feelings. Not narratives. Not intent. 
                    <strong>Reality.</strong>
                </p>
                <p>
                    It does one thing exceptionally well: separates what is true from what is being said. Everything else is downstream.
                </p>
                <p>
                    The discipline has five edges—each one cuts ambiguity in a specific direction:
                </p>
                
                <ul class="principle-list">
                    <li><strong>Reality Edge</strong> — What actually happened?</li>
                    <li><strong>Obligation Edge</strong> — Who carries the consequence when this fails?</li>
                    <li><strong>Continuity Edge</strong> — What must persist for this to keep working tomorrow?</li>
                    <li><strong>Margin Edge</strong> — How close are we to failure right now?</li>
                    <li><strong>Reconciliation Edge</strong> — What are we pretending balances that doesn't?</li>
                </ul>
                
                <div class="highlight-box">
                    <p>The smallest viable act: "What is out of balance right now?" That question alone reorients power.</p>
                </div>
                
                <h2>What This Is Not</h2>
                <p>
                    Ledger Leadership does not motivate. Does not inspire. Does not persuade. Does not soften. 
                    Does not protect egos.
                </p>
                
                <div class="refusals-inline">
                    <span class="refusal-item">Not another framework</span>
                    <span class="refusal-item">Not leadership development</span>
                    <span class="refusal-item">Not personality-based</span>
                    <span class="refusal-item">Not aspirational</span>
                </div>
                
                <p>
                    <strong>It reveals.</strong> If someone feels exposed, it's because the ledger was already negative.
                </p>
                
                <div class="emergence-box">
                    <h3>An Honest Note on Emergence</h3>
                    <p>
                        This is an emerging discipline. The edges are sharp, but they're still being tested. 
                        We're building this in practice, not theory.
                    </p>
                    <p>
                        We've not yet proven this in formal client engagements at scale. What we have is: 
                        intellectual rigor, internal consistency, a specific mechanism, and propositions that can be validated.
                    </p>
                    <p>
                        If you test it, we want to know what happens. The discipline gets sharper through use.
                    </p>
                </div>
                
                <h2>The Long View</h2>
                <p>
                    Our belief is that this becomes a true discipline—like other disciplines with foundational principles, 
                    a progression from novice to expert, and structures that allow it to survive beyond individuals.
                </p>
                <p>
                    That progression doesn't exist yet. But it will. And leaders who help build it will create 
                    organizations that are calmer, clearer, and much more sustainable.
                </p>
                <p>
                    <strong>Truth compounds. Fantasy doesn't.</strong>
                </p>
                
                <div class="contact-section">
                    <h3>Want to Talk?</h3>
                    <p>If you're interested in testing this, questioning it, or building on it—reach out.</p>
                    <p><a href="mailto:connect@ledgerleadership.com" class="contact-link">connect@ledgerleadership.com</a></p>
                    <p>Or <a href="/for-podcasters" class="contact-link">have this conversation on your podcast</a>.</p>
                </div>
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
                <p style="font-style: italic; margin-bottom: 0.5rem;">"Leadership is not direction—it is the continuous reconciliation of reality, obligation, and consequence."</p>
                <p>&copy; 2025 Ledger Leadership. All rights reserved.</p>
            </div>
        </div>
    </footer>
` }} />
  );
}
