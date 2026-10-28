import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { downloads } from '../data/downloads.js'

const BRANDS = ['BAIC', 'ARCFOX']

export default function DownloadsPage() {
  return (
    <>
      <section className="downloads-hero">
        <h1>Universo BAIC & ARCFOX</h1>
      </section>
      <div className="container downloads-page">
        {BRANDS.map((brand) => {
          const items = downloads.filter((item) => item.brand === brand)
          if (!items.length) return null
          return (
            <div className="downloads-page__group" key={brand}>
              <h2 className="downloads-page__group-heading">{brand}</h2>
              <span className="downloads-page__group-rule" />
              <div className="downloads-grid">
                {items.map((item) => (
                  <div key={item.id} className="download-card">
                    <h4>{item.name}</h4>
                    {item.image && <img src={item.image} alt={item.name} className="download-card__img" />}
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noreferrer" className="download-card__btn">
                        <FontAwesomeIcon icon={faDownload} />
                        DESCARGAR FOTOS Y VIDEOS
                      </a>
                    ) : (
                      <span className="download-card__btn download-card__btn--disabled" aria-disabled="true">
                        <FontAwesomeIcon icon={faDownload} />
                        DESCARGAR FOTOS Y VIDEOS
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
