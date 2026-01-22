import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice — Ledger Leadership',
  description: 'How to actually use Ledger Leadership. Meeting-level micro-moves, exact phrases, and anti-patterns.',
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
                <a href="/practice" class="active">Practice</a>
                <a href="/field-notes">Field Notes</a>
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
            <h1 class="page-title">Practice</h1>
            <p class="page-subtitle">How to actually use this. Exact moments. Exact phrases.</p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="about-content">
        <div class="container-narrow">
            <!-- Smallest Viable Act -->
            <div class="core-practice">
                <h2>The Smallest Viable Act</h2>
                <p class="core-question">"What is out of balance right now?"</p>
                <p>That question alone reorients power. It can be asked silently before any meeting, 
                   spoken aloud when things feel stuck, or used to close any conversation that's drifting.</p>
            </div>
            
            <!-- Meeting Micro-Moves -->
            <div class="section">
                <div class="section-label">Meeting-Level Micro-Moves</div>
                <h2>Exact phrases for exact moments.</h2>
                <p>These aren't scripts. They're interruptions—designed to force clarity at specific points where meetings typically lose truth.</p>
                
                <div class="micro-moves-grid">
                    <div class="micro-move">
                        <div class="move-timing">At Opening</div>
                        <h3>Before any agenda</h3>
                        <div class="move-phrase">"Before we start—what's the one thing that's out of balance that we need to address today?"</div>
                        <p class="move-effect"><strong>What it forces:</strong> Surfaces the real issue before the planned agenda buries it. Often reveals the meeting isn't about what the invite said.</p>
                    </div>
                    
                    <div class="micro-move">
                        <div class="move-timing">When Stuck</div>
                        <h3>When circular discussion begins</h3>
                        <div class="move-phrase">"We've been on this for a while. Let me ask: does everyone in this room see the problem the same way? Let's check."</div>
                        <p class="move-effect"><strong>What it forces:</strong> Stops the loop. Usually reveals that people are solving different problems. Applies the Reality Edge.</p>
                    </div>
                    
                    <div class="micro-move">
                        <div class="move-timing">When Deciding</div>
                        <h3>Before committing to action</h3>
                        <div class="move-phrase">"If this doesn't work, whose problem does it become? I want a name, not a team."</div>
                        <p class="move-effect"><strong>What it forces:</strong> Prevents orphaned decisions. Makes obligation explicit before work begins. Applies the Obligation Edge.</p>
                    </div>
                    
                    <div class="micro-move">
                        <div class="move-timing">When Planning</div>
                        <h3>Before committing resources</h3>
                        <div class="move-phrase">"What's our margin here? If one thing goes wrong, what happens?"</div>
                        <p class="move-effect"><strong>What it forces:</strong> Exposes silent risk stacking. Reveals whether the plan has any buffer. Applies the Margin Edge.</p>
                    </div>
                    
                    <div class="micro-move">
                        <div class="move-timing">When Celebrating</div>
                        <h3>After a success</h3>
                        <div class="move-phrase">"Great. Now—could a different team repeat this? What would break if the person who did this left?"</div>
                        <p class="move-effect"><strong>What it forces:</strong> Distinguishes heroic performance from transferable capability. Applies the Continuity Edge.</p>
                    </div>
                    
                    <div class="micro-move">
                        <div class="move-timing">Before Closing</div>
                        <h3>When the meeting is wrapping up</h3>
                        <div class="move-phrase">"What's the thing we didn't say in this meeting? The thing everyone's thinking but no one voiced?"</div>
                        <p class="move-effect"><strong>What it forces:</strong> Catches the residue. Names the gap before it becomes debt. Applies the Reconciliation Edge.</p>
                    </div>
                </div>
            </div>
            
            <!-- Five Edge Questions Card -->
            <div class="section">
                <div class="section-label">Quick Reference</div>
                <div class="edge-card">
                    <h3>The Five Edge Questions</h3>
                    <ul class="edge-questions-list">
                        <li>
                            <span class="eq-number">1</span>
                            <div class="eq-content">
                                <span class="eq-name">Reality</span>
                                <span class="eq-question">"What actually happened?"</span>
                            </div>
                        </li>
                        <li>
                            <span class="eq-number">2</span>
                            <div class="eq-content">
                                <span class="eq-name">Obligation</span>
                                <span class="eq-question">"Who carries the consequence when this fails?"</span>
                            </div>
                        </li>
                        <li>
                            <span class="eq-number">3</span>
                            <div class="eq-content">
                                <span class="eq-name">Continuity</span>
                                <span class="eq-question">"What must persist for this to keep working tomorrow?"</span>
                            </div>
                        </li>
                        <li>
                            <span class="eq-number">4</span>
                            <div class="eq-content">
                                <span class="eq-name">Margin</span>
                                <span class="eq-question">"How close are we to failure right now?"</span>
                            </div>
                        </li>
                        <li>
                            <span class="eq-number">5</span>
                            <div class="eq-content">
                                <span class="eq-name">Reconciliation</span>
                                <span class="eq-question">"What are we pretending balances that doesn't?"</span>
                            </div>
                        </li>
                    </ul>
                    <p class="card-note">Screenshot this. Ask one before any important conversation.</p>
                </div>
            </div>
            
            <!-- Which Edge When -->
            <div class="section">
                <div class="section-label">Which Edge When</div>
                <h2>Starting points for common situations.</h2>
                <p>Any edge can work anywhere, but these are reliable entry points.</p>
                
                <div class="when-grid">
                    <div class="when-card">
                        <div class="when-situation">In Crisis</div>
                        <div class="when-edge">Start with Reality</div>
                    </div>
                    <div class="when-card">
                        <div class="when-situation">In Planning</div>
                        <div class="when-edge">Start with Continuity</div>
                    </div>
                    <div class="when-card">
                        <div class="when-situation">In Conflict</div>
                        <div class="when-edge">Start with Reconciliation</div>
                    </div>
                    <div class="when-card">
                        <div class="when-situation">When Hiring</div>
                        <div class="when-edge">Start with Obligation</div>
                    </div>
                    <div class="when-card">
                        <div class="when-situation">When Scaling</div>
                        <div class="when-edge">Start with Margin</div>
                    </div>
                    <div class="when-card">
                        <div class="when-situation">When Stuck</div>
                        <div class="when-edge">Start with Reality</div>
                    </div>
                </div>
            </div>
            
            <!-- Anti-Patterns -->
            <div class="section">
                <div class="section-label">Anti-Patterns</div>
                <h2>How you know the discipline is absent.</h2>
                <p>If you recognize these patterns, you've identified where the edges have dulled.</p>
                
                <div class="anti-patterns">
                    <div class="anti-pattern-group">
                        <h4>In Meetings</h4>
                        <ul class="anti-pattern-list">
                            <li>Different people leave with different understandings of what was decided</li>
                            <li>The same issue appears on the agenda month after month</li>
                            <li>Action items have teams assigned, never individuals</li>
                            <li>No one asks "what if this fails?" before committing</li>
                            <li>Silence where there should be disagreement</li>
                        </ul>
                    </div>
                    
                    <div class="anti-pattern-group">
                        <h4>In Decisions</h4>
                        <ul class="anti-pattern-list">
                            <li>Accountability conversations happen after failure, never before</li>
                            <li>Reports describe what should have happened, not what did</li>
                            <li>Optimistic timelines that always slip by the same amount</li>
                            <li>"Everyone owns it" (which means no one does)</li>
                            <li>Decisions made in meetings get quietly reversed in hallways</li>
                        </ul>
                    </div>
                    
                    <div class="anti-pattern-group">
                        <h4>In Operations</h4>
                        <ul class="anti-pattern-list">
                            <li>Success depends on one person who can't take vacation</li>
                            <li>"Surprises" happen regularly (meaning risk wasn't visible)</li>
                            <li>The same crisis recurs every quarter</li>
                            <li>Everything runs at capacity with no buffer</li>
                            <li>Institutional knowledge lives in people's heads, not systems</li>
                        </ul>
                    </div>
                    
                    <div class="anti-pattern-group">
                        <h4>In Culture</h4>
                        <ul class="anti-pattern-list">
                            <li>Heroics are celebrated more than sustainable performance</li>
                            <li>Problems are known but never on the agenda</li>
                            <li>Motion is treated as progress</li>
                            <li>Truth-tellers are seen as negative</li>
                            <li>"We've always made it work" is offered as evidence of resilience</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- CTA -->
            <div class="cta-section">
                <p style="color: var(--color-text-light); margin-bottom: 1.5rem;">Tried any of this? We're collecting field notes from practitioners testing the edges.</p>
                <div class="cta-buttons">
                    <a href="/contribute" class="btn btn-primary">Share What You Found</a>
                    <a href="/field-notes" class="btn btn-secondary">Read Field Notes</a>
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
                <p>&copy; 2025 Ledger Leadership. All rights reserved.</p>
            </div>
        </div>
    </footer>
` }} />
  );
}
