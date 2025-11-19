import { Dumbbell, CalendarCheck2, BarChart3, Smartphone, Sparkles } from 'lucide-react';

const features = [
  { icon: Dumbbell, title: 'Workout Builder', desc: 'Create routines with sets, reps, tempo, and rest. Save templates to reuse.' },
  { icon: CalendarCheck2, title: 'Smart Planner', desc: 'Auto-schedule workouts and deload weeks with adaptive recommendations.' },
  { icon: BarChart3, title: 'Progress Charts', desc: 'Visualize volume, PRs, and body metrics with clean charts.' },
  { icon: Smartphone, title: 'Cross-Device', desc: 'Responsive UI with offline-first support for mobile logging.' },
  { icon: Sparkles, title: 'AI Hints', desc: 'Get suggestions for progression schemes and accessory swaps.' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Built for your best training</h2>
        <p className="mt-3 text-blue-100/80 text-center max-w-2xl mx-auto">Everything you need to plan, log, and improve — designed to feel fast and fun.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:bg-white/[0.08] transition">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-blue-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
