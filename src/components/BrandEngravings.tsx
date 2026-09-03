import React from 'react';

interface EngravingProps {
  className?: string;
  color?: string;
}

/**
 * Botanical Grapevine Engraving
 * Copperplate editorial linework inspired by classical botany archives.
 */
export const GrapevineEngraving: React.FC<EngravingProps> = ({
  className = 'w-24 h-24',
  color = '#8B1A1A',
}) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main curving vine */}
    <path d="M20 140 C45 125, 60 90, 80 85 C100 80, 125 95, 140 70 C145 60, 142 45, 130 35 C115 25, 95 38, 90 55" />
    <path d="M45 110 C55 102, 68 108, 70 120 C72 132, 60 142, 48 138 C40 135, 38 122, 45 110 Z" fill={color} fillOpacity="0.1" />
    {/* Grape cluster details */}
    <circle cx="95" cy="98" r="4.5" fill={color} fillOpacity="0.15" />
    <circle cx="104" cy="95" r="4" fill={color} fillOpacity="0.15" />
    <circle cx="112" cy="99" r="4.5" fill={color} fillOpacity="0.15" />
    <circle cx="100" cy="106" r="4" fill={color} fillOpacity="0.15" />
    <circle cx="108" cy="106" r="4" fill={color} fillOpacity="0.15" />
    <circle cx="104" cy="114" r="3.5" fill={color} fillOpacity="0.15" />
    <circle cx="104" cy="121" r="3" fill={color} fillOpacity="0.15" />
    {/* Fine leaf veining */}
    <path d="M82 83 C78 68, 65 58, 50 62 C38 65, 32 78, 38 90 C42 98, 55 98, 65 92 C72 88, 78 85, 82 83 Z" fill={color} fillOpacity="0.08" />
    <path d="M52 64 L65 90" strokeWidth="0.75" />
    <path d="M57 73 L43 78" strokeWidth="0.5" />
    <path d="M60 80 L50 86" strokeWidth="0.5" />
    {/* Tendril spirals */}
    <path d="M130 35 C138 28, 148 30, 150 40 C152 48, 144 54, 138 52 C134 50, 134 44, 138 42" strokeWidth="0.75" />
    <path d="M22 138 C15 142, 10 138, 12 132 C14 126, 22 126, 24 130" strokeWidth="0.75" />
  </svg>
);

/**
 * Classical Architectural Arch Engraving
 * Represents structure, covenant, temple, and timeless classical symmetry.
 */
export const ClassicalArchEngraving: React.FC<EngravingProps> = ({
  className = 'w-20 h-28',
  color = '#8B1A1A',
}) => (
  <svg
    viewBox="0 0 100 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="0.9"
    strokeLinecap="round"
  >
    {/* Outer Arch */}
    <path d="M20 135 V60 C20 37, 33 22, 50 22 C67 22, 80 37, 80 60 V135" />
    {/* Inner Arch */}
    <path d="M28 135 V62 C28 44, 38 30, 50 30 C62 30, 72 44, 72 62 V135" />
    {/* Arch keystone and fluting */}
    <path d="M47 18 H53 V26 H47 Z" fill={color} fillOpacity="0.12" />
    <path d="M14 135 H86" strokeWidth="1.2" />
    <path d="M16 138 H84" strokeWidth="0.7" />
    {/* Column capitels */}
    <path d="M16 60 H32" />
    <path d="M68 60 H84" />
    {/* Subtle radiant rays in arch center */}
    <path d="M50 38 V48" strokeDasharray="1 3" />
    <path d="M42 42 L48 49" strokeDasharray="1 3" />
    <path d="M58 42 L52 49" strokeDasharray="1 3" />
  </svg>
);

/**
 * Classical Fountain / Spring of Living Water Engraving
 * Symbolizing origin, source, life, and unmerited grace.
 */
export const FountainEngraving: React.FC<EngravingProps> = ({
  className = 'w-24 h-24',
  color = '#8B1A1A',
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="0.9"
    strokeLinecap="round"
  >
    {/* Central urn / basin */}
    <path d="M45 55 C45 70, 75 70, 75 55 H45 Z" fill={color} fillOpacity="0.1" />
    <path d="M40 52 H80" strokeWidth="1.1" />
    {/* Pedestal */}
    <path d="M56 68 V90 H46 L40 102 H80 L74 90 H64 V68" />
    <path d="M35 102 H85" strokeWidth="1.2" />
    {/* Water stream arcs */}
    <path d="M60 48 C60 30, 48 20, 36 34 C30 42, 32 55, 38 64" strokeDasharray="2 2" />
    <path d="M60 48 C60 30, 72 20, 84 34 C90 42, 88 55, 82 64" strokeDasharray="2 2" />
    <path d="M60 48 V22" strokeDasharray="1 2" />
    {/* Subtle droplets */}
    <circle cx="60" cy="18" r="1.5" fill={color} />
    <circle cx="34" cy="40" r="1.2" fill={color} />
    <circle cx="86" cy="40" r="1.2" fill={color} />
  </svg>
);

/**
 * Soaring Swallow Engraving
 * Freedom, return to origins, gentle soaring grace.
 */
export const SwallowEngraving: React.FC<EngravingProps> = ({
  className = 'w-20 h-20',
  color = '#8B1A1A',
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="0.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Body and wings */}
    <path
      d="M58 58 C66 48, 88 38, 105 32 C92 46, 75 58, 68 66 C65 78, 68 96, 74 104 C66 94, 58 84, 52 80 C44 94, 38 106, 30 112 C35 98, 42 86, 48 76 C38 78, 22 84, 12 90 C24 76, 42 62, 54 58 C56 50, 58 44, 62 38 C64 34, 68 32, 70 34 C70 38, 66 46, 62 52"
      fill={color}
      fillOpacity="0.1"
    />
    <path d="M60 55 C74 44, 94 36, 108 30" strokeWidth="1" />
    <path d="M52 74 C34 76, 20 82, 10 90" strokeWidth="1" />
  </svg>
);
