(()=>{var e={};e.id=433,e.ids=[433],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1181:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>h,pages:()=>c,routeModule:()=>u,tree:()=>d}),t(2865),t(3817),t(5866);var i=t(3191),a=t(8716),n=t(7922),o=t.n(n),r=t(5231),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);t.d(s,l);let d=["",{children:["edges",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2865)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/edges/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3817)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/edges/page.tsx"],h="/edges/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/edges/page",pathname:"/edges",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5548:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},5265:(e,s,t)=>{Promise.resolve().then(t.bind(t,4001))},5303:()=>{},4001:(e,s,t)=>{"use strict";t.d(s,{AuthProvider:()=>r,a:()=>l});var i=t(326),a=t(7577),n=t(6208);t(2777);let o=(0,a.createContext)(void 0);function r({children:e}){let[s,t]=(0,a.useState)(null),[r,l]=(0,a.useState)(!0),d=async()=>{try{let e=await (0,n.cs)();t(e)}catch(e){console.error("Error refreshing user:",e),t(null)}finally{l(!1)}},c=async()=>{await (0,n.w7)(),t(null)};return i.jsx(o.Provider,{value:{user:s,loading:r,signOut:c,refreshUser:d},children:e})}function l(){let e=(0,a.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},6208:(e,s,t)=>{"use strict";t.d(s,{cs:()=>n,w7:()=>o,zB:()=>r});var i=t(2777);async function a(e){return(0,i.et)(e)}async function n(){let{data:{user:e},error:s}=await i.supabase.auth.getUser();if(s||!e)return null;try{let s=await a(e.id);return{id:e.id,email:e.email,profile:s}}catch{return{id:e.id,email:e.email,profile:null}}}async function o(){let{error:e}=await i.supabase.auth.signOut();if(e)throw e;window.location.href="/login"}async function r(e,s){let{data:t,error:a}=await i.supabase.auth.signInWithPassword({email:e,password:s});if(a)throw a;return t}},2777:(e,s,t)=>{"use strict";t.d(s,{et:()=>l,supabase:()=>r});var i=t(5157);let a=process.env.NEXT_PUBLIC_SUPABASE_URL||process.env.SUPABASE_URL||"",n=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_ANON_KEY||"",o=null;if(a&&n)try{o=(0,i.eI)(a,n,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}})}catch(e){console.warn("Failed to create Supabase client:",e)}else o=(0,i.eI)("https://placeholder.supabase.co","placeholder-key",{auth:{autoRefreshToken:!1,persistSession:!1,detectSessionInUrl:!1}});let r=o;async function l(e){if(!r||!process.env.NEXT_PUBLIC_SUPABASE_URL)return null;try{let{data:s,error:t}=await r.from("profiles").select("role, email").eq("id",e).single();if(t)throw t;return s}catch{return null}}},2865:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n,metadata:()=>a});var i=t(9510);let a={title:"The Five Edges — Ledger Leadership",description:"Each edge cuts ambiguity in a specific direction. Reality, Obligation, Continuity, Margin, Reconciliation."};function n(){return i.jsx("div",{dangerouslySetInnerHTML:{__html:`
    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <a href="/" class="logo">
                <span class="logo-symbol">⚖</span>
                <span class="logo-text">Ledger Leadership</span>
            </a>
            
            <div class="nav-links">
                <a href="/">Home</a>
                <a href="/edges" class="active">The Five Edges</a>
                <a href="/practice">Practice</a>
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
            <h1 class="page-title">The Five Edges</h1>
            <p class="page-subtitle">Each edge cuts ambiguity in a specific direction. They are tools, not concepts.</p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="about-content">
        <div class="container-narrow">
            <div class="intro-box">
                <p>
                    These edges are not sequential. Any conversation can enter through any edge. 
                    <strong>Mastery is knowing which edge to apply when.</strong>
                </p>
                <p>
                    If it didn't occur in the world, it doesn't exist in the ledger. 
                    Each edge below forces that reckoning in a different dimension.
                </p>
            </div>
            
            <!-- Edge 1: Reality -->
            <div class="edge-section">
                <div class="edge-header">
                    <div class="edge-number">1</div>
                    <h2 class="edge-title">Reality Edge</h2>
                </div>
                
                <div class="edge-question-main">
                    <p>"What actually happened?"</p>
                </div>
                
                <div class="edge-clarification">
                    <h4>What this is NOT asking</h4>
                    <div class="not-list">
                        <span class="not-item">Not why it happened</span>
                        <span class="not-item">Not who caused it</span>
                        <span class="not-item">Not what we hoped</span>
                        <span class="not-item">Not what we planned</span>
                    </div>
                </div>
                
                <div class="edge-power">
                    <h4>This edge kills</h4>
                    <ul class="power-list">
                        <li>Performative alignment — where everyone nods but no one agrees</li>
                        <li>Retrospective storytelling — rewriting history to match the narrative</li>
                        <li>Status-based truth — where the highest-paid person's version wins</li>
                    </ul>
                </div>
                
                <div class="edge-diagnostic">
                    <h4>How you know it's dull</h4>
                    <p>Different people in the same meeting leave with different understandings of what was decided. Reports describe what should have happened, not what did.</p>
                </div>
                
                <div class="edge-example">
                    <h4>Example moment</h4>
                    <p>"Before we discuss solutions—what specifically occurred? Not interpretations. Events."</p>
                </div>
            </div>
            
            <!-- Edge 2: Obligation -->
            <div class="edge-section">
                <div class="edge-header">
                    <div class="edge-number">2</div>
                    <h2 class="edge-title">Obligation Edge</h2>
                </div>
                
                <div class="edge-question-main">
                    <p>"Who carries the consequence when this fails?"</p>
                </div>
                
                <div class="edge-clarification">
                    <h4>What this is NOT asking</h4>
                    <div class="not-list">
                        <span class="not-item">Not ownership charts</span>
                        <span class="not-item">Not job titles</span>
                        <span class="not-item">Not who's "responsible"</span>
                        <span class="not-item">Not org chart lines</span>
                    </div>
                </div>
                
                <div class="edge-power">
                    <h4>This edge exposes</h4>
                    <ul class="power-list">
                        <li>Orphaned decisions — choices that belong to no one</li>
                        <li>Soft authority — people with titles but no real power</li>
                        <li>Responsibility diffusion — "everyone owns it" means no one does</li>
                    </ul>
                </div>
                
                <div class="edge-diagnostic">
                    <h4>How you know it's dull</h4>
                    <p>When something fails, there's a scramble to figure out who should have caught it. Accountability conversations happen after the fact, not before.</p>
                </div>
                
                <div class="edge-example">
                    <h4>Example moment</h4>
                    <p>"If this doesn't work, whose problem does it become? Name the person, not the team."</p>
                </div>
            </div>
            
            <!-- Edge 3: Continuity -->
            <div class="edge-section">
                <div class="edge-header">
                    <div class="edge-number">3</div>
                    <h2 class="edge-title">Continuity Edge</h2>
                </div>
                
                <div class="edge-question-main">
                    <p>"What must persist for this to keep working tomorrow?"</p>
                </div>
                
                <div class="edge-clarification">
                    <h4>What this is NOT asking</h4>
                    <div class="not-list">
                        <span class="not-item">Not success today</span>
                        <span class="not-item">Not heroics</span>
                        <span class="not-item">Not one-time effort</span>
                        <span class="not-item">Not "we'll figure it out"</span>
                    </div>
                </div>
                
                <div class="edge-power">
                    <h4>This edge cuts through</h4>
                    <ul class="power-list">
                        <li>Burnout cultures — where success depends on unsustainable effort</li>
                        <li>Fragile excellence — outcomes that collapse when one person leaves</li>
                        <li>"We'll figure it out later" thinking — deferred system design</li>
                    </ul>
                </div>
                
                <div class="edge-diagnostic">
                    <h4>How you know it's dull</h4>
                    <p>The same crisis recurs every quarter. Success stories can't be repeated by different people. Vacation and sick days create emergencies.</p>
                </div>
                
                <div class="edge-example">
                    <h4>Example moment</h4>
                    <p>"If the person who built this left tomorrow, what breaks? What's not written down?"</p>
                </div>
            </div>
            
            <!-- Edge 4: Margin -->
            <div class="edge-section">
                <div class="edge-header">
                    <div class="edge-number">4</div>
                    <h2 class="edge-title">Margin Edge</h2>
                </div>
                
                <div class="edge-question-main">
                    <p>"How close are we to failure right now?"</p>
                </div>
                
                <div class="edge-clarification">
                    <h4>What this is NOT asking</h4>
                    <div class="not-list">
                        <span class="not-item">Not optimism</span>
                        <span class="not-item">Not confidence</span>
                        <span class="not-item">Not what we hope</span>
                        <span class="not-item">Not best-case scenario</span>
                    </div>
                </div>
                
                <div class="edge-power">
                    <h4>This edge destroys</h4>
                    <ul class="power-list">
                        <li>False resilience — "we've always made it work" without examining how close it was</li>
                        <li>Overcommitment — saying yes without understanding the buffer consumed</li>
                        <li>Silent risk stacking — small risks accumulating unnoticed</li>
                    </ul>
                </div>
                
                <div class="edge-diagnostic">
                    <h4>How you know it's dull</h4>
                    <p>"Surprises" happen regularly. Small delays cascade into major problems. There's no slack in the system—everything runs at capacity.</p>
                </div>
                
                <div class="edge-example">
                    <h4>Example moment</h4>
                    <p>"What's our buffer if one thing goes wrong? Not two things—one. Do we have any margin?"</p>
                </div>
            </div>
            
            <!-- Edge 5: Reconciliation -->
            <div class="edge-section">
                <div class="edge-header">
                    <div class="edge-number">5</div>
                    <h2 class="edge-title">Reconciliation Edge</h2>
                </div>
                
                <div class="edge-question-main">
                    <p>"What are we pretending balances that doesn't?"</p>
                </div>
                
                <div class="edge-clarification">
                    <h4>What this is asking</h4>
                    <div class="not-list">
                        <span class="not-item">The unspoken gaps</span>
                        <span class="not-item">The agreed-upon fictions</span>
                        <span class="not-item">The residue from decisions</span>
                        <span class="not-item">The debt from meetings</span>
                    </div>
                </div>
                
                <div class="edge-power">
                    <h4>This edge forces</h4>
                    <ul class="power-list">
                        <li>Naming the gap — saying out loud what everyone suspects</li>
                        <li>Cooling organizational fever — slowing down when motion has become a substitute for progress</li>
                        <li>Truth before motion — requiring clarity before action</li>
                    </ul>
                </div>
                
                <div class="edge-diagnostic">
                    <h4>How you know it's dull</h4>
                    <p>Everyone knows there's a problem, but it's never on the agenda. Meetings end with vague next steps that no one follows up on. The same issues resurface in different language.</p>
                </div>
                
                <div class="edge-example">
                    <h4>Example moment</h4>
                    <p>"What's the thing we're not saying in this room? The gap everyone sees but no one names?"</p>
                </div>
            </div>
            
            <!-- Synthesis -->
            <div class="synthesis-section">
                <h2>When All Five Edges Are Sharp</h2>
                <p>Debate collapses. Politics starve. Clarity accelerates.</p>
                <p>No one has to win. <strong>Reality already has.</strong></p>
            </div>
            
            <!-- Relationships -->
            <div class="relationships-box">
                <h3>How the Edges Relate</h3>
                <ul>
                    <li>They're not sequential—any conversation can enter through any edge</li>
                    <li>One dull edge often masks another (unclear reality hides unclear obligation)</li>
                    <li>Sharpening one edge often reveals where others have dulled</li>
                    <li>In crisis, start with Reality. In planning, start with Continuity. In conflict, start with Reconciliation.</li>
                </ul>
            </div>
            
            <!-- CTA -->
            <div class="cta-section">
                <p style="color: var(--color-text-light); margin-bottom: 1.5rem;">Ready to apply these? The Practice page shows exactly how to use each edge in real moments.</p>
                <div class="cta-buttons">
                    <a href="/practice" class="btn btn-primary">See the Practice</a>
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
`}})}},3817:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r,metadata:()=>o});var i=t(9510);t(5023);var a=t(8570);let n=(0,a.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#AuthProvider`);(0,a.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#useAuth`);let o={title:"Ledger Leadership — Structural Diagnostics for Organizations Under Pressure",description:"Two books. One gap. What's claimed and what's true. Structural diagnostics—reading both ledgers clearly, across portfolio, across context.",icons:{icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚖️</text></svg>'}};function r({children:e}){return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap",rel:"stylesheet"})]}),i.jsx("body",{children:i.jsx(n,{children:e})})]})}},5023:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),i=s.X(0,[372],()=>t(1181));module.exports=i})();