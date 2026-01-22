import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ledger Leadership — Structural Diagnostics for Organizations Under Pressure',
  description: 'Two books. One gap. What',
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
                <a href="/" class="active">Home</a>
                <a href="/edges">The Five Edges</a>
                <a href="/practice">Practice</a>
                <a href="/field-notes">Field Notes</a>
                <a href="/contribute">Contribute</a>
                <a href="/for-podcasters">For Podcasters</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <p class="hero-eyebrow">Ledger Leadership</p>
                <h1 class="hero-headline">
                    <strong>Two books. One gap.</strong><br>
                    What's claimed and what's true.
                </h1>
                <p class="hero-hook">
                    Structural diagnostics—reading both ledgers clearly, across portfolio, across context. See the gap before it shows up in performance. Act before it becomes a conversation you didn't want to have.
                </p>
                <div class="hero-cta">
                    <a href="/edges" class="btn btn-primary">Explore The Five Edges</a>
                    <a href="/about" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- The Gap Section -->
    <section class="gap-section">
        <div class="container">
            <div class="gap-box">
                <div class="gap-intro">
                    <h2>Every Organization Keeps Two Sets of Books</h2>
                    <p>The gap between them is where leadership exhaustion lives—and where this discipline works.</p>
                </div>
                
                <div class="two-books">
                    <div class="book-card book-claimed">
                        <h3>What's Claimed</h3>
                        <ul>
                            <li>Promises</li>
                            <li>Authority</li>
                            <li>Confidence</li>
                            <li>The deck</li>
                            <li>The strategy</li>
                        </ul>
                    </div>
                    
                    <div class="gap-divider">↔</div>
                    
                    <div class="book-card book-true">
                        <h3>What's True</h3>
                        <ul>
                            <li>Outcomes</li>
                            <li>Accountability</li>
                            <li>Evidence</li>
                            <li>The operation</li>
                            <li>The execution</li>
                        </ul>
                    </div>
                </div>
                
                <div class="gap-result">
                    <p>Structure determines outcome. The discipline is reading both—so you can act before the gap becomes visible to everyone else.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Path Section -->
    <section class="path-section">
        <div class="container">
            <div class="section-header">
                <h2>Where to Start</h2>
                <p>Read front-to-back, or jump to what you need.</p>
            </div>
            
            <div class="path-grid">
                <div class="path-card">
                    <h3>About</h3>
                    <p>Why this exists. The problem it solves. How it's different from leadership development.</p>
                    <a href="/about" class="path-link">Read About</a>
                </div>
                
                <div class="path-card">
                    <h3>The Five Edges</h3>
                    <p>The diagnostic tools. Five questions that reveal where the books diverge—and what happens if they don't reconcile.</p>
                    <a href="/edges" class="path-link">Explore Edges</a>
                </div>
                
                <div class="path-card">
                    <h3>Practice</h3>
                    <p>How to actually use this. Meeting-level moves, exact phrases, anti-patterns to recognize.</p>
                    <a href="/practice" class="path-link">See Practice</a>
                </div>
                
                <div class="path-card">
                    <h3>Field Notes</h3>
                    <p>Reports from practitioners testing the edges—what worked, what didn't, what's still unclear.</p>
                    <a href="/field-notes" class="path-link">Read Notes</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Edges Preview -->
    <section class="edges-section">
        <div class="container">
            <div class="section-header">
                <h2>The Five Edges</h2>
                <p>Each edge reveals where the books diverge. Each question forces reconciliation.</p>
            </div>
            
            <div class="edges-grid">
                <div class="edge-card">
                    <div class="edge-number">1</div>
                    <h3>Reality</h3>
                    <p class="edge-question">"What actually happened?"</p>
                </div>
                
                <div class="edge-card">
                    <div class="edge-number">2</div>
                    <h3>Obligation</h3>
                    <p class="edge-question">"Who carries the consequence?"</p>
                </div>
                
                <div class="edge-card">
                    <div class="edge-number">3</div>
                    <h3>Continuity</h3>
                    <p class="edge-question">"What must persist?"</p>
                </div>
                
                <div class="edge-card">
                    <div class="edge-number">4</div>
                    <h3>Margin</h3>
                    <p class="edge-question">"How close to failure?"</p>
                </div>
                
                <div class="edge-card">
                    <div class="edge-number">5</div>
                    <h3>Reconciliation</h3>
                    <p class="edge-question">"What are we pretending balances?"</p>
                </div>
            </div>
            
            <div class="edges-cta">
                <a href="/edges" class="btn">Explore All Five Edges</a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Tested an Edge?</h2>
            <p>We're collecting field notes from practitioners. What happened when you read both books?</p>
            <div class="cta-buttons">
                <a href="/contribute" class="btn btn-primary">Contribute a Field Note</a>
                <a href="/field-notes" class="btn btn-secondary">Read Field Notes</a>
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
                    <p>Structural diagnostics for organizations under pressure.</p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Framework</h4>
                        <a href="/">Home</a>
                        <a href="/edges">The Five Edges</a>
                        <a href="/practice">Practice</a>
                    </div>
                    <div class="footer-column">
                        <h4>Connect</h4>
                        <a href="/about">About</a>
                        <a href="/for-podcasters">For Podcasters</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p style="font-style: italic; margin-bottom: 0.5rem;">"Two books. One gap. The discipline is reconciliation."</p>
                <p>&copy; 2025 Ledger Leadership. All rights reserved.</p>
            </div>
        </div>
    </footer>
` }} />
  );
}
