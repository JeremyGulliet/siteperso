import React from "react";

export const GradientWaveDivider = () => {
  const gradientId = `wave-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden">
      <svg
        className="relative block h-[30px] w-full sm:h-[40px] md:h-[50px] lg:h-[60px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" style={{ stopColor: "#1d1d1b" }} />
            <stop offset="100%" style={{ stopColor: "#16234e" }} />
          </linearGradient>
        </defs>
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={`url(#${gradientId})`}
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};
