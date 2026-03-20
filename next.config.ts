import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
};

export default withMDX(nextConfig);