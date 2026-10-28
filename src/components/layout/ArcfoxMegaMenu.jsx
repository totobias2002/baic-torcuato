import { AppLink } from '../ui/index.js'
import { arcfoxModels } from '../../data/arcfoxModels.js'

// Mismo layout que ModelsMegaMenu (BAIC). Ahora que cada modelo ARCFOX tiene su propia
// ficha en /modelos/:slug (arcfoxModelDetails.js), "VER MÁS" navega adentro del sitio en
// vez de mandar a arcfox.com.ar.
function ArcfoxModelCard({ model, onNavigate }) {
  return (
    <AppLink to={`/modelos/${model.slug}`} className="model-card" onClick={onNavigate}>
      <img className="model-card__img" src={model.image} alt={model.name} />
      <h4>{model.name}</h4>
      <span className="model-card__cta">VER MÁS</span>
    </AppLink>
  )
}

export default function ArcfoxMegaMenu({ onNavigate }) {
  return (
    <div className="megamenu">
      <div className="megamenu__row megamenu__row--4">
        {arcfoxModels.map((model) => <ArcfoxModelCard key={model.slug} model={model} onNavigate={onNavigate} />)}
      </div>
    </div>
  )
}
