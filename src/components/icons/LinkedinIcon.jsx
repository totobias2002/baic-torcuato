export default function LinkedinIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="6.5" r="0.6" fill="currentColor" />
      <line x1="12" y1="10" x2="12" y2="17" />
      <path d="M12 13c0-1.7 1.3-3 3-3s2 1 2 3v4" />
    </svg>
  )
}
