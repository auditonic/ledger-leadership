(()=>{var e={};e.id=327,e.ids=[327],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8099:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),s(1225),s(3817),s(5866);var a=s(3191),o=s(8716),n=s(7922),i=s.n(n),r=s(5231),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);s.d(t,l);let c=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1225)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/contact/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3817)),"/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/app/contact/page.tsx"],u="/contact/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5548:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5265:(e,t,s)=>{Promise.resolve().then(s.bind(s,4001))},5303:()=>{},4001:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>r,a:()=>l});var a=s(326),o=s(7577),n=s(6208);s(2777);let i=(0,o.createContext)(void 0);function r({children:e}){let[t,s]=(0,o.useState)(null),[r,l]=(0,o.useState)(!0),c=async()=>{try{let e=await (0,n.cs)();s(e)}catch(e){console.error("Error refreshing user:",e),s(null)}finally{l(!1)}},d=async()=>{await (0,n.w7)(),s(null)};return a.jsx(i.Provider,{value:{user:t,loading:r,signOut:d,refreshUser:c},children:e})}function l(){let e=(0,o.useContext)(i);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},6208:(e,t,s)=>{"use strict";s.d(t,{cs:()=>n,w7:()=>i,zB:()=>r});var a=s(2777);async function o(e){return(0,a.et)(e)}async function n(){let{data:{user:e},error:t}=await a.supabase.auth.getUser();if(t||!e)return null;try{let t=await o(e.id);return{id:e.id,email:e.email,profile:t}}catch{return{id:e.id,email:e.email,profile:null}}}async function i(){let{error:e}=await a.supabase.auth.signOut();if(e)throw e;window.location.href="/login"}async function r(e,t){let{data:s,error:o}=await a.supabase.auth.signInWithPassword({email:e,password:t});if(o)throw o;return s}},2777:(e,t,s)=>{"use strict";s.d(t,{et:()=>l,supabase:()=>r});var a=s(5157);let o=process.env.NEXT_PUBLIC_SUPABASE_URL||process.env.SUPABASE_URL||"",n=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||process.env.SUPABASE_ANON_KEY||"",i=null;if(o&&n)try{i=(0,a.eI)(o,n,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}})}catch(e){console.warn("Failed to create Supabase client:",e)}else i=(0,a.eI)("https://placeholder.supabase.co","placeholder-key",{auth:{autoRefreshToken:!1,persistSession:!1,detectSessionInUrl:!1}});let r=i;async function l(e){if(!r||!process.env.NEXT_PUBLIC_SUPABASE_URL)return null;try{let{data:t,error:s}=await r.from("profiles").select("role, email").eq("id",e).single();if(s)throw s;return t}catch{return null}}},1225:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>o});var a=s(9510);let o={title:"Contact — Ledger Leadership",description:"Get in touch. Questions, field notes, podcast inquiries, or just want to talk about the discipline."};function n(){return a.jsx("div",{dangerouslySetInnerHTML:{__html:`
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
                <a href="/about">About</a>
                <a href="/contact" class="active">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title">Get in Touch</h1>
            <p class="page-subtitle">Questions, field notes, or just want to talk about the discipline.</p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="about-content">
        <div class="container-narrow">
            <div class="contact-options">
                <div class="contact-card">
                    <div class="contact-icon">💌</div>
                    <div class="contact-title">Email</div>
                    <div class="contact-description">
                        Questions, thoughts, field notes, or just want to say hello.
                    </div>
                    <a href="mailto:connect@ledgerleadership.com" class="contact-link">connect@ledgerleadership.com</a>
                </div>
                
                <div class="contact-card">
                    <div class="contact-icon">📅</div>
                    <div class="contact-title">Schedule a Call</div>
                    <div class="contact-description">
                        15 minutes to explore how this applies to your situation.
                    </div>
                    <a href="https://calendly.com/[your-calendly-link]" class="contact-link">Pick a Time</a>
                </div>
            </div>
            
            <div class="reasons-section">
                <h2>What to reach out about:</h2>
                <ul class="reasons-list">
                    <li>You want to have this conversation on your podcast</li>
                    <li>You've tested an edge and want to share what happened</li>
                    <li>You're applying the discipline and hit something unexpected</li>
                    <li>You have questions about how this works</li>
                    <li>You want to challenge or build on the thinking</li>
                    <li>You're interested in future training or certification</li>
                </ul>
            </div>
            
            <div class="response-note">
                <p><strong>Response time:</strong> Emails get read and responded to within 24 hours on weekdays. If you've tested something and have a field note, that goes to the front of the queue.</p>
            </div>
            
            <div class="special-note">
                <p>If you've tested any of this and want to contribute a field note, you can also <a href="/contribute">submit directly here</a>.</p>
            </div>

            <!-- Contact Form -->
            <div class="form-container" style="margin-top: 2rem;">
                <h2 style="color: var(--color-primary); margin-bottom: 1rem;">Send a Message</h2>
                <form id="contactForm" onsubmit="handleContactSubmit(event)">
                    <div class="form-group">
                        <label for="contact-name">Name *</label>
                        <input type="text" id="contact-name" name="name" required placeholder="Your name">
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-email">Email *</label>
                        <input type="email" id="contact-email" name="email" required placeholder="your@email.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-subject">Subject</label>
                        <input type="text" id="contact-subject" name="subject" placeholder="Optional subject">
                    </div>
                    
                    <div class="form-group">
                        <label for="contact-message">Message *</label>
                        <textarea id="contact-message" name="message" required rows="6" placeholder="Your message..."></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">Send Message</button>
                    
                    <div id="contactMessage" class="form-message" style="display: none; margin-top: 1rem; padding: 1rem; border-radius: 8px;"></div>
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
                <p style="margin-bottom: 0.5rem;">This discipline is meant to be tested, questioned, and improved.</p>
                <p>&copy; 2025 Ledger Leadership. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        async function handleContactSubmit(event) {
            event.preventDefault();

            const form = document.getElementById('contactForm');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            const messageDiv = document.getElementById('contactMessage');
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
            messageDiv.style.display = 'none';

            try {
                const resp = await fetch('/.netlify/functions/contact-submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const payload = await resp.json().catch(() => ({}));

                if (!resp.ok || !payload.ok) {
                    const msg = (payload && (payload.error || payload.details)) ? (payload.error || payload.details) : 'Submission failed.';
                    messageDiv.className = 'form-message error';
                    messageDiv.textContent = 'Could not send message. ' + msg;
                    messageDiv.style.display = 'block';
                    return;
                }

                messageDiv.className = 'form-message success';
                messageDiv.textContent = payload.message || 'Thank you! Your message has been sent. We'll get back to you soon.';
                messageDiv.style.display = 'block';
                form.reset();
                window.scrollTo({ top: 0, behavior: 'smooth' });

            } catch (err) {
                messageDiv.className = 'form-message error';
                messageDiv.textContent = 'Could not send message. Please try again.';
                messageDiv.style.display = 'block';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        }
    </script>
`}})}},3817:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r,metadata:()=>i});var a=s(9510);s(5023);var o=s(8570);let n=(0,o.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#AuthProvider`);(0,o.createProxy)(String.raw`/Users/jeffburke/Documents/GitHub/LedgerLeadership/src/contexts/AuthContext.tsx#useAuth`);let i={title:"Ledger Leadership — Structural Diagnostics for Organizations Under Pressure",description:"Two books. One gap. What's claimed and what's true. Structural diagnostics—reading both ledgers clearly, across portfolio, across context.",icons:{icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚖️</text></svg>'}};function r({children:e}){return(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[a.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),a.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),a.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap",rel:"stylesheet"})]}),a.jsx("body",{children:a.jsx(n,{children:e})})]})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[372],()=>s(8099));module.exports=a})();