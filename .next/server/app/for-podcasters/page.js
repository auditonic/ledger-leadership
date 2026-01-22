(()=>{var e={};e.id=542,e.ids=[542],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3516:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(4394),s(3817),s(5866);var r=s(3191),a=s(8716),i=s(7922),o=s.n(i),n=s(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=["",{children:["for-podcasters",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4394)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/for-podcasters/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3817)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/for-podcasters/page.tsx"],u="/for-podcasters/page",p={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/for-podcasters/page",pathname:"/for-podcasters",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5548:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5265:(e,t,s)=>{Promise.resolve().then(s.bind(s,4001))},5303:()=>{},4001:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>n,a:()=>l});var r=s(326),a=s(7577),i=s(6208);s(2777);let o=(0,a.createContext)(void 0);function n({children:e}){let[t,s]=(0,a.useState)(null),[n,l]=(0,a.useState)(!0),c=async()=>{try{let e=await (0,i.cs)();s(e)}catch(e){console.error("Error refreshing user:",e),s(null)}finally{l(!1)}},d=async()=>{await (0,i.w7)(),s(null)};return r.jsx(o.Provider,{value:{user:t,loading:n,signOut:d,refreshUser:c},children:e})}function l(){let e=(0,a.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},6208:(e,t,s)=>{"use strict";s.d(t,{cs:()=>i,w7:()=>o,zB:()=>n});var r=s(2777);async function a(e){return(0,r.et)(e)}async function i(){let{data:{user:e},error:t}=await r.supabase.auth.getUser();if(t||!e)return null;try{let t=await a(e.id);return{id:e.id,email:e.email,profile:t}}catch{return{id:e.id,email:e.email,profile:null}}}async function o(){let{error:e}=await r.supabase.auth.signOut();if(e)throw e;window.location.href="/login"}async function n(e,t){let{data:s,error:a}=await r.supabase.auth.signInWithPassword({email:e,password:t});if(a)throw a;return s}},2777:(e,t,s)=>{"use strict";s.d(t,{et:()=>l,supabase:()=>n});var r=s(5157);let a=process.env.NEXT_PUBLIC_SUPABASE_URL||process.env.SUPABASE_URL||"",i=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_ANON_KEY||"",o=null;if(a&&i)try{o=(0,r.eI)(a,i,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}})}catch(e){console.warn("Failed to create Supabase client:",e)}else o=(0,r.eI)("https://placeholder.supabase.co","placeholder-key",{auth:{autoRefreshToken:!1,persistSession:!1,detectSessionInUrl:!1}});let n=o;async function l(e){if(!n||!process.env.NEXT_PUBLIC_SUPABASE_URL)return null;try{let{data:t,error:s}=await n.from("profiles").select("role, email").eq("id",e).single();if(s)throw s;return t}catch{return null}}},4394:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>a});var r=s(9510);let a={title:"For Podcasters — Ledger Leadership",description:"Interview Ledger Leadership. A conversation about why every system keeps a ledger—and what happens when leaders stop pretending otherwise."};function i(){return r.jsx("div",{dangerouslySetInnerHTML:{__html:`
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
                <a href="/for-podcasters" class="active">For Podcasters</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">Interview Ledger Leadership</h1>
            <p class="page-subtitle">A conversation about what happens when leaders stop pretending the ledger balances.</p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="about-content">
        <div class="container-narrow">
            <div class="main-content">
                <div class="section">
                    <h2>What This Conversation Is About</h2>
                    <p>
                        Every system keeps a ledger whether leaders acknowledge it or not. 
                        Promises vs. outcomes. Authority vs. accountability. Confidence vs. evidence.
                    </p>
                    <p>
                        Most leadership approaches work until they don't—collapsing under pressure 
                        because they rely on trust without audit, alignment without evidence, values without enforcement.
                    </p>
                    <p>
                        <strong>Ledger Leadership is different.</strong> It's an emerging discipline built for stress—because 
                        pressure doesn't create problems, it reveals accounting errors.
                    </p>
                    
                    <h2 style="margin-top: 2rem;">What We'd Explore</h2>
                    <ul class="talking-points">
                        <li>Why every system keeps a ledger—and what happens when leaders pretend otherwise</li>
                        <li>The five edges that cut through organizational ambiguity</li>
                        <li>Why most leadership models collapse under pressure (and what survives)</li>
                        <li>The single question that reorients power in any meeting</li>
                        <li>What this discipline refuses to do—and why that matters</li>
                    </ul>
                    
                    <div class="format-box">
                        <div class="format-label">Format</div>
                        <p class="format-text">
                            45-minute conversation. No prep required on your end—I'll walk through the thinking 
                            and you ask whatever comes up. We'll make it relevant to your specific audience.
                        </p>
                    </div>
                    
                    <div class="format-box">
                        <div class="format-label">Why Now</div>
                        <p class="format-text">
                            Every leadership model promises alignment. Few survive contact with pressure. 
                            Organizations are leaner, faster, and more fragile than ever. Your listeners 
                            need a discipline designed for reality, not aspirations.
                        </p>
                    </div>
                    
                    <h2 style="margin-top: 2rem;">Before We Talk</h2>
                    <p>
                        Want to get familiar first? The <a href="/edges" class="download-link">Five Edges page</a> 
                        explains the core mechanism (5 minutes to read).
                    </p>
                    <p>
                        Or just book a time. We'll make it work regardless.
                    </p>
                </div>
                
                <div class="sidebar">
                    <h2>Next Steps</h2>
                    <p style="font-size: 0.95rem;">
                        Pick a time that works. We'll handle the rest.
                    </p>
                    
                    <a href="https://calendly.com/[your-calendly-link]" class="cta-button">Check Availability</a>
                    
                    <div class="sidebar-divider">
                        <p style="font-size: 0.9rem;">
                            <strong>Prefer email first?</strong><br/>
                            No problem. Send a note to <strong>connect@ledgerleadership.com</strong> with your 
                            podcast name and audience size.
                        </p>
                    </div>
                    
                    <div class="sidebar-divider">
                        <p style="font-size: 0.85rem; margin-bottom: 0.75rem;"><strong>Quick Links</strong></p>
                        <ul class="sidebar-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/edges">The Five Edges</a></li>
                            <li><a href="/practice">Practice</a></li>
                            <li><a href="/field-notes">Field Notes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="quote-box">
                <p>"Leadership is not direction—it is the continuous reconciliation of reality, obligation, and consequence."</p>
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
                <p style="margin-bottom: 0.5rem;">Questions before scheduling? Reach out: connect@ledgerleadership.com</p>
                <p>&copy; 2025 Ledger Leadership. All rights reserved.</p>
            </div>
        </div>
    </footer>
`}})}},3817:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>o});var r=s(9510);s(5023);var a=s(8570);let i=(0,a.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#AuthProvider`);(0,a.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#useAuth`);let o={title:"Ledger Leadership — Structural Diagnostics for Organizations Under Pressure",description:"Two books. One gap. What's claimed and what's true. Structural diagnostics—reading both ledgers clearly, across portfolio, across context.",icons:{icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚖️</text></svg>'}};function n({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap",rel:"stylesheet"})]}),r.jsx("body",{children:r.jsx(i,{children:e})})]})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[372],()=>s(3516));module.exports=r})();