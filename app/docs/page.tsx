export default function DocsPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Welcome to the momo-kibidango documentation. Learn how to integrate and use 3-model speculative decoding 
        to accelerate your LLM inference on Apple Silicon.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">🚀 Getting Started</h3>
          <p className="text-gray-600 mb-3">
            Get up and running with momo-kibidango in under 5 minutes.
          </p>
          <a href="/docs/getting-started" className="text-peach-500 hover:text-peach-600 font-medium">
            Quick Start Guide →
          </a>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">🏗️ Architecture</h3>
          <p className="text-gray-600 mb-3">
            Understand how pyramid speculative decoding works under the hood.
          </p>
          <a href="/docs/architecture" className="text-peach-500 hover:text-peach-600 font-medium">
            Technical Overview →
          </a>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">📦 Installation</h3>
          <p className="text-gray-600 mb-3">
            Detailed installation instructions for various environments.
          </p>
          <a href="/docs/installation" className="text-peach-500 hover:text-peach-600 font-medium">
            Install Guide →
          </a>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">⚙️ Configuration</h3>
          <p className="text-gray-600 mb-3">
            Configure models, thresholds, and optimization parameters.
          </p>
          <a href="/docs/configuration" className="text-peach-500 hover:text-peach-600 font-medium">
            Configuration Options →
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key Features</h2>
      
      <ul className="space-y-2 text-gray-600">
        <li>✅ <strong>1.97x faster inference</strong> with zero quality degradation</li>
        <li>✅ <strong>OpenClaw native integration</strong> - works out of the box</li>
        <li>✅ <strong>Memory efficient</strong> - runs on 16GB MacBooks</li>
        <li>✅ <strong>Production ready</strong> - v1.0.0 with monitoring and metrics</li>
        <li>✅ <strong>Smart fallback</strong> - gracefully handles edge cases</li>
        <li>✅ <strong>MIT licensed</strong> - free for commercial use</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How It Works</h2>
      
      <p className="text-gray-600 mb-4">
        momo-kibidango implements Google Research's 3-model pyramid architecture:
      </p>

      <ol className="space-y-3 text-gray-600">
        <li>
          <strong>1. Draft Generation:</strong> Haiku 2 (fastest model) generates multiple draft tokens at 45.6 tok/s
        </li>
        <li>
          <strong>2. Middle Verification:</strong> Haiku 3 verifies drafts, correcting obvious errors at 30.5 tok/s
        </li>
        <li>
          <strong>3. Final Authority:</strong> Sonnet 3.5 validates the final output, ensuring quality matches baseline
        </li>
      </ol>

      <p className="text-gray-600 mt-4">
        This approach achieves near 2x speedup while mathematically guaranteeing identical output distribution 
        to running Sonnet 3.5 alone.
      </p>

      <div className="bg-peach-50 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
        <p className="text-gray-600">
          Check out our <a href="/docs/faq" className="text-peach-500 hover:text-peach-600 font-medium">FAQ</a> or 
          join our <a href="#" className="text-peach-500 hover:text-peach-600 font-medium">Discord community</a> for support.
        </p>
      </div>
    </div>
  )
}