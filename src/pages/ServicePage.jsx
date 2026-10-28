import { useRef, useState } from 'react'
import { submitContactRequest, buildWhatsappUrl } from '../api/contact.js'
import { socialLinks } from '../data/dealers.js'
import { useToast } from '../toast/ToastContext.jsx'
import { serviceHero } from '../data/serviceHero.js'
import { serviceFormBg } from '../data/serviceFormBg.js'

// Mismo anti-spam que ContactPage: tiempo mínimo de llenado y cooldown entre envíos.
const MIN_FILL_SECONDS = 2500
const COOLDOWN_MS = 30000

const SERVICE_TYPES = ['Service de mantenimiento', 'Reparación', 'Garantía', 'Repuestos', 'Otra consulta']
const EMPTY_FORM = { name: '', phone: '', email: '', serviceType: '', plate: '', message: '' }

function ServiceRequestForm() {
  const { showToast } = useToast()
  const [form, setForm] = useState(EMPTY_FORM)
  const loadedAt = useRef(Date.now())

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const lastSent = Number(localStorage.getItem('serviceLastSent') || 0)
    if (Date.now() - lastSent < COOLDOWN_MS) {
      showToast('Ya enviaste una consulta hace unos segundos, esperá un momento e intentá de nuevo', 'error')
      return
    }
    if (Date.now() - loadedAt.current < MIN_FILL_SECONDS) {
      showToast('No pudimos enviar tu consulta, intentá de nuevo', 'error')
      return
    }
    // Los datos del vehículo viajan dentro del mensaje, así reusamos el armado de WhatsApp.
    const message = [
      form.serviceType && `Tipo de servicio: ${form.serviceType}`,
      form.plate && `Patente: ${form.plate}`,
      form.message
    ].filter(Boolean).join('\n')
    const data = { name: form.name, phone: form.phone, email: form.email, message }
    window.open(buildWhatsappUrl(socialLinks.whatsapp, data), '_blank', 'noopener')
    localStorage.setItem('serviceLastSent', String(Date.now()))
    showToast('Se abrió WhatsApp con tu consulta: tocá enviar para que nos llegue', 'success')
    setForm(EMPTY_FORM)
    submitContactRequest(data).catch(() => {})
  }

  return (
    <section className="service-form-section" style={serviceFormBg ? { backgroundImage: `url(${serviceFormBg})` } : undefined}>
      {!serviceFormBg && <div className="ph">Foto de fondo del formulario</div>}
      <div className="service-form-section__inner">
        <h2 className="service-form-section__title">Solicitá tu turno</h2>
        <form className="service-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" value={form.name} onChange={set('name')} required />
          <input type="tel" placeholder="Teléfono" value={form.phone} onChange={set('phone')} required />
          <input type="email" placeholder="Email (opcional)" value={form.email} onChange={set('email')} />
          <select value={form.serviceType} onChange={set('serviceType')} required>
            <option value="" disabled>Tipo de servicio</option>
            {SERVICE_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
          <input type="text" placeholder="Patente o dominio" value={form.plate} onChange={set('plate')} />
          <textarea placeholder="Mensaje" rows={5} value={form.message} onChange={set('message')} required />
          <button type="submit">ENVIAR POR WHATSAPP</button>
        </form>
      </div>
    </section>
  )
}

export default function ServicePage() {
  return (
    <>
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
      <ServiceRequestForm />
    </>
  )
}
