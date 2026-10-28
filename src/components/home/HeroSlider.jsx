import { useEffect, useRef, useState } from 'react'
import { AppLink } from '../ui/index.js'
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/index.js'
import { heroSlides } from '../../data/heroSlides.js'

// Mismo timing que baic.com.ar (Swiper real, inspeccionado con devtools):
// delay 5000ms, disableOnInteraction:false (al navegar a mano el contador se reinicia en vez de detenerse),
// no se pausa con el mouse encima (pauseOnMouseEnter:false).
const AUTOPLAY_DELAY = 5000

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  const restartAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length)
    }, AUTOPLAY_DELAY)
  }

  useEffect(() => {
    restartAutoplay()
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (i) => {
    setCurrent((i + heroSlides.length) % heroSlides.length)
    restartAutoplay() // igual que el sitio real: navegar a mano reinicia el contador de 5s
  }

  return (
    <section className="hero">
      {heroSlides.map((slide, i) => (
        <div key={slide.id} id={`slide-${slide.id}`} className={`slide ${slide.variant ? `slide-${slide.variant}` : ''} ${i === current ? 'active' : ''}`}>
          {slide.image ? (
            <picture>
              {slide.mobileImage && <source media="(max-width:900px)" srcSet={slide.mobileImage} />}
              <img className="slide-bg-img" src={slide.image} alt={slide.title} />
            </picture>
          ) : (
            <div className="ph">Banner {slide.title}</div>
          )}
          <div className="slide-overlay" />
          <div className={`slide-content pos-${slide.position || 'left'}`}>
            {slide.logo ? (
              <img className={`slide-logo ${slide.logoClass || ''}`} src={slide.logo} alt={slide.title} />
            ) : (
              <h2>{slide.title}</h2>
            )}
            {slide.to.startsWith('http') ? (
              <a href={slide.to} target="_blank" rel="noreferrer" className="slide-cta">{slide.cta}</a>
            ) : (
              <AppLink to={slide.to} className="slide-cta">{slide.cta}</AppLink>
            )}
            {slide.promo && (
              <div className="slide-promo">
                <span className="slide-promo__label">{slide.promo.top}</span>
                <span className="slide-promo__big">{slide.promo.big[0]}</span>
                <span className="slide-promo__big slide-promo__big--accent">{slide.promo.big[1]}</span>
                <span className="slide-promo__label">{slide.promo.bottom}</span>
              </div>
            )}
          </div>
        </div>
      ))}
      <button className="slide-arrow prev" onClick={() => goTo(current - 1)} aria-label="Anterior">
        <ChevronLeftIcon size={26} />
      </button>
      <button className="slide-arrow next" onClick={() => goTo(current + 1)} aria-label="Siguiente">
        <ChevronRightIcon size={26} />
      </button>
      <div className="slide-dots">
        {heroSlides.map((slide, i) => (
          <button key={slide.id} className={`dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} aria-label={`Ir a slide ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}
