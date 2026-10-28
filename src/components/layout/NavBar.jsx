import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Logo, AppNavLink } from '../ui/index.js'
import { ChevronDownIcon } from '../icons/index.js'
import ModelsMegaMenu from './ModelsMegaMenu.jsx'
import ArcfoxMegaMenu from './ArcfoxMegaMenu.jsx'

const CLOSE_DELAY = 400

export default function NavBar() {
  const location = useLocation()
  // Las páginas de modelo (BAIC y ARCFOX) arrancan con fondo blanco debajo del navbar
  // -no una foto de hero oscura como el home-, así que ahí el logo tiene que verse
  // siempre en su variante oscura (nunca la clara, que quedaría invisible sobre blanco).
  const forceDarkLogo = location.pathname.startsWith('/modelos/')
  const [modelsOpen, setModelsOpen] = useState(false)
  const [arcfoxOpen, setArcfoxOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef(null)
  const arcfoxCloseTimer = useRef(null)

  // Con el menú mobile abierto, el panel de links (.navbar__links) es fixed y
  // scrollea su propio contenido -pero el <body> de atrás seguía siendo
  // scrolleable al mismo tiempo. En iOS Safari, overflow:hidden en el body NO
  // alcanza para bloquear el touch-scroll de fondo (bug conocido) -por eso
  // seguía "ganando" el gesto el scroll de atrás. El truco que sí funciona en
  // iOS es fijar el body en position:fixed (congelándolo en el scroll actual)
  // mientras el menú está abierto, y restaurar la posición al cerrar.
  useEffect(() => {
    if (!mobileOpen) return undefined
    const { body } = document
    const scrollY = window.scrollY
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    }
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.left = prev.left
      body.style.right = prev.right
      body.style.width = prev.width
      body.style.overflow = prev.overflow
      window.scrollTo(0, scrollY)
    }
  }, [mobileOpen])

  const openModels = () => {
    clearTimeout(closeTimer.current)
    clearTimeout(arcfoxCloseTimer.current)
    setArcfoxOpen(false)
    setModelsOpen(true)
  }

  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setModelsOpen(false), CLOSE_DELAY)
  }

  const openArcfox = () => {
    clearTimeout(arcfoxCloseTimer.current)
    clearTimeout(closeTimer.current)
    setModelsOpen(false)
    setArcfoxOpen(true)
  }

  const scheduleCloseArcfox = () => {
    clearTimeout(arcfoxCloseTimer.current)
    arcfoxCloseTimer.current = setTimeout(() => setArcfoxOpen(false), CLOSE_DELAY)
  }

  const closeAll = () => {
    clearTimeout(closeTimer.current)
    clearTimeout(arcfoxCloseTimer.current)
    setModelsOpen(false)
    setArcfoxOpen(false)
    setMobileOpen(false)
  }

  // En desktop el hover ya abre/cierra el menú; si el click también hiciera
  // toggle, un click con mouse (que primero dispara el hover) lo abriría y
  // lo cerraría en el mismo gesto, generando el parpadeo/"transparencia" que
  // se veía a mitad de la transición de opacity. En mobile no hay hover, así
  // que ahí sí necesitamos que el tap alterne.
  const handleTriggerClick = () => {
    if (mobileOpen) {
      setArcfoxOpen(false)
      setModelsOpen((o) => !o)
    } else {
      openModels()
    }
  }

  const handleArcfoxTriggerClick = () => {
    if (mobileOpen) {
      setModelsOpen(false)
      setArcfoxOpen((o) => !o)
    } else {
      openArcfox()
    }
  }

  return (
    <header className={`navbar ${modelsOpen || arcfoxOpen ? 'navbar--active' : ''} ${forceDarkLogo ? 'navbar--force-dark' : ''}`}>
      <div className="navbar__inner">
        <Logo onClick={closeAll} swapOnHover />
        <button className="menu-toggle" onClick={() => setMobileOpen((o) => !o)} aria-label="Abrir menú">
          &#9776;
        </button>
        <nav className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {/* El slide-in (transform:translateX) vive en <nav>, y el scroll táctil vive en
              este wrapper aparte. iOS Safari tiene un bug conocido: un elemento con
              overflow:auto + -webkit-overflow-scrolling:touch que ADEMÁS tiene su propio
              transform (el que lo hace aparecer deslizando) puede quedar con el scroll
              "congelado" al tacto -el drag no mueve nada aunque el mouse-wheel sí ande.
              Separando el transform del scroll evitamos ese bug. */}
          <div className="navbar__scroll">
            <div
              className={`dropdown ${modelsOpen ? 'open' : ''}`}
              onMouseEnter={mobileOpen ? undefined : openModels}
              onMouseLeave={mobileOpen ? undefined : scheduleClose}
            >
              <button className="navbar__models-trigger" onClick={handleTriggerClick}>
                BAIC <ChevronDownIcon size={14} />
              </button>
              <ModelsMegaMenu onNavigate={closeAll} />
            </div>
            <div
              className={`dropdown ${arcfoxOpen ? 'open' : ''}`}
              onMouseEnter={mobileOpen ? undefined : openArcfox}
              onMouseLeave={mobileOpen ? undefined : scheduleCloseArcfox}
            >
              <button className="navbar__models-trigger" onClick={handleArcfoxTriggerClick}>
                ARCFOX <ChevronDownIcon size={14} />
              </button>
              <ArcfoxMegaMenu onNavigate={closeAll} />
            </div>
            <AppNavLink to="/nosotros" onClick={closeAll}>Empresa</AppNavLink>
            <AppNavLink to="/novedades" onClick={closeAll}>Novedades</AppNavLink>
            <AppNavLink to="/contacto" onClick={closeAll}>Contacto</AppNavLink>
            <AppNavLink to="/service" className="navbar__postventa" onClick={closeAll}>Postventa</AppNavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
