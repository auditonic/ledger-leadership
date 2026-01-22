import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contribute — Ledger Leadership',
  description: 'Share your field note. Help test and sharpen the emerging discipline.',
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
                <a href="/contribute" class="active">Contribute</a>
                <a href="/for-podcasters">For Podcasters</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">Contribute</h1>
            <p class="page-subtitle">Share your field note. Help sharpen the discipline.</p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="about-content">
        <div class="container-narrow">
            <div class="context-box">
                <h2>This discipline is being built in practice.</h2>
                <p>If you've tested any of the edges, your report helps refine the tool for everyone. We're not looking for success stories—we want to know what actually happened.</p>
            </div>
            
            <div class="looking-for">
                <h3>What makes a useful field note:</h3>
                <ul>
                    <li>Which edge you tested (Reality, Obligation, Continuity, Margin, or Reconciliation)</li>
                    <li>The specific situation—enough context to understand the stakes</li>
                    <li>What you actually did or said</li>
                    <li>What happened—without inflating or minimizing</li>
                    <li>What's still unclear or unresolved</li>
                </ul>
            </div>
            
            <div class="form-container">
                <div class="success-message" id="successMessage">
                    <strong>Thank you.</strong>
                    We've received your field note. We'll review it and may follow up if we have questions. 
                    If you've opted to be featured, we'll reach out before publishing.
                </div>
                
                <form id="contributeForm" onsubmit="handleSubmit(event)">
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <span class="label-note">In case we have follow-up questions</span>
                        <input type="email" id="email" name="email" required placeholder="you@company.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="role">Your Role</label>
                        <span class="label-note">Optional—helps contextualize the situation</span>
                        <input type="text" id="role" name="role" placeholder="e.g., VP Product, Founder, Department Head">
                    </div>
                    
                    <div class="form-group">
                        <label for="context">Organization Context</label>
                        <span class="label-note">Optional—type, size, industry (you can be vague)</span>
                        <input type="text" id="context" name="context" placeholder="e.g., B2B SaaS, 50 employees / Nonprofit, 20 staff">
                    </div>
                    
                    <div class="form-group">
                        <label for="edge">Which edge(s) did you test? *</label>
                        <select id="edge" name="edge" required>
                            <option value="">Select an edge...</option>
                            <option value="reality">Reality Edge — "What actually happened?"</option>
                            <option value="obligation">Obligation Edge — "Who carries the consequence?"</option>
                            <option value="continuity">Continuity Edge — "What must persist for tomorrow?"</option>
                            <option value="margin">Margin Edge — "How close to failure?"</option>
                            <option value="reconciliation">Reconciliation Edge — "What are we pretending balances?"</option>
                            <option value="multiple">Multiple edges</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="situation">The Situation *</label>
                        <span class="label-note">What was happening? What was the problem or context?</span>
                        <textarea id="situation" name="situation" required placeholder="Describe the situation you were facing..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="applied">What You Did *</label>
                        <span class="label-note">How did you apply the edge? What did you say or do?</span>
                        <textarea id="applied" name="applied" required placeholder="What question did you ask? What action did you take?"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="result">What Happened *</label>
                        <span class="label-note">The outcome—without inflating or minimizing</span>
                        <textarea id="result" name="result" required placeholder="What was the result? What changed (or didn't)?"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="unclear">What's Still Unclear</label>
                        <span class="label-note">Questions that remain, things you're uncertain about</span>
                        <textarea id="unclear" name="unclear" placeholder="What don't you know yet? What would you do differently?"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Attribution Preference *</label>
                        <div class="checkbox-group">
                            <div class="checkbox-item">
                                <input type="radio" id="attr-featured" name="attribution" value="featured" required>
                                <label for="attr-featured">Feature me (role + context visible)</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="radio" id="attr-anonymous" name="attribution" value="anonymous" required>
                                <label for="attr-anonymous">Anonymous (situation only)</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="radio" id="attr-private" name="attribution" value="private" required>
                                <label for="attr-private">Private (for our learning only, not published)</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Follow-up</label>
                        <div class="checkbox-group">
                            <div class="checkbox-item">
                                <input type="checkbox" id="followup" name="followup" value="yes">
                                <label for="followup">I'm open to a conversation about this</label>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" class="submit-btn">Submit Field Note</button>
                    
                    <p class="form-note">
                        Your information stays with us. We'll only use it to improve the discipline and, 
                        if you've opted in, to feature your field note with proper attribution.
                    </p>
                </form>
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
                <p>&copy; 2025 Ledger Leadership. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
    <script>
        async function handleSubmit(event) {
            event.preventDefault();

            const form = document.getElementById('contributeForm');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Normalize checkbox value
            if (!data.followup) data.followup = "no";

            // UI helpers
            const success = document.getElementById('successMessage');
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = "Submitting…";

            try {
                const resp = await fetch('/.netlify/functions/submit-field-note', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const payload = await resp.json().catch(() => ({}));

                if (!resp.ok || !payload.ok) {
                    const msg = (payload && (payload.error || payload.details)) ? (payload.error || payload.details) : 'Submission failed.';
                    alert("Could not submit field note. " + msg);
                    return;
                }

                success.classList.add('show');
                form.reset();
                window.scrollTo({ top: 0, behavior: 'smooth' });

                setTimeout(() => {
                    success.classList.remove('show');
                }, 8000);

            } catch (err) {
                alert("Could not submit field note. Please try again.");
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        }
    </script>
` }} />
  );
}
