import { AppLink } from '../ui/index.js'
import { models } from '../../data/models.js'
import { arcfoxModels } from '../../data/arcfoxModels.js'

export default function Footer() {
  return (
    <footer className="footer">
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
      <p className="footer__copyright">© 2026 BAIC Pacheco | Todos los derechos reservados.</p>
    </footer>
  )
}
