3:I[4707,[],""]
4:I[36423,[],""]
5:I[14362,["115","static/chunks/115-96b3e7c5ab771e5a.js","185","static/chunks/app/layout-dcdf508117a51d0a.js"],"AuthProvider"]
2:T2123,
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
0:["KZ_fcccHMlxiWgRwxx2g7",[[["",{"children":["contact",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",{"children":["contact",{"children":["__PAGE__",{},[["$L1",["$","div",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],null],null],null]},[null,["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children","contact","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/242ec21570d0bef0.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap","rel":"stylesheet"}]]}],["$","body",null,{"children":["$","$L5",null,{"children":["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}]}]}]]}]],null],null],["$L6",null]]]]
6:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Contact — Ledger Leadership"}],["$","meta","3",{"name":"description","content":"Get in touch. Questions, field notes, podcast inquiries, or just want to talk about the discipline."}],["$","link","4",{"rel":"icon","href":"data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><text y=\".9em\" font-size=\"90\">⚖️</text></svg>"}]]
1:null
