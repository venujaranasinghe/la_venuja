# Google Search Console Setup Guide

## Step 1: Access Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Sign in with your Google account

## Step 2: Add Your Property
1. Click "Add Property"
2. Choose "URL prefix" method
3. Enter your website URL: `https://la-venuja.vercel.app/`
4. Click "Continue"

## Step 3: Verify Ownership
You have several verification options. Here are the easiest:

### Option A: HTML Meta Tag (Recommended)
1. Google will provide an HTML meta tag like:
   `<meta name="google-site-verification" content="your-verification-code" />`
2. Add this to your website's head section
3. We'll help you add this to your layout.jsx file
4. Deploy your changes
5. Click "Verify" in Google Search Console

### Option B: HTML File Upload
1. Download the HTML verification file from Google
2. Upload it to your website's root directory
3. Make it accessible at: `https://la-venuja.vercel.app/[filename].html`
4. Click "Verify"

### Option C: DNS Verification (Advanced)
1. Add a TXT record to your domain's DNS
2. Use the value provided by Google
3. Wait for DNS propagation (can take up to 24 hours)
4. Click "Verify"

## Step 4: Submit Your Sitemap
Once verified:
1. In the left sidebar, click "Sitemaps"
2. Click "Add a new sitemap"
3. Enter: `sitemap.xml`
4. Click "Submit"

Your sitemap URL will be: `https://la-venuja.vercel.app/sitemap.xml`

## Step 5: Monitor Your Site
After setup, Google Search Console will provide:
- Search performance data
- Indexing status
- Mobile usability issues
- Core Web Vitals
- Manual actions (if any)

## Expected Timeline
- **Initial setup**: 5-10 minutes
- **First data**: 2-3 days
- **Full data**: 1-2 weeks

## Important URLs to Bookmark
- Sitemap: https://la-venuja.vercel.app/sitemap.xml
- Robots.txt: https://la-venuja.vercel.app/robots.txt
- Google Search Console: https://search.google.com/search-console/
