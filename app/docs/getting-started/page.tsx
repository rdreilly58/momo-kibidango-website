'use client'

import { useState } from 'react'

export default function GettingStartedPage() {
  const [copied, setCopied] = useState('')

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Get momo-kibidango running in your OpenClaw environment in under 5 minutes.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prerequisites</h2>
      
      <ul className="space-y-2 text-gray-600">
        <li>✓ macOS with Apple Silicon (M1/M2/M3/M4)</li>
        <li>✓ OpenClaw v1.12.0 or higher</li>
        <li>✓ 16GB RAM minimum (32GB recommended)</li>
        <li>✓ 50GB free disk space</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Install</h2>
      
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Terminal</span>
          <button
            onClick={() => copyToClipboard('pip install momo-kibidango', 'install')}
            className="text-sm text-gray-400 hover:text-white"
          >
            {copied === 'install' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="text-sm overflow-x-auto">
          <code>pip install momo-kibidango</code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">OpenClaw Integration</h2>
      
      <p className="text-gray-600 mb-4">
        Add momo-kibidango to your OpenClaw configuration:
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">~/.openclaw/config.json</span>
          <button
            onClick={() => copyToClipboard(`{
  "models": {
    "accelerated": {
      "provider": "momo-kibidango",
      "base_model": "sonnet-3.5",
      "draft_models": ["haiku-2", "haiku-3"],
      "device": "mps"
    }
  }
}`, 'config')}
            className="text-sm text-gray-400 hover:text-white"
          >
            {copied === 'config' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="text-sm overflow-x-auto">
          <code>{`{
  "models": {
    "accelerated": {
      "provider": "momo-kibidango",
      "base_model": "sonnet-3.5",
      "draft_models": ["haiku-2", "haiku-3"],
      "device": "mps"
    }
  }
}`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Installation</h2>
      
      <p className="text-gray-600 mb-4">
        Test that momo-kibidango is working correctly:
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Terminal</span>
          <button
            onClick={() => copyToClipboard('momo-kibidango test', 'test')}
            className="text-sm text-gray-400 hover:text-white"
          >
            {copied === 'test' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="text-sm overflow-x-auto">
          <code>momo-kibidango test</code>
        </pre>
      </div>

      <p className="text-gray-600 mb-4">
        Expected output:
      </p>

      <div className="bg-gray-100 text-gray-800 rounded-lg p-4 my-4">
        <pre className="text-sm overflow-x-auto">
          <code>{`✅ Models loaded successfully
✅ Draft model: haiku-2 (45.6 tok/s)
✅ Middle model: haiku-3 (30.5 tok/s)  
✅ Target model: sonnet-3.5 (12.5 tok/s)
✅ Acceleration: 1.97x (24.6 tok/s effective)
✅ Memory usage: 11.6GB`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">First Run</h2>
      
      <p className="text-gray-600 mb-4">
        Use momo-kibidango with your OpenClaw subagents:
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Python</span>
          <button
            onClick={() => copyToClipboard(`from openclaw import spawn_subagent

# Automatically uses accelerated inference
result = spawn_subagent(
    task="Write a comprehensive analysis",
    model="accelerated"  # Uses momo-kibidango
)`, 'usage')}
            className="text-sm text-gray-400 hover:text-white"
          >
            {copied === 'usage' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="text-sm overflow-x-auto">
          <code>{`from openclaw import spawn_subagent

# Automatically uses accelerated inference
result = spawn_subagent(
    task="Write a comprehensive analysis",
    model="accelerated"  # Uses momo-kibidango
)`}</code>
        </pre>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Pro Tip</h3>
        <p className="text-blue-800">
          The first run will download and cache models (~15GB). This is a one-time operation. 
          Subsequent runs will start in under 10 seconds.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Monitor Performance</h2>
      
      <p className="text-gray-600 mb-4">
        View real-time metrics with the built-in dashboard:
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Terminal</span>
          <button
            onClick={() => copyToClipboard('momo-kibidango monitor', 'monitor')}
            className="text-sm text-gray-400 hover:text-white"
          >
            {copied === 'monitor' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="text-sm overflow-x-auto">
          <code>momo-kibidango monitor</code>
        </pre>
      </div>

      <p className="text-gray-600">
        This opens a web dashboard at <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:9090</code> showing:
      </p>

      <ul className="space-y-2 text-gray-600 mt-4">
        <li>• Token generation speed</li>
        <li>• Acceptance rates per model</li>
        <li>• Memory usage</li>
        <li>• Cache hit rates</li>
        <li>• Fallback statistics</li>
      </ul>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-green-900 mb-2">🎉 You're Ready!</h3>
        <p className="text-green-800">
          momo-kibidango is now accelerating your LLM inference. Check out the{' '}
          <a href="/docs/configuration" className="text-green-700 hover:text-green-900 font-medium underline">
            configuration guide
          </a>{' '}
          to fine-tune performance for your specific use case.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Next Steps</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/docs/architecture" className="card hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-gray-900 mb-2">Understand the Architecture</h3>
          <p className="text-gray-600 text-sm">
            Deep dive into how pyramid speculative decoding works.
          </p>
        </a>
        
        <a href="/docs/benchmarks" className="card hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-gray-900 mb-2">Run Benchmarks</h3>
          <p className="text-gray-600 text-sm">
            Test performance on your specific hardware and workloads.
          </p>
        </a>
      </div>
    </div>
  )
}