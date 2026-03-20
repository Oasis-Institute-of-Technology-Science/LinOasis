import React from 'react';

const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'transition-all duration-300 font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:from-accent-cyan hover:to-accent-purple btn-hover',
    secondary: 'bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:bg-opacity-10 btn-hover',
    text: 'bg-transparent text-accent-blue hover:bg-accent-blue hover:bg-opacity-10 btn-hover'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
