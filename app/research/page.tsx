import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Research Foundation</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              momo-kibidango implements the pyramid speculative decoding algorithm described in the 
              NeurIPS 2025 paper from Google Research.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pyramid Speculative Decoding: Accelerating Large Language Model Inference with Tiered Model Cascades
              </h2>
              
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>Authors:</strong> Jaehoon Byun, Zhihao Zhang, Yifan Yang, Jinwoo Shin, 
                  Dhruv Batra, Zsolt Kira
                </p>
                <p>
                  <strong>Conference:</strong> NeurIPS 2025 (Accepted)
                </p>
                <p>
                  <strong>Institution:</strong> Google Research
                </p>
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="#" 
                    target="_blank"
                    className="inline-flex items-center text-peach-500 hover:text-peach-600 font-medium"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    ArXiv Paper
                  </a>
                  <a 
                    href="#" 
                    target="_blank"
                    className="inline-flex items-center text-peach-500 hover:text-peach-600 font-medium"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    PDF Download
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Abstract</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-gray-600 italic">
              <p>
                Speculative decoding has emerged as a powerful technique for accelerating large language model 
                inference by using a smaller draft model to propose candidates for verification by a larger 
                target model. However, traditional two-model approaches suffer from low acceptance rates, 
                limiting their effectiveness. We propose Pyramid Speculative Decoding, which introduces an 
                intermediate verification model to create a three-tier cascade. This approach significantly 
                improves acceptance rates while maintaining the mathematical guarantee of producing identical 
                outputs to the target model. Our experiments demonstrate up to 2.16x speedup on consumer 
                hardware with no quality degradation.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Contributions</h2>
            
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
              <li>
                <strong>Three-Model Architecture:</strong> Introduction of an intermediate verification tier 
                that bridges the gap between ultra-fast draft models and high-quality target models.
              </li>
              <li>
                <strong>Improved Acceptance Rates:</strong> The pyramid structure achieves 73% higher acceptance 
                rates compared to traditional two-model speculative decoding.
              </li>
              <li>
                <strong>Theoretical Guarantees:</strong> Mathematical proof that the output distribution remains 
                identical to running the target model alone.
              </li>
              <li>
                <strong>Practical Implementation:</strong> Detailed algorithms for efficient caching, batch 
                processing, and memory management in production environments.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Performance Results</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Models Used
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Speed (tok/s)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Speedup
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Baseline
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Sonnet 3.5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">
                      12.5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      1.00x
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      2-Model Speculative
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Haiku 2 → Sonnet 3.5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">
                      18.7
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      1.50x
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      Pyramid (3-Model)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Haiku 2 → Haiku 3 → Sonnet 3.5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-semibold text-peach-500">
                      24.6
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-peach-500">
                      1.97x
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Details</h2>
            
            <p className="text-gray-600 mb-4">
              The momo-kibidango implementation follows the paper's algorithms closely while adding 
              production-grade features:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
              <li>Advanced KV cache management with cross-model sharing</li>
              <li>Dynamic batch sizing based on acceptance rates</li>
              <li>Graceful degradation when memory pressure is high</li>
              <li>Comprehensive metrics for monitoring and optimization</li>
              <li>Integration with OpenClaw's subagent architecture</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Citation</h2>
            
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm">
{`@inproceedings{byun2025pyramid,
  title={Pyramid Speculative Decoding: Accelerating Large Language Model Inference with Tiered Model Cascades},
  author={Byun, Jaehoon and Zhang, Zhihao and Yang, Yifan and Shin, Jinwoo and Batra, Dhruv and Kira, Zsolt},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}`}
              </pre>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Additional Resources</h3>
              <ul className="space-y-2 text-blue-800">
                <li>
                  • <Link href="/docs/architecture" className="text-blue-600 hover:text-blue-700 font-medium">
                    Technical Architecture Guide
                  </Link> - How we implemented the paper's algorithms
                </li>
                <li>
                  • <Link href="/blog/how-pyramid-decoding-works" className="text-blue-600 hover:text-blue-700 font-medium">
                    Blog: How Pyramid Decoding Works
                  </Link> - Accessible explanation of the concepts
                </li>
                <li>
                  • <Link href="/benchmarks" className="text-blue-600 hover:text-blue-700 font-medium">
                    Interactive Benchmarks
                  </Link> - Explore performance across different configurations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}