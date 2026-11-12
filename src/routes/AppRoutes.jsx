import { Routes, Route, Navigate } from 'react-router-dom'
import { serviceInfo } from '../data/dealers.js'
import { MainLayout } from '../components/layout/index.js'
import {
  HomePage,
  VehicleDetailPage,
  Bj40ProPage,
  NewsPage,
  NewsDetailPage,
  ContactPage,
  AboutPage,
  VisionPage,
  ServicePage,
  DownloadsPage,
  NotFoundPage
} from '../pages/index.js'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/modelos/bj40-pro" element={<Bj40ProPage />} />
        <Route path="/modelos/:slug" element={<VehicleDetailPage />} />
        <Route path="/novedades" element={<NewsPage />} />
        <Route path="/novedades/:newsId" element={<NewsDetailPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/service" element={serviceInfo.enabled ? <ServicePage /> : <Navigate to="/" replace />} />
        <Route path="/descargas" element={<DownloadsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
