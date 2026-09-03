import React from 'react';

interface BrandMonogramProps {
  className?: string;
  color?: string;
  size?: number | string;
  title?: string;
}

/**
 * ENOUGH Brand Monogram
 * Faithfully vectorizes the brand's organic leaf/seed 'e' emblem
 * as shown in the brandbook and uploaded logo.
 */
export const BrandMonogram: React.FC<BrandMonogramProps> = ({
  className = '',
  color = 'currentColor',
  size = 48,
  title = 'ENOUGH Monograma',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Outer organic 'e' contour */}
      <path
        d="M68 23.5 C66 23.5 54 24 44 32 C34 40 28 50 28 62 C28 74 36 82 48 83 C59 84 66 79 71 70 C71.5 68.8 70.8 67.5 69.5 67.5 C68.2 67.5 67.2 68.8 64.5 73.5 C60.5 78.5 53 80 47 79 C37 77.5 32.5 69 33.5 58 C34 52 37 47 41.5 45 C48 42 55 48 61 49.5 C66 50.5 69.5 48.5 70 45 C70.5 39 67 29 60 26 C53 23 44 26 38 31 C32 36 29 44 28.5 53 C27.5 42 32 31 40 25 C47.5 19.5 58 18 67.5 22.5 L68 23.5 Z"
        fill={color}
      />
      {/* Precision silhouette filling the inner loop and sensual wave */}
      <path
        d="M68.5 23 C68.5 23 68.5 35 64 43 C59.5 51 51 51 45 47 C39 43 35.5 46 34.5 51 C34.2 46 36 40 40.5 34 C46 27 57 23 68.5 23 Z"
        fill={color}
        fillOpacity="0.95"
      />
      {/* The graceful S-curve connecting the center */}
      <path
        d="M34.5 51.5 C36 47 41 45 46 47.5 C51 50 58 50.5 63.5 44 C65.5 41.5 67 36 67.5 31 C67 38 64.5 45 59.5 48.5 C54.5 52 47 50.5 42 47 C38 44.5 35.2 46.5 34.5 51.5 Z"
        fill={color}
      />
    </svg>
  );
};

export default BrandMonogram;
