export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Camera body */}
      <rect
        x="4"
        y="12"
        width="32"
        height="22"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Lens */}
      <circle
        cx="20"
        cy="23"
        r="7"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Flash dot */}
      <circle cx="32" cy="17" r="2" fill="currentColor" />
      {/* Modernized color dots inspired by original logo — RGB photo reference */}
      <circle cx="34" cy="8" r="3.5" fill="#ef4444" opacity="0.9" />
      <circle cx="26" cy="5" r="3.5" fill="#f59e0b" opacity="0.9" />
      <circle cx="36" cy="4" r="3" fill="#3b82f6" opacity="0.9" />
    </svg>
  );
}
