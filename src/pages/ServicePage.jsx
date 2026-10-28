import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faEnvelope, faCarCrash, faTools, faBolt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { serviceCenters } from '../data/serviceCenters.js'
import { serviceHero } from '../data/serviceHero.js'
import { serviceFormBg } from '../data/serviceFormBg.js'
import { PlusIcon, MinusIcon } from '../components/icons/index.js'

// Mismas abreviaturas de provincia que usa el <select> del formulario de baic.com.ar.
const PROVINCE_ABBREV = {
  'Gran Buenos Aires': 'GBA',
  'Buenos Aires': 'BS. AS.',
  'Ciudad Autónoma de Buenos Aires': 'CABA',
  'Chubut': 'CHUBUT',
  'Córdoba': 'CÓRDOBA',
  'Entre Ríos': 'ENTRE RÍOS',
  'Formosa': 'FORMOSA',
  'Jujuy': 'JUJUY',
  'La Pampa': 'LA PAMPA',
  'Mendoza': 'MENDOZA',
  'Misiones': 'MISIONES',
  'Neuquén': 'NEUQUÉN',
  'Río Negro': 'RÍO NEGRO',
  'Santa Fe': 'SANTA FE',
  'San Juan': 'SAN JUAN',
  'San Luis': 'SAN LUIS',
  'Santa Cruz': 'SANTA CRUZ',
  'Tierra del Fuego': 'TIERRA DEL FUEGO',
  'Tucumán': 'TUCUMÁN'
}

function tallerLabel(center) {
  const name = center.name.toUpperCase()
  const cityMatch = center.address?.match(/\(([^)]+)\)/)
  const city = cityMatch ? cityMatch[1].toUpperCase() : ''
  const abbrev = (PROVINCE_ABBREV[center.province] || center.province).toUpperCase()
  if (!city) return name
  if (city.includes(abbrev) || city.includes(center.province.toUpperCase())) return `${name} (${city})`
  return `${name} (${city}, ${abbrev})`
}

// Mismos íconos de Font Awesome que usa baic.com.ar (fa-car-crash, fa-tools, fa-bolt).
const TAG_ICONS = {
  'Servicio Integral': faCarCrash,
  'Servicio de Mantenimiento': faTools,
  'Híbrido y Eléctrico': faBolt
}

// Mismo orden de provincias que baic.com.ar/service.
const PROVINCE_ORDER = [
  'Gran Buenos Aires', 'Buenos Aires', 'Ciudad Autónoma de Buenos Aires', 'Chubut', 'Córdoba',
  'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro',
  'Santa Fe', 'San Juan', 'San Luis', 'Santa Cruz', 'Tierra del Fuego', 'Tucumán'
]

function groupByProvince(list) {
  const groups = new Map()
  list.forEach((center) => {
    const key = center.province || 'Otros'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(center)
  })
  return Array.from(groups.entries()).sort((a, b) => {
    const ai = PROVINCE_ORDER.indexOf(a[0])
    const bi = PROVINCE_ORDER.indexOf(b[0])
    if (ai === -1 && bi === -1) return a[0].localeCompare(b[0], 'es')
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
  })
}

function ServiceCard({ center }) {
  return (
    <div className="service-card">
      <h4>{center.name}</h4>
      {center.address && <p className="service-card__address">{center.address}</p>}
      <div className="service-card__icons">
        {center.phoneHref && (
          <a href={center.phoneHref} aria-label="Teléfono">
            <FontAwesomeIcon icon={faPhoneSquareAlt} />
          </a>
        )}
        {center.whatsapp && (
          <a href={`https://api.whatsapp.com/send/?phone=${center.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        )}
        {center.email && (
          <a href={`mailto:${center.email}`} aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        )}
      </div>
      {center.tags?.length > 0 && (
        <>
          <hr className="service-card__divider" />
          <ul className="service-card__tags">
            {center.tags.map((tag) => {
              const tagIcon = TAG_ICONS[tag] || faTools
              return <li key={tag}><FontAwesomeIcon icon={tagIcon} />{tag}</li>
            })}
          </ul>
        </>
      )}
    </div>
  )
}

function ServiceRequestForm() {
  const handleSubmit = (e) => e.preventDefault()
  return (
    <section className="service-form-section" style={serviceFormBg ? { backgroundImage: `url(${serviceFormBg})` } : undefined}>
      {!serviceFormBg && <div className="ph">Foto de fondo del formulario</div>}
      <div className="service-form-section__inner">
        <form className="service-form" onSubmit={handleSubmit}>
          <input type="text" name="pilot_firstname" placeholder="Nombre" required />
          <input type="text" name="pilot_cellphone" placeholder="Teléfono" required />
          <input type="email" name="pilot_email" placeholder="Email" required />
          <select name="pilot_region" defaultValue="" required>
            <option value="" disabled>Seleccione un taller</option>
            {serviceCenters.map((center) => (
              <option key={center.id} value={center.id}>{tallerLabel(center)}</option>
            ))}
          </select>
          <textarea name="pilot_message" placeholder="Consulta" rows={5} required />
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </section>
  )
}

export default function ServicePage() {
  const groups = useMemo(() => groupByProvince(serviceCenters), [])
  const [openProvince, setOpenProvince] = useState(null)

  const toggle = (province) => setOpenProvince((current) => (current === province ? null : province))

  return (
    <>
      <section className="page-hero" style={serviceHero ? { backgroundImage: `url(${serviceHero})` } : undefined}>
        {!serviceHero && <div className="ph">Foto de service BAIC</div>}
        <div className="page-hero__overlay" />
        <div className="page-hero__inner">
          <div className="page-hero__text--narrow">
            <h1>Centro de Servicios y Postventa</h1>
            <p>
              Nuestros técnicos especialistas te brindarán asistencia en todas tus consultas para garantizar el
              rendimiento óptimo de tu modelo BAIC.
            </p>
          </div>
        </div>
      </section>

      <div className="container service-page">
        <div className="service-accordion">
          {groups.map(([province, items]) => {
            const isOpen = openProvince === province
            return (
              <div key={province} className="service-accordion__item">
                <button
                  type="button"
                  className="service-accordion__header"
                  onClick={() => toggle(province)}
                >
                  {isOpen ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                  <span>{province}</span>
                </button>
                <div className={`service-accordion__panel-wrap${isOpen ? ' is-open' : ''}`}>
                  <div className="service-accordion__panel-inner">
                    <div className="service-accordion__panel">
                      {items.map((center) => <ServiceCard key={center.id} center={center} />)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <hr className="service-accordion__divider" />
        </div>
      </div>

      <ServiceRequestForm />
    </>
  )
}
