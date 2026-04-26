import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const base = 'inline-flex items-center justify-center font-sans font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none';

  const variants = {
    primary: 'text-[#0D1117] hover:opacity-90 shadow-sm',
    secondary: 'border hover:opacity-90',
    outline: 'border hover:opacity-90',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const inlineStyles: React.CSSProperties = {};
  if (variant === 'primary') {
    inlineStyles.background = disabled ? 'rgba(192, 154, 90, 0.4)' : 'var(--color-accent)';
  } else if (variant === 'secondary') {
    inlineStyles.background = 'transparent';
    inlineStyles.borderColor = 'var(--color-accent)';
    inlineStyles.color = 'var(--color-accent)';
  } else {
    inlineStyles.background = 'transparent';
    inlineStyles.borderColor = 'var(--color-border)';
    inlineStyles.color = 'var(--color-text-primary)';
  }

  return (
    <button
      type={type}
      style={inlineStyles}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
