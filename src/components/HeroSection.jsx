import Spline from '@splinetool/react-spline';
import { Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop gradient accents that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 -top-24 opacity-60">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-400/30 to-cyan-300/30 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-400/20 via-purple-400/20 to-blue-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-3 py-1 text-xs text-zinc-700 dark:text-zinc-200">
              <Zap className="h-3.5 w-3.5 text-indigo-500" />
              Interactive • Playful • Modern
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Make your portfolio pop with a 3D hero
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Blend delightful 3D interactions with a clean, responsive layout. Built for creators who want their work to feel alive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 font-medium shadow-sm hover:opacity-95 transition">
                Start Exploring
              </a>
              <a href="#features" className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 px-6 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition">
                See Features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <span>No code changes needed</span>
              <span className="h-1 w-1 rounded-full bg-zinc-400" />
              <span>Fully responsive</span>
            </div>
          </div>

          {/* Right: 3D Scene */}
          <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden h-[420px] md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
