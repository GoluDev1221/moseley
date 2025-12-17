import React, { useState } from 'react';
import { CHECK_IN_OPTIONS } from '../constants';
import { CheckInOption, DecisionCardContent } from '../types';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';

interface DecisionCardProps {
  data: DecisionCardContent;
  onClose: () => void;
}

const DecisionCard: React.FC<DecisionCardProps> = ({ data, onClose }) => {
  const sections = [
    { title: 'Clarity', content: data.clarity, color: 'text-blue-200' },
    { title: 'Pause', content: data.pause, color: 'text-emerald-200' },
    { title: 'Action', content: data.action, color: 'text-amber-200' },
    { title: 'Reflection', content: data.reflection, color: 'text-purple-200' },
  ];

  return (
    <FadeIn className="space-y-8 py-4">
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <FadeIn key={section.title} delay={idx * 150} className="border-l-2 border-surfaceHighlight pl-4">
            <h3 className={`text-xs font-bold uppercase tracking-widest mb-2 ${section.color} opacity-80`}>
              {section.title}
            </h3>
            <p className="text-sm leading-relaxed text-textMain/90 font-light">
              {section.content}
            </p>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn delay={600} className="pt-8">
        <Button variant="secondary" fullWidth onClick={onClose}>
          Complete Check-In
        </Button>
      </FadeIn>
    </FadeIn>
  );
};

export const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<CheckInOption | null>(null);

  if (selectedOption) {
    return <DecisionCard data={selectedOption.content} onClose={() => setSelectedOption(null)} />;
  }

  return (
    <div className="flex flex-col h-full justify-center">
      <FadeIn>
        <div className="flex flex-col items-center mb-12">
          {/* Logo Placeholder - Ensure logo.png is in the root directory */}
          <img src="/logo.png" alt="Moseley Logo" className="w-16 h-16 mb-6 opacity-90 object-contain" />
          <h1 className="text-3xl font-light tracking-widest text-white mb-2">MOSELEY</h1>
          <p className="text-[10px] font-medium tracking-[0.3em] text-zinc-500 uppercase">Think Clearly</p>
        </div>

        <h2 className="text-sm font-light text-center mb-8 text-textMain/80 tracking-wide">
          What is disrupting your clarity?
        </h2>

        <div className="space-y-4">
          {CHECK_IN_OPTIONS.map((option, idx) => (
            <FadeIn key={option.id} delay={idx * 100}>
              <Button 
                variant="secondary" 
                fullWidth 
                onClick={() => setSelectedOption(option)}
                className="justify-start text-left h-14"
              >
                {option.label}
              </Button>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};