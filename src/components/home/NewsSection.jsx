import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppLink } from '../ui/index.js'
import { ChevronRightIcon } from '../icons/index.js'
import { fetchNews, selectNews } from '../../features/news/index.js'
import { truncateText } from '../../helpers/formatters.js'

export default function NewsSection() {
  const dispatch = useDispatch()
  const items = useSelector(selectNews)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  const latest = items.slice(0, 3)

  return (
    <section className="section section--dark">
      <div className="container">
        <h2 className="section-title">ÚLTIMAS NOTICIAS</h2>
        <div className="news-grid">
          {latest.map((item) => (
            <AppLink key={item.id} to={`/novedades/${item.id}`} className="news-card">
              {item.image ? (
                <img className="news-card__img" src={item.image} alt={item.title} />
              ) : (
                <div className="ph">Imagen: {item.title}</div>
              )}
              <h4>{item.title}</h4>
              <p>{truncateText(item.excerpt, 110)}</p>
              <span className="read">
                <span className="read__label">Leer más</span>
                <span className="read__arrow"><ChevronRightIcon size={16} /></span>
              </span>
            </AppLink>
          ))}
          {latest.length === 0 && <p>No hay noticias todavía.</p>}
        </div>
      </div>
    </section>
  )
}
