
import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#003366] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-600/5 blur-[100px] rounded-full -ml-24 -mb-24"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="w-64 md:w-80 h-auto mb-12 animate-pulse-slow">
          <svg viewBox="0 0 520 220" className="w-full h-full drop-shadow-2xl" preserveAspectRatio="xMinYMid meet">
            {/* Circle Icon Section */}
            <g transform="translate(10, 20)">
              <circle cx="75" cy="75" r="70" fill="#2563eb" />
              {/* The Swoosh with Draw Animation */}
              <path 
                d="M-5 90 Q 75 75 145 15" 
                stroke="white" 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="round" 
                className="animate-draw"
              />
              {/* The Graph Bars */}
              <rect x="45" y="85" width="15" height="45" fill="white" rx="2" />
              <rect x="75" y="65" width="15" height="65" fill="white" rx="2" />
              <rect x="105" y="45" width="15" height="85" fill="white" rx="2" />
            </g>
            
            {/* "CS" Large Text */}
            <text x="180" y="145" fontSize="145" fontWeight="900" fill="white" fontFamily="Inter, sans-serif" letterSpacing="-2">CS</text>
            
            {/* Bottom Full Name Text */}
            <text x="35" y="205" fontSize="36" fontWeight="800" fill="white" fontFamily="Inter, sans-serif">Ordia Consulting Services</text>
          </svg>
        </div>

        {/* Loading Progress Text */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.5em] animate-pulse">Initializing Financial Network</p>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-1/3 animate-[loading_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};
