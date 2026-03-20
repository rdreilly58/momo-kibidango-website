# Deployment Guide for momo-kibidango Website

## Option 1: Vercel (Recommended)

### Prerequisites
- Vercel account
- GitHub repository connected

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial website for momo-kibidango"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Configure project:
     - Framework: Next.js
     - Root Directory: ./ 
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Environment Variables**
   Add these in Vercel dashboard:
   - `NEXT_PUBLIC_GA4_ID` (optional)
   - `NEXT_PUBLIC_DISCORD_INVITE` (optional)

4. **Custom Domain**
   - Go to Project Settings → Domains
   - Add `momo-kibidango.dev`
   - Update DNS records at your registrar:
     ```
     Type: CNAME
     Name: @
     Value: cname.vercel-dns.com
     ```

### Deployment Command
```bash
# If using Vercel CLI
vercel --prod
```

## Option 2: GitHub Pages

### Setup

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Update next.config.ts**
   ```typescript
   const nextConfig = {
     output: 'export',
     basePath: process.env.NODE_ENV === 'production' ? '/momo-kibidango' : '',
     // ... other config
   }
   ```

4. **Deploy**
   ```bash
   npm run export
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## Option 3: Self-Hosted

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name momo-kibidango.dev;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### PM2 Process Manager

```bash
# Install PM2
npm install -g pm2

# Build the app
npm run build

# Start with PM2
pm2 start npm --name "momo-website" -- start

# Save PM2 config
pm2 save
pm2 startup
```

### Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t momo-website .
docker run -p 3000:3000 momo-website
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact form (if applicable)
- [ ] Check SEO meta tags
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring (e.g., Vercel Analytics)
- [ ] Configure error tracking (e.g., Sentry)

## Monitoring

### Vercel Analytics
Automatically included with Vercel deployment.

### Google Analytics
Configured via `NEXT_PUBLIC_GA4_ID` environment variable.

### Uptime Monitoring
Consider using:
- UptimeRobot
- Pingdom
- StatusCake

## SSL/TLS

- **Vercel**: Automatic SSL included
- **GitHub Pages**: Automatic with custom domains
- **Self-hosted**: Use Let's Encrypt with Certbot

## CDN Configuration

For better performance, consider:
- Cloudflare (free tier available)
- Vercel Edge Network (included)
- AWS CloudFront

## Troubleshooting

### Build Failures
- Check Node.js version (18+ required)
- Clear `.next` folder and rebuild
- Check for TypeScript errors: `npm run type-check`

### 404 Errors
- Verify `basePath` in next.config.ts
- Check routing configuration
- Ensure proper redirects are set up

### Performance Issues
- Enable image optimization
- Check bundle size: `npm run analyze`
- Use Lighthouse for audits