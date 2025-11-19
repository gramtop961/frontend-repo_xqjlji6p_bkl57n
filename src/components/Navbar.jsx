import { Menu, Dumbbell, LogIn } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? "backdrop-blur bg-slate-900/60 border-b border-white/10" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
            <Dumbbell size={18} />
          </div>
          <span className="text-white font-semibold tracking-tight">GymTrack v3</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-blue-100/80 hover:text-white transition">Features</a>
          <a href="#planner" className="text-blue-100/80 hover:text-white transition">Planner</a>
          <a href="#progress" className="text-blue-100/80 hover:text-white transition">Progress</a>
          <a href="#pricing" className="text-blue-100/80 hover:text-white transition">Pricing</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20 transition">
            <LogIn size={16} />
            <span className="text-sm">Sign in</span>
          </button>
        </div>
        <button aria-label="Open Menu" onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2 rounded-lg hover:bg-white/10">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a onClick={() => setOpen(false)} href="#features" className="block px-3 py-2 rounded-md bg-white/5 text-blue-100/90">Features</a>
          <a onClick={() => setOpen(false)} href="#planner" className="block px-3 py-2 rounded-md bg-white/5 text-blue-100/90">Planner</a>
          <a onClick={() => setOpen(false)} href="#progress" className="block px-3 py-2 rounded-md bg-white/5 text-blue-100/90">Progress</a>
          <a onClick={() => setOpen(false)} href="#pricing" className="block px-3 py-2 rounded-md bg-white/5 text-blue-100/90">Pricing</a>
        </div>
      )}
    </header>
  );
}
