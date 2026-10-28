import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppLink } from '../components/ui/index.js'
import { selectNews } from '../features/news/index.js'
import { newsDetails } from '../data/newsDetails.js'

function Cover({ media, item }) {
  // Las notas con logo (badge) no tienen foto de portada propia: usamos la de la tarjeta.
  const src = media?.type === 'full' ? media.src : item.image
  if (!src) return null
  const style = {
    aspectRatio: media?.type === 'full' ? media.aspect : undefined,
    maxWidth: media?.type === 'full' && media.maxWidth ? `${media.maxWidth}px` : undefined
  }
  return (
    <figure className="news-article__cover" style={style}>
      <img src={src} alt={item.title} />
    </figure>
  )
}

export default function NewsDetailPage() {
  const { newsId } = useParams()
  const items = useSelector(selectNews)
  const item = items.find((n) => n.id === newsId)
  const detail = newsDetails[newsId]

  if (!item) {
    return (
      <div className="container news-page">
        <p>No encontramos esta noticia.</p>
      </div>
    )
  }

  const media = detail?.media
  const related = items.filter((n) => n.id !== newsId).slice(0, 3)

  return (
    <article className="news-article">
      <header className="news-article__head">
        <AppLink to="/novedades" className="news-article__eyebrow">Novedades</AppLink>
        <h1>{item.title}</h1>
        <span className="news-article__bar" />
      </header>

      <Cover media={media} item={item} />

      <div className="news-article__body">
        {media?.type === 'badge' && media.src && (
          <img className="news-article__badge" src={media.src} alt="" />
        )}

        {detail ? (
          <>
            {detail.body.map((block, i) => {
              if (block.type === 'list') {
                return (
                  <ul key={i} className="news-article__list">
                    {block.items.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                )
              }
              if (block.type === 'divider') {
                return <hr key={i} className="news-article__divider" />
              }
              if (block.type === 'image') {
                return block.src ? (
                  <img
                    key={i}
                    className="news-article__inline"
                    style={{ aspectRatio: block.aspect, maxWidth: block.maxWidth ? `${block.maxWidth}px` : undefined }}
                    src={block.src}
                    alt={item.title}
                  />
                ) : null
              }
              const style = block.align === 'center' ? { textAlign: 'center' } : undefined
              const cls = block.italic ? 'is-italic' : undefined
              if (block.html) {
                return <p key={i} className={cls} style={style} dangerouslySetInnerHTML={{ __html: block.html }} />
              }
              return <p key={i} className={cls} style={style}>{block.text}</p>
            })}
            {detail.footnote && <p className="news-article__footnote">{detail.footnote}</p>}
          </>
        ) : (
          <p>{item.excerpt}</p>
        )}
      </div>

      {related.length > 0 && (
        <aside className="news-article__more">
          <h2>Seguir leyendo</h2>
          <div className="news-grid">
            {related.map((n) => (
              <AppLink key={n.id} to={`/novedades/${n.id}`} className="news-card">
                <div className="news-card__img">
                  <div className="news-card__img-inner" style={{ backgroundImage: `url(${n.image})` }} />
                  <span className="news-card__img-overlay" />
                </div>
                <h4>{n.title}</h4>
                <p>{n.excerpt}</p>
              </AppLink>
            ))}
          </div>
          <AppLink to="/novedades" className="news-article__all">Ver todas las novedades</AppLink>
        </aside>
      )}
    </article>
  )
}
