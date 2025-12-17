import React from 'react';
import { HABIT_RULES } from '../constants';
import { FadeIn } from '../components/FadeIn';

export const Habits: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      <FadeIn>
        <h2 className="text-lg font-medium tracking-tight mb-2">Automation</h2>
        <p className="text-sm text-textMuted font-light">Structure outlasts motivation.</p>
      </FadeIn>

      <div className="space-y-8">
        {HABIT_RULES.map((rule, idx) => (
          <FadeIn key={rule.id} delay={idx * 150}>
            <div className="group">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-sm font-medium text-white/90">{rule.title}</h3>
                <span className="text-xs text-zinc-600 font-mono">0{idx + 1}</span>
              </div>
              <p className="text-sm text-textMuted leading-relaxed font-light border-l border-zinc-800 pl-4 py-1 group-hover:border-zinc-600 transition-colors duration-500">
                {rule.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={600} className="pt-8 border-t border-border mt-8">
        <p className="text-center text-xs text-zinc-500 leading-6">
          Do not track streaks.<br/>
          Do not gamify discipline.<br/>
          Simply do the task.
        </p>
      </FadeIn>
    </div>
  );
};
