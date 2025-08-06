import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'orange' | 'white';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'blue', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    blue: 'border-brand-blue',
    orange: 'border-brand-orange',
    white: 'border-white'
  };

  return (
    <div className={`inline-block animate-spin ${sizeClasses[size]} ${className}`}>
      <div 
        className={`
          ${sizeClasses[size]} 
          rounded-full 
          border-2 
          ${colorClasses[color]}
          border-t-transparent
          animate-spin
        `}
      />
    </div>
  );
};

interface FullScreenLoadingProps {
  text?: string;
}

export const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({ 
  text = "Loading..." 
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-4">
          <div className="w-16 h-16 border-4 border-brand-orange/20 rounded-full animate-spin">
            <div className="w-16 h-16 border-4 border-t-brand-orange border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 w-12 h-12 m-2 border-4 border-brand-blue/20 rounded-full animate-pulse">
            <div className="w-12 h-12 border-4 border-t-brand-blue border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
        </div>
        <p className="text-white text-lg font-medium animate-pulse">{text}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
