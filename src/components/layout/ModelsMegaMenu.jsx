import { useSelector } from 'react-redux'
import { AppLink } from '../ui/index.js'
import { selectVehicles } from '../../features/vehicles/index.js'

// El panel real (baic.com.ar) arma dos filas: 6 modelos arriba y 4 abajo, a todo el ancho del navbar.
function ModelCard({ vehicle, onNavigate }) {
  return (
    <AppLink to={`/modelos/${vehicle.slug}`} className="model-card" onClick={onNavigate}>
      {vehicle.image ? (
        <img className="model-card__img" src={vehicle.image} alt={vehicle.name} />
      ) : (
        <div className="ph">{vehicle.name}</div>
      )}
      <h4>{vehicle.name}</h4>
      <span className="model-card__cta">VER MÁS</span>
    </AppLink>
  )
}

export default function ModelsMegaMenu({ onNavigate }) {
  const vehicles = useSelector(selectVehicles)
  const row1 = vehicles.slice(0, 6)
  const row2 = vehicles.slice(6)

  return (
    <div className="megamenu">
      <div className="megamenu__row">
        {row1.map((vehicle) => <ModelCard key={vehicle.slug} vehicle={vehicle} onNavigate={onNavigate} />)}
      </div>
      {row2.length > 0 && (
        <div className="megamenu__row">
          {row2.map((vehicle) => <ModelCard key={vehicle.slug} vehicle={vehicle} onNavigate={onNavigate} />)}
        </div>
      )}
    </div>
  )
}
