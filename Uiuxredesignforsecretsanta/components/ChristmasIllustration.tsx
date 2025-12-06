interface ChristmasIllustrationProps {
  variant?: 'star' | 'ornament' | 'snowflake' | 'gift';
  className?: string;
}

export function ChristmasIllustration({ variant = 'star', className = '' }: ChristmasIllustrationProps) {
  if (variant === 'star') {
    return (
      <svg 
        viewBox="0 0 200 200" 
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 L110 80 L170 80 L120 120 L140 180 L100 140 L60 180 L80 120 L30 80 L90 80 Z"
          stroke="#D24545"
          strokeWidth="2"
          fill="rgba(210, 69, 69, 0.1)"
          className="animate-pulse"
        />
        <circle cx="100" cy="100" r="5" fill="#D24545" />
      </svg>
    );
  }

  if (variant === 'ornament') {
    return (
      <svg 
        viewBox="0 0 200 200" 
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="85" y="20" width="30" height="15" rx="3" fill="#2F4F4F" />
        <circle cx="100" cy="100" r="60" stroke="#D24545" strokeWidth="2" fill="rgba(210, 69, 69, 0.05)" />
        <circle cx="100" cy="100" r="45" stroke="#2F4F4F" strokeWidth="1" strokeDasharray="4 4" fill="none" />
        <path d="M70 100 Q100 80 130 100" stroke="#D24545" strokeWidth="1.5" fill="none" />
        <path d="M70 110 Q100 130 130 110" stroke="#2F4F4F" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  if (variant === 'snowflake') {
    return (
      <svg 
        viewBox="0 0 200 200" 
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="100" y1="30" x2="100" y2="170" stroke="#2F4F4F" strokeWidth="2" />
        <line x1="30" y1="100" x2="170" y2="100" stroke="#2F4F4F" strokeWidth="2" />
        <line x1="50" y1="50" x2="150" y2="150" stroke="#2F4F4F" strokeWidth="2" />
        <line x1="150" y1="50" x2="50" y2="150" stroke="#2F4F4F" strokeWidth="2" />
        
        {/* Decorative ends */}
        <circle cx="100" cy="30" r="4" fill="#D24545" />
        <circle cx="100" cy="170" r="4" fill="#D24545" />
        <circle cx="30" cy="100" r="4" fill="#D24545" />
        <circle cx="170" cy="100" r="4" fill="#D24545" />
        <circle cx="50" cy="50" r="4" fill="#D24545" />
        <circle cx="150" cy="150" r="4" fill="#D24545" />
        <circle cx="150" cy="50" r="4" fill="#D24545" />
        <circle cx="50" cy="150" r="4" fill="#D24545" />
        <circle cx="100" cy="100" r="6" fill="#D24545" />
      </svg>
    );
  }

  if (variant === 'gift') {
    return (
      <svg 
        viewBox="0 0 200 200" 
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="80" width="100" height="90" rx="4" stroke="#D24545" strokeWidth="2" fill="rgba(210, 69, 69, 0.05)" />
        <rect x="40" y="60" width="120" height="20" rx="4" fill="#2F4F4F" />
        <line x1="100" y1="60" x2="100" y2="170" stroke="#D24545" strokeWidth="4" />
        <line x1="50" y1="120" x2="150" y2="120" stroke="#D24545" strokeWidth="4" />
        
        {/* Bow */}
        <path d="M80 60 Q70 40 85 35 Q95 32 100 40" stroke="#D24545" strokeWidth="2" fill="none" />
        <path d="M120 60 Q130 40 115 35 Q105 32 100 40" stroke="#D24545" strokeWidth="2" fill="none" />
        <circle cx="100" cy="40" r="5" fill="#D24545" />
      </svg>
    );
  }

  return null;
}
