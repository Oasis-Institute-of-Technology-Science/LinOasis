import React from 'react';

const Visualization = ({ loading = false, error, children, className = '' }) => {
  const baseClasses = 'rounded-xl overflow-hidden';
  
  const classes = [
    baseClasses,
    className
  ].filter(Boolean).join(' ');

  if (loading) {
    return (
      <div className={`${classes} bg-medium p-8 flex flex-col items-center justify-center min-h-96`}>
        <div className="loading-spinner mb-4"></div>
        <p className="text-gray">Loading visualization...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${classes} bg-medium p-8 flex flex-col items-center justify-center min-h-96`}>
        <div className="text-error text-4xl mb-4">⚠️</div>
        <h3 className="text-white text-lg font-semibold mb-2">Error</h3>
        <p className="text-gray text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Visualization;
