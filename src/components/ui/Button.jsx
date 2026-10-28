export default function Button({ variant = 'primary', size = 'md', children, className = '', ...props }) {
  const base = 'ui-button'
  return (
    <button className={`${base} ${base}--${variant} ${base}--${size} ${className}`} {...props}>
      {children}
    </button>
  )
}
