# momo-kibidango Marketing Website

This is the official marketing website for [momo-kibidango](https://github.com/rdreilly58/momo-kibidango), a 3-model speculative decoding implementation for OpenClaw that achieves 2x faster LLM inference on Apple Silicon.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
momo-kibidango-website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── docs/              # Documentation pages
│   ├── blog/              # Blog posts
│   ├── benchmarks/        # Interactive benchmarks
│   ├── research/          # Research paper info
│   └── roadmap/           # Development roadmap
├── components/            # React components
│   ├── layout/           # Header, Footer
│   └── ui/               # Reusable UI components
├── content/              # MDX content
│   ├── blog/            # Blog post content
│   └── docs/            # Documentation content
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Design System

- **Primary Color:** Peach (#FF6B1A) - representing the 🍑 momo brand
- **Accent Color:** Tech Gray/Blue (#627D98)
- **Font:** Inter (sans-serif) + JetBrains Mono (code)
- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX for blog and docs

## 🌐 Deployment

The site is configured for deployment on Vercel:

1. Push to GitHub
2. Import repository to Vercel
3. Configure domain: momo-kibidango.dev
4. Deploy

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=https://momo-kibidango.dev
NEXT_PUBLIC_GA4_ID=your-ga4-id
NEXT_PUBLIC_DISCORD_INVITE=your-discord-invite
MAILCHIMP_API_KEY=your-mailchimp-key
MAILCHIMP_LIST_ID=your-list-id
```

## 📊 Analytics

Google Analytics 4 is integrated for tracking:
- Page views
- Button clicks
- Conversion events (GitHub visits, Discord joins)
- Performance metrics

## 🔍 SEO

- Meta tags configured for all pages
- OpenGraph and Twitter Card support
- Sitemap generation
- robots.txt configured
- Schema.org markup for rich snippets

## 📝 Content Management

### Adding Blog Posts

1. Create new file in `app/blog/[slug]/page.tsx`
2. Follow the existing post format
3. Add to blog index in `app/blog/page.tsx`

### Updating Docs

1. Add new pages to `app/docs/[section]/page.tsx`
2. Update sidebar navigation in `app/docs/layout.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Main Project:** [github.com/rdreilly58/momo-kibidango](https://github.com/rdreilly58/momo-kibidango)
- **Live Site:** [momo-kibidango.dev](https://momo-kibidango.dev)
- **Discord:** Coming soon
- **Research Paper:** [ArXiv Link](https://arxiv.org/)

---

Built with ❤️ by [ReillyDesignStudio](https://reillydesignstudio.com)