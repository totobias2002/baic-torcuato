import { Link } from 'react-router-dom'

export function AppLink({ to, children, className = '', ...props }) {
  return (
    <Link to={to} className={`ui-link ${className}`} {...props}>
      {children}
    </Link>
  )
}
