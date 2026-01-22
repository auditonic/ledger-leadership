import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Ledger Leadership',
  description: 'Get in touch. Questions, field notes, podcast inquiries, or just want to talk about the discipline.',
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
                messageDiv.textContent = payload.message || 'Thank you! Your message has been sent. We\'ll get back to you soon.';
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
` }} />
  );
}
