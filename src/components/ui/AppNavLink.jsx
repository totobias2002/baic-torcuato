import { NavLink } from 'react-router-dom'

export function AppNavLink({ to, children, end = false, className = '', ...props }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `ui-navlink ${isActive ? 'ui-navlink--active' : ''} ${className}`}
      {...props}
    >
      {children}
    </NavLink>
  )
}
