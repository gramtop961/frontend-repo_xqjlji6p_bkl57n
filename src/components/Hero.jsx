import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Track. Plan. Progress.
          </h1>
          <p className="mt-4 text-blue-100/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            An interactive fitness dashboard that helps you build workouts, log sets and reps, and visualize your progress across devices.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#planner" className="inline-flex justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/25 hover:brightness-110 transition">Start Planning</a>
            <a href="#features" className="inline-flex justify-center rounded-lg bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition">Explore Features</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative h-[380px] sm:h-[460px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-cyan-400/10 blur-2xl" />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center text-blue-100/70 text-sm">
        Scroll to explore
      </div>
    </section>
  );
}
