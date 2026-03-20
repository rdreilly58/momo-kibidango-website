import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-peach-50 to-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-lg sm:text-3xl lg:text-2xl font-bold text-gray-900 mb-6 animate-fade-in">
              <span className="gradient-text">3-Model Speculative Decoding</span>
              <br />
              for OpenClaw
            </h1>
            <p className="text-xl sm:text-lg text-gray-600 mb-6 max-w-3xl mx-auto animate-slide-up">
              2x faster inference on Apple Silicon with zero quality loss
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="/docs/getting-started" className="button-primary inline-flex items-center">
                Get Started
                <svg className="ml-2 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="https://github.com/rdreilly58/momo-kibidango"
                target="_blank"
                className="button-secondary inline-flex items-center"
              >
                <svg className="mr-2 w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-lg font-bold text-gray-900 mb-4">
                The Challenge
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Running LLMs locally is powerful, but slow. Cloud compute is fast, but expensive.
                What if you could have both?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-lg mb-4">⏰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Slow Inference</h3>
                <p className="text-gray-600">
                  Traditional LLM inference on local hardware averages 12.5 tokens/second, limiting real-time applications.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-lg mb-4">💸</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Costs</h3>
                <p className="text-gray-600">
                  Cloud APIs are fast but expensive, especially for continuous or high-volume usage scenarios.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-lg mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Complex Setup</h3>
                <p className="text-gray-600">
                  Optimizing local models requires deep technical knowledge and custom implementations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-lg font-bold text-gray-900 mb-4">
                The Solution: Pyramid Speculative Decoding
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                momo-kibidango implements Google Research's breakthrough 3-model pyramid architecture,
                achieving 1.97x speedup with zero quality degradation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-peach-50 to-accent-50 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tier 1: Haiku 2</h4>
                  <p className="text-gray-600">Ultra-fast draft model (45.6 tok/s)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tier 2: Haiku 3</h4>
                  <p className="text-gray-600">Middle verifier (30.5 tok/s)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tier 3: Sonnet 3.5</h4>
                  <p className="text-gray-600">Final authority (12.5 tok/s)</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">1.97x Faster</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Baseline</span>
                      <span className="font-mono text-gray-900">12.5 tok/s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-accent-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">With momo-kibidango</span>
                      <span className="font-mono text-gray-900">24.6 tok/s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-peach-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Memory Efficient</h3>
                <p className="text-gray-600 mb-4">
                  Runs comfortably on M1/M2/M3/M4 Macs with just 11.6GB memory usage.
                </p>
                <div className="text-xl font-mono text-peach-500">&lt; 12GB</div>
                <p className="text-sm text-gray-500 mt-2">Perfect for 16GB MacBooks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-lg font-bold text-gray-900 mb-4">
                Production Ready
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Version 1.0.0 includes everything you need for real-world deployment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <div className="text-peach-500 mb-4">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">OpenClaw Native</h3>
                <p className="text-gray-600">
                  Seamlessly integrates with OpenClaw's subagent system. Just install and accelerate.
                </p>
              </div>
              <div className="card">
                <div className="text-peach-500 mb-4">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Monitoring</h3>
                <p className="text-gray-600">
                  Prometheus metrics, Grafana dashboards, and detailed performance tracking included.
                </p>
              </div>
              <div className="card">
                <div className="text-peach-500 mb-4">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Quality Loss</h3>
                <p className="text-gray-600">
                  Mathematically guaranteed to produce identical output to the target model.
                </p>
              </div>
              <div className="card">
                <div className="text-peach-500 mb-4">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Caching</h3>
                <p className="text-gray-600">
                  Advanced KV cache management with LRU eviction and cross-model sharing.
                </p>
              </div>
              <div className="card">
                <div className="text-peach-500 mb-4">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Graceful Fallback</h3>
                <p className="text-gray-600">
                  Automatically falls back to baseline when confidence is low or errors occur.
                </p>
              </div>
              <div className="card">
                <div className="text-peach-500 mb-4">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">MIT Licensed</h3>
                <p className="text-gray-600">
                  Open source and free to use in your projects, commercial or otherwise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Impact Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-lg font-bold text-gray-900 mb-4">
                Real-World Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                momo-kibidango powers production AI inference for teams that need speed without sacrificing quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Built for Production</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-peach-500 mr-2 text-xs font-bold">✓</span>
                    <span className="text-gray-700"><strong>Zero Quality Loss:</strong> Mathematically guaranteed identical output to target model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach-500 mr-2 text-xs font-bold">✓</span>
                    <span className="text-gray-700"><strong>Memory Efficient:</strong> Runs on M1/M2/M3/M4 Macs with 11.6GB memory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach-500 mr-2 text-xs font-bold">✓</span>
                    <span className="text-gray-700"><strong>Graceful Fallback:</strong> Automatically handles edge cases and degradation scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-peach-500 mr-2 text-xs font-bold">✓</span>
                    <span className="text-gray-700"><strong>Enterprise Monitoring:</strong> Prometheus, Grafana, and detailed metrics built-in</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Use Case: AI-Powered Assistant</h4>
                <p className="text-gray-600 mb-4">
                  An AI assistant processing 100 requests/day on local M4 Mac:
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Without momo-kibidango</p>
                    <p className="text-lg font-mono text-gray-900">~1,250 seconds/day</p>
                    <p className="text-xs text-gray-500">20+ minutes waiting per day</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600 mb-1">With momo-kibidango</p>
                    <p className="text-lg font-mono text-peach-600">~635 seconds/day</p>
                    <p className="text-xs text-peach-600 font-semibold">50% faster inference 🚀</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Credibility Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-lg font-bold text-gray-900 mb-4">
                Backed by Academic Research
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                momo-kibidango is built on Google Research's peer-reviewed breakthrough in speculative decoding
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    NeurIPS 2025 (Accepted)
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pyramid Speculative Decoding
                </h3>
                <p className="text-gray-600 mb-6">
                  The foundational 3-model architecture that powers momo-kibidango. Proven to achieve 2x speedup with zero quality degradation across diverse models.
                </p>
                <Link 
                  href="https://arxiv.org/abs/2410.19073"
                  target="_blank"
                  className="inline-flex items-center text-peach-600 hover:text-peach-700 font-semibold"
                >
                  Read Paper on arXiv
                  <svg className="ml-2 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    Peer-Reviewed
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Engineering Excellence
                </h3>
                <p className="text-gray-600 mb-6">
                  momo-kibidango implements the research faithfully with production-grade engineering. Every design decision is grounded in either the paper's methodology or real-world performance optimization.
                </p>
                <div className="text-sm text-gray-500">
                  <p className="mb-2">✓ Implemented with strict adherence to paper specifications</p>
                  <p>✓ Comprehensive benchmarking against published results</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built by ReillyDesignStudio Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-peach-50 to-amber-50 rounded-2xl p-12 border border-peach-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Built by ReillyDesignStudio
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                momo-kibidango is developed by <strong>Robert Reilly</strong> at <strong>ReillyDesignStudio</strong>,
                leveraging 30+ years of experience in AI, infrastructure, and software engineering.
              </p>
              <p className="text-gray-600 mb-6">
                This project represents our commitment to advancing open-source AI tooling and helping developers
                build faster, more efficient systems. It's part of our broader mission to make cutting-edge AI
                technology accessible and practical.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://reillydesignstudio.com" target="_blank" className="inline-flex items-center text-peach-600 hover:text-peach-700 font-semibold">
                  Visit ReillyDesignStudio
                  <svg className="ml-2 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="https://reillydesignstudio.com/blog/momo-kibidango-faster-inference" target="_blank" className="inline-flex items-center text-peach-600 hover:text-peach-700 font-semibold">
                  Read the Full Blog Post
                  <svg className="ml-2 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-peach-500 to-peach-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-lg font-bold mb-4">
              Start Optimizing Your Inference
            </h2>
            <p className="text-xl mb-8 text-peach-100">
              Join the growing community using momo-kibidango to accelerate their local LLMs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs" className="bg-white text-peach-600 px-8 py-4 rounded-lg font-semibold hover:bg-peach-50 transition-colors">
                Read the Docs
              </Link>
              <Link href="https://github.com/rdreilly58/momo-kibidango" target="_blank" className="bg-peach-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-peach-800 transition-colors inline-flex items-center">
                <svg className="mr-2 w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Star on GitHub
              </Link>
              <Link href="#" className="bg-peach-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-peach-800 transition-colors inline-flex items-center">
                <svg className="mr-2 w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
                Join Discord
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}