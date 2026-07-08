export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minimalist RGB dots inspired by original Reflexus brand */}
      <circle cx="14" cy="20" r="8" fill="#ef4444" opacity="0.85" />
      <circle cx="26" cy="14" r="7.5" fill="#f59e0b" opacity="0.85" />
      <circle cx="26" cy="26" r="7.5" fill="#3b82f6" opacity="0.85" />
    </svg>
  );
}
