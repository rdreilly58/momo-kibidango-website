# Diagrams for Blog Posts

## Architecture Diagram (ASCII Art)

```
┌─────────────────────────── Pyramid Speculative Decoding ───────────────────────────┐
│                                                                                     │
│  Input Context                                                                      │
│      ↓                                                                              │
│  ┌─────────────┐       ┌──────────────┐       ┌────────────────┐                  │
│  │ Draft Model │  →    │   Qualifier  │  →    │  Target Model  │                  │
│  │    (1B)     │       │     (3B)     │       │      (7B)      │                  │
│  └─────────────┘       └──────────────┘       └────────────────┘                  │
│         ↓                      ↓                        ↓                          │
│   Generate 8 tokens      Filter tokens         Verify final tokens                 │
│   @ 125 tok/s           Keep top 85%           Accept 90% of good                 │
│                              ↓                          ↓                          │
│                         ┌─────────────────────────────────┐                        │
│                         │  Combined Acceptance: 76.5%     │                        │
│                         │  Overall Speedup: 1.97x         │                        │
│                         └─────────────────────────────────┘                        │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## Performance Comparison Chart

```
Tokens per Second Comparison
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Baseline (Single Model):
████████████▌ 12.5 tok/s

2-Model Speculative:
████████████████████████ 24.0 tok/s (1.92x)

3-Model Pyramid (momo-kibidango):
████████████████████████▌ 24.6 tok/s (1.97x)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
0        10        20        30 tokens/second
```

## Memory Usage Breakdown

```
Memory Allocation (3-Model Configuration) - Total: 11.6 GB
┌─────────────────────────────────────────────────────┐
│ Draft Model (4-bit)     ▓░░░░░░░░░░  0.8 GB        │
│ Qualifier Model         ▓▓▓▓▓▓░░░░░  5.2 GB        │
│ Target Model (partial)  ▓▓▓▓░░░░░░░  3.1 GB        │
│ Shared Embeddings       ▓░░░░░░░░░░  0.6 GB        │
│ KV Cache                ▓░░░░░░░░░░  1.2 GB        │
│ Runtime Buffers         ▓░░░░░░░░░░  0.7 GB        │
└─────────────────────────────────────────────────────┘
```

## Token Flow Visualization

```
Token Generation Flow
─────────────────────────────────────────────────

Step 1: Draft Generation (60ms)
Context → [Draft] → "The weather today is sunny and warm"
                    ┌─┬─┬─┬─┬─┬─┬─┬─┐
                    │1│2│3│4│5│6│7│8│ (8 draft tokens)
                    └─┴─┴─┴─┴─┴─┴─┴─┘

Step 2: Qualification (40ms)
                    ┌─┬─┬─┬─┬─┬─┬─┐
[Qualifier] →       │✓│✓│✓│✓│✓│✓│✗│ (85% pass rate)
                    └─┴─┴─┴─┴─┴─┴─┘

Step 3: Verification (100ms)
                    ┌─┬─┬─┬─┬─┬─┐
[Target] →          │✓│✓│✓│✓│✓│✗│ (90% of qualified)
                    └─┴─┴─┴─┴─┴─┘

Final Output: "The weather today is sunny" (5 tokens accepted)
Total Time: 200ms for 5 tokens = 40ms/token (2x faster!)
```

## Speedup by Task Type

```
Performance Gains Across Different Tasks
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Simple Q&A       ████████████████████████  2.15x
Creative Writing ████████████████████████  2.05x  
Code Generation  ██████████████████████    1.88x
Math Reasoning   █████████████████████     1.82x

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1.0x    1.5x    2.0x    2.5x
```

## Acceptance Rate Distribution

```
Token Acceptance Rates by Stage
────────────────────────────────────────

Stage 1 (Draft → Qualifier):
0%   ████████████████████████████  85%  100%
     │└─ Reject ─┘└─── Accept ───┘│

Stage 2 (Qualifier → Target):  
0%   █████████████████████████████  90%  100%
     │└─ Reject ─┘└──── Accept ────┘│

Combined (Overall):
0%   ██████████████████████  76.5%  100%
     │└── Reject ──┘└─── Accept ───┘│
```

## Cost Savings Visualization

```
Monthly Cost Comparison (1M tokens/day)
─────────────────────────────────────────

Cloud APIs:
GPT-4       ████████████████████  $900/mo
Claude      ████████████          $600/mo

Local Inference:
Baseline    ████                  $0/mo + slow
momo-kib    ████                  $0/mo + fast ⚡

─────────────────────────────────────────
$0        $300       $600       $900
```

## Time Savings Calculator

```
Daily Time Savings with momo-kibidango
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you use LLMs for...
                     Baseline → momo-kibidango
1 hour/day:          60 min  →  30.5 min  (Save 29.5 min)
2 hours/day:         120 min →  61 min    (Save 59 min)
3 hours/day:         180 min →  91.5 min  (Save 88.5 min)

Monthly savings at 3 hrs/day: 44.25 hours
Yearly savings: 531 hours (66 work days!)
```

## Installation Progress Bar

```
momo-kibidango Setup Progress
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[████████████████████████] Cloning repository ✓
[████████████████████████] Installing deps ✓  
[████████████░░░░░░░░░░░░] Downloading models... (65%)
                           └─ Draft model ✓
                           └─ Qualifier model ✓
                           └─ Target model... (downloading)

Total time: ~5 minutes on 100 Mbps connection
```

## Feature Comparison Table

```
┌─────────────────────┬──────────┬──────────┬───────────┐
│ Feature             │ Baseline │ 2-Model  │ momo-kib  │
├─────────────────────┼──────────┼──────────┼───────────┤
│ Speed               │ 1.0x     │ 1.92x    │ 1.97x     │
│ Memory Usage        │ 7.8 GB   │ 11.1 GB  │ 11.6 GB   │
│ Quality Loss        │ 0%       │ 0%       │ 0%        │
│ Acceptance Rate     │ N/A      │ 74.6%    │ 76.5%     │
│ Setup Complexity    │ None     │ Medium   │ Easy      │
│ Fallback Support    │ N/A      │ Basic    │ Advanced  │
└─────────────────────┴──────────┴──────────┴───────────┘
```

These diagrams can be embedded directly in the MDX blog posts to visualize key concepts and make the technical content more accessible.