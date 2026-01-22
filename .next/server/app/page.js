(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1799:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>l}),t(5480),t(3817),t(5866);var a=t(3191),i=t(8716),r=t(7922),o=t.n(r),n=t(5231),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);t.d(s,c);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5480)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3817)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/page.tsx"],h="/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5548:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},5265:(e,s,t)=>{Promise.resolve().then(t.bind(t,4001))},5303:()=>{},4001:(e,s,t)=>{"use strict";t.d(s,{AuthProvider:()=>n,a:()=>c});var a=t(326),i=t(7577),r=t(6208);t(2777);let o=(0,i.createContext)(void 0);function n({children:e}){let[s,t]=(0,i.useState)(null),[n,c]=(0,i.useState)(!0),l=async()=>{try{let e=await (0,r.cs)();t(e)}catch(e){console.error("Error refreshing user:",e),t(null)}finally{c(!1)}},d=async()=>{await (0,r.w7)(),t(null)};return a.jsx(o.Provider,{value:{user:s,loading:n,signOut:d,refreshUser:l},children:e})}function c(){let e=(0,i.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},6208:(e,s,t)=>{"use strict";t.d(s,{cs:()=>r,w7:()=>o,zB:()=>n});var a=t(2777);async function i(e){return(0,a.et)(e)}async function r(){let{data:{user:e},error:s}=await a.supabase.auth.getUser();if(s||!e)return null;try{let s=await i(e.id);return{id:e.id,email:e.email,profile:s}}catch{return{id:e.id,email:e.email,profile:null}}}async function o(){let{error:e}=await a.supabase.auth.signOut();if(e)throw e;window.location.href="/login"}async function n(e,s){let{data:t,error:i}=await a.supabase.auth.signInWithPassword({email:e,password:s});if(i)throw i;return t}},2777:(e,s,t)=>{"use strict";t.d(s,{et:()=>c,supabase:()=>n});var a=t(5157);let i=process.env.NEXT_PUBLIC_SUPABASE_URL||process.env.SUPABASE_URL||"",r=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_ANON_KEY||"",o=null;if(i&&r)try{o=(0,a.eI)(i,r,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}})}catch(e){console.warn("Failed to create Supabase client:",e)}else o=(0,a.eI)("https://placeholder.supabase.co","placeholder-key",{auth:{autoRefreshToken:!1,persistSession:!1,detectSessionInUrl:!1}});let n=o;async function c(e){if(!n||!process.env.NEXT_PUBLIC_SUPABASE_URL)return null;try{let{data:s,error:t}=await n.from("profiles").select("role, email").eq("id",e).single();if(t)throw t;return s}catch{return null}}},3817:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n,metadata:()=>o});var a=t(9510);t(5023);var i=t(8570);let r=(0,i.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#AuthProvider`);(0,i.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#useAuth`);let o={title:"Ledger Leadership — Structural Diagnostics for Organizations Under Pressure",description:"Two books. One gap. What's claimed and what's true. Structural diagnostics—reading both ledgers clearly, across portfolio, across context.",icons:{icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚖️</text></svg>'}};function n({children:e}){return(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[a.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),a.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap",rel:"stylesheet"})]}),a.jsx("body",{children:a.jsx(r,{children:e})})]})}},5480:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r,metadata:()=>i});var a=t(9510);let i={title:"Ledger Leadership — Structural Diagnostics for Organizations Under Pressure",description:"Two books. One gap. What"};function r(){return a.jsx("div",{dangerouslySetInnerHTML:{__html:`
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
`}})}},5023:()=>{}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[372],()=>t(1799));module.exports=a})();