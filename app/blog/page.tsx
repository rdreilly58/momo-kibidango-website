import Link from 'next/link'

const blogPosts = [
  {
    slug: 'introducing-momo-kibidango',
    title: 'Introducing momo-kibidango: 2x Faster LLM Inference',
    excerpt: 'Today we\'re excited to announce momo-kibidango v1.0.0, bringing Google Research\'s pyramid speculative decoding to OpenClaw users everywhere.',
    date: '2026-03-19',
    author: 'ReillyDesignStudio',
    readTime: '5 min read',
  },
  {
    slug: 'how-pyramid-decoding-works',
    title: 'How Pyramid Speculative Decoding Works',
    excerpt: 'A technical deep-dive into the 3-model architecture that powers momo-kibidango\'s 2x speedup.',
    date: '2026-03-18',
    author: 'ReillyDesignStudio',
    readTime: '8 min read',
  },
  {
    slug: 'performance-analysis',
    title: 'Performance Analysis: Benchmarks & Trade-offs',
    excerpt: 'Detailed benchmarks across different hardware configurations and workloads, plus tips for optimization.',
    date: '2026-03-17',
    author: 'ReillyDesignStudio',
    readTime: '10 min read',
  },
  {
    slug: 'getting-started-tutorial',
    title: 'Getting Started with momo-kibidango',
    excerpt: 'A step-by-step tutorial to get you up and running with accelerated inference in minutes.',
    date: '2026-03-16',
    author: 'ReillyDesignStudio',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-peach-500 transition-colors mb-2">
                {post.title}
              </h2>
            </Link>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            
            <Link
              href={`/blog/${post.slug}`}
              className="text-peach-500 hover:text-peach-600 font-medium inline-flex items-center"
            >
              Read more
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}