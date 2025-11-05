import { Rocket, Shield, Star } from 'lucide-react';

const features = [
  {
    title: 'Lightning-fast',
    desc: 'Optimized for performance with smooth 3D rendering and minimal layout shift.',
    Icon: Rocket,
  },
  {
    title: 'Accessible',
    desc: 'Thoughtful contrast, keyboard-friendly, and responsive across devices.',
    Icon: Shield,
  },
  {
    title: 'Aesthetic',
    desc: 'Modern gradients, subtle glassmorphism, and crisp typography out of the box.',
    Icon: Star,
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6 transition shadow-sm hover:shadow-md"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
