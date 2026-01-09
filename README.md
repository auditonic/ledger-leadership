# Ledger Leadership Website

**Tagline:** Balancing Reality, Accountable Delivery

A professional website for the Ledger Leadership methodology—the discipline of keeping organizations grounded in reality and accountable for results without accumulating hidden debt.

## 📦 Files Included

### Core Files
- `index.html` - Homepage with hero, stats, solution overview, principles preview
- `framework.html` - Detailed framework page with two-ledger system
- `manifesto.html` - Leadership North Star philosophy
- `about.html` - Origin story and approach
- `styles.css` - **Ledger Modern** design system (brightened palette)
- `script.js` - Form handling and smooth scroll functionality

### Additional Style Options (Optional)
- `style1-judicial.css` - Judicial Balance (charcoal & steel)
- `style2-ledger.css` - Accountant's Ledger (forest & cream)
- `style3-modern.css` - Modern Balance (indigo & warm gray)
- `style4-judicial-heritage.css` - Judicial Heritage (hybrid)
- `style5-ledger-modern.css` - Ledger Modern (same as styles.css)
- `index-with-selector.html` - Demo version with style switcher

## 🎨 Design System: Ledger Modern (Brightened)

### Color Palette
```css
Primary Colors:
--color-primary: #3a5d47        /* Forest-steel green */
--color-primary-light: #4a7159  /* Lighter forest */
--color-secondary: #6fa385      /* Sage green */
--color-accent: #8eb09a         /* Soft mint */

Text Colors:
--color-text: #2d3e34           /* Deep green-gray */
--color-text-light: #5a6d62     /* Medium green-gray */

Backgrounds:
--color-background: #fafbfa     /* Warm off-white */
--color-white: #ffffff          /* Pure white */
--color-border: #e6ebe7         /* Light gray-green */
```

### Typography
- **Display/Headings:** SF Pro Display (Apple system fonts)
- **Body Text:** SF Pro Text
- **Font Weights:** 550 (medium), 650 (semi-bold), 750 (bold)

### Design Characteristics
- **Feel:** Modern professional, open and breathable, contemporary clarity
- **Approach:** Heritage foundation with fresh execution
- **Border Radius:** 8-20px (moderate roundness)
- **Shadows:** Light and airy (0.07-0.12 opacity)
- **Transitions:** 0.28s cubic-bezier (smooth, Apple-like)

### Key Visual Elements
- **Navigation:** Sticky with 94% opacity blur backdrop
- **Hero:** Gradient background with subtle radial accent
- **Ledger Visual:** Stacked cards with accent bars and rounded corners
- **Solution Section:** Light sage gradient background (#4a7159 → #5a8469)
- **Cards:** Clean borders, subtle shadows, hover lift effects
- **Footer:** Gradient background, increased text visibility

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Drag and drop the entire folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Automatic HTTPS, global CDN, and continuous deployment
3. Free tier includes custom domains

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: GitHub Pages
1. Create a repository on GitHub
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access at: `https://[username].github.io/[repo-name]`

### Option 4: Traditional Hosting
Upload all files via FTP to any web host (Bluehost, SiteGround, etc.)

## 📧 Email Integration

The site includes a contact form that requires backend integration. Options:

### ConvertKit (Recommended - $29/mo)
```javascript
// In script.js, update the form submission URL:
fetch('https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email_address: formData.get('email'),
        first_name: formData.get('name')
    })
});
```

### Mailchimp
```javascript
fetch('https://YOURDOMAIN.us1.list-manage.com/subscribe/post-json?u=...', {
    method: 'POST',
    mode: 'no-cors',
    body: formData
});
```

### Custom Backend (SendGrid, AWS SES, etc.)
See the email integration guide in `script.js`

## 🔧 Customization

### Update Colors
Edit the `:root` variables in `styles.css`:
```css
:root {
    --color-primary: #3a5d47;  /* Your brand color */
    --color-secondary: #6fa385; /* Accent color */
}
```

### Update Content
- Homepage stats: Edit `.stat-card` sections in `index.html`
- Principles: Update `.principle-card` content
- Contact info: Modify footer in all HTML files

### Add Analytics
Add before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Responsive Breakpoints
- Desktop: 1024px and up
- Tablet: 768px - 1024px
- Mobile: 768px and below

## ⚡ Performance
- No external framework dependencies
- Minimal JavaScript (vanilla)
- Optimized CSS with transforms for animations
- Lazy-loading ready structure

## 🎯 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License
© 2025 Ledger Leadership. All rights reserved.

## 🤝 Support
For questions or customization needs, contact: jeff.burke@fourthpillar.com

---

**Next Steps:**
1. Download all files
2. Test locally by opening `index.html` in a browser
3. Deploy to your chosen platform
4. Connect email service
5. Add analytics tracking
6. Launch! 🚀
