# 🚀 Deployment Guide

## GitHub Pages Deployment (Recommended)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it `phone-info-website`
4. Make it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Files
1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from the `phone-info-website` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Add commit message: "Initial commit - PhoneGuard website"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch
5. Click "Save"
6. Your site will be available at: `https://yourusername.github.io/phone-info-website`

## Netlify Deployment

### Option 1: Drag & Drop
1. Go to [Netlify](https://netlify.com)
2. Sign up/Login with GitHub
3. Drag the entire `phone-info-website` folder to the deploy area
4. Your site will be live instantly with a random URL
5. Click "Site settings" to customize the URL

### Option 2: Connect GitHub Repository
1. In Netlify dashboard, click "New site from Git"
2. Choose GitHub and authorize
3. Select your `phone-info-website` repository
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty)
5. Click "Deploy site"

## Vercel Deployment

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Deploy settings:
   - Framework Preset: Other
   - Root Directory: ./
6. Click "Deploy"

## Local Testing

### Using Python
```bash
cd phone-info-website
python -m http.server 8000
# Visit http://localhost:8000
```

### Using Node.js
```bash
cd phone-info-website
npx serve .
# Visit http://localhost:3000
```

### Using PHP
```bash
cd phone-info-website
php -S localhost:8000
# Visit http://localhost:8000
```

## Custom Domain Setup

### GitHub Pages
1. In repository Settings > Pages
2. Add your custom domain
3. Create CNAME record pointing to `yourusername.github.io`
4. Enable HTTPS (automatic)

### Netlify
1. In Site Settings > Domain management
2. Add custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic)

## Troubleshooting

### Common Issues
- **404 Error**: Make sure `index.html` is in the root directory
- **Styles not loading**: Check file paths in HTML
- **JavaScript not working**: Check browser console for errors
- **Mobile not responsive**: Test with browser dev tools

### Performance Tips
- Compress images before uploading
- Minify CSS/JS for production
- Enable gzip compression on server
- Use CDN for external resources

## Analytics Setup

### Google Analytics
1. Create Google Analytics account
2. Add tracking code to `<head>` section of `index.html`:
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

### GitHub Pages Analytics
- Available in repository Settings > Pages
- Shows page views and referrers
- No setup required

## Security Considerations

### HTTPS
- GitHub Pages, Netlify, and Vercel provide free SSL certificates
- Always use HTTPS in production
- Update any hardcoded HTTP links

### Content Security Policy
Add to `<head>` section:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com;">
```

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor for broken links
- Update security information
- Add new apps to database

### Backup Strategy
- Use Git for version control
- Regular commits to GitHub
- Consider multiple hosting providers
- Backup custom domain settings

---

**Need Help?**
- Check the [README.md](README.md) for detailed documentation
- Open an issue on GitHub for bugs
- Contact: info@phoneguard.com
