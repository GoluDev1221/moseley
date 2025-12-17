import React, { ReactNode } from 'react';
import { ViewState } from '../types';

interface LayoutProps {
  children: ReactNode;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const navItems = [
    { id: ViewState.CHECK_IN, label: 'Check-In' },
    { id: ViewState.FOUNDATION, label: 'Awareness' },
    { id: ViewState.HABITS, label: 'Habits' },
    { id: ViewState.FOCUS, label: 'Focus' },
  ];

  return (
    <div className="min-h-screen bg-background text-textMain flex flex-col font-sans selection:bg-zinc-700">
      <main className="flex-1 w-full max-w-md mx-auto p-6 pb-24 relative">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md border-t border-border z-50 safe-area-bottom">
        <div className="max-w-md mx-auto flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex-1 h-full flex items-center justify-center text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? 'text-textMain' : 'text-zinc-600 hover:text-zinc-400'
                }`}
              >
                <span className={isActive ? 'border-b border-textMain pb-1' : ''}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
