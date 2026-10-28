import visionBaic from '../../assets/images/misc/vision-baic.webp'
import logoBaicArcfoxPacheco from '../icons/baic-pacheco-logo-tight.png'

// Antes estos dos bloques eran links (a /nosotros y /nosotros#vision). El usuario pidió
// que dejen de navegar al tocarlos -son puramente decorativos ahora- así que van como
// <div> en vez de <AppLink>.
export default function DoubleLinks() {
  return (
    <div className="double-links">
      <div className="double-links__tile double-links__tile--logo">
        <img className="double-links__logo-full" src={logoBaicArcfoxPacheco} alt="BAIC ARCFOX Pacheco" />
      </div>
      <div className="double-links__tile">
        <img className="double-links__img" src={visionBaic} alt="Visión BAIC" />
        <h3>Visión <strong>BAIC</strong></h3>
      </div>
    </div>
  )
}
