'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const benchmarkData = {
  'M1 Pro': {
    baseline: 10.2,
    twoModel: 15.3,
    pyramid: 20.1,
  },
  'M2 Max': {
    baseline: 11.8,
    twoModel: 17.7,
    pyramid: 23.3,
  },
  'M3 Max': {
    baseline: 12.5,
    twoModel: 18.7,
    pyramid: 24.6,
  },
  'M4 Pro': {
    baseline: 13.1,
    twoModel: 19.6,
    pyramid: 25.8,
  },
}

export default function BenchmarksPage() {
  const [selectedChip, setSelectedChip] = useState('M3 Max')
  const data = benchmarkData[selectedChip as keyof typeof benchmarkData]
  
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Performance Benchmarks</h1>
          
          <p className="text-xl text-gray-600 mb-12">
            Explore momo-kibidango's performance across different Apple Silicon chips and configurations.
          </p>

          {/* Chip Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Your Chip
            </label>
            <select
              value={selectedChip}
              onChange={(e) => setSelectedChip(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-peach-500 focus:border-peach-500"
            >
              {Object.keys(benchmarkData).map((chip) => (
                <option key={chip} value={chip}>{chip}</option>
              ))}
            </select>
          </div>

          {/* Performance Comparison */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Comparison</h2>
            
            <div className="space-y-6">
              {/* Baseline */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Baseline (Sonnet 3.5 only)</span>
                  <span className="font-mono text-gray-900">{data.baseline} tok/s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gray-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(data.baseline / 30) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* 2-Model */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">2-Model Speculative</span>
                  <span className="font-mono text-gray-900">{data.twoModel} tok/s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-accent-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(data.twoModel / 30) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Pyramid */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Pyramid (momo-kibidango)</span>
                  <span className="font-mono font-semibold text-peach-500">{data.pyramid} tok/s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-peach-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(data.pyramid / 30) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">vs Baseline</p>
                <p className="text-2xl font-bold text-peach-500">
                  {((data.pyramid / data.baseline) - 1).toFixed(2).replace('0.', '+')}x
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">vs 2-Model</p>
                <p className="text-2xl font-bold text-accent-600">
                  {((data.pyramid / data.twoModel) - 1).toFixed(2).replace('0.', '+')}x
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Speedup</p>
                <p className="text-2xl font-bold text-gray-900">
                  {(data.pyramid / data.baseline).toFixed(2)}x
                </p>
              </div>
            </div>
          </div>

          {/* Acceptance Rates */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance Rates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-peach-500 mb-2">89%</div>
                <p className="text-gray-600">Tier 1 → Tier 2</p>
                <p className="text-sm text-gray-500 mt-1">Haiku 2 → Haiku 3</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-peach-500 mb-2">76%</div>
                <p className="text-gray-600">Tier 2 → Tier 3</p>
                <p className="text-sm text-gray-500 mt-1">Haiku 3 → Sonnet 3.5</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-600 mb-2">68%</div>
                <p className="text-gray-600">Overall</p>
                <p className="text-sm text-gray-500 mt-1">End-to-end acceptance</p>
              </div>
            </div>

            <p className="text-gray-600 mt-6 text-sm text-center">
              Higher acceptance rates mean fewer rejections and faster overall inference.
            </p>
          </div>

          {/* Memory Usage */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Memory Usage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Model Sizes</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Haiku 2 (Tier 1)</span>
                    <span className="font-mono text-gray-900">2.3 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Haiku 3 (Tier 2)</span>
                    <span className="font-mono text-gray-900">3.8 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sonnet 3.5 (Tier 3)</span>
                    <span className="font-mono text-gray-900">4.9 GB</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="font-mono text-peach-500">11.6 GB</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Runtime Requirements</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minimum RAM</span>
                    <span className="font-mono text-gray-900">16 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recommended RAM</span>
                    <span className="font-mono text-gray-900">32 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peak Usage</span>
                    <span className="font-mono text-gray-900">13.2 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Disk Space</span>
                    <span className="font-mono text-gray-900">50 GB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Export Benchmark Data</h2>
            <p className="text-gray-600 mb-6">
              Download the complete benchmark dataset for your own analysis.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="button-secondary">
                Download JSON
              </button>
              <button className="button-secondary">
                Download CSV
              </button>
              <button className="button-secondary">
                View Raw Data
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}