import proximamenteDesktop from '../../assets/images/hero/baic-pacheco-proximamente-desktop.png'
import proximamenteMobile from '../../assets/images/hero/baic-pacheco-proximamente-mobile.png'

// Banner temporal de "Próximamente" para BAIC Pacheco: reemplaza el slider de autos
// mientras se termina de armar el contenido real del concesionario. Reutiliza las
// mismas clases .hero / .slide-bg-img del slider (mismo alto/comportamiento full-bleed
// en desktop y mobile), pero sin flechas, dots ni autoplay -es una sola imagen fija-.
// Hay dos artes (horizontal 16:9 para PC, vertical 9:16 para celular) para que se vea
// completa y sin recortes de logo/texto en ambos casos.
export default function ComingSoonBanner() {
  return (
    <section className="hero hero--static">
      <picture>
        <source media="(orientation: portrait)" srcSet={proximamenteMobile} />
        <img className="slide-bg-img" src={proximamenteDesktop} alt="BAIC Pacheco - Próximamente" />
      </picture>
    </section>
  )
}
