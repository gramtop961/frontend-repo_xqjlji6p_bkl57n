import { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

export default function Planner() {
  const [workouts, setWorkouts] = useState([
    { day: 'Mon', name: 'Push Day', exercises: ['Bench Press 5x5', 'OHP 3x8', 'Dips 3x10'] },
    { day: 'Wed', name: 'Pull Day', exercises: ['Deadlift 3x5', 'Rows 4x8', 'Curls 3x12'] },
    { day: 'Fri', name: 'Legs', exercises: ['Squat 5x5', 'RDL 3x8', 'Lunges 3x12'] },
  ]);

  const [exercise, setExercise] = useState('');

  const addExercise = (i) => {
    if (!exercise.trim()) return;
    const next = [...workouts];
    next[i].exercises = [...next[i].exercises, exercise.trim()];
    setWorkouts(next);
    setExercise('');
  };

  const removeExercise = (i, idx) => {
    const next = [...workouts];
    next[i].exercises = next[i].exercises.filter((_, j) => j !== idx);
    setWorkouts(next);
  };

  return (
    <section id="planner" className="relative py-20 sm:py-24 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Weekly planner</h2>
            <p className="mt-2 text-blue-100/80">Add exercises and tweak sessions. Fully responsive with touch-friendly controls.</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
          {workouts.map((w, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-300/80 text-sm">{w.day}</p>
                  <h3 className="text-white font-semibold">{w.name}</h3>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {w.exercises.map((ex, idx) => (
                  <li key={idx} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                    <span className="text-blue-100/90 text-sm">{ex}</span>
                    <button onClick={() => removeExercise(i, idx)} className="text-blue-200/60 hover:text-red-300 transition" aria-label="Remove exercise">
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex gap-2">
                <input value={exercise} onChange={(e) => setExercise(e.target.value)} placeholder="Add exercise" className="flex-1 bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-blue-500/40" />
                <button onClick={() => addExercise(i)} className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-sm">
                  <PlusCircle size={16} /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
