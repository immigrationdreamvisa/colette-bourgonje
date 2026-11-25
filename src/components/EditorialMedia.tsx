import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import schoolLogo from '../assets/logo.png';

export const SCHOOL_LOGO_SRC = schoolLogo;

interface EditorialPhotoProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export function EditorialPhoto({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  fallbackTitle,
}: EditorialPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#DCE8F5] via-[#F4F7FB] to-[#E2EAF2] text-[#113E6B] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-2xl bg-[#113E6B]/10 flex items-center justify-center mb-3">
          <BookOpen className="w-6 h-6 text-[#113E6B]" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-semibold text-[#113E6B]">
          {fallbackTitle || 'Colette Bourgonje School'}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E2EAF2] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}

export function SchoolEmblem({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <img
      src={schoolLogo}
      alt="Colette Bourgonje School Trailblazers Logo"
      className={`object-contain shrink-0 ${className}`}
      loading="eager"
    />
  );
}

export function SunArcAccent({ className = 'w-24 h-24' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M18 96C18 52.9218 52.9218 18 96 18"
        stroke="#F5A623"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M42 96C42 66.1766 66.1766 42 96 42"
        stroke="#0284C7"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="88" cy="84" r="10" fill="#6BA4D9" />
    </svg>
  );
}

export function BotanicalSprig({ className = 'w-28 h-28', color = '#6BA4D9' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M22 102C40 78 62 50 96 22"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M44 76C32 66 30 50 42 40C52 50 54 64 44 76Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M66 52C56 42 58 26 70 20C78 30 76 44 66 52Z"
        fill="#F5A623"
        fillOpacity="0.9"
      />
      <path
        d="M58 64C72 60 86 64 94 76C80 80 66 76 58 64Z"
        fill="#0284C7"
        fillOpacity="0.88"
      />
    </svg>
  );
}

export function PlayfulDottedLoop({ className = 'w-32 h-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 68" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 52C28 16 64 12 84 36C104 60 132 54 154 18"
        stroke="#0284C7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 9"
      />
      <circle cx="154" cy="18" r="5" fill="#F5A623" />
    </svg>
  );
}

export function RosewoodMiniMap() {
  return (
    <svg
      viewBox="0 0 420 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="Illustrated neighbourhood map of Rosewood in southeast Saskatoon showing Colette Bourgonje School at 169 Olson Lane West"
    >
      <rect width="420" height="240" rx="20" fill="#E2EAF2" />
      {/* Prairie Wetland & Park Greenspace */}
      <path
        d="M255 24C295 18 352 28 386 62C402 78 402 128 372 152C340 176 280 168 258 134C236 100 222 30 255 24Z"
        fill="#6BA4D9"
        fillOpacity="0.52"
      />
      <ellipse cx="332" cy="92" rx="34" ry="20" fill="#113E6B" fillOpacity="0.16" />
      <text x="292" y="136" fill="#113E6B" fontSize="10" fontWeight="600" fontFamily="DM Sans, sans-serif">
        Rosewood Parks &amp; Trails
      </text>

      {/* Main Roads */}
      <path d="M0 54 H420" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M0 194 H420" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M112 0 V240" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M112 122 H246 C262 122 268 132 268 148 V194" stroke="#FFFFFF" strokeWidth="9" />

      {/* Road Labels */}
      <text x="16" y="48" fill="#475569" fontSize="9.5" fontWeight="600" fontFamily="DM Sans, sans-serif">
        Taylor Street East
      </text>
      <text x="16" y="188" fill="#475569" fontSize="9.5" fontWeight="600" fontFamily="DM Sans, sans-serif">
        Rosewood Boulevard West
      </text>
      <text x="128" y="116" fill="#113E6B" fontSize="10" fontWeight="700" fontFamily="DM Sans, sans-serif">
        Olson Lane West
      </text>
      <text
        x="104"
        y="168"
        fill="#475569"
        fontSize="9"
        fontWeight="600"
        fontFamily="DM Sans, sans-serif"
        transform="rotate(-90 104 168)"
      >
        Boychuk Dr
      </text>

      {/* School Campus Marker */}
      <rect x="166" y="134" width="62" height="36" rx="8" fill="#113E6B" />
      <circle cx="197" cy="122" r="14" fill="#F5A623" stroke="#113E6B" strokeWidth="3" />
      <circle cx="197" cy="122" r="4.5" fill="#113E6B" />
      <text x="174" y="155" fill="#F4F7FB" fontSize="9" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
        169 Olson
      </text>
    </svg>
  );
}
