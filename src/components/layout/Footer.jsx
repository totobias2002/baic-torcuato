import { AppLink } from '../ui/index.js'
import { models } from '../../data/models.js'
import { arcfoxModels } from '../../data/arcfoxModels.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__branch">
        <h5>Visitanos</h5>
        <span className="footer__rule" />
        <div><strong>Lunes a Sábados</strong> <span>de 9:00 hs a 19:00 hs</span></div>
        <div><strong>Domingos</strong> <span>Cerrado</span></div>
        <div><a href="https://maps.app.goo.gl/tpTHkmr97yaLbKbm8" target="_blank" rel="noreferrer">Av. Ángel T. de Alvear 1014<br />B1611ELV · Don Torcuato, Buenos Aires</a></div>
      </div>
      <div className="footer__inner">
        <div>
          <h5>BAIC</h5>
          <span className="footer__rule" />
          <ul>
            {models.map((m) => (
              <li key={m.slug}><AppLink to={`/modelos/${m.slug}`}>{m.name}</AppLink></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>ARCFOX</h5>
          <span className="footer__rule" />
          <ul>
            {arcfoxModels.map((m) => (
              <li key={m.slug}><AppLink to={`/modelos/${m.slug}`}>{m.name}</AppLink></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Nosotros</h5>
          <span className="footer__rule" />
          <ul>
            <li><AppLink to="/nosotros">Empresa</AppLink></li>
            <li><AppLink to="/vision">Visión</AppLink></li>
            <li><AppLink to="/contacto">Contacto</AppLink></li>
          </ul>
        </div>
        <div>
          <h5>Novedades</h5>
          <span className="footer__rule" />
          <ul>
            <li><AppLink to="/novedades">Noticias</AppLink></li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">© 2026 BAIC Torcuato | Todos los derechos reservados.</p>
    </footer>
  )
}
