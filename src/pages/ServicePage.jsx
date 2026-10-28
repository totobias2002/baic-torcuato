import { serviceHero } from '../data/serviceHero.js'

export default function ServicePage() {
  return (
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
  )
}
