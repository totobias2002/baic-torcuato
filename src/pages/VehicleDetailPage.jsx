import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVehicleBySlug, selectVehicleDetail, selectVehicleDetailStatus } from '../features/vehicleDetail/index.js'
import { modelDetails } from '../data/modelDetails.js'
import { arcfoxModelDetails } from '../data/arcfoxModelDetails.js'

function formatStatValue(current, original) {
  const isDecimal = String(original).includes('.')
  if (isDecimal) return current.toFixed(2)
  return Math.round(current).toLocaleString('es-AR')
}

function StatCounter({ value, active, duration = 2200 }) {
  const target = parseFloat(value)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active || Number.isNaN(target)) return undefined
    const start = performance.now()
    let raf
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(target * eased)
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return <strong>{formatStatValue(active ? current : 0, value)}</strong>
}


function Section({ section, index }) {
  const side = index % 2 === 0 ? 'is-right' : 'is-left'
  const isWideStats = Boolean(section.counters)
  const style = section.bg && !isWideStats && !section.fullPhoto ? { backgroundImage: `url(${section.bg})` } : undefined
  const sectionRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (!section.counters) return undefined
    const el = sectionRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [section.counters])

  // Sección especial de stats con contador animado: en vez de recortar la foto como
  // fondo (lo que tapaba el auto), se apila logo / foto completa / números para que
  // nada se superponga al vehículo, igual que se ve en la web original.
  if (isWideStats) {
    return (
      <section className={`vehicle-section vehicle-stats-section ${section.specTable ? 'vehicle-section--tall vehicle-stats-section--tall' : ''}`} ref={sectionRef}>
        <div
          className={`vehicle-stats-section__frame ${section.mobileFullPhoto ? 'vehicle-stats-section__frame--fit-m' : ''} ${section.mobileTextBelow ? 'vehicle-stats-section__frame--textbelow-m' : ''} ${section.mobileTextLeft ? 'vehicle-stats-section__frame--textleft-m' : ''} ${section.mobileTapReveal ? 'vehicle-stats-section__frame--taprev-m' : ''} ${section.mobileTapReveal && openIndex === 0 ? 'is-open' : ''}`}
          style={section.mobileFullPhoto ? { '--stats-frame-ratio-m': section.mobileFullPhoto.split('/').reduce((w, h) => Number(w) / Number(h)) } : undefined}
          onClick={() => {
            // Igual que en las secciones hoverReveal: en mobile no hay hover real, así que
            // el tap muestra/oculta la descripción (acá, los números) en vez de taparla
            // siempre encima de la foto.
            if (section.mobileTapReveal && window.matchMedia('(max-width: 900px)').matches) {
              setOpenIndex((cur) => (cur === 0 ? null : 0))
            }
          }}
        >
          {section.logo && <img src={section.logo} alt="" className="vehicle-stats-section__logo" />}
          {section.bg && (
            <img
              src={section.bg}
              alt=""
              className={`vehicle-stats-section__photo ${section.contain ? 'vehicle-stats-section__photo--contain' : ''} ${section.mobileContain ? 'vehicle-stats-section__photo--contain-m' : ''}`}
              style={(section.mobilePhotoPosition || section.photoPosition) ? {
                ...(section.mobilePhotoPosition ? { '--stats-photo-pos-m': section.mobilePhotoPosition } : null),
                ...(section.photoPosition ? { '--stats-photo-pos': section.photoPosition } : null),
              } : undefined}
            />
          )}
          <div className={`vehicle-stats vehicle-stats--center ${section.logo ? 'vehicle-stats--has-logo' : ''}`}>
            {section.items.map((s, i) => (
              <div className="vehicle-stats__item" key={i}>
                <span className="vehicle-stats__value">
                  {s.value && /^-?\d+(\.\d+)?$/.test(s.value)
                    ? <StatCounter value={s.value} active={statsVisible} />
                    : s.value && <strong>{s.value}</strong>} {s.suffix}
                </span>
                {s.label && <span className="vehicle-stats__label">{s.label}</span>}
              </div>
            ))}
          </div>
        </div>

        {section.specTable && (
          <div className="vehicle-spectable">
            <h2 className="vehicle-spectable__title">{section.specTable.heading}</h2>
            <div className="vehicle-spectable__grid">
              {section.specTable.sections.map((cat) => (
                <div className="vehicle-spectable__section" key={cat.title}>
                  <h3 className="vehicle-spectable__section-title">{cat.title}</h3>
                  <div className="vehicle-spectable__table">
                    {cat.rows.map((row) => (
                      <div className="vehicle-spectable__row" key={row.label}>
                        <span className="vehicle-spectable__label">{row.label}</span>
                        {row.value === '•'
                          ? <span className="vehicle-spectable__check" aria-label="Sí" />
                          : <span className="vehicle-spectable__value">{row.value}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    )
  }

  // Sección de foto completa con título siempre visible y texto que solo aparece
  // al pasar el cursor (mismo widget "premium-banner" que usa el original para "Interior").
  if (section.hoverReveal) {
    return (
      <section className={`vehicle-section vehicle-photogrid vehicle-photogrid--single ${section.captionTop ? 'vehicle-photogrid--top' : ''} ${section.fullPhoto ? 'vehicle-photogrid--full' : ''} ${section.items && section.type !== 'stats' ? 'vehicle-photogrid--list' : ''} ${section.type === 'stats' ? 'vehicle-photogrid--stats' : ''}`} ref={sectionRef}>
        <div
          className={`vehicle-photogrid__item ${section.staticReveal ? 'vehicle-photogrid__item--static' : ''} ${openIndex === 0 ? 'is-open' : ''}`}
          style={section.fullPhoto ? undefined : { backgroundImage: `url(${section.bg})`, backgroundPosition: section.bgPosition }}
          onClick={() => {
            // En desktop el despliegue es solo por hover cerca del título/texto (CSS
            // :has(.caption:hover)) -el click no debe hacer nada ahí. En mobile no hay
            // hover real, así que el tap sigue siendo la única forma de abrirlo.
            if (window.matchMedia('(max-width: 900px)').matches) {
              setOpenIndex((cur) => (cur === 0 ? null : 0))
            }
          }}
        >
          {section.fullPhoto && <img src={section.bg} alt="" className="vehicle-photogrid__full-img" />}
          <span className="vehicle-photogrid__scrim" />
          <div className="vehicle-photogrid__caption">
            {section.logo && (
              <>
                <img src={section.logo} alt="" className="vehicle-photogrid__logo" />
                <span className="vehicle-photogrid__logo-divider" />
              </>
            )}
            {section.heading && <span className={`vehicle-photogrid__title ${section.titlePlain ? 'vehicle-photogrid__title--plain' : ''}`}>{section.heading}</span>}
            {section.body?.map((p, i) => <p className="vehicle-photogrid__text" key={i}>{p}</p>)}
            {section.items && section.type !== 'stats' && (
              <ul className="vehicle-photogrid__list">
                {section.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            {section.type === 'stats' && (
              <div className="vehicle-photogrid__stats">
                {section.items.map((s, i) => (
                  <p className="vehicle-photogrid__stat" key={i}>
                    {s.value && <strong>{s.value}</strong>} {s.suffix}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Variante "cards": título centrado arriba + 3 fotos con caption abajo (no
  // superpuesto), sobre un fondo de interior desenfocado - calcada de la
  // sección "BJ40, DISEÑADO PARA SER..." del sitio real (baic.com.ar/baic-bj40).
  if (section.type === 'photo-grid' && section.cards) {
    return (
      <section className="vehicle-section vehicle-photogrid--cards" style={section.bg ? { backgroundImage: `url(${section.bg})` } : undefined} ref={sectionRef}>
        {section.bg && <div className="vehicle-section__scrim vehicle-section__scrim--full" />}
        <div className="vehicle-cards__inner">
          <div className="vehicle-cards__spacer vehicle-cards__spacer--top" />
          {section.heading && (
            <h2 className="vehicle-cards__heading">
              {section.headingAccent && section.heading.startsWith(section.headingAccent) ? (
                <>
                  <span className="accent">{section.headingAccent}</span>
                  {section.heading.slice(section.headingAccent.length)}
                </>
              ) : section.heading}
            </h2>
          )}
          <div className="vehicle-cards__spacer vehicle-cards__spacer--mid" />
          <div className="vehicle-cards__row">
            {section.items.map((item, i) => (
              <div className="vehicle-cards__card" key={i}>
                <div className="vehicle-cards__media">
                  <img src={item.image} alt="" />
                </div>
                <p className="vehicle-cards__caption">{item.title}{item.title && item.text ? ' ' : ''}{item.text}</p>
              </div>
            ))}
          </div>
          <div className="vehicle-cards__spacer vehicle-cards__spacer--bottom" />
        </div>
      </section>
    )
  }

  // Grilla de fotos (mosaico): reemplaza las cards de solo texto por las fotos reales
  // del modelo, con el título superpuesto abajo a la izquierda, igual que el original.
  // En mobile no hay :hover, así que además de la regla CSS de hover agregamos un
  // toggle por click/tap: tocar una card la abre (se lee el texto completo), volver
  // a tocarla (la misma o afuera) la cierra. En desktop el hover sigue funcionando
  // igual que antes, esto es un agregado, no un reemplazo.
  if (section.type === 'photo-grid') {
    return (
      <section
        className={`vehicle-section vehicle-photogrid vehicle-photogrid--${section.layout || 'equal'}`}
        ref={sectionRef}
      >
        {section.items.map((item, i) => (
          <div
            className={`vehicle-photogrid__item ${openIndex === i ? 'is-open' : ''} ${item.fullPhoto ? 'vehicle-photogrid__item--full' : ''}`}
            key={i}
            style={item.fullPhoto ? undefined : { backgroundImage: `url(${item.image})` }}
            onClick={() => item.text && setOpenIndex((cur) => (cur === i ? null : i))}
          >
            {item.fullPhoto && <img src={item.image} alt="" className="vehicle-photogrid__full-img" />}
            <span className="vehicle-photogrid__scrim" />
            {item.title && (
              <div className="vehicle-photogrid__caption">
                <span className="vehicle-photogrid__title">{item.title}</span>
                {item.text && <p className="vehicle-photogrid__text">{item.text}</p>}
              </div>
            )}
          </div>
        ))}
      </section>
    )
  }

  return (
    <section className={`vehicle-section ${side} ${section.bg ? '' : 'vehicle-section--plain'} ${section.rows ? 'vehicle-section--rows' : ''} ${section.specTable ? 'vehicle-section--tall' : ''} ${section.iconList || section.cornerGraphic ? 'vehicle-section--spread' : ''} ${section.textBottom ? 'vehicle-section--bottom-text' : ''} ${section.fullPhoto ? 'vehicle-section--full-photo' : ''}`} style={style} ref={sectionRef}>
      {section.fullPhoto && section.bg && <img src={section.bg} alt="" className="vehicle-section__full-photo" />}
      {section.bg && !section.fullPhoto && <div className="vehicle-section__scrim" />}
      <div className={`vehicle-section__inner ${section.wide ? 'vehicle-section__inner--wide' : ''}`}>
        {section.heading && <h2>{section.heading}</h2>}

        {section.type === 'text' && section.body.map((p, i) => <p key={i}>{p}</p>)}

        {section.iconList && (
          <div className="vehicle-iconlist">
            {section.iconList.map((item, i) => (
              <div className="vehicle-iconlist__item" key={i}>
                <img src={item.icon} alt="" className="vehicle-iconlist__icon" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {section.bodyAfter && section.bodyAfter.map((p, i) => <p className="vehicle-section__body-after" key={`after-${i}`}>{p}</p>)}

        {section.type === 'stats' && (
          <div className="vehicle-stats">
            {section.items.map((s, i) => (
              <div className="vehicle-stats__item" key={i}>
                {s.label && <span className="vehicle-stats__label">{s.label}</span>}
                <span className="vehicle-stats__value">
                  {s.value && <strong>{s.value}</strong>} {s.suffix}
                </span>
              </div>
            ))}
          </div>
        )}

        {section.type === 'list' && (
          <ul className="vehicle-list">
            {section.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}

        {section.cornerGraphic && (
          <img src={section.cornerGraphic} alt="" className="vehicle-section__corner-graphic" />
        )}

        {section.type === 'grid' && section.rows && (
          <div className="vehicle-rows">
            {section.items.map((item, i) => (
              <div className={`vehicle-rows__item ${i % 2 === 1 ? 'vehicle-rows__item--reverse' : ''}`} key={i}>
                <div className="vehicle-rows__media">
                  {item.video && <video src={item.video} autoPlay loop muted playsInline />}
                  {item.image && !item.video && <img src={item.image} alt="" />}
                </div>
                <div className="vehicle-rows__text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="vehicle-rows__divider">
                    {i % 2 === 1 && <span className="vehicle-rows__arrow">&#8250;</span>}
                    <span className="vehicle-rows__line" />
                    {i % 2 === 0 && <span className="vehicle-rows__arrow">&#8249;</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {section.type === 'grid' && !section.rows && (
          <div className="vehicle-grid">
            {section.items.map((item, i) => (
              <div className="vehicle-grid__item" key={i}>
                {item.video && (
                  <video className="vehicle-grid__media" src={item.video} autoPlay loop muted playsInline />
                )}
                {item.image && !item.video && (
                  <img className="vehicle-grid__media" src={item.image} alt="" />
                )}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {section.specTable && (
        <div className="vehicle-spectable">
          <h2 className="vehicle-spectable__title">{section.specTable.heading}</h2>
          <div className="vehicle-spectable__grid">
            {section.specTable.sections.map((cat) => (
              <div className="vehicle-spectable__section" key={cat.title}>
                <h3 className="vehicle-spectable__section-title">{cat.title}</h3>
                <div className="vehicle-spectable__table">
                  {cat.rows.map((row) => (
                    <div className="vehicle-spectable__row" key={row.label}>
                      <span className="vehicle-spectable__label">{row.label}</span>
                      {row.value === '•'
                        ? <span className="vehicle-spectable__check" aria-label="Sí" />
                        : <span className="vehicle-spectable__value">{row.value}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function GalleryCarousel({ images }) {
  const [index, setIndex] = useState(0)
  const count = images.length

  const goTo = (i) => setIndex(((i % count) + count) % count)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  useEffect(() => {
    images.forEach((src) => { const img = new Image(); img.src = src })
  }, [images])

  // Pasa sola cada 6 s. Se frena con el mouse encima o si la galería no está en
  // pantalla, y como el timer depende de `index`, un clic manual lo reinicia.
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return undefined
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (count < 2 || !visible || paused) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % count), 6000)
    return () => window.clearTimeout(t)
  }, [index, count, visible, paused])

  return (
    <section
      className="vehicle-gallery"
      ref={sectionRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div key={src} className={`vehicle-gallery__slide ${i === index ? 'is-active' : ''}`}>
          {/* Fondo desenfocado con la misma foto: en desktop la imagen de adelante
              (object-fit:cover) tapa esto por completo. En mobile la imagen de
              adelante pasa a object-fit:contain (ver CSS) para no recortar el auto,
              y este fondo rellena el espacio que deja libre arriba/abajo en vez de
              dejar franjas negras lisas. */}
          <div className="vehicle-gallery__backdrop" style={{ backgroundImage: `url(${src})` }} />
          <img src={src} alt="" className="vehicle-gallery__img" />
        </div>
      ))}

      <button type="button" className="vehicle-gallery__arrow vehicle-gallery__arrow--prev" onClick={prev} aria-label="Foto anterior">
        <span>&#8249;</span>
      </button>
      <button type="button" className="vehicle-gallery__arrow vehicle-gallery__arrow--next" onClick={next} aria-label="Foto siguiente">
        <span>&#8250;</span>
      </button>

      <div className="vehicle-gallery__dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`vehicle-gallery__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a la foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

// Sección de video a pantalla completa con controles nativos (no autoplay/loop),
// igual al video que usa el original justo después del hero. Sobre el poster se
// muestra un botón de play centrado (como el widget de video de Elementor); al
// arrancar la reproducción el botón desaparece y vuelve a aparecer si se pausa.
function VideoFeature({ src, poster }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlayClick = () => {
    const video = videoRef.current
    if (!video) return
    video.play()
  }

  return (
    <section className="vehicle-section vehicle-video-feature">
      <video
        ref={videoRef}
        className="vehicle-video-feature__media"
        src={src}
        poster={poster}
        controls
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button type="button" className="vehicle-video-feature__play" onClick={handlePlayClick} aria-label="Reproducir video">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </button>
      )}
    </section>
  )
}

function ThreeSixtyViewer({ images }) {
  const containerRef = useRef(null)
  // El sitio real (baic.com.ar) usa el plugin "Circlr" para este mismo widget: en vez de
  // ir cambiando el src de un único <img> en cada frame (lo que hacíamos nosotros), deja
  // las 37 fotos como <img> YA en el DOM desde el arranque, todas apiladas una encima de
  // otra, y para "girar" sólo alterna cuál está en display:block y cuál en display:none.
  // Esa es la diferencia real de fluidez: cada foto se decodifica UNA sola vez (su <img>
  // nunca cambia de src), y mostrar/ocultar es un cambio de estilo carísimo de barato para
  // el navegador -nada que ver con pedirle que resuelva/pinte un recurso "nuevo" en cada
  // frame. Replicamos exactamente ese mecanismo acá, con manipulación directa del DOM
  // (sin pasar por React) para el toggle de cada frame durante el arrastre, que es la
  // parte que tiene que responder al toque sin ningún intermediario de por medio.
  const frameElsRef = useRef([])
  const currentFrameRef = useRef(0)
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0, startFrame: 0, moved: false, axis: null })
  const rafRef = useRef(null)
  const pendingClientXRef = useRef(null)
  const [frame, setFrame] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [lens, setLens] = useState({ x: 0, y: 0 })
  const [aspectRatio, setAspectRatio] = useState(2400 / 1120)
  // El badge "360° VIEW" sólo se oculta con :hover -en mobile no hay hover, así que se
  // quedaba SIEMPRE tapando el auto (no había forma de verlo entero). Con este estado lo
  // sacamos apenas el usuario toca/arrastra una vez -ya entendió que se puede rotar.
  const [interacted, setInteracted] = useState(false)
  const [loadedCount, setLoadedCount] = useState(0)
  const frameCount = images.length
  const ready = loadedCount >= Math.max(frameCount - 1, 1)
  const lensSize = 170
  const zoomFactor = 2.4

  const setFrameEl = (i) => (el) => { frameElsRef.current[i] = el }

  // Aplica el frame directo sobre el DOM (display:none/block), sin pasar por React ni
  // por setState -así el drag responde al toque sin esperar ningún ciclo de render.
  const showFrame = (next) => {
    const els = frameElsRef.current
    const prev = currentFrameRef.current
    if (next === prev) return
    if (els[prev]) els[prev].style.display = 'none'
    if (els[next]) els[next].style.display = 'block'
    currentFrameRef.current = next
  }

  const applyPendingFrame = () => {
    rafRef.current = null
    if (pendingClientXRef.current === null || !containerRef.current) return
    const clientX = pendingClientXRef.current
    pendingClientXRef.current = null
    const rect = containerRef.current.getBoundingClientRect()
    const delta = clientX - dragRef.current.startX
    if (Math.abs(delta) > 3) dragRef.current.moved = true
    const framesDelta = Math.round((delta / rect.width) * frameCount * 1.6)
    let next = (dragRef.current.startFrame - framesDelta) % frameCount
    if (next < 0) next += frameCount
    showFrame(next)
  }

  const updateFrameFromDrag = (clientX) => {
    pendingClientXRef.current = clientX
    if (rafRef.current === null) rafRef.current = requestAnimationFrame(applyPendingFrame)
  }

  useEffect(() => () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }, [])

  const updateLens = (clientX, clientY) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    const y = Math.min(Math.max(clientY - rect.top, 0), rect.height)
    setLens({ x, y, rectW: rect.width, rectH: rect.height })
  }

  // El sitio original (widget "Threesixty Rotation" de Happy Elementor Addons) deja el
  // drag horizontal y el scroll vertical convivir sin problema en touch. Lo que rompía
  // nuestra versión no era el drag en sí, sino que decidíamos "es un arrastre" y
  // llamábamos setPointerCapture ANTES de saber para qué lado se movía el dedo -eso le
  // ganaba la mano al scroll nativo aunque el gesto fuera vertical. La solución real
  // (igual a como se comporta el sitio real) es un "axis lock": esperar a los primeros
  // píxeles de movimiento sin decidir nada, y recién ahí elegir según qué eje domina.
  // Si domina el vertical, soltamos todo y dejamos que el scroll de la página siga su
  // curso normal (nunca capturamos el puntero); si domina el horizontal, ahí sí se
  // agarra el puntero y se rota el auto. Esto anda igual para mouse y touch.
  const onPointerDown = (e) => {
    if (!ready) return
    setInteracted(true)
    dragRef.current = { dragging: true, startX: e.clientX, startY: e.clientY, startFrame: currentFrameRef.current, moved: false, axis: null }
  }
  const onPointerMove = (e) => {
    updateLens(e.clientX, e.clientY)
    if (!dragRef.current.dragging) return
    if (!dragRef.current.axis) {
      const dx = e.clientX - dragRef.current.startX
      const dy = e.clientY - dragRef.current.startY
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return
      if (Math.abs(dy) > Math.abs(dx)) {
        // Gesto vertical: no es para nosotros -lo soltamos sin haber tocado el scroll.
        dragRef.current.dragging = false
        return
      }
      dragRef.current.axis = 'x'
      try { containerRef.current.setPointerCapture(e.pointerId) } catch { /* noop */ }
    }
    if (dragRef.current.axis === 'x') updateFrameFromDrag(e.clientX)
  }
  const onPointerUp = (e) => {
    dragRef.current.dragging = false
    try { containerRef.current.releasePointerCapture(e.pointerId) } catch { /* noop */ }
    // Recién acá sincronizamos el estado de React (para el lens y demás UI que sí lo
    // necesitan) -mientras se arrastra, el frame vive sólo en el DOM/ref, sin renders.
    setFrame(currentFrameRef.current)
  }

  const showLens = hovering && !dragRef.current.dragging

  return (
    <div
      className={`threesixty ${!ready ? 'threesixty--loading' : ''}`}
      ref={containerRef}
      style={{ aspectRatio }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => { setHovering(false); dragRef.current.dragging = false }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          ref={setFrameEl(i)}
          src={src}
          alt={i === 0 ? 'Vista 360' : ''}
          className="threesixty__frame"
          style={{ display: i === 0 ? 'block' : 'none' }}
          draggable={false}
          onLoad={(e) => {
            setLoadedCount((c) => c + 1)
            if (i === 0) {
              const { naturalWidth, naturalHeight } = e.currentTarget
              if (naturalWidth && naturalHeight) setAspectRatio(naturalWidth / naturalHeight)
            }
          }}
          onError={() => setLoadedCount((c) => c + 1)}
        />
      ))}

      {!ready && (
        <div className="threesixty__loading">
          <span className="threesixty__spinner" />
          <small>{Math.round((loadedCount / frameCount) * 100)}%</small>
        </div>
      )}

      {showLens && lens.rectW && (
        <div
          className="threesixty__lens"
          style={{
            left: lens.x - lensSize / 2,
            top: lens.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            backgroundImage: `url(${images[frame]})`,
            backgroundSize: `${lens.rectW * zoomFactor}px ${lens.rectH * zoomFactor}px`,
            backgroundPosition: `-${lens.x * zoomFactor - lensSize / 2}px -${lens.y * zoomFactor - lensSize / 2}px`
          }}
        />
      )}

      <div className={`threesixty__badge ${interacted ? 'is-hidden' : ''}`}>
        <span>360°</span>
        <small>view</small>
      </div>
    </div>
  )
}

const DFLIP_CSS = '/media/baic/wp-content/plugins/3d-flipbook-dflip-lite/assets/css/dflip.min.css'
const DFLIP_JQUERY = '/media/baic/wp-includes/js/jquery/jquery.min.js'
// Todos los archivos de dflip se sirven desde nuestro propio origen (public/media/baic):
// un navegador NUNCA permite crear un Web Worker con una URL cross-origin (tira
// SecurityError pase lo que pase con los headers CORS), así que pdf.worker.min.js
// tiene que ser del mismo origen que la app. Sin esto, pdf.js no puede levantar su hilo
// de render y el libro se queda con la tapa fija: el contador de página avanza
// pero la hoja nunca cambia, y tirar "Cannot set properties of undefined
// (setting 'skipFlip')" al pasar de página.
const DFLIP_PDF = '/media/baic/wp-content/plugins/3d-flipbook-dflip-lite/assets/js/libs/pdf.min.js'
const DFLIP_PDF_WORKER = '/media/baic/wp-content/plugins/3d-flipbook-dflip-lite/assets/js/libs/pdf.worker.min.js'
const DFLIP_THREE = '/media/baic/wp-content/plugins/3d-flipbook-dflip-lite/assets/js/libs/three.min.js'
const DFLIP_JS = '/media/baic/wp-content/plugins/3d-flipbook-dflip-lite/assets/js/dflip.min.js'

function loadAsset(tag, attrs, testSelector) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(testSelector)
    if (existing) {
      if (existing.dataset.loaded === 'true') return resolve()
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', reject, { once: true })
      return
    }
    const el = document.createElement(tag)
    Object.entries(attrs).forEach(([k, v]) => { el[k] = v })
    el.addEventListener('load', () => { el.dataset.loaded = 'true'; resolve() }, { once: true })
    el.addEventListener('error', reject, { once: true })
    document.head.appendChild(el)
  })
}

// Widget "3D FlipBook - dFlip" idéntico al que usa baic.com.ar (mismo JS/CSS del plugin
// y misma estructura de markup + config que genera su shortcode de Elementor).
function DflipBrochure({ pdfUrl, slug, title }) {
  const bookId = `df_${slug}`
  const [broken, setBroken] = useState(false)

  useEffect(() => {
    let cancelled = false
    let guardEl = null
    let guardHandler = null
    let healTimer1 = null
    let healTimer2 = null

    loadAsset('link', { rel: 'stylesheet', href: DFLIP_CSS }, 'link[href*="dflip.min.css"]')
      .then(() => loadAsset('script', { src: DFLIP_JQUERY }, 'script[src*="jquery.min.js"]'))
      // El plugin necesita pdf.js y THREE.js cargados en window ANTES de
      // dflip.min.js (en baic.com.ar WordPress se encolan como dependencias
      // separadas, en este orden: jquery, pdf.min.js, three.min.js, dflip.min.js);
      // sin ellos el visor se queda con el spinner ("Unable to load THREE.js").
      .then(() => loadAsset('script', { src: DFLIP_PDF }, 'script[src*="pdf.min.js"]'))
      .then(() => {
        // En baic.com.ar, WordPress fija `workerSrc` vía un script inline propio
        // (wp_localize_script) que nosotros no ejecutamos; dflip.min.js igual lo
        // sobreescribe al iniciar el libro usando esa variable (quedando literal
        // "undefined" en la URL), así que fijamos un getter/setter que ignora
        // cualquier intento de pisarlo y siempre devuelve la URL correcta.
        if (window.pdfjsLib && window.pdfjsLib.GlobalWorkerOptions) {
          Object.defineProperty(window.pdfjsLib.GlobalWorkerOptions, 'workerSrc', {
            configurable: true,
            get() { return DFLIP_PDF_WORKER },
            set() { /* ignorar: dflip intenta pisarlo con una URL rota */ }
          })
        }
      })
      .then(() => loadAsset('script', { src: DFLIP_THREE }, 'script[src*="three.min.js"]'))
      .then(() => loadAsset('script', { src: DFLIP_JS }, 'script[src*="dflip.min.js"]'))
      .then(() => {
        if (cancelled) return
        const options = {
          outline: [],
          backgroundColor: '#FFFFFF',
          autoEnableOutline: 'false',
          autoEnableThumbnail: 'false',
          overwritePDFOutline: 'false',
          direction: '1',
          pageSize: '1',
          pageMode: '1',
          singlePageMode: '2',
          soundEnable: 'false',
          source: pdfUrl,
          wpOptions: 'true'
        }
        window[`option_${bookId}`] = options
        // DFLIP.parseBooks() deja el visor en modo "lazy" (espera a que un
        // IntersectionObserver detecte que entró en pantalla), pero con el
        // scroll paginado a JS de esta página ese observer nunca dispara y el
        // libro queda vacío. Iniciamos el visor directamente vía el plugin
        // jQuery ($.fn.flipBook) para que renderice apenas cargan los scripts.
        const $ = (window.DFLIP && window.DFLIP.jQuery) || window.jQuery
        const start = () => {
          if (cancelled) return
          if ($) {
            $(`#${bookId}`).flipBook(options)
          } else if (window.DFLIP && window.DFLIP.parseBooks) {
            window.DFLIP.parseBooks()
          }
        }
        // dflip mide el ancho/alto del contenedor al iniciar para armar un pool
        // fijo de "hojas" (sheets) que después recicla al pasar de página. Si en
        // ese momento el contenedor todavía mide 0 (típico si esta cadena de
        // scripts se resuelve casi instantáneo por venir de caché, antes de que
        // el navegador termine de darle layout al <div> recién montado), ese
        // pool queda vacío para siempre: el contador de página avanza pero la
        // hoja nunca cambia, y tirar errores de "skipFlip"/"render" en loop.
        // Esperamos al menos un frame de layout, y si todavía mide 0, seguimos
        // esperando frame a frame hasta que tenga tamaño real.
        const el = document.getElementById(bookId)
        // A veces dflip termina de inicializar en un estado roto por dentro: queda
        // "listo" (isViewerPrepared/isDocumentReady = true, contador de página
        // andando) pero el pool interno de "hojas" (sheets) que recicla para pintar
        // cada página nunca se llenó -confirmado en vivo con sheetsLen:0 y
        // state:"ready" al mismo tiempo, incluso esperando el tamaño del contenedor.
        // Es un bug del plugin, no un tema de timing nuestro. Si el usuario toca la
        // flecha de pasar página en ese estado, dflip tira "Cannot set properties of
        // undefined (setting 'skipFlip')" y la página nunca cambia. Interceptamos el
        // click ANTES de que le llegue a dflip (fase de captura) y, si el pool está
        // vacío, reconstruimos el visor desde cero ahí mismo en vez de dejar que
        // crashee sin hacer nada.
        if (el && $) {
          guardEl = el
          guardHandler = (ev) => {
            const app = $(`#${bookId}`).data('df-app')
            if (app && app.viewer && Array.isArray(app.viewer.sheets) && app.state === 'ready' && app.viewer.sheets.length === 0) {
              ev.stopPropagation()
              ev.preventDefault()
              el.innerHTML = ''
              start()
            }
          }
          el.addEventListener('click', guardHandler, true)
        }
        if (el && (el.clientWidth === 0 || el.clientHeight === 0)) {
          const waitForSize = () => {
            if (cancelled) return
            if (el.clientWidth > 0 && el.clientHeight > 0) return start()
            requestAnimationFrame(waitForSize)
          }
          requestAnimationFrame(waitForSize)
        } else {
          requestAnimationFrame(start)
        }

        // El guard de arriba sólo actúa si el usuario TOCA la flecha de pasar página
        // -si nunca toca nada, el visor puede quedar mostrando el "Loading PDF 100%"
        // de dflip para siempre, colgado (el bug de "sheets vacío" ya documentado,
        // pero sin que nadie lo dispare). Eso no es sólo un problema visual: dflip
        // sigue trabajando/reintentando de fondo mientras tanto, y ese trabajo de más
        // le puede robar cuadros al 360° si el usuario vuelve a esa sección. Acá
        // chequeamos solos, sin depender de un click, si a los 6s el libro sigue sin
        // páginas reales; si es así reconstruimos una vez, y si a los 6s siguientes
        // TODAVÍA no cargó, dejamos de insistir y mostramos un link directo al PDF
        // en vez de un visor roto consumiendo recursos para siempre.
        const checkSheets = () => {
          if (!$) return -1
          const app = $(`#${bookId}`).data('df-app')
          return app && app.viewer && Array.isArray(app.viewer.sheets) ? app.viewer.sheets.length : -1
        }
        healTimer1 = setTimeout(() => {
          if (cancelled) return
          const len = checkSheets()
          if (len > 0) return
          if (el) el.innerHTML = ''
          start()
          healTimer2 = setTimeout(() => {
            if (cancelled) return
            const len2 = checkSheets()
            if (len2 <= 0) setBroken(true)
          }, 6000)
        }, 6000)
      })
      .catch(() => { setBroken(true) })

    return () => {
      cancelled = true
      if (healTimer1) clearTimeout(healTimer1)
      if (healTimer2) clearTimeout(healTimer2)
      if (guardEl && guardHandler) guardEl.removeEventListener('click', guardHandler, true)
    }
  }, [pdfUrl, bookId])

  if (broken) {
    return (
      <div className="vehicle-brochure__fallback">
        <p>No pudimos cargar la vista previa del folleto.</p>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button--dark ui-button--md">Ver PDF</a>
      </div>
    )
  }

  return (
    <div
      className="_df_book df-lite df-element"
      id={bookId}
      _slug={slug}
      data-title={title}
      wpoptions="true"
      thumbtype=""
    />
  )
}

// DflipBrochure carga jQuery + pdf.js + pdf.worker.js + three.js + dflip.js (varios MB
// entre todos) y ARRANCA el visor (WebGL/canvas) apenas se monta. El problema: esta
// página renderiza TODAS sus secciones de una (incluida la del folleto, mucho más abajo
// que el 360°) desde el primer momento, así que ese trabajo pesado se disparaba en
// segundo plano apenas se entraba a la página -compitiendo por CPU con lo que el usuario
// esté haciendo arriba, como girar el 360°. Coincide exactamente con lo que describía el
// usuario: anda bien al toque y después, unos segundos más tarde, se pone pesado. Acá
// posponemos el montaje real de DflipBrochure hasta que la sección del folleto esté
// cerca de la pantalla (rootMargin generoso, para que ya esté lista si el usuario llega
// scrolleando), en vez de arrancarlo siempre de entrada.
function LazyBrochure(props) {
  const wrapperRef = useRef(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setNear(true)
          observer.disconnect()
        }
      },
      { rootMargin: '800px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // className="vehicle-brochure__viewer" (80vh desktop / 70vh mobile, ya definida en el
  // CSS) por dos motivos: (1) sin alto, este div vacío mide 0 y el IntersectionObserver
  // nunca lo detecta como "visible" -un elemento sin área no puede "intersectar" nada,
  // aunque esté physicamente dentro de la pantalla-, y (2) esta sección forma parte del
  // scroll paginado a JS de la página, que depende de que la altura de cada sección sea
  // estable desde el primer render; si el alto saltara de 0 a 80vh recién al montar el
  // visor real, se desalinearía el cálculo de a dónde saltar con cada scroll.
  return <div ref={wrapperRef} className={near ? undefined : 'vehicle-brochure__viewer'}>{near && <DflipBrochure {...props} />}</div>
}

export default function VehicleDetailPage() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const vehicle = useSelector(selectVehicleDetail)
  const status = useSelector(selectVehicleDetailStatus)
  const detail = modelDetails[slug] || arcfoxModelDetails[slug]
  const [colorIndex, setColorIndex] = useState(0)
  const containerRef = useRef(null)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    dispatch(fetchVehicleBySlug(slug))
    window.scrollTo(0, 0)
    setColorIndex(0)
  }, [dispatch, slug])

  // Scroll-snap nativo: refuerzo a nivel navegador para que cada pantalla (hero,
  // secciones, 360°) quede siempre completa a la vista, sin importar el dispositivo
  // de entrada (mouse, trackpad, barra de scroll) - el wheel handler de abajo hace la
  // animación suave, y esto asegura que el reposo final siempre caiga en un borde limpio.
  // OJO mobile: en pantallas chicas esto rompía el scroll -con 100vh calculado distinto
  // al viewport visible real (barra de direcciones) + scroll-snap-stop:always, el
  // usuario quedaba "atrapado" bajando de sección en sección y no podía volver a subir
  // hasta el navbar. En mobile (<=900px) directamente no se activa el snap.
  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return undefined
    document.documentElement.classList.add('vehicle-snap')
    return () => document.documentElement.classList.remove('vehicle-snap')
  }, [])

  // Scroll paginado: una rueda de mouse/trackpad avanza exactamente una pantalla,
  // igual que el comportamiento de la web original. Solo aplica a desktop (mouse/trackpad
  // con rueda) -en mobile el scroll es táctil y esto sólo generaba el mismo problema de
  // quedar atrapado sin poder llegar al navbar, así que se desactiva por completo ahí.
  useEffect(() => {
    if (detail?.comingSoon) return undefined
    if (window.matchMedia('(max-width: 900px)').matches) return undefined
    const container = containerRef.current
    if (!container) return undefined

    const getSections = () => Array.from(container.querySelectorAll('.vehicle-hero, .vehicle-video-feature, .vehicle-gallery, .vehicle-section, .vehicle-360, .vehicle-brochure'))

    const getCurrentIndex = (sections) => {
      const y = window.scrollY + 5
      let idx = 0
      sections.forEach((el, i) => {
        if (el.offsetTop <= y) idx = i
      })
      return idx
    }

    const animateTo = (el) => {
      isAnimatingRef.current = true
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => { isAnimatingRef.current = false }, 650)
    }

    const onWheel = (e) => {
      if (isAnimatingRef.current) { e.preventDefault(); return }
      const sections = getSections()
      if (!sections.length) return
      const currentIndex = getCurrentIndex(sections)
      const currentSection = sections[currentIndex]
      const lastSection = sections[sections.length - 1]
      const inFooterZone = window.scrollY > lastSection.offsetTop + lastSection.offsetHeight - 5

      // Algunas secciones (ej. la tabla de especificaciones bajo los stats) son más
      // altas que un viewport. Mientras no se llegó a su borde superior/inferior en la
      // dirección del gesto, se deja el scroll nativo (sin animar/saltar de pantalla).
      if (currentSection.classList.contains('vehicle-section--tall')) {
        const atTop = window.scrollY <= currentSection.offsetTop + 2
        const atBottom = window.scrollY + window.innerHeight >= currentSection.offsetTop + currentSection.offsetHeight - 2
        if (e.deltaY > 0 && !atBottom) return
        if (e.deltaY < 0 && !atTop) return
      }

      if (e.deltaY > 0) {
        if (currentIndex < sections.length - 1) {
          e.preventDefault()
          animateTo(sections[currentIndex + 1])
        }
        // en la última sección se deja el scroll libre para llegar al footer
      } else if (e.deltaY < 0) {
        if (inFooterZone) {
          e.preventDefault()
          animateTo(lastSection)
        } else if (currentIndex > 0) {
          e.preventDefault()
          animateTo(sections[currentIndex - 1])
        }
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [detail, slug, vehicle])

  if (status === 'loading' && !vehicle) return <div className="container"><p>Cargando modelo...</p></div>
  if (!vehicle) return <div className="container"><p>No encontramos este modelo.</p></div>

  if (detail?.comingSoon) {
    return (
      <section className="vehicle-teaser">
        <div className="vehicle-teaser__logo">BAIC</div>
        <h1 className="vehicle-teaser__model">{detail.hero.title}</h1>
        <p className="vehicle-teaser__tagline">{detail.hero.tagline[0]}</p>
      </section>
    )
  }

  const hero = detail?.hero
  const colors = detail?.colors
  const heroImage = (colors && colors[colorIndex]?.image) || detail?.heroImage || vehicle.image

  // Scroll animado a mano (setTimeout, no rAF) en vez de scrollIntoView/scrollTo con
  // behavior:'smooth': con el scroll-snap-type activo, el navegador cancela una animación
  // smooth nativa de larga distancia a mitad de camino (queda pegada al principio). Sacando
  // la clase que activa scroll-snap-type mientras dura la animación evitamos ese conflicto
  // y logramos un scroll continuo y natural, no un salto brusco.
  const scrollToBrochure = () => {
    const el = containerRef.current?.querySelector('.vehicle-brochure')
    if (!el) return
    const startY = window.scrollY
    const targetY = el.getBoundingClientRect().top + startY
    const distance = targetY - startY
    if (Math.abs(distance) < 2) return

    document.documentElement.classList.remove('vehicle-snap')
    const duration = Math.min(1800, Math.max(700, Math.abs(distance) / 7))
    const startTime = performance.now()

    const step = () => {
      const progress = Math.min((performance.now() - startTime) / duration, 1)
      const eased = progress < 0.5 ? 2 * progress * progress : 1 - ((-2 * progress + 2) ** 2) / 2
      window.scrollTo(0, startY + distance * eased)
      if (progress < 1) {
        window.setTimeout(step, 16)
      } else {
        document.documentElement.classList.add('vehicle-snap')
      }
    }
    step()
  }

  return (
    <div className="vehicle-detail" ref={containerRef}>
      <section className="vehicle-hero">
        <div className="vehicle-hero__text">
          <h1>{hero ? hero.title : vehicle.name}</h1>
          {(hero ? hero.tagline : [vehicle.tagline]).map((line, i) => <p key={i}>{line}</p>)}
          {hero?.note && <p className="vehicle-hero__note">{hero.note}</p>}
          {colors && (
            <div className="vehicle-hero__colors">
              {colors.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  className={`vehicle-hero__color ${i === colorIndex ? 'is-active' : ''}`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={`Color ${i + 1}`}
                  onClick={() => setColorIndex(i)}
                />
              ))}
            </div>
          )}
          {detail?.brochure && (
            <button type="button" className="vehicle-hero__catalogo" onClick={scrollToBrochure}>CATÁLOGO</button>
          )}
        </div>
        <div className="vehicle-hero__image">
          {heroImage ? <img src={heroImage} alt={vehicle.name} /> : <div className="ph">{vehicle.name}</div>}
        </div>
      </section>

      {detail?.video && <VideoFeature src={detail.video.src} poster={detail.video.poster} />}

      {detail?.gallery && <GalleryCarousel images={detail.gallery.images} />}

      {detail?.sections?.map((section, i) => <Section section={section} index={i} key={i} />)}

      {detail?.view360 && (
        <section
          className="vehicle-360"
          style={detail.view360.mobileTop ? { '--v360-top': `${detail.view360.mobileTop}px` } : undefined}
        >
          {detail.view360.bgText && <span className="vehicle-360__bgtext">{detail.view360.bgText}</span>}
          <div className="vehicle-360__car">
            {detail.view360.images
              ? <ThreeSixtyViewer images={detail.view360.images} />
              : <img src={detail.view360.image} alt={`${vehicle.name} 360`} />}
          </div>
          {detail?.footnote && <p className="vehicle-footnote vehicle-footnote--360">{detail.footnote}</p>}
        </section>
      )}

      {!detail?.view360 && detail?.footnote && <p className="vehicle-footnote">{detail.footnote}</p>}

      {detail?.brochure && (
        <section className="vehicle-brochure">
          <div className="vehicle-brochure__frame">
            <div className="vehicle-brochure__bar">
              <span>MANUAL {hero ? hero.title : vehicle.name}</span>
              <a href={detail.brochure.pdf} target="_blank" rel="noopener noreferrer" download className="vehicle-brochure__download">
                Descargar folleto
              </a>
            </div>
            {/* El sitio original (baic.com.ar) usa este mismo widget dflip también en mobile
                y se puede ver bien -touch-action:auto, deja que el scroll de la página
                conviva con el drag para pasar hojas. Iba una versión simplificada acá
                (sólo un link al PDF) pero el pedido fue calcar el comportamiento real. */}
            {/* key={slug}: al navegar entre modelos SIN recargar la página (SPA), React
                reutiliza el mismo <div> del visor si no se lo forzamos a remontar. dflip
                le va agregando canvases/hojas propias a ese <div> por fuera de React, así
                que si el nodo se reutiliza, el folleto del modelo anterior queda pegado
                (o mezclado) debajo del nuevo -por eso a veces "el PDF no es del mismo auto".
                Con key={slug} React tira el <div> viejo entero y arranca uno nuevo y vacío
                cada vez que cambia el modelo. */}
            <LazyBrochure key={slug} pdfUrl={detail.brochure.pdf} slug={slug} title={hero ? hero.title : vehicle.name} />
          </div>
        </section>
      )}
    </div>
  )
}
