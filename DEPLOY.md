# 🚀 Deploy to Vercel - Quick Guide

## Your Website is Ready!

**GitHub:** https://github.com/kapilthakare-cyberpunk/pnz-portfolio

---

## Method 1: Vercel Dashboard (Recommended - 2 minutes)

### Step 1: Go to Vercel
1. Open: https://vercel.com/new
2. Login with GitHub (recommended) or email

### Step 2: Import Repository
1. Click "Import Git Repository"
2. Find: `kapilthakare-cyberpunk/pnz-portfolio`
3. Click "Import"

### Step 3: Deploy
1. Keep default settings
2. Click "Deploy"
3. Wait 1-2 minutes
4. **Done!** 🎉

### Step 4: Get Your Live URL
After deployment:
- You'll see: "Congratulations!"
- URL: `pnz-portfolio-xxx.vercel.app`
- Click "Visit" to see your site!

---

## Method 2: Drag & Drop (No Git Needed)

### Step 1: Build Website
```bash
cd /Users/kapil-homeserver/pnz-portfolio
npm run build
```

This creates a `out/` folder with your static site.

### Step 2: Deploy to Vercel
1. Go to: https://vercel.com/new
2. Click "Add New" → "Project"
3. Scroll down → "Deploy these templates instead"
4. Choose "Static Site"
5. Drag & drop the `out/` folder
6. Click "Deploy"

---

## Method 3: Vercel CLI (If you have permissions)

### Install Vercel
```bash
# Try with sudo if needed
sudo npm i -g vercel
```

### Deploy
```bash
cd /Users/kapil-homeserver/pnz-portfolio
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? pnz-portfolio
# - Directory? ./
# - Override settings? N

# After first deploy:
vercel --prod
```

---

## After Deployment

### Your Site Will Be Live At:
- `pnz-portfolio.vercel.app` (or custom name)
- Free SSL (HTTPS)
- Global CDN
- Auto-deploys on git push

### Connect Custom Domain (Optional)
1. Buy domain (Namecheap, GoDaddy)
2. Vercel Dashboard → Project Settings → Domains
3. Add your domain
4. Update DNS records (Vercel shows you what to add)
5. Free SSL auto-enabled!

---

## Update Your Site

### With Git (Automatic)
```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel auto-deploys!
```

### Manual Update
```bash
# Build and deploy
npm run build
vercel --prod
```

---

## Share Your Live Site

Once deployed, share with:
- Telegram: Send the vercel.app link
- WhatsApp: Share directly
- Social Media: Post the URL

**Example:** `https://pnz-portfolio.vercel.app`

---

## Troubleshooting

### Build Fails
```bash
# Check for errors
npm run build

# Fix any TypeScript errors
npm run lint
```

### Deployment Issues
1. Check Vercel dashboard for errors
2. Look at build logs
3. Verify `package.json` scripts

### Site Not Loading
1. Wait 2-3 minutes after deploy
2. Hard refresh: Cmd+Shift+R
3. Check Vercel deployment status

---

## Next Steps After Deployment

1. ✅ Website is live!
2. ✅ Share the link
3. ⏳ Setup Cloudflare Tunnel for OpenClaw
4. ⏳ Update Android app with remote URL
5. ⏳ Add custom domain (optional)

---

## Quick Commands Reference

```bash
# Local development
npm run dev          # http://localhost:3000

# Build for production
npm run build

# Deploy
vercel              # Preview
vercel --prod       # Production
```

---

**Ready to deploy! Just go to vercel.com/new 🚀**
