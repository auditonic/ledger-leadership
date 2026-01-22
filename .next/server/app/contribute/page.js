(()=>{var e={};e.id=328,e.ids=[328],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5830:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>r.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),a(5017),a(3817),a(5866);var o=a(3191),i=a(8716),s=a(7922),r=a.n(s),n=a(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);a.d(t,l);let c=["",{children:["contribute",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,5017)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/contribute/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,3817)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/contribute/page.tsx"],u="/contribute/page",p={require:a,loadChunk:()=>Promise.resolve()},h=new o.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/contribute/page",pathname:"/contribute",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5548:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},5265:(e,t,a)=>{Promise.resolve().then(a.bind(a,4001))},5303:()=>{},4001:(e,t,a)=>{"use strict";a.d(t,{AuthProvider:()=>n,a:()=>l});var o=a(326),i=a(7577),s=a(6208);a(2777);let r=(0,i.createContext)(void 0);function n({children:e}){let[t,a]=(0,i.useState)(null),[n,l]=(0,i.useState)(!0),c=async()=>{try{let e=await (0,s.cs)();a(e)}catch(e){console.error("Error refreshing user:",e),a(null)}finally{l(!1)}},d=async()=>{await (0,s.w7)(),a(null)};return o.jsx(r.Provider,{value:{user:t,loading:n,signOut:d,refreshUser:c},children:e})}function l(){let e=(0,i.useContext)(r);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},6208:(e,t,a)=>{"use strict";a.d(t,{cs:()=>s,w7:()=>r,zB:()=>n});var o=a(2777);async function i(e){return(0,o.et)(e)}async function s(){let{data:{user:e},error:t}=await o.supabase.auth.getUser();if(t||!e)return null;try{let t=await i(e.id);return{id:e.id,email:e.email,profile:t}}catch{return{id:e.id,email:e.email,profile:null}}}async function r(){let{error:e}=await o.supabase.auth.signOut();if(e)throw e;window.location.href="/login"}async function n(e,t){let{data:a,error:i}=await o.supabase.auth.signInWithPassword({email:e,password:t});if(i)throw i;return a}},2777:(e,t,a)=>{"use strict";a.d(t,{et:()=>l,supabase:()=>n});var o=a(5157);let i=process.env.NEXT_PUBLIC_SUPABASE_URL||process.env.SUPABASE_URL||"",s=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_ANON_KEY||"",r=null;if(i&&s)try{r=(0,o.eI)(i,s,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}})}catch(e){console.warn("Failed to create Supabase client:",e)}else r=(0,o.eI)("https://placeholder.supabase.co","placeholder-key",{auth:{autoRefreshToken:!1,persistSession:!1,detectSessionInUrl:!1}});let n=r;async function l(e){if(!n||!process.env.NEXT_PUBLIC_SUPABASE_URL)return null;try{let{data:t,error:a}=await n.from("profiles").select("role, email").eq("id",e).single();if(a)throw a;return t}catch{return null}}},5017:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s,metadata:()=>i});var o=a(9510);let i={title:"Contribute — Ledger Leadership",description:"Share your field note. Help test and sharpen the emerging discipline."};function s(){return o.jsx("div",{dangerouslySetInnerHTML:{__html:`
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
`}})}},3817:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n,metadata:()=>r});var o=a(9510);a(5023);var i=a(8570);let s=(0,i.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#AuthProvider`);(0,i.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#useAuth`);let r={title:"Ledger Leadership — Structural Diagnostics for Organizations Under Pressure",description:"Two books. One gap. What's claimed and what's true. Structural diagnostics—reading both ledgers clearly, across portfolio, across context.",icons:{icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚖️</text></svg>'}};function n({children:e}){return(0,o.jsxs)("html",{lang:"en",children:[(0,o.jsxs)("head",{children:[o.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),o.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),o.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap",rel:"stylesheet"})]}),o.jsx("body",{children:o.jsx(s,{children:e})})]})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),o=t.X(0,[372],()=>a(5830));module.exports=o})();