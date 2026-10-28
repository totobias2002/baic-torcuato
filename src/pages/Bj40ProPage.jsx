import { useEffect, useRef, useState, useCallback } from 'react'
import { bj40ProSlides, bj40ProHero, bj40ProReveal, DEFAULT_CAR_FRAME_INDEX } from '../data/bj40ProContent.js'

// BJ40 Pro usa, en el sitio real, un microsite aparte (baic.com.ar/bj40pro/) que es un
// slideshow a pantalla completa: cada "pantalla" ocupa el 100% del viewport y se avanza
// de a una con la rueda del mouse o el dedo (nunca hay scroll libre), con paginación a la
// derecha y flechas arriba/abajo. Este componente reproduce esa mecánica exacta -a
// diferencia del resto de los modelos, que son páginas de scroll normal- porque así es
// como se ve el original.

function StatValue({ value, active, suffix }) {
  const isNumeric = /^-?\d+(\.\d+)?$/.test(value)
  const target = parseFloat(value)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isNumeric || !active) return undefined
    const start = performance.now()
    const duration = 1800
    let raf
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(target * eased)
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, isNumeric, target])

  if (!isNumeric) return <strong>{value}</strong>
  const display = String(value).includes('.') ? current.toFixed(2) : Math.round(current).toLocaleString('es-AR')
  return <><strong>{display}</strong> {suffix}</>
}

// Confirmado con el usuario: NO hace falta scrollear varias veces para que el auto gire -un
// solo scroll ya cambia de pantalla, como en el resto del sitio. El "giro" es un efecto
// cortito y animado en el tiempo (no atado a la rueda) que se dispara justo en el momento de
// la transición entre pantallas (ver el efecto compartido `carFrame` en el componente
// principal): el auto pasa de su frame actual al de la próxima pantalla en ~650ms.
// El auto NO se renderiza acá adentro: es un único elemento compartido (ver <SharedCar> en
// el componente principal) que flota arriba de todas las pantallas, para que su posición y
// su frame de rotación se animen juntos en un solo tween continuo en vez de haber una copia
// del auto por cada tipo de pantalla (eso causaba el "salto"/doble-auto al cambiar de
// pantalla -ver nota en Bj40ProPage).
function HeroSlide({ active }) {
  return (
    <div className={`bj40pro-slide bj40pro-slide--hero ${active ? 'is-active' : ''}`}>
      <div className="bj40pro-slide__bg bj40pro-slide__bg--kenburns" style={{ backgroundImage: `url(${bj40ProHero.bg})` }} />
      <div className="bj40pro-hero-brand">
        <span className="bj40pro-hero-brand__tagline">{bj40ProHero.tagline}</span>
        <span className="bj40pro-hero-brand__model">{bj40ProHero.model}</span>
      </div>
    </div>
  )
}

// En el original, las pantallas de "sistema" (estructura, chasis, luces, puerta) muestran
// una línea punteada + puntito naranja sobre el auto, señalando la parte de la que habla la
// tarjeta -un detalle tipo rayos-x/callout que acá se aproxima con un punto + línea en CSS.
function ContentSlide({ slide, active }) {
  return (
    <div className={`bj40pro-slide bj40pro-split ${active ? 'is-active' : ''}`}>
      <div className="bj40pro-split__bg" style={{ backgroundImage: `url(${bj40ProHero.bg})` }} />
      {/* El punto+línea callout se renderiza como hermano del auto compartido, no acá adentro
          -ver el comentario junto a <img className="bj40pro-car-shared"> más abajo: adentro
          de .bj40pro-slide (z-index:2 como contexto de apilamiento) nunca podría superar al
          auto (z-index:3), sin importar qué z-index se le ponga. */}
      <div className="bj40pro-split__card">
        <div className="bj40pro-split__card-photo" style={{ backgroundImage: `url(${slide.bg})` }} />
        <div className="bj40pro-split__card-text">
          <h2>{slide.heading}</h2>
          <p>{slide.body}</p>
        </div>
      </div>
    </div>
  )
}

// En el original, elegir un terreno (Rocoso/Nevado/Desierto) cambia TODO el paisaje de
// fondo -no solo la foto chica de la tarjeta-, así que acá el fondo completo de la pantalla
// se reemplaza por la foto del paisaje elegido (con un fade al cambiar), y la tarjeta pasa a
// mostrar el detalle/nombre del modo en vez de repetir la misma foto de paisaje.
function AtsSlide({ slide, active, terrainIndex, onSelectTerrain }) {
  const terrain = slide.terrain[terrainIndex]
  return (
    <div className={`bj40pro-slide bj40pro-split bj40pro-split--ats ${active ? 'is-active' : ''}`}>
      {/* 3 capas apiladas como en el original: el mismo fondo de estudio con humo de siempre,
          la montaña del terreno arriba a la izquierda, y las rocas del primer plano abajo. */}
      <div className="bj40pro-split__bg" style={{ backgroundImage: `url(${bj40ProHero.bg})` }} />
      <div className="bj40pro-split__bg bj40pro-split__bg--terrain" key={`rockery-${terrain.label}`} style={{ backgroundImage: `url(${terrain.rockery})` }} />
      <div className="bj40pro-split__bg bj40pro-split__bg--terrain" key={`vista-${terrain.label}`} style={{ backgroundImage: `url(${terrain.bg})` }} />
      <div className="bj40pro-split__scrim" />
      <div className="bj40pro-split__card bj40pro-split__card--plain">
        <div className="bj40pro-split__card-photo bj40pro-split__card-photo--plain" style={{ backgroundImage: `url(${slide.bg})` }} />
        <div className="bj40pro-split__card-text">
          <h2>{slide.heading}</h2>
          <p>{slide.body}</p>
        </div>
      </div>
      <div className="bj40pro-terrain">
        {slide.terrain.map((t, i) => (
          <button
            key={t.label}
            type="button"
            className={`bj40pro-terrain__btn ${i === terrainIndex ? 'is-active' : ''}`}
            onClick={() => onSelectTerrain(i)}
          >
            <img src={t.icon} alt="" />
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// "Excelentes Datos Geométricos para Off-Road": el auto queda fijo (semi-perfil) mientras,
// paso a paso con el scroll, se superponen los diagramas técnicos (fondo transparente, no
// son fotos) y después dos barras de datos -igual mecánica que el reveal pero con el auto
// quieto en vez de girando.
// El título y los overlays (diagramas técnicos) de este slide NO se renderizan acá adentro:
// van afuera, junto al auto compartido (ver Bj40ProPage), porque necesitan quedar por ENCIMA
// del auto -que ahora es bastante más grande que antes- y el auto vive en un nivel de
// apilamiento distinto al de esta pantalla -ver nota grande junto a CAR_LAYOUTS y a
// .bj40pro-geo__title/.bj40pro-geo__overlay en el CSS.
function GeoSlide({ slide, active, step }) {
  const current = slide.steps[step]
  return (
    <div className={`bj40pro-slide bj40pro-geo ${active ? 'is-active' : ''}`}>
      <div className="bj40pro-split__bg" style={{ backgroundImage: `url(${bj40ProHero.bg})` }} />

      {current.stats && (
        <div className="bj40pro-specs-row bj40pro-geo__stats" key={step}>
          {current.stats.map((s) => (
            <div className="bj40pro-specs-row__item" key={s.label}>
              <span className="bj40pro-specs-row__label">{s.label}</span>
              <span className="bj40pro-specs-row__value"><StatValue value={s.value} suffix={s.suffix} active={active} /></span>
            </div>
          ))}
        </div>
      )}

      <div className="bj40pro-geo__progress">
        {slide.steps.map((_, i) => (
          <span key={i} className={`bj40pro-geo__progress-dot ${i === step ? 'is-active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

// "Diseño De Interiores": comparado en vivo contra baic.com.ar/baic-bj40pro/ (captura real del
// usuario navegando el sitio en producción). Layout real: título grande centrado ARRIBA de las
// fotos (no eyebrow chico superpuesto), 3 fotos lado a lado casi al borde de la pantalla (anterior
// oscurecida / actual grande y clara / siguiente oscurecida), flechas dobles «/» centradas DENTRO
// de cada foto lateral (no en los bordes de la página), sin scrim/gradiente sobre las fotos, y
// abajo el título+texto de la card CENTRADOS (no left-aligned) -y sin dots de paginación, no
// aparecen en el sitio real para esta pantalla.
// Carrusel circular: nunca "muere" en las puntas -al llegar a la última foto, la flecha
// derecha vuelve a la primera y viceversa- pedido explícito del usuario ("tiene que ser un
// carrusel", "no puedo ir a la izquierda"). Antes, en el extremo faltante se dejaba un panel
// vacío/deshabilitado, lo que además hacía que la flecha pareciera "moverse" al pasar de un
// estado con imagen a uno sin imagen. Ahora los 3 paneles siempre muestran una foto real y las
// flechas nunca se deshabilitan, así quedan fijas en el mismo lugar todo el tiempo.
function CarouselSlide({ slide, active, subIndex, onPrev, onNext }) {
  const n = slide.items.length
  const item = slide.items[subIndex]
  const prevItem = slide.items[(subIndex - 1 + n) % n]
  const nextItem = slide.items[(subIndex + 1) % n]
  return (
    <div className={`bj40pro-slide bj40pro-carousel3 ${active ? 'is-active' : ''}`}>
      <h2 className="bj40pro-carousel3__title">{slide.heading}</h2>

      <div className="bj40pro-carousel3__track">
        <div className="bj40pro-carousel3__item bj40pro-carousel3__item--side" style={{ backgroundImage: `url(${prevItem.image})` }}>
          <button type="button" className="bj40pro-carousel3__arrow" onClick={onPrev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15.5 4.5 8 12l7.5 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          key={subIndex}
          className="bj40pro-carousel3__item bj40pro-carousel3__item--center"
          style={{ backgroundImage: `url(${item.image})` }}
        />

        <div className="bj40pro-carousel3__item bj40pro-carousel3__item--side" style={{ backgroundImage: `url(${nextItem.image})` }}>
          <button type="button" className="bj40pro-carousel3__arrow" onClick={onNext} aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M8.5 4.5 16 12l-7.5 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bj40pro-carousel3__caption" key={subIndex}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>

      <div className="bj40pro-carousel-dots bj40pro-carousel-dots--center">
        {slide.items.map((_, i) => (
          <span key={i} className={`bj40pro-carousel-dots__dot ${i === subIndex ? 'is-active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

// "Experiencia de Conducción": a diferencia del carrusel de interiores, acá el original
// muestra las 3 fotos juntas en una grilla en vez de una foto a pantalla completa por vez;
// el título/texto de abajo cambia según cuál de las 3 esté seleccionada/activa.
function Grid3Slide({ slide, active, subIndex, onSelect }) {
  const item = slide.items[subIndex]
  return (
    <div className={`bj40pro-slide bj40pro-grid3 ${active ? 'is-active' : ''}`}>
      <span className="bj40pro-slide__eyebrow">{slide.heading}</span>
      <div className="bj40pro-grid3__row">
        {slide.items.map((it, i) => (
          <button
            key={it.title}
            type="button"
            className={`bj40pro-grid3__item ${i === subIndex ? 'is-active' : ''}`}
            onClick={() => onSelect(i)}
          >
            <img src={it.image} alt={it.title} draggable={false} />
          </button>
        ))}
      </div>
      <div className="bj40pro-grid3__caption" key={subIndex}>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
      <div className="bj40pro-carousel-dots bj40pro-carousel-dots--center">
        {slide.items.map((_, i) => (
          <span key={i} className={`bj40pro-carousel-dots__dot ${i === subIndex ? 'is-active' : ''}`} />
        ))}
      </div>
    </div>
  )
}

// Tabla final de especificaciones, igual que la última pantalla del sitio real -son 4
// categorías completas (Parámetros básicos / Tecnología y Seguridad / ADAS / Interior +
// Exterior, ~54 filas en total, contenido real pasado por el usuario), demasiado para entrar
// entero en una sola pantalla legible -por eso el contenedor scrollea internamente (scrollRef,
// ver onWheel en el componente padre: mientras no llegó al final de ESTA tabla, la rueda
// scrollea adentro en vez de pasar de pantalla).
function SpecTableSlide({ slide, active, scrollRef }) {
  return (
    <div className={`bj40pro-slide bj40pro-spectable ${active ? 'is-active' : ''}`}>
      <h2 className="bj40pro-spectable__title">{slide.heading}</h2>
      <div className="bj40pro-spectable__scroll" ref={scrollRef}>
        <div className="bj40pro-spectable__grid">
          {slide.sections.map((section) => (
            <div className="bj40pro-spectable__section" key={section.title}>
              <h3 className="bj40pro-spectable__section-title">{section.title}</h3>
              <div className="bj40pro-spectable__table">
                {section.rows.map((row) => (
                  <div className="bj40pro-spectable__row" key={row.label}>
                    <span className="bj40pro-spectable__label">{row.label}</span>
                    {row.value === '•'
                      ? <span className="bj40pro-spectable__check" aria-label="Sí" />
                      : <span className="bj40pro-spectable__value">{row.value}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Versión mobile: el microsite desktop depende de scroll-jacking con la rueda del mouse y de
// un auto que gira cuadro a cuadro (271 fotos precargadas) -mecánica pensada para
// mouse+trackpad, no para touch, y pesada para una conexión de celular. A pedido explícito
// del usuario ("versión simplificada" en vez de adaptar la experiencia completa), en mobile
// se muestra el mismo contenido pero como una página de scroll normal: una sección por
// pantalla del recorrido desktop, sin scroll-jacking, sin auto girando y sin precargar las
// 271 fotos del turntable.
function MobileContent({ slide }) {
  return (
    <section className="bj40pro-mobile__block">
      <img className="bj40pro-mobile__img" src={slide.bg} alt={slide.heading} loading="lazy" />
      <div className="bj40pro-mobile__text">
        <h2>{slide.heading}</h2>
        <p>{slide.body}</p>
      </div>
    </section>
  )
}

function MobileAts({ slide }) {
  const [i, setI] = useState(0)
  const terrain = slide.terrain[i]
  return (
    <section className="bj40pro-mobile__block">
      <img className="bj40pro-mobile__img" src={terrain.bg} alt={slide.heading} loading="lazy" />
      <div className="bj40pro-mobile__terrain">
        {slide.terrain.map((t, idx) => (
          <button
            key={t.label}
            type="button"
            className={`bj40pro-mobile__terrain-btn ${idx === i ? 'is-active' : ''}`}
            onClick={() => setI(idx)}
          >
            <img src={t.icon} alt="" />
            <span>{t.label}</span>
          </button>
        ))}
      </div>
      <div className="bj40pro-mobile__text">
        <h2>{slide.heading}</h2>
        <p>{slide.body}</p>
      </div>
    </section>
  )
}

function MobileGeo({ slide }) {
  // Los diagramas técnicos (overlays: es220mm/es750mm/esargument-img) son imágenes pensadas
  // para ir apareciendo una por una encima del auto durante el scroll-jacking de desktop -en
  // mobile, sin ese mecanismo, quedaban todas apiladas sueltas con espacios enormes entre
  // sí (se ven "flotando" en un fondo negro altísimo). Los mismos datos (ángulo de
  // aproximación/salida, altura al suelo, profundidad de vadeo) ya están en los "stats" de
  // abajo en formato tarjeta, prolijo -así que en mobile mostramos sólo eso, sin los overlays.
  const statSteps = slide.steps.filter((s) => s.stats)
  return (
    <section className="bj40pro-mobile__block">
      <div className="bj40pro-mobile__text">
        <h2>{slide.heading}</h2>
      </div>
      {statSteps.map((step, idx) => (
        <div className="bj40pro-mobile__stats" key={idx}>
          {step.stats.map((s) => (
            <div className="bj40pro-mobile__stat" key={s.label}>
              <strong>{s.value}{s.suffix ? ` ${s.suffix}` : ''}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

function MobileCarousel({ slide }) {
  return (
    <section className="bj40pro-mobile__block">
      <div className="bj40pro-mobile__text">
        <h2>{slide.heading}</h2>
      </div>
      <div className="bj40pro-mobile__gallery">
        {slide.items.map((item) => (
          <div className="bj40pro-mobile__gallery-item" key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function MobileSpecs({ slide }) {
  return (
    <section className="bj40pro-mobile__block bj40pro-mobile__block--specs">
      <h2 className="bj40pro-spectable__title">{slide.heading}</h2>
      <div className="bj40pro-spectable__grid bj40pro-spectable__grid--mobile">
        {slide.sections.map((section) => (
          <div className="bj40pro-spectable__section" key={section.title}>
            <h3 className="bj40pro-spectable__section-title">{section.title}</h3>
            <div className="bj40pro-spectable__table">
              {section.rows.map((row) => (
                <div className="bj40pro-spectable__row" key={row.label}>
                  <span className="bj40pro-spectable__label">{row.label}</span>
                  {row.value === '•'
                    ? <span className="bj40pro-spectable__check" aria-label="Sí" />
                    : <span className="bj40pro-spectable__value">{row.value}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Bj40ProPage() {
  const total = bj40ProSlides.length
  const [activeIndex, setActiveIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [terrainIndex, setTerrainIndex] = useState(0)
  const [released, setReleased] = useState(false)
  const lockRef = useRef(false)
  const touchStartRef = useRef(0)
  const rootRef = useRef(null)
  const specTableRef = useRef(null)

  // Mobile: recorrido normal (sin scroll-jacking ni auto animado) en vez de la experiencia
  // desktop -ver nota grande junto a <MobileContent> más arriba.
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)')
    const onChange = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Precarga las 271 fotos del reveal para que el "giro" con scroll no tenga saltos/loading
  // -sólo hace falta en la experiencia desktop, en mobile no se usa el auto girando.
  useEffect(() => {
    if (isMobile) return undefined
    bj40ProReveal.frames.forEach((src) => { const img = new Image(); img.src = src })
    return undefined
  }, [isMobile])

  const currentSlide = bj40ProSlides[activeIndex]
  // Pedido explícito del usuario: en las pantallas de carrusel (Diseño De Interiores /
  // Experiencia De Conducción) la rueda del mouse ya NO tiene que ir pasando foto por foto
  // -eso ahora es sólo trabajo de las flechas «/»-, un solo gesto de scroll tiene que llevar
  // directo a la siguiente pantalla. Por eso 'carousel' se sacó de isCarousel (que es lo que
  // hace que la rueda quede "atrapada" pasando sub-items antes de avanzar de pantalla);
  // 'grid3' queda por si algún día se reintroduce ese tipo de pantalla con sub-pasos.
  const isCarousel = currentSlide.type === 'grid3'
  const isGeo = currentSlide.type === 'geo'
  const subMax = isCarousel
    ? currentSlide.items.length - 1
    : isGeo ? currentSlide.steps.length - 1 : 0

  // El giro del auto es un efecto animado en el tiempo (no atado a la rueda): cada vez que
  // cambia la pantalla activa, el auto pasa de su frame actual al frame de la nueva pantalla
  // -un solo scroll ya cambia de pantalla, como en el resto del sitio. La secuencia real tiene
  // 271 fotos (una vuelta completa de 360°, ver bj40ProReveal): a medida que la vuelta avanza
  // el auto va girando naturalmente hacia la izquierda, así que cada pantalla usa un frame más
  // adelante que la anterior -sin espejar nada. (Antes se probó espejar con CSS para "ahorrar"
  // frames, pero al no ser el mismo frame base todo el tiempo, mezclar espejado con un salto
  // grande de frame terminaba pareciendo que el auto giraba sin control -por eso ahora es
  // siempre un único tramo, frame real, sin flip.)
  // ms por frame recorrido, con piso/techo para que un salto de pocos frames no sea
  // instantáneo y uno grande no se sienta eterno.
  const MS_PER_FRAME = 16
  const MIN_DURATION = 380
  const MAX_DURATION = 620
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2)
  // Entre "Tecnología Lumínica" (frame 21) y "Sensación De Libertad Total" (frame 238) el
  // salto es de 217 frames -~2.6x más que cualquier otra transición de la app (la más grande
  // hasta ahora rondaba 80-100 frames, p.ej. 4WD→ATS). Probé forzarlo a la misma duración corta
  // que el resto (620ms, después 900ms): el usuario reportó que así "da 200 millones de
  // vueltas". No es que las fotos intermedias del turntable estén mal -es simplemente DEMASIADA
  // rotación para tan poco tiempo, se ve como girar a máxima velocidad en vez de un giro
  // prolijo. La solución no es ocultar frames ni hacerlo rígido (ambas cosas ya se probaron y
  // no andaban, ver conversación) sino darle más tiempo PROPORCIONAL a la distancia real que
  // tiene que recorrer -sigue siendo rápido en términos absolutos (1-1.5s), simplemente ya no
  // fuerza 2.6x más rotación en el mismo ratito que el resto.
  const FRAME_JUMP_LARGE_THRESHOLD = 150

  // El auto es UN SOLO elemento compartido (se renderiza una sola vez, fuera de las pantallas
  // -ver <img className="bj40pro-car-shared"> más abajo) en vez de que cada tipo de pantalla
  // dibuje su propia copia. Antes cada pantalla (hero/split/geo) tenía su propio <img> del auto
  // en su propia posición, y como el pager mantiene montada la pantalla saliente durante el
  // fundido de pantalla a pantalla, se llegaban a ver DOS autos superpuestos en dos posiciones
  // distintas mezclándose -eso era el "se mueve para todos lados" que reportó el usuario. Con
  // un único auto compartido eso es imposible por diseño: no hay copia que fantasmee.
  // Además, la POSICIÓN (left/bottom/width, qué tan grande y para dónde está corrido el auto
  // en pantalla) se interpola en el mismo tween que el frame de rotación, así que moverse de
  // pantalla en pantalla es un solo movimiento continuo (gira Y se desliza a la vez) en vez de
  // girar suave pero "teletransportarse" de golpe a la posición de la nueva pantalla.
  const CAR_LAYOUTS = {
    // Hero: auto MUY grande, bien sangrado a la izquierda (foto fuente con mucho piso vacío).
    hero: { left: -9, bottom: -14, width: 128 },
    // Pantallas de sistema (4WD/ATS): antes quedaba muy pegado al borde izquierdo -corrido
    // un poco más al centro/derecha a pedido del usuario.
    split: { left: 2, bottom: -4, width: 100 },
    // Geo (perfil fijo): en la referencia real el auto es GRANDE, casi de punta a punta de
    // la pantalla (no chico y centrado como se había puesto antes) -recalibrado comparando
    // con captura real de baic.com.ar/baic-bj40pro/ (4to scroll).
    geo: { left: 4, bottom: -2, width: 104 }
  }
  const getCarSection = (type) => (type === 'hero' ? 'hero' : type === 'ats' || type === 'content' ? 'split' : type === 'geo' ? 'geo' : null)

  const [carFrame, setCarFrame] = useState(() => bj40ProSlides[0].carFrameIndex ?? DEFAULT_CAR_FRAME_INDEX)
  const [carLayout, setCarLayout] = useState(() => CAR_LAYOUTS[getCarSection(bj40ProSlides[0].type)] ?? CAR_LAYOUTS.split)
  const [carVisible, setCarVisible] = useState(() => getCarSection(bj40ProSlides[0].type) !== null)
  const carFrameRef = useRef(carFrame)
  const carLayoutRef = useRef(carLayout)
  // El pointer (punto+línea) de las pantallas de "sistema" no debe aparecer mientras el auto
  // todavía se está moviendo/acomodando a su lugar -pedido explícito: el primer punto recién
  // se pone cuando el auto YA quedó bien posicionado. carSettled arranca en false apenas
  // cambia la pantalla activa (si hace falta tween) y pasa a true cuando el tween termina (o
  // de una si no hacía falta tween); el pointer solo se monta -y por lo tanto solo empieza su
  // propia secuencia animada- una vez carSettled es true (ver más abajo, junto al auto).
  const [carSettled, setCarSettled] = useState(true)
  useEffect(() => {
    const slide = bj40ProSlides[activeIndex]
    const section = getCarSection(slide.type)
    setCarVisible(section !== null)

    // BUG encontrado: acá decía "se congela el frame donde estaba" pero el código nunca
    // chequeaba `section` -siempre resolvía a slide.carFrameIndex/DEFAULT, incluso en
    // pantallas SIN auto (carrusel/tabla). Entonces cada vez que pasabas por una de esas
    // pantallas (invisibles) el frame igual saltaba "en secreto" al default (21), y al volver
    // a una pantalla CON auto el tween arrancaba desde ese 21 en vez de desde el último frame
    // realmente visto -de ahí el "el auto da 200 millones de vueltas" al volver para arriba:
    // terminaba girando por TODO el rango del turntable en vez de un tramo corto. Fix: igual
    // que con targetLayout, si la pantalla nueva no tiene auto, el frame se congela donde
    // estaba (carFrameRef.current), no se toca hasta la próxima pantalla que sí tenga auto.
    const targetFrame = section ? (slide.carFrameIndex ?? DEFAULT_CAR_FRAME_INDEX) : carFrameRef.current
    const fromFrame = carFrameRef.current
    // Si la pantalla nueva no tiene auto (carrusel/tabla), se congela la posición/frame donde
    // estaba (solo se desvanece vía opacity) para retomar suave si se vuelve a una con auto.
    // carImageLayout: la foto fija de Estructura Tubular (chejia.webp) no tiene el mismo
    // encuadre/recorte que las 271 fotos del turntable -el auto ocupa una porción bien
    // distinta de SU canvas-, así que necesita su propio left/bottom/width en vez del
    // CAR_LAYOUTS.split genérico (si no, queda gigante y se come la tarjeta).
    const targetLayout = section ? (slide.carImageLayout ?? CAR_LAYOUTS[section]) : carLayoutRef.current
    const fromLayout = carLayoutRef.current
    if (fromFrame === targetFrame && fromLayout.left === targetLayout.left && fromLayout.bottom === targetLayout.bottom && fromLayout.width === targetLayout.width) {
      setCarSettled(true)
      return undefined
    }

    setCarSettled(false)
    const dist = Math.abs(targetFrame - fromFrame)
    const isLargeJump = dist > FRAME_JUMP_LARGE_THRESHOLD
    // Historial de intentos con este salto grande (21→238, 217 frames) que el usuario probó y
    // rechazó en vivo: (1) interpolar derecho en la misma duración corta -> "da 200 millones de
    // vueltas"; (2) la misma interpolación con más tiempo (900ms-1.5s) -> seguía viéndose como
    // que "da vueltas/oscila, va para atrás, vuelve". Esto último es la prueba de que el tramo
    // de frames entre 21 y 238 del turntable NO es una rotación prolija en una sola dirección
    // -por más lento que se recorra, ir mostrando esos frames intermedios en orden se ve como
    // idas y vueltas, no como un giro. Pedido final explícito del usuario: que quede DIRECTO en
    // su posición, sin ir para atrás ni oscilar. Por eso los saltos grandes ya no animan el
    // frame en absoluto -pasan directo al frame final-, mientras que la posición/tamaño en
    // pantalla sí se siguen deslizando suave (así el auto no se "teletransporta" de golpe,
    // aunque el cambio de pose en sí sea inmediato).
    const duration = isLargeJump ? MIN_DURATION : Math.min(MAX_DURATION, Math.max(MIN_DURATION, dist * MS_PER_FRAME))
    const start = performance.now()
    let raf
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = easeInOutQuad(t)
      const frameValue = isLargeJump ? targetFrame : Math.round(fromFrame + (targetFrame - fromFrame) * eased)
      const layoutValue = {
        left: fromLayout.left + (targetLayout.left - fromLayout.left) * eased,
        bottom: fromLayout.bottom + (targetLayout.bottom - fromLayout.bottom) * eased,
        width: fromLayout.width + (targetLayout.width - fromLayout.width) * eased
      }
      carFrameRef.current = frameValue
      carLayoutRef.current = layoutValue
      setCarFrame(frameValue)
      setCarLayout(layoutValue)
      if (t < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setCarSettled(true)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [activeIndex])
  // Algunas pantallas (Estructura Tubular) no usan una foto más del turntable: tienen su
  // propia foto fija (carImage, ver bj40ProContent.js) que reemplaza a la tweened -el tween de
  // frame sigue corriendo igual atrás (por si la pantalla siguiente vuelve a ser una del
  // turntable, así el "from" de esa próxima transición es correcto), simplemente no se
  // muestra mientras carImage esté activo.
  const carSrc = currentSlide.carImage ?? bj40ProReveal.frames[carFrame]

  const lock = useCallback((ms = 750) => {
    lockRef.current = true
    window.setTimeout(() => { lockRef.current = false }, ms)
  }, [])

  // Al entrar a una pantalla desde "atrás" (retrocediendo), conviene arrancar en su último
  // sub-estado (última foto del carrusel) en vez de resetear a 0, para que ir para atrás se
  // sienta continuo.
  const goTo = useCallback((index, fromDir = 1) => {
    if (index < 0 || index > total - 1) return
    lock()
    setActiveIndex(index)
    const target = bj40ProSlides[index]
    if (fromDir < 0 && (target.type === 'carousel' || target.type === 'grid3')) setSubIndex(target.items.length - 1)
    else if (fromDir < 0 && target.type === 'geo') setSubIndex(target.steps.length - 1)
    else setSubIndex(0)
    if (index !== activeIndex) setTerrainIndex(0)
  }, [activeIndex, lock, total])

  const advance = useCallback((dir) => {
    if (lockRef.current) return false

    if (isCarousel || isGeo) {
      if (dir > 0 && subIndex < subMax) { lock(); setSubIndex((s) => s + 1); return true }
      if (dir < 0 && subIndex > 0) { lock(); setSubIndex((s) => s - 1); return true }
    }

    if (dir > 0) {
      if (activeIndex < total - 1) { goTo(activeIndex + 1, 1); return true }
      setReleased(true)
      return false
    }
    if (activeIndex > 0) { goTo(activeIndex - 1, -1); return true }
    return false
  }, [activeIndex, goTo, isCarousel, isGeo, lock, subIndex, subMax, total])

  // Mientras no se llegó a la última pantalla, cada gesto de rueda/touch/flecha avanza
  // exactamente una pantalla (preventDefault bloquea el scroll nativo). Al llegar al final
  // se deja de interceptar el wheel y el scroll normal del navegador revela el footer.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const onWheel = (e) => {
      if (released) return

      // La tabla de especificaciones (última pantalla) es más larga que un viewport -tiene
      // scroll interno propio (ver .bj40pro-spectable__scroll). Mientras esa tabla no llegó a
      // su límite en la dirección del gesto, dejamos que la rueda la scrollee A ELLA (sin
      // preventDefault ni avanzar de pantalla); recién cuando ya está en el tope/fondo, la
      // rueda vuelve a comportarse como en el resto del recorrido (avanza/retrocede pantalla).
      if (currentSlide.type === 'spectable' && specTableRef.current) {
        const el = specTableRef.current
        const atTop = el.scrollTop <= 0
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
        if (e.deltaY > 0 && !atBottom) return
        if (e.deltaY < 0 && !atTop) return
      }

      // Se bloquea SIEMPRE el scroll nativo mientras dure el recorrido paginado (aunque
      // este evento puntual esté dentro de la ventana de lock), para que un gesto de rueda
      // con muchos eventos wheel seguidos no "filtre" scroll real de a poco.
      e.preventDefault()
      advance(e.deltaY > 0 ? 1 : -1)
    }
    const onKey = (e) => {
      if (released) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') advance(1)
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') advance(-1)
    }
    const onTouchStart = (e) => { touchStartRef.current = e.touches[0].clientY }
    const onTouchMove = (e) => {
      if (released) return
      if (currentSlide.type === 'spectable') return // deja scrollear la tabla con el dedo
      const delta = touchStartRef.current - e.touches[0].clientY
      if (Math.abs(delta) > 8) e.preventDefault()
    }
    const onTouchEnd = (e) => {
      if (currentSlide.type === 'spectable' && specTableRef.current) {
        const el = specTableRef.current
        const atTop = el.scrollTop <= 0
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
        const delta = touchStartRef.current - e.changedTouches[0].clientY
        if (delta > 0 && !atBottom) return
        if (delta < 0 && !atTop) return
      }
      const delta = touchStartRef.current - e.changedTouches[0].clientY
      if (Math.abs(delta) > 40) advance(delta > 0 ? 1 : -1)
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [advance, released, currentSlide])

  if (isMobile) {
    return (
      <div className="bj40pro-mobile">
        <div className="bj40pro-mobile__hero" style={{ backgroundImage: `url(${bj40ProHero.bg})` }}>
          <span className="bj40pro-mobile__eyebrow">{bj40ProHero.tagline}</span>
          <h1 className="bj40pro-mobile__model">{bj40ProHero.model}</h1>
        </div>
        {bj40ProSlides.slice(1).map((slide, i) => {
          if (slide.type === 'ats') return <MobileAts key={i} slide={slide} />
          if (slide.type === 'geo') return <MobileGeo key={i} slide={slide} />
          if (slide.type === 'carousel') return <MobileCarousel key={i} slide={slide} />
          if (slide.type === 'spectable') return <MobileSpecs key={i} slide={slide} />
          return <MobileContent key={i} slide={slide} />
        })}
      </div>
    )
  }

  return (
    <div className={`bj40pro ${released ? 'bj40pro--released' : ''}`} ref={rootRef}>
      <div className="bj40pro-pager">
        {bj40ProSlides.map((slide, i) => {
          const active = i === activeIndex
          if (!active && Math.abs(i - activeIndex) > 1) return null

          if (slide.type === 'hero') return <HeroSlide key={i} active={active} />
          if (slide.type === 'ats') {
            return (
              <AtsSlide
                key={i}
                slide={slide}
                active={active}
                terrainIndex={active ? terrainIndex : 0}
                onSelectTerrain={setTerrainIndex}
              />
            )
          }
          if (slide.type === 'geo') return <GeoSlide key={i} slide={slide} active={active} step={active ? subIndex : 0} />
          if (slide.type === 'carousel') {
            return (
              <CarouselSlide
                key={i}
                slide={slide}
                active={active}
                subIndex={active ? subIndex : 0}
                onPrev={() => setSubIndex((s) => (s - 1 + slide.items.length) % slide.items.length)}
                onNext={() => setSubIndex((s) => (s + 1) % slide.items.length)}
              />
            )
          }
          if (slide.type === 'grid3') {
            return (
              <Grid3Slide
                key={i}
                slide={slide}
                active={active}
                subIndex={active ? subIndex : 0}
                onSelect={setSubIndex}
              />
            )
          }
          if (slide.type === 'spectable') return <SpecTableSlide key={i} slide={slide} active={active} scrollRef={specTableRef} />
          return <ContentSlide key={i} slide={slide} active={active} />
        })}

        {/* Auto único, compartido por todas las pantallas -ver nota grande arriba de
            CAR_LAYOUTS. Se anima con inline style (no CSS transition) porque el propio JS ya
            interpola cada frame vía requestAnimationFrame en sync con la rotación. */}
        <img
          className="bj40pro-car-shared"
          src={carSrc}
          alt="BJ40 Pro"
          draggable={false}
          style={{
            left: `${carLayout.left}%`,
            bottom: `${carLayout.bottom}%`,
            width: `${carLayout.width}%`,
            opacity: carVisible ? 1 : 0
          }}
        />

        {/* Punto + línea punteada + OTRO punto al final -en el original la línea conecta un
            punto sobre el auto (p.ej. la puerta delantera) con un segundo punto justo arriba
            de la tarjeta, y de ahí "sale" la foto. Va acá afuera, hermano del auto, para poder
            quedar POR ENCIMA de él (z-index:5 vs 3) -si viviera adentro de .bj40pro-slide
            nunca podría taparlo, ver nota arriba. Es una SECUENCIA animada (no todo aparece
            junto): primero el punto naranja sobre el auto, después la línea "recorriendo"
            hasta el segundo punto, y recién ahí se despliega la tarjeta. key={activeIndex}
            fuerza que React vuelva a montar el elemento (en vez de reusar el nodo) cada vez
            que cambia la pantalla activa, así la animación arranca de cero siempre, incluso
            entre dos pantallas seguidas que ambas tengan pointer. */}
        {currentSlide.pointer && carSettled && (
          <div
            key={activeIndex}
            className="bj40pro-split__pointer"
            style={{ top: currentSlide.pointer.top, left: currentSlide.pointer.left }}
          >
            <span className={`bj40pro-split__pointer-dot${currentSlide.pointer.white ? ' bj40pro-split__pointer-dot--white' : ''}`} />
            {/* Tecnología Lumínica (naranja) y Sensación De Libertad Total (blanco, sobre la
                manija de la puerta): además del punto+línea+segundo punto de siempre, el
                primer punto tiene un anillo pulsante tipo radar alrededor -confirmado con
                captura real de baic.com.ar/baic-bj40pro/. */}
            {currentSlide.pointer.pulseFirstDot && (
              <span className={`bj40pro-split__pointer-pulse${currentSlide.pointer.white ? ' bj40pro-split__pointer-pulse--white' : ''}`} />
            )}
            {currentSlide.pointer.endTop != null ? (
              // Camino en "L" (pedido explícito: la línea no puede cruzar por encima de la
              // foto de la tarjeta) -primero un tramo VERTICAL que sube desde el punto sobre
              // el auto, y recién arriba (siempre por encima del borde superior de la
              // tarjeta) un tramo HORIZONTAL en ángulo recto hasta el segundo punto. Los
              // tramos van en vh/vw (no %) porque son hijos del wrapper de 0x0 -un % de
              // altura/ancho ahí no tendría de dónde resolverse-, y como .bj40pro-pager mide
              // ~100vh/100vw, vh/vw terminan alineando con los % de top/left del wrapper.
              <span
                className="bj40pro-split__pointer-v"
                style={{ height: `${parseFloat(currentSlide.pointer.top) - parseFloat(currentSlide.pointer.endTop)}vh` }}
              >
                <span
                  className="bj40pro-split__pointer-h"
                  style={{ width: `${parseFloat(currentSlide.pointer.endLeft) - parseFloat(currentSlide.pointer.left)}vw` }}
                >
                  <span className="bj40pro-split__pointer-dot bj40pro-split__pointer-dot--end" />
                </span>
              </span>
            ) : (
              <span
                className="bj40pro-split__pointer-line"
                style={{ width: `${currentSlide.pointer.length}px`, '--angle': `${currentSlide.pointer.angle}deg` }}
              >
                <span className="bj40pro-split__pointer-dot bj40pro-split__pointer-dot--end" />
              </span>
            )}
          </div>
        )}

        {/* Título y diagramas de la pantalla Geo: van acá afuera (no adentro de GeoSlide) para
            poder quedar por encima del auto compartido, que es grande y si no lo taparía -ver
            nota en .bj40pro-geo__title/.bj40pro-geo__overlay (CSS). */}
        {isGeo && <h2 className="bj40pro-geo__title">{currentSlide.heading}</h2>}
        {/* es220mm trae "220mm altura al suelo" + "23° ángulo de paso" dibujados juntos en la
            misma imagen -el usuario pidió bajar ESE diagrama en particular (dejando el de
            "750mm profundidad de vadeo", es750mm, donde está), por eso el offset extra va acá
            con un inline style en vez de tocar la clase compartida .bj40pro-geo__overlay.
            Nota: el offset va en `bottom`, no en `transform` -la animación de entrada
            (bj40proSpecIn) también anima `transform` y pisa cualquier transform inline una vez
            termina, así que ahí no surtía efecto. */}
        {isGeo && currentSlide.steps[subIndex]?.overlays?.map((src) => (
          <img
            key={src}
            className="bj40pro-geo__overlay"
            src={src}
            alt=""
            style={src.includes('es220mm') ? { bottom: 'calc(-2% - 38px)' } : undefined}
          />
        ))}

        {/* Doble chevron apilado (no uno solo) -así se ve en el original tanto arriba como
            abajo. */}
        <button type="button" className="bj40pro-navchevron bj40pro-navchevron--up" onClick={() => advance(-1)} aria-label="Pantalla anterior" style={{ opacity: activeIndex === 0 ? 0.25 : 1 }}>
          <span>&#8963;</span>
          <span>&#8963;</span>
        </button>
        {/* Oculta en modo "released": ya no hay "siguiente pantalla" a la que avanzar (estás
            después de la última), y si se muestra pisa al botón "Volver al recorrido" que
            aparece en la misma franja inferior. */}
        {!released && (
          <button type="button" className="bj40pro-navchevron bj40pro-navchevron--down" onClick={() => advance(1)} aria-label="Pantalla siguiente">
            <span>&#8964;</span>
            <span>&#8964;</span>
          </button>
        )}

        <div className="bj40pro-dots">
          {bj40ProSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`bj40pro-dots__dot ${i === activeIndex ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a la pantalla ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {released && (
        <button
          type="button"
          className="bj40pro-back-top"
          onClick={() => {
            // El botón cambiaba el estado pero nunca movía el scroll nativo del navegador
            // -como "released" deja de bloquear la rueda, el usuario terminaba viendo el
            // footer/espacio en blanco de más abajo sin forma de volver a subir (la rueda
            // vuelve a estar hijackeada apenas released pasa a false). Por eso hay que
            // devolver el scroll nativo a 0 explícitamente antes de retomar el recorrido.
            window.scrollTo({ top: 0, behavior: 'auto' })
            setReleased(false)
            setActiveIndex(total - 1)
          }}
        >
          Volver al recorrido ↑
        </button>
      )}
    </div>
  )
}
