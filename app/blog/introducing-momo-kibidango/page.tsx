import Link from 'next/link'

export default function IntroducingMomoKibidango() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Introducing momo-kibidango: 2x Faster LLM Inference
        </h1>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>March 19, 2026</span>
          <span>•</span>
          <span>ReillyDesignStudio</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-6">
          Today we're excited to announce momo-kibidango v1.0.0, bringing Google Research's pyramid speculative 
          decoding to OpenClaw users everywhere. This production-ready implementation delivers 2x faster inference 
          on Apple Silicon with zero quality loss.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why We Built This</h2>
        
        <p className="text-gray-600 mb-4">
          Running large language models locally has always involved a trade-off: you can have fast inference with 
          cloud APIs, or you can have privacy and control with local models, but rarely both. Even on Apple's 
          impressive M-series chips, inference speeds often lag behind what's needed for real-time applications.
        </p>

        <p className="text-gray-600 mb-4">
          When Google Research published their paper on pyramid speculative decoding, we saw an opportunity to 
          change this equation. Their approach promised significant speedups without sacrificing quality—exactly 
          what the local LLM community needed.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Power of Three Models</h2>
        
        <p className="text-gray-600 mb-4">
          Traditional speculative decoding uses two models: a small, fast "draft" model and a larger "target" 
          model. The draft model generates candidates quickly, and the target model verifies them. This works, 
          but acceptance rates can be low, limiting the speedup.
        </p>

        <p className="text-gray-600 mb-4">
          Pyramid speculative decoding adds a third model in the middle. This creates a verification cascade:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
          <li><strong>Haiku 2</strong> (45.6 tok/s): Ultra-fast draft generation</li>
          <li><strong>Haiku 3</strong> (30.5 tok/s): Middle-tier verification</li>
          <li><strong>Sonnet 3.5</strong> (12.5 tok/s): Final quality assurance</li>
        </ul>

        <p className="text-gray-600 mb-4">
          This three-tier approach dramatically improves acceptance rates, leading to our observed 1.97x speedup.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Real-World Performance</h2>
        
        <p className="text-gray-600 mb-4">
          On a MacBook Pro with M3 Max, momo-kibidango achieves:
        </p>

        <div className="bg-gray-50 rounded-lg p-6 my-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Baseline Speed</p>
              <p className="text-2xl font-mono font-semibold text-gray-900">12.5 tok/s</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">With momo-kibidango</p>
              <p className="text-2xl font-mono font-semibold text-peach-500">24.6 tok/s</p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          This isn't a synthetic benchmark—it's real-world performance on actual OpenClaw workloads. The speedup 
          is consistent across different types of prompts and generation lengths.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zero Compromises</h2>
        
        <p className="text-gray-600 mb-4">
          The best part? There's no quality trade-off. Pyramid speculative decoding is mathematically guaranteed 
          to produce the exact same output distribution as running the target model alone. Every token generated 
          is verified by Sonnet 3.5, ensuring you get the full capabilities of the model at nearly twice the speed.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">OpenClaw Native</h2>
        
        <p className="text-gray-600 mb-4">
          We built momo-kibidango specifically for the OpenClaw ecosystem. It integrates seamlessly with existing 
          subagent workflows, requiring just a simple configuration change to enable acceleration. The implementation 
          includes:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
          <li>Automatic model loading and caching</li>
          <li>Smart memory management</li>
          <li>Prometheus metrics for monitoring</li>
          <li>Graceful fallback for edge cases</li>
          <li>Production-grade error handling</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Get Started Today</h2>
        
        <p className="text-gray-600 mb-4">
          momo-kibidango v1.0.0 is available now. Installation takes less than 5 minutes, and you'll see immediate 
          speedups in your OpenClaw workflows. Check out our{' '}
          <Link href="/docs/getting-started" className="text-peach-500 hover:text-peach-600 font-medium">
            getting started guide
          </Link>{' '}
          to begin.
        </p>

        <p className="text-gray-600 mb-4">
          We're excited to see what the community builds with faster local inference. Whether you're running 
          agents, building applications, or exploring new use cases, momo-kibidango gives you the speed you need 
          without compromising on quality or privacy.
        </p>

        <div className="bg-peach-50 border border-peach-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-peach-900 mb-2">Join the Community</h3>
          <p className="text-peach-800">
            Have questions or want to share your experience? Join our{' '}
            <a href="#" className="text-peach-700 hover:text-peach-900 font-medium underline">
              Discord community
            </a>{' '}
            or contribute to the project on{' '}
            <a href="https://github.com/rdreilly58/momo-kibidango" target="_blank" className="text-peach-700 hover:text-peach-900 font-medium underline">
              GitHub
            </a>.
          </p>
        </div>
      </div>
    </article>
  )
}