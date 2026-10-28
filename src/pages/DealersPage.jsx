import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDealers, selectDealers } from '../features/dealers/index.js'
import { MapPinIcon, PhoneIcon, WhatsappIcon, MailIcon, InstagramIcon, PlusIcon, MinusIcon } from '../components/icons/index.js'
import { dealersHero } from '../data/dealersHero.js'

// Mismo orden de provincias que baic.com.ar/concesionarios (no es alfabético).
const PROVINCE_ORDER = [
  'Buenos Aires', 'Ciudad Autónoma de Buenos Aires', 'Chubut', 'Córdoba', 'Entre Ríos',
  'Formosa', 'Jujuy', 'La Pampa', 'Mendoza', 'Misiones', 'Neuquén', 'Santa Fe',
  'San Juan', 'San Luis', 'Santa Cruz', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'
]

function groupByProvince(list) {
  const groups = new Map()
  list.forEach((dealer) => {
    const key = dealer.province || 'Otros'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(dealer)
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

function DealerCard({ dealer }) {
  return (
    <div className="dealer-card">
      <h4>{dealer.name}</h4>
      {dealer.address && (
        <p className="dealer-card__line">
          <MapPinIcon size={16} />
          {dealer.mapsUrl ? (
            <a href={dealer.mapsUrl} target="_blank" rel="noreferrer">{dealer.address}</a>
          ) : (
            <span>{dealer.address}</span>
          )}
        </p>
      )}
      {dealer.phone && (
        <p className="dealer-card__line">
          <PhoneIcon size={16} />
          {dealer.phoneHref ? <a href={dealer.phoneHref}>{dealer.phone}</a> : <span>{dealer.phone}</span>}
        </p>
      )}
      <div className="dealer-card__icons">
        {dealer.whatsapp && (
          <a href={`https://api.whatsapp.com/send/?phone=${dealer.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <WhatsappIcon size={18} />
          </a>
        )}
        {dealer.email && (
          <a href={`mailto:${dealer.email}`} aria-label="Email">
            <MailIcon size={18} />
          </a>
        )}
        {dealer.instagram && (
          <a href={dealer.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon size={18} />
          </a>
        )}
      </div>
    </div>
  )
}

export default function DealersPage() {
  const dispatch = useDispatch()
  const dealers = useSelector(selectDealers)
  const groups = useMemo(() => groupByProvince(dealers), [dealers])
  const [openProvince, setOpenProvince] = useState(null)

  useEffect(() => {
    dispatch(fetchDealers())
  }, [dispatch])

  const toggle = (province) => setOpenProvince((current) => (current === province ? null : province))

  return (
    <>
      <section className="page-hero" style={dealersHero ? { backgroundImage: `url(${dealersHero})` } : undefined}>
        {!dealersHero && <div className="ph">Foto de concesionarios BAIC</div>}
        <div className="page-hero__inner">
          <h1>Concesionarios</h1>
        </div>
      </section>

      <div className="container dealers-page">
        <div className="dealers-accordion">
          {groups.map(([province, items]) => {
            const isOpen = openProvince === province
            return (
              <div key={province} className="dealers-accordion__item">
                <button
                  type="button"
                  className={`dealers-accordion__header ${isOpen ? 'is-open' : ''}`}
                  onClick={() => toggle(province)}
                >
                  {isOpen ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                  <span>{province}</span>
                </button>
                <div className={`dealers-accordion__panel-wrap${isOpen ? ' is-open' : ''}`}>
                  <div className="dealers-accordion__panel-inner">
                    <div className="dealers-accordion__panel">
                      {items.map((dealer) => <DealerCard key={dealer.id} dealer={dealer} />)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
