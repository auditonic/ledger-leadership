(()=>{var e={};e.id=301,e.ids=[301],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1333:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>r.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>c}),s(5433),s(3817),s(5866);var a=s(3191),i=s(8716),n=s(7922),r=s.n(n),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5433)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/about/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3817)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/about/page.tsx"],h="/about/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5548:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5265:(e,t,s)=>{Promise.resolve().then(s.bind(s,4001))},5303:()=>{},4001:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>o,a:()=>l});var a=s(326),i=s(7577),n=s(6208);s(2777);let r=(0,i.createContext)(void 0);function o({children:e}){let[t,s]=(0,i.useState)(null),[o,l]=(0,i.useState)(!0),c=async()=>{try{let e=await (0,n.cs)();s(e)}catch(e){console.error("Error refreshing user:",e),s(null)}finally{l(!1)}},d=async()=>{await (0,n.w7)(),s(null)};return a.jsx(r.Provider,{value:{user:t,loading:o,signOut:d,refreshUser:c},children:e})}function l(){let e=(0,i.useContext)(r);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},6208:(e,t,s)=>{"use strict";s.d(t,{cs:()=>n,w7:()=>r,zB:()=>o});var a=s(2777);async function i(e){return(0,a.et)(e)}async function n(){let{data:{user:e},error:t}=await a.supabase.auth.getUser();if(t||!e)return null;try{let t=await i(e.id);return{id:e.id,email:e.email,profile:t}}catch{return{id:e.id,email:e.email,profile:null}}}async function r(){let{error:e}=await a.supabase.auth.signOut();if(e)throw e;window.location.href="/login"}async function o(e,t){let{data:s,error:i}=await a.supabase.auth.signInWithPassword({email:e,password:t});if(i)throw i;return s}},2777:(e,t,s)=>{"use strict";s.d(t,{et:()=>l,supabase:()=>o});var a=s(5157);let i=process.env.NEXT_PUBLIC_SUPABASE_URL||process.env.SUPABASE_URL||"",n=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_ANON_KEY||"",r=null;if(i&&n)try{r=(0,a.eI)(i,n,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}})}catch(e){console.warn("Failed to create Supabase client:",e)}else r=(0,a.eI)("https://placeholder.supabase.co","placeholder-key",{auth:{autoRefreshToken:!1,persistSession:!1,detectSessionInUrl:!1}});let o=r;async function l(e){if(!o||!process.env.NEXT_PUBLIC_SUPABASE_URL)return null;try{let{data:t,error:s}=await o.from("profiles").select("role, email").eq("id",e).single();if(s)throw s;return t}catch{return null}}},5433:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>i});var a=s(9510);let i={title:"About — Ledger Leadership",description:"Why Ledger Leadership exists and what it"};function n(){return a.jsx("div",{dangerouslySetInnerHTML:{__html:`

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
`}})}},3817:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>r});var a=s(9510);s(5023);var i=s(8570);let n=(0,i.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#AuthProvider`);(0,i.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#useAuth`);let r={title:"Ledger Leadership — Structural Diagnostics for Organizations Under Pressure",description:"Two books. One gap. What's claimed and what's true. Structural diagnostics—reading both ledgers clearly, across portfolio, across context.",icons:{icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚖️</text></svg>'}};function o({children:e}){return(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[a.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),a.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap",rel:"stylesheet"})]}),a.jsx("body",{children:a.jsx(n,{children:e})})]})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[372],()=>s(1333));module.exports=a})();