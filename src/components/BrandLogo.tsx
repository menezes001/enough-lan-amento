import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number | string;
  rounded?: 'none' | 'sm' | 'md' | 'full';
  bordered?: boolean;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 36,
  rounded = 'sm',
  bordered = false,
  alt = 'ENOUGH Logotipo Oficial',
}) => {
  const roundedClass =
    rounded === 'full'
      ? 'rounded-full'
      : rounded === 'md'
      ? 'rounded-md'
      : rounded === 'sm'
      ? 'rounded-sm'
      : 'rounded-none';

  const borderClass = bordered ? 'border border-[#FBF6E5]/20 shadow-sm' : '';

  const sizeStyle = typeof size === 'number' ? { width: `${size}px`, height: `${size}px` } : { width: size, height: size };

  return (
    <img
      src="/logo-enough.jpg"
      alt={alt}
      style={sizeStyle}
      className={`object-cover shrink-0 select-none ${roundedClass} ${borderClass} ${className}`}
      loading="eager"
    />
  );
};

export default BrandLogo;
