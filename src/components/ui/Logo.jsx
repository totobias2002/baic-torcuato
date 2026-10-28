import { AppLink } from './AppLink.jsx'
import logoNavbar from '../icons/baic-torcuato-logo-navbar.png'
import logoFooter from '../icons/baic-torcuato-logo-footer.png'
import logoOnDarkBg from '../icons/baic-torcuato-logo-tight.png'

// En el navbar (desktop) el fondo arranca transparente sobre el hero oscuro y se pone
// blanco sólido al pasar el mouse por encima (o con el dropdown de Modelos abierto).
// Con un solo logo de texto oscuro, "TORCUATO" quedaba casi invisible sobre el hero.
// Con swapOnHover mostramos el logo de texto claro (pensado para fondo oscuro) por
// default, y lo cruzamos con el de texto oscuro cuando el navbar se pone blanco.
export default function Logo({ to = '/', className = '', dark = false, swapOnHover = false, onClick }) {
  if (swapOnHover) {
    return (
      <AppLink to={to} className={`ui-logo ${className}`} onClick={onClick}>
        <span className="ui-logo__stack">
          <img src={logoNavbar} alt="BAIC Torcuato" className="ui-logo__img ui-logo__img--dark" />
          <img src={logoOnDarkBg} alt="BAIC Torcuato" className="ui-logo__img ui-logo__img--light" />
        </span>
      </AppLink>
    )
  }
  return (
    <AppLink to={to} className={`ui-logo ${className}`} onClick={onClick}>
      <img src={dark ? logoFooter : logoNavbar} alt="BAIC Torcuato" className="ui-logo__img" />
    </AppLink>
  )
}
