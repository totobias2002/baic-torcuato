import { videoBanner } from '../../data/videoBanner.js'

export default function VideoBanner() {
  if (!videoBanner.src) {
    return (
      <section className="video-section">
        <div className="ph">Video institucional</div>
      </section>
    )
  }

  return (
    <section className="video-section">
      <video controls poster={videoBanner.poster || undefined}>
        <source src={videoBanner.src} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
    </section>
  )
}
