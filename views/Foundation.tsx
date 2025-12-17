import React from 'react';
import { FOUNDATION_TOPICS } from '../constants';
import { FadeIn } from '../components/FadeIn';

export const Foundation: React.FC = () => {
  return (
    <div className="space-y-12 py-4">
      <FadeIn>
        <h2 className="text-lg font-medium tracking-tight mb-2">Mental Awareness</h2>
        <p className="text-sm text-textMuted font-light">Foundational principles for a clear mind.</p>
      </FadeIn>

      <div className="space-y-10">
        {FOUNDATION_TOPICS.map((topic, idx) => (
          <FadeIn key={topic.id} delay={idx * 100}>
            <article className="border border-border bg-surface/30 p-5 rounded-sm">
              <h3 className="text-base font-medium mb-3 text-white/90">{topic.title}</h3>
              <p className="text-sm text-textMuted mb-4 leading-relaxed font-light">
                {topic.explanation}
              </p>
              
              <div className="space-y-3 mt-4 pt-4 border-t border-border/50">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">Reflection</span>
                  <p className="text-xs text-textMain/80 italic">"{topic.reflectionPrompt}"</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">Practice</span>
                  <p className="text-xs text-textMain/80">{topic.behavioralSuggestion}</p>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
