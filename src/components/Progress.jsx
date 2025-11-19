import { useMemo, useState, useEffect } from 'react';

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return w;
}

export default function Progress() {
  const width = useWindowWidth();
  const points = useMemo(() => {
    const data = [40, 42, 45, 47, 50, 54, 58, 60, 63, 67, 72, 75];
    const step = 100 / (data.length - 1);
    return data.map((v, i) => ({ x: i * step, y: 100 - ((v - 40) / (75 - 40)) * 100 }));
  }, []);

  return (
    <section id="progress" className="relative py-20 sm:py-24 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Progress overview</h2>
            <p className="mt-2 text-blue-100/80">Monthly estimated 1RM trend. The chart adapts to your screen size.</p>
          </div>
          <div className="text-blue-200/70 text-sm">Viewport: {width}px</div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
          <svg viewBox="0 0 100 60" className="w-full h-48 sm:h-64 md:h-72">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
                <stop offset="100%" stopColor="rgba(99,102,241,0.1)" />
              </linearGradient>
            </defs>
            <polyline fill="url(#g)" stroke="none" points={points.map(p => `${p.x},60 ${p.x},${p.y}`).join(' ')} />
            <polyline fill="none" stroke="rgba(59,130,246,1)" strokeWidth="1.5" points={points.map(p => `${p.x},${p.y}`).join(' ')} />
          </svg>
        </div>
      </div>
    </section>
  );
}
