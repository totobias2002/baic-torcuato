export default function ToolsIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g transform="rotate(45 12 12)">
        <rect x="9.8" y="1" width="4.4" height="9.5" rx="1.6" />
        <circle cx="12" cy="2" r="3.4" />
        <rect x="10.1" y="10.5" width="3.8" height="11.5" rx="1.6" />
      </g>
      <g transform="rotate(-45 12 12)">
        <rect x="10.2" y="1" width="3.6" height="6" rx="1.2" />
        <rect x="8.5" y="7" width="7" height="5" rx="1.4" />
        <rect x="9.9" y="12" width="4.2" height="10" rx="1.4" />
      </g>
    </svg>
  )
}
