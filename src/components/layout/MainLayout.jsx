import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import SocialRail from './SocialRail.jsx'

export default function MainLayout() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
      <SocialRail />
    </div>
  )
}
