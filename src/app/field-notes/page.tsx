import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Field Notes — Ledger Leadership',
  description: 'Reports from practitioners testing the edges. Hypothetical examples and emerging field data.',
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
                <a href="/field-notes" class="active">Field Notes</a>
                <a href="/contribute">Contribute</a>
                <a href="/for-podcasters">For Podcasters</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">Field Notes</h1>
            <p class="page-subtitle">Reports from practitioners testing the edges—what worked, what didn't, what's still unclear.</p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="about-content">
        <div class="container-narrow">
            <div class="context-box">
                <p>
                    <strong>Ledger Leadership is in formation.</strong> These field notes document how the edges perform in practice. 
                    Some are hypothetical examples illustrating how the discipline might be applied. Others will come from 
                    practitioners as we collect them.
                </p>
                <p>
                    If you've tested any of this, we want to hear what happened—<a href="/contribute">contribute your field note</a>.
                </p>
            </div>
            
            <!-- Filter -->
            <div class="filter-section">
                <div class="filter-label">Filter by Edge</div>
                <div class="filter-buttons">
                    <button class="filter-btn active" onclick="filterNotes('all')">All</button>
                    <button class="filter-btn" onclick="filterNotes('reality')">Reality</button>
                    <button class="filter-btn" onclick="filterNotes('obligation')">Obligation</button>
                    <button class="filter-btn" onclick="filterNotes('continuity')">Continuity</button>
                    <button class="filter-btn" onclick="filterNotes('margin')">Margin</button>
                    <button class="filter-btn" onclick="filterNotes('reconciliation')">Reconciliation</button>
                </div>
            </div>
            
            <!-- Hypothetical Examples Section -->
            <div class="section">
                <div class="section-header">
                    <h2>Illustrative Examples</h2>
                    <span class="example-badge">Hypothetical</span>
                </div>
                
                <div class="field-notes-grid" id="notesContainer">
                    <!-- Note 1 -->
                    <div class="field-note" data-edge="reality">
                        <div class="note-header">
                            <div class="note-meta">
                                <span class="note-role">VP of Product</span>
                                <span class="note-context">B2B SaaS · 120 employees</span>
                            </div>
                            <span class="note-edge">Reality Edge</span>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Situation</div>
                            <p class="note-text">Weekly product review kept rehashing the same roadmap debates. Engineering said timeline was 8 weeks; Sales said customers needed it in 4. Every meeting ended with "let's align offline."</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Edge Applied</div>
                            <p class="note-text">Started the next meeting with: "Before we discuss solutions—what specifically has shipped in the last two sprints? Not what was planned. What actually shipped." Forced the room to look at delivery data instead of projections.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">What Happened</div>
                            <p class="note-text">The actual shipped velocity was 40% of what both teams assumed. The 8-week vs. 4-week debate was irrelevant—neither was realistic. The conversation shifted to why velocity was lower than perceived. Found three bottlenecks no one had named.</p>
                        </div>
                        
                        <div class="note-unresolved">
                            <div class="note-label">Still Unclear</div>
                            <p class="note-text">How to maintain this discipline weekly without it feeling like an audit. Team started to dread the "what actually happened" question.</p>
                        </div>
                    </div>
                    
                    <!-- Note 2 -->
                    <div class="field-note" data-edge="obligation">
                        <div class="note-header">
                            <div class="note-meta">
                                <span class="note-role">Executive Director</span>
                                <span class="note-context">Nonprofit · 35 staff</span>
                            </div>
                            <span class="note-edge">Obligation Edge</span>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Situation</div>
                            <p class="note-text">Major fundraising campaign was "owned" by the development team, but decisions kept getting escalated to me. Every ask over $10K needed my approval. I was the bottleneck on a team of 8 fundraisers.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Edge Applied</div>
                            <p class="note-text">In the next planning meeting, asked each fundraiser: "If your biggest prospect says no, whose problem is it? If they say yes but we can't deliver, whose problem is that?" Made people name consequences, not just tasks.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">What Happened</div>
                            <p class="note-text">Discovered that "ownership" meant task completion, not consequence-bearing. No one felt authorized to say no to a bad-fit donor. Restructured so each fundraiser owns the full relationship—including the authority to decline. Escalations dropped by 70%.</p>
                        </div>
                        
                        <div class="note-unresolved">
                            <div class="note-label">Still Unclear</div>
                            <p class="note-text">Two team members struggled with the authority. Not everyone wants to carry real consequences. Wondering if this is a hiring filter or a development issue.</p>
                        </div>
                    </div>
                    
                    <!-- Note 3 -->
                    <div class="field-note" data-edge="continuity">
                        <div class="note-header">
                            <div class="note-meta">
                                <span class="note-role">COO</span>
                                <span class="note-context">Manufacturing · 200 employees</span>
                            </div>
                            <span class="note-edge">Continuity Edge</span>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Situation</div>
                            <p class="note-text">Our best production line was running 15% above target. Leadership wanted to celebrate and replicate. But the line was run by one supervisor who'd been there 18 years and "just knew" how to keep it humming.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Edge Applied</div>
                            <p class="note-text">Asked in the ops review: "If Marcus took a three-week vacation starting Monday, what would happen to that line? What's not written down?" The room went quiet.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">What Happened</div>
                            <p class="note-text">Marcus himself said: "It would probably drop to 85% within a week." We spent the next quarter documenting his knowledge. Created a rotation system. When he actually took vacation, the line held at 97%. But the real win: Marcus felt valued instead of trapped.</p>
                        </div>
                        
                        <div class="note-unresolved">
                            <div class="note-label">Still Unclear</div>
                            <p class="note-text">Some tacit knowledge resisted documentation. The 3% gap might be irreducible without Marcus's intuition. Acceptable trade-off for continuity, but not sure.</p>
                        </div>
                    </div>
                    
                    <!-- Note 4 -->
                    <div class="field-note" data-edge="margin">
                        <div class="note-header">
                            <div class="note-meta">
                                <span class="note-role">CEO</span>
                                <span class="note-context">Series A Startup · 45 employees</span>
                            </div>
                            <span class="note-edge">Margin Edge</span>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Situation</div>
                            <p class="note-text">Raised Series A, immediately committed to aggressive hiring plan and product roadmap. Board was happy. Team was energized. Everything felt possible.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Edge Applied</div>
                            <p class="note-text">Before finalizing the plan, forced myself to ask: "What's our margin if one thing goes wrong? If hiring takes 20% longer, or if one key engineer leaves, or if the market shifts—do we have buffer?" Ran the scenarios.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">What Happened</div>
                            <p class="note-text">The plan had zero margin. Any single delay would cascade into missed milestones. Rebuilt the plan with 15% buffer on timelines and 10% contingency on budget. Board pushed back initially but approved. Six months later, we needed every bit of that buffer when our primary vendor changed terms.</p>
                        </div>
                        
                        <div class="note-unresolved">
                            <div class="note-label">Still Unclear</div>
                            <p class="note-text">How much margin is enough? 15% felt arbitrary. Wondering if there's a principled way to calculate buffer based on uncertainty levels.</p>
                        </div>
                    </div>
                    
                    <!-- Note 5 -->
                    <div class="field-note" data-edge="reconciliation">
                        <div class="note-header">
                            <div class="note-meta">
                                <span class="note-role">Department Head</span>
                                <span class="note-context">State Agency · 80 staff</span>
                            </div>
                            <span class="note-edge">Reconciliation Edge</span>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Situation</div>
                            <p class="note-text">Our team had been "reorganizing" for 18 months. New org chart every quarter. Each reorg announced with optimism; each one left the same problems unsolved. Morale was dropping. People were leaving.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Edge Applied</div>
                            <p class="note-text">In the next leadership meeting, asked: "What are we pretending the last three reorgs fixed that they didn't? What's the thing we keep not saying?" Then sat in silence until someone spoke.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">What Happened</div>
                            <p class="note-text">After a long pause, someone said: "We keep reorganizing to avoid firing two people who aren't performing." The room exhaled. Everyone knew it. No one had said it. We stopped reorganizing. Addressed the performance issues directly. Morale improved within weeks—not because of the firings, but because the pretense ended.</p>
                        </div>
                        
                        <div class="note-unresolved">
                            <div class="note-label">Still Unclear</div>
                            <p class="note-text">Why did it take so long for someone to say it? What made that meeting different? Trying to understand the conditions that allow reconciliation to happen.</p>
                        </div>
                    </div>
                    
                    <!-- Note 6 -->
                    <div class="field-note" data-edge="reality">
                        <div class="note-header">
                            <div class="note-meta">
                                <span class="note-role">Founder</span>
                                <span class="note-context">EdTech Startup · 12 employees</span>
                            </div>
                            <span class="note-edge">Reality Edge</span>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Situation</div>
                            <p class="note-text">Customer success team reported 95% satisfaction scores. But churn was 8% monthly. The numbers didn't reconcile. When I asked, the team defended the satisfaction scores. "Churned customers just had budget issues."</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">Edge Applied</div>
                            <p class="note-text">Pulled the last 20 churned customers. Asked: "What actually happened with each of these? Not why we think they left—what events occurred before they canceled?" Made us reconstruct the timeline without interpretation.</p>
                        </div>
                        
                        <div class="note-section">
                            <div class="note-label">What Happened</div>
                            <p class="note-text">15 of 20 had submitted support tickets that took more than 48 hours to resolve in the month before churning. The "budget" explanation was a story we told ourselves. Reality: slow support was killing retention. Satisfaction surveys weren't capturing frustration that built over time.</p>
                        </div>
                        
                        <div class="note-unresolved">
                            <div class="note-label">Still Unclear</div>
                            <p class="note-text">How to design metrics that capture reality instead of narrative. Current NPS/CSAT surveys seem to invite the wrong kind of data.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Community Notes (Live) -->
            <div class="section">
                <div class="section-header">
                    <h2>Community Field Notes</h2>
                </div>
                <p style="color: var(--color-text-light); margin: 0 0 1rem 0; font-size: 0.95rem;">
                    Published notes submitted by practitioners (loaded live).
                </p>
                <div class="field-notes-grid" id="communityNotes"></div>
                <div id="communityEmpty" style="display:none; color:var(--color-text-light); font-size:0.95rem; margin-top:0.75rem;">
                    No published notes yet. Be the first to contribute.
                </div>
            </div>

            <!-- CTA -->
            <div class="cta-section">
                <h2 style="color: white; margin-bottom: 1rem;">Add Your Field Note</h2>
                <p style="color: rgba(255, 255, 255, 1); margin-bottom: 1.5rem; max-width: 500px; margin-left: auto; margin-right: auto;">Tested an edge? We want to know what happened—what worked, what didn't, what's still unclear. Your report sharpens the discipline for everyone.</p>
                <a href="/contribute" class="btn btn-primary" style="background: white; color: var(--color-primary);">Contribute Your Note</a>
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
        function filterNotes(edge) {
            const notes = document.querySelectorAll('.field-note');
            const buttons = document.querySelectorAll('.filter-btn');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            notes.forEach(note => {
                if (edge === 'all' || note.dataset.edge === edge) {
                    note.style.display = 'block';
                } else {
                    note.style.display = 'none';
                }
            });
        }

        async function loadCommunityNotes() {
            const container = document.getElementById('communityNotes');
            const empty = document.getElementById('communityEmpty');
            if (!container) return;

            try {
                const resp = await fetch('/.netlify/functions/list-field-notes');
                const payload = await resp.json();
                const notes = (payload && payload.notes) ? payload.notes : [];

                if (!notes.length) {
                    empty.style.display = 'block';
                    return;
                }

                notes.forEach(n => {
                    const card = document.createElement('div');
                    card.className = 'field-note';
                    card.setAttribute('data-edge', n.edge || 'all');

                    const edgeLabelMap = {
                        reality: 'Reality Edge',
                        obligation: 'Obligation Edge',
                        continuity: 'Continuity Edge',
                        margin: 'Margin Edge',
                        reconciliation: 'Reconciliation Edge'
                    };

                    const edgeLabel = edgeLabelMap[n.edge] || 'Field Note';
                    const meta = [n.role, n.context].filter(Boolean).join(' · ');

                    card.innerHTML = \`
                        <div class="note-header">
                            <div class="note-meta">
                                <span class="note-role">\${n.attribution === 'anonymous' ? 'Anonymous' : (n.role || 'Contributor')}</span>
                                <span class="note-context">\${meta || ''}</span>
                            </div>
                            <span class="note-edge">\${edgeLabel}</span>
                        </div>
                        <div class="note-section">
                            <div class="note-label">Situation</div>
                            <p class="note-text">\${n.situation || ''}</p>
                        </div>
                        <div class="note-section">
                            <div class="note-label">What They Did</div>
                            <p class="note-text">\${n.applied || ''}</p>
                        </div>
                        <div class="note-section">
                            <div class="note-label">What Happened</div>
                            <p class="note-text">\${n.result || ''}</p>
                        </div>
                        \${n.unclear ? \`
                        <div class="note-unresolved">
                            <div class="note-label">Still Unclear</div>
                            <p class="note-text">\${n.unclear}</p>
                        </div>\` : ''}
                    \`;

                    container.appendChild(card);
                });

            } catch (e) {
                empty.style.display = 'block';
                empty.textContent = 'Could not load community notes yet.';
            }
        }

        // Load live notes on page load
        document.addEventListener('DOMContentLoaded', loadCommunityNotes);
    </script>
` }} />
  );
}
