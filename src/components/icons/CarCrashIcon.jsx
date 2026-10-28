export default function CarCrashIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2.5 17.4V13.9a1.4 1.4 0 01.85-1.3l1.75-.75 1.55-3.1A2 2 0 018.5 7.6h7a2 2 0 011.85 1.15l1.55 3.1 1.75.75c.5.2.85.7.85 1.3v3.5c0 .5-.4.9-.9.9h-1a2.3 2.3 0 01-4.5 0h-5.2a2.3 2.3 0 01-4.5 0h-1c-.5 0-.9-.4-.9-.9z" />
      <circle cx="7.5" cy="17.3" r="1.5" />
      <circle cx="16.5" cy="17.3" r="1.5" />
      <path d="M18.7 1.8l.7 1.6 1.7.2-1.25 1.2.3 1.7-1.45-.85-1.45.85.3-1.7L16.3 3.6l1.7-.2z" />
    </svg>
  )
}
