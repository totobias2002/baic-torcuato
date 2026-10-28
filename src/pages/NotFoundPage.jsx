import { AppLink } from '../components/ui/index.js'

export default function NotFoundPage() {
  return (
    <div className="container not-found-page">
      <h1>404</h1>
      <p>No encontramos la página que buscás.</p>
      <AppLink to="/">Volver al inicio</AppLink>
    </div>
  )
}
