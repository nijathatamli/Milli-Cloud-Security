import React from "react";

import { IconSvgProps } from "../../../types/index";

/**
 * Milli Cloud Security wordmark logo.
 *
 * Shield split into the three Azerbaijani flag stripes (cyan / red / green)
 * with the national crescent + 8-pointed star in white. Wordmark adapts to
 * dark/light theme via `currentColor`.
 */
export const ProwlerExtended: React.FC<IconSvgProps> = ({
  size,
  width = 220,
  height = 44,
  ...props
}) => (
  <svg
    className="text-prowler-black dark:text-prowler-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220 44"
    fill="none"
    width={size || width}
    height={size || height}
    role="img"
    aria-label="Milli Cloud Security"
    {...props}
  >
    <defs>
      <clipPath id="mcs-shield-clip-ext">
        <path d="M22 3 L39 9 V22 C39 31.5 31.8 38.5 22 41.5 C12.2 38.5 5 31.5 5 22 V9 Z" />
      </clipPath>
    </defs>
    {/* Azerbaijan flag stripes inside shield */}
    <g clipPath="url(#mcs-shield-clip-ext)">
      <rect x="0" y="0" width="44" height="14.5" fill="#00B5E2" />
      <rect x="0" y="14.5" width="44" height="15" fill="#EF3340" />
      <rect x="0" y="29.5" width="44" height="15" fill="#509E2F" />
    </g>
    {/* Shield outline */}
    <path
      d="M22 3 L39 9 V22 C39 31.5 31.8 38.5 22 41.5 C12.2 38.5 5 31.5 5 22 V9 Z"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.5"
    />
    {/* Crescent (white) */}
    <path
      d="M27.6 22 A6.2 6.2 0 1 1 22 15.8 A4.8 4.8 0 1 0 27.6 22 Z"
      fill="#FFFFFF"
    />
    {/* 8-pointed star (white) */}
    <path
      d="M30.6 22 L31.55 22.95 L32.85 22.55 L32.45 23.85 L33.4 24.8 L32.1 25.2 L31.7 26.5 L30.75 25.55 L29.45 25.95 L29.85 24.65 L28.9 23.7 L30.2 23.3 Z"
      fill="#FFFFFF"
    />
    {/* Wordmark */}
    <text
      x="50"
      y="22"
      fill="currentColor"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="15"
      fontWeight="800"
      letterSpacing="-0.3"
    >
      Milli Cloud
    </text>
    <text
      x="50"
      y="36"
      fill="#EF3340"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontSize="11"
      fontWeight="700"
      letterSpacing="2.6"
    >
      SECURITY
    </text>
  </svg>
);

/**
 * Compact square logo (favicon-style) — same Azerbaijan-flag shield without
 * wordmark. Used in collapsed sidebar and narrow headers.
 */
export const ProwlerShort: React.FC<IconSvgProps> = ({
  size,
  width = 36,
  height = 36,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    fill="none"
    width={size || width}
    height={size || height}
    role="img"
    aria-label="Milli Cloud Security"
    {...props}
  >
    <defs>
      <clipPath id="mcs-shield-clip-short">
        <path d="M18 2 L33 7 V19 C33 27 27 33 18 35 C9 33 3 27 3 19 V7 Z" />
      </clipPath>
    </defs>
    <g clipPath="url(#mcs-shield-clip-short)">
      <rect x="0" y="0" width="36" height="12" fill="#00B5E2" />
      <rect x="0" y="12" width="36" height="12" fill="#EF3340" />
      <rect x="0" y="24" width="36" height="12" fill="#509E2F" />
    </g>
    <path
      d="M18 2 L33 7 V19 C33 27 27 33 18 35 C9 33 3 27 3 19 V7 Z"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.2"
    />
    {/* Crescent */}
    <path
      d="M22.6 18 A5 5 0 1 1 18 13 A3.9 3.9 0 1 0 22.6 18 Z"
      fill="#FFFFFF"
    />
    {/* 8-pointed star */}
    <path
      d="M25 18 L25.8 18.8 L26.9 18.45 L26.55 19.55 L27.35 20.35 L26.25 20.7 L25.9 21.8 L25.1 21 L24 21.35 L24.35 20.25 L23.55 19.45 L24.65 19.1 Z"
      fill="#FFFFFF"
    />
  </svg>
);
