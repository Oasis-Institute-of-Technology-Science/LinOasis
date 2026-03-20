import React from 'react';

const Card = ({
  title,
  subtitle,
  children,
  footer,
  variant = 'default',
  hoverable = true,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-xl overflow-hidden';
  
  const variantClasses = {
    default: 'bg-medium',
    elevated: 'bg-medium shadow-lg',
    outlined: 'bg-transparent border border-gray-dark'
  };
  
  const hoverClasses = hoverable ? 'card-hover' : '';
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    hoverClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {title && (
        <div className="p-6 border-b border-gray-dark">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          {subtitle && (
            <p className="text-gray text-sm">{subtitle}</p>
          )}
        </div>
      )}
      
      <div className="p-6">
        {children}
      </div>
      
      {footer && (
        <div className="p-6 border-t border-gray-dark">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
