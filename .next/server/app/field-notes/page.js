(()=>{var e={};e.id=850,e.ids=[850],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3699:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d}),s(4238),s(3817),s(5866);var a=s(3191),n=s(8716),i=s(7922),o=s.n(i),l=s(5231),r={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(r[e]=()=>l[e]);s.d(t,r);let d=["",{children:["field-notes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4238)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/field-notes/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3817)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/field-notes/page.tsx"],p="/field-notes/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/field-notes/page",pathname:"/field-notes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5548:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5265:(e,t,s)=>{Promise.resolve().then(s.bind(s,4001))},5303:()=>{},4001:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>l,a:()=>r});var a=s(326),n=s(7577),i=s(6208);s(2777);let o=(0,n.createContext)(void 0);function l({children:e}){let[t,s]=(0,n.useState)(null),[l,r]=(0,n.useState)(!0),d=async()=>{try{let e=await (0,i.cs)();s(e)}catch(e){console.error("Error refreshing user:",e),s(null)}finally{r(!1)}},c=async()=>{await (0,i.w7)(),s(null)};return a.jsx(o.Provider,{value:{user:t,loading:l,signOut:c,refreshUser:d},children:e})}function r(){let e=(0,n.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},6208:(e,t,s)=>{"use strict";s.d(t,{cs:()=>i,w7:()=>o,zB:()=>l});var a=s(2777);async function n(e){return(0,a.et)(e)}async function i(){let{data:{user:e},error:t}=await a.supabase.auth.getUser();if(t||!e)return null;try{let t=await n(e.id);return{id:e.id,email:e.email,profile:t}}catch{return{id:e.id,email:e.email,profile:null}}}async function o(){let{error:e}=await a.supabase.auth.signOut();if(e)throw e;window.location.href="/login"}async function l(e,t){let{data:s,error:n}=await a.supabase.auth.signInWithPassword({email:e,password:t});if(n)throw n;return s}},2777:(e,t,s)=>{"use strict";s.d(t,{et:()=>r,supabase:()=>l});var a=s(5157);let n=process.env.NEXT_PUBLIC_SUPABASE_URL||process.env.SUPABASE_URL||"",i=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_ANON_KEY||"",o=null;if(n&&i)try{o=(0,a.eI)(n,i,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}})}catch(e){console.warn("Failed to create Supabase client:",e)}else o=(0,a.eI)("https://placeholder.supabase.co","placeholder-key",{auth:{autoRefreshToken:!1,persistSession:!1,detectSessionInUrl:!1}});let l=o;async function r(e){if(!l||!process.env.NEXT_PUBLIC_SUPABASE_URL)return null;try{let{data:t,error:s}=await l.from("profiles").select("role, email").eq("id",e).single();if(s)throw s;return t}catch{return null}}},4238:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>n});var a=s(9510);let n={title:"Field Notes — Ledger Leadership",description:"Reports from practitioners testing the edges. Hypothetical examples and emerging field data."};function i(){return a.jsx("div",{dangerouslySetInnerHTML:{__html:`
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
                                <span class="note-context">B2B SaaS \xb7 120 employees</span>
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
                                <span class="note-context">Nonprofit \xb7 35 staff</span>
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
                                <span class="note-context">Manufacturing \xb7 200 employees</span>
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
                                <span class="note-context">Series A Startup \xb7 45 employees</span>
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
                                <span class="note-context">State Agency \xb7 80 staff</span>
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
                                <span class="note-context">EdTech Startup \xb7 12 employees</span>
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
                    const meta = [n.role, n.context].filter(Boolean).join(' \xb7 ');

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
`}})}},3817:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,metadata:()=>o});var a=s(9510);s(5023);var n=s(8570);let i=(0,n.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#AuthProvider`);(0,n.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#useAuth`);let o={title:"Ledger Leadership — Structural Diagnostics for Organizations Under Pressure",description:"Two books. One gap. What's claimed and what's true. Structural diagnostics—reading both ledgers clearly, across portfolio, across context.",icons:{icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚖️</text></svg>'}};function l({children:e}){return(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[a.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),a.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap",rel:"stylesheet"})]}),a.jsx("body",{children:a.jsx(i,{children:e})})]})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[372],()=>s(3699));module.exports=a})();