import { MapPinIcon } from '../icons/index.js'
import mapaArgentina from '../../assets/images/misc/mapa-argentina.webp'

const TORCUATO_MAPS_URL = 'https://maps.app.goo.gl/jWW5cBFK8NZHTuxXA'

export default function DealersCta() {
  return (
    <div className="cta-banner cta-banner--map" style={{ backgroundImage: `url(${mapaArgentina})` }}>
      <div className="cta-banner__overlay" />
      <MapPinIcon size={38} className="cta-banner__pin" />
      <h3>CONCESIONARIO BAIC TORCUATO</h3>
      <a href={TORCUATO_MAPS_URL} target="_blank" rel="noreferrer" className="ui-button ui-button--dark ui-button--md">VER UBICACIÓN</a>
    </div>
  )
}
