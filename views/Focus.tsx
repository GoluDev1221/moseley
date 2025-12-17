import React, { useState, useEffect, useCallback } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';

export const Focus: React.FC = () => {
  const [task, setTask] = useState('');
  const [minutes, setMinutes] = useState<string>('25');
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval: number | undefined;

    if (isActive && timeLeft !== null && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => (prev ? prev - 1 : 0));
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    const mins = parseInt(minutes);
    if (!task.trim()) return;
    if (isNaN(mins) || mins <= 0) return;
    
    setTimeLeft(mins * 60);
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(null);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (timeLeft !== null) {
    return (
      <FadeIn className="flex flex-col h-full items-center justify-center space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-zinc-500">Current Focus</span>
          <h2 className="text-xl font-medium text-white break-words max-w-[300px]">{task}</h2>
        </div>

        <div className="text-7xl font-light tabular-nums tracking-tighter text-white">
          {formatTime(timeLeft)}
        </div>

        <div className="flex space-x-4 w-full max-w-xs">
          {isActive ? (
             <Button variant="secondary" fullWidth onClick={() => setIsActive(false)}>Pause</Button>
          ) : (
             <Button variant="primary" fullWidth onClick={() => setIsActive(true)}>Resume</Button>
          )}
          <Button variant="danger" fullWidth onClick={handleReset}>Stop</Button>
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="flex flex-col h-full justify-center space-y-8">
      <FadeIn>
        <h2 className="text-lg font-medium tracking-tight mb-2">Focus Session</h2>
        <p className="text-sm text-textMuted font-light">Define the task. Set the time. Begin.</p>
      </FadeIn>

      <FadeIn delay={100} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-500">Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full bg-surface border border-zinc-800 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-500">Duration (Minutes)</label>
          <div className="flex space-x-2">
            {[15, 25, 45, 60].map((m) => (
              <button
                key={m}
                onClick={() => setMinutes(m.toString())}
                className={`flex-1 py-2 text-xs rounded border ${
                  minutes === m.toString() 
                    ? 'border-zinc-500 bg-zinc-800 text-white' 
                    : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
                } transition-all`}
              >
                {m}
              </button>
            ))}
          </div>
           <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            className="w-full bg-surface border border-zinc-800 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors text-center"
          />
        </div>

        <div className="pt-4">
          <Button 
            fullWidth 
            onClick={handleStart} 
            disabled={!task.trim() || !minutes}
          >
            Start Session
          </Button>
        </div>

        <p className="text-center text-xs text-zinc-600 pt-4">
          Use the 5-minute rule: If you are avoiding it, commit to just 5 minutes.
        </p>
      </FadeIn>
    </div>
  );
};
