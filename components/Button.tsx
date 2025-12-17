import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyle = "py-3 px-6 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:active:scale-100";
  
  const variants = {
    primary: "bg-textMain text-background hover:bg-white border border-transparent",
    secondary: "bg-surfaceHighlight text-textMain hover:bg-zinc-700 border border-transparent",
    danger: "bg-red-900/20 text-red-200 border border-red-900/30 hover:bg-red-900/30",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
