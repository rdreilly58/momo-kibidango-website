'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const docPages = [
  { href: '/docs', title: 'Overview', exact: true },
  { href: '/docs/getting-started', title: 'Getting Started' },
  { href: '/docs/architecture', title: 'Architecture' },
  { href: '/docs/installation', title: 'Installation' },
  { href: '/docs/configuration', title: 'Configuration' },
  { href: '/docs/benchmarks', title: 'Benchmarks' },
  { href: '/docs/faq', title: 'FAQ' },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 border-r border-gray-200 py-6 px-4">
          <nav>
            <h3 className="font-semibold text-gray-900 mb-4">Documentation</h3>
            <ul className="space-y-1">
              {docPages.map((page) => {
                const isActive = page.exact 
                  ? pathname === page.href 
                  : pathname.startsWith(page.href)
                
                return (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-peach-100 text-peach-700'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {page.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-8 py-12 max-w-4xl mx-auto">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}