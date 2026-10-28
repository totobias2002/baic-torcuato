import { AppLink } from '../ui/index.js'
import descargasImg from '../../assets/images/misc/centro-de-descargas.png'

export default function DownloadsCta() {
  return (
    <div className="split-cta" style={{ backgroundImage: `url(${descargasImg})` }}>
      <div className="split-cta__content">
        <h3>UNIVERSO BAIC & ARCFOX</h3>
        <AppLink to="/descargas" className="ui-button ui-button--dark ui-button--md">VER MÁS</AppLink>
      </div>
    </div>
  )
}
