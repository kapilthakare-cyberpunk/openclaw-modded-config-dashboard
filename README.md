# 🌐 PNZ Portfolio - Next.js Website

**Primes and Zooms** - Complete OpenClaw AI Setup Showcase

---

## 🚀 Quick Start

### Development
```bash
cd /Users/kapil-homeserver/pnz-portfolio
npm run dev
```

Open: http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
pnz-portfolio/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page (landing page)
│       └── globals.css     # Global styles
├── public/                  # Static assets
├── package.json
└── README.md
```

---

## 🎨 Features

### Home Page Sections
1. **Navigation** - Fixed header with mobile menu
2. **Hero** - Eye-catching intro with stats
3. **Features** - 6 key features grid
4. **Setup** - Hardware & software stack
5. **Dashboard** - Platform performance preview
6. **Contact** - Social links

### Design
- Dark theme (slate/blue gradient)
- Responsive (mobile-first)
- Smooth animations
- Modern UI components

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React + Radix Icons
- **Animations:** Framer Motion
- **Hosting:** Vercel (free)

---

## 📦 Installation

Already installed! But if you need to reinstall:

```bash
cd pnz-portfolio
npm install
```

Dependencies:
- next
- react
- react-dom
- tailwindcss
- lucide-react
- framer-motion
- @radix-ui/react-icons

---

## 🚀 Deploy to Vercel (FREE)

### Option 1: Vercel CLI
```bash
# Install Vercel
npm i -g vercel

# Deploy
vercel

# Follow prompts
# Site will be live at: pnz-portfolio-xxx.vercel.app
```

### Option 2: Vercel Dashboard
1. Go to: https://vercel.com/new
2. Import from GitHub
3. Select `pnz-portfolio` repository
4. Click Deploy
5. Done! Site is live

### Custom Domain (Optional)
1. Buy domain (Namecheap, GoDaddy)
2. Go to Vercel Dashboard
3. Project Settings → Domains
4. Add your domain
5. Update DNS records
6. Free SSL included!

---

## 📝 Pages to Add

### Currently Live:
- ✅ Home (Landing Page)

### Coming Soon:
- `/setup` - Detailed OpenClaw configuration
- `/dashboard` - Social media dashboard view
- `/projects` - Project showcase
- `/blog` - Guides and tutorials
- `/contact` - Contact form

---

## 🎯 Customization

### Change Colors
Edit `src/app/page.tsx`:
```typescript
// Hero gradient
bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950

// Button colors
bg-blue-600 hover:bg-blue-700
```

### Update Content
Edit text in `src/app/page.tsx`:
- Company name
- Descriptions
- Stats
- Features
- Links

### Add Your Logo
1. Add logo to `public/logo.png`
2. Replace the PNZ div in navigation:
```typescript
<img src="/logo.png" alt="PNZ Logo" className="w-10 h-10" />
```

---

## 📊 Stats

The landing page includes live stats:
- 99.9% Uptime
- 9 Platforms
- 4 AI Models
- 24/7 Availability

Update these in the `stats` array in `page.tsx`.

---

## 🔗 Social Links

Update in Contact section:
- Telegram: https://t.me/primesandzooms
- WhatsApp: https://wa.me/919503275757
- Add more in footer

---

## 💡 Tips

### Performance
- Images optimized automatically
- CSS purged in production
- Fast by default with Next.js

### SEO
- Update metadata in `layout.tsx`
- Add Open Graph tags
- Create sitemap.xml

### Analytics (Optional)
```bash
# Add Vercel Analytics
npm install @vercel/analytics
```

Then add to `layout.tsx`:
```typescript
import { Analytics } from "@vercel/analytics/react"

// In body
<Analytics />
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

---

## 📚 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Deployment:** https://vercel.com/docs
- **Lucide Icons:** https://lucide.dev/icons

---

## 🎉 Next Steps

1. **Test locally:** `npm run dev`
2. **Customize content:** Edit `page.tsx`
3. **Deploy:** `vercel` or via dashboard
4. **Add more pages:** Setup, Dashboard, Projects
5. **Add analytics:** Vercel or Google Analytics
6. **Connect domain:** Optional custom domain

---

**Built with ❤️ for Primes and Zooms**
