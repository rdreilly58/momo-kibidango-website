import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function RoadmapPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Development Roadmap</h1>
          
          <p className="text-xl text-gray-600 mb-12">
            The journey from research paper to production-ready tool, and what's coming next.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Phase 1 */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-8 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2"></div>
              <div className="ml-20">
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Phase 1: Research Implementation</h2>
                  <span className="ml-3 px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-gray-600 mb-3">January 2026</p>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Studied Google Research paper</li>
                  <li>✅ Implemented core pyramid algorithm</li>
                  <li>✅ Initial performance validation</li>
                  <li>✅ Proof of concept on M3 hardware</li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-8 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2"></div>
              <div className="ml-20">
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Phase 2: 2-Model System</h2>
                  <span className="ml-3 px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-gray-600 mb-3">February 2026</p>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Built traditional 2-model speculative decoding</li>
                  <li>✅ Achieved 1.5x speedup baseline</li>
                  <li>✅ Integrated with OpenClaw</li>
                  <li>✅ Memory optimization</li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-8 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2"></div>
              <div className="ml-20">
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Phase 3: 3-Model Pyramid</h2>
                  <span className="ml-3 px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-gray-600 mb-3">March 2026</p>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Added intermediate verification tier</li>
                  <li>✅ Achieved 1.97x speedup</li>
                  <li>✅ Smart KV cache sharing</li>
                  <li>✅ Graceful fallback system</li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-8 w-4 h-4 bg-green-500 rounded-full -translate-x-1/2"></div>
              <div className="ml-20">
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Phase 4: Production Ready</h2>
                  <span className="ml-3 px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    v1.0.0 Released
                  </span>
                </div>
                <p className="text-gray-600 mb-3">March 19, 2026</p>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Prometheus metrics integration</li>
                  <li>✅ Grafana dashboards</li>
                  <li>✅ Comprehensive error handling</li>
                  <li>✅ Documentation and tutorials</li>
                  <li>✅ Public release</li>
                </ul>
              </div>
            </div>

            {/* Future: Q2 2026 */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2"></div>
              <div className="ml-20">
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Q2 2026: Extended Model Support</h2>
                  <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    In Progress
                  </span>
                </div>
                <p className="text-gray-600 mb-3">April - June 2026</p>
                <ul className="space-y-2 text-gray-600">
                  <li>🔄 Support for Llama, Mistral, and Qwen models</li>
                  <li>🔄 Custom model configuration</li>
                  <li>🔄 Automatic tier selection</li>
                  <li>⏳ Cross-model family cascades</li>
                </ul>
              </div>
            </div>

            {/* Future: Q3 2026 */}
            <div className="relative flex items-start mb-12">
              <div className="absolute left-8 w-4 h-4 bg-gray-300 rounded-full -translate-x-1/2"></div>
              <div className="ml-20">
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Q3 2026: Performance Optimizations</h2>
                  <span className="ml-3 px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Planned
                  </span>
                </div>
                <p className="text-gray-600 mb-3">July - September 2026</p>
                <ul className="space-y-2 text-gray-600">
                  <li>⏳ Neural Engine acceleration</li>
                  <li>⏳ Dynamic batch sizing</li>
                  <li>⏳ 4-model pyramid experiments</li>
                  <li>⏳ Target: 3x speedup</li>
                </ul>
              </div>
            </div>

            {/* Future: Q4 2026 */}
            <div className="relative flex items-start">
              <div className="absolute left-8 w-4 h-4 bg-gray-300 rounded-full -translate-x-1/2"></div>
              <div className="ml-20">
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-bold text-gray-900">Q4 2026: Enterprise Features</h2>
                  <span className="ml-3 px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Planned
                  </span>
                </div>
                <p className="text-gray-600 mb-3">October - December 2026</p>
                <ul className="space-y-2 text-gray-600">
                  <li>⏳ Multi-GPU support</li>
                  <li>⏳ Distributed inference</li>
                  <li>⏳ Enterprise monitoring</li>
                  <li>⏳ SLA guarantees</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-16 bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Status Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Completed</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                <span className="text-gray-600">Planned</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✅</span>
                <span className="text-gray-600">Done</span>
              </div>
            </div>
          </div>

          {/* Community Input */}
          <div className="mt-12 bg-peach-50 border border-peach-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-peach-900 mb-2">Shape the Future</h3>
            <p className="text-peach-800">
              Have ideas for momo-kibidango? We'd love to hear them! Join the discussion on{' '}
              <a href="https://github.com/rdreilly58/momo-kibidango/discussions" target="_blank" className="text-peach-700 hover:text-peach-900 font-medium underline">
                GitHub Discussions
              </a>{' '}
              or share your use cases in our{' '}
              <a href="#" className="text-peach-700 hover:text-peach-900 font-medium underline">
                Discord community
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}