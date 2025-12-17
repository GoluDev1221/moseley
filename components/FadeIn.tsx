import React, { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => {
  const style = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div className={`opacity-0 animate-fade-in ${className}`} style={style}>
      {children}
    </div>
  );
};
