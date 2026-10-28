import { useRef, useState } from 'react'
import { submitContactRequest, buildWhatsappUrl } from '../api/contact.js'
import { socialLinks } from '../data/dealers.js'
import { useToast } from '../toast/ToastContext.jsx'
import { contactBg } from '../data/contactBg.js'

// Cuánto tiempo tiene que pasar como mínimo entre que se carga la página y se manda el
// formulario -un bot que llena y envía todo en milisegundos no llega a este mínimo, una
// persona real sí (aunque pegue el texto copiado). Filtra spam sin pedirle nada al visitante
// (sin captcha ni checkbox).
const MIN_FILL_SECONDS = 2500
// No dejar mandar más de una consulta cada 30s desde el mismo navegador -evita que alguien
// (o un bot) reenvíe el formulario en loop.
const COOLDOWN_MS = 30000

export default function ContactPage() {
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const loadedAt = useRef(Date.now())

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  // Envío automático por Formspree (ver src/api/contact.js): el mensaje llega directo a la
  // casilla configurada en el formulario de Formspree, sin abrir el mail del visitante.
  // Anti-spam en 3 capas, todas invisibles para una persona real:
  // 1) campo trampa (_gotcha) oculto -si viene lleno es un bot, Formspree descarta el envío;
  // 2) tiempo mínimo desde que cargó la página hasta que se manda;
  // 3) cooldown de 30s entre envíos guardado en este navegador.
  const handleSubmit = async (e) => {
    e.preventDefault()
    const lastSent = Number(localStorage.getItem('contactLastSent') || 0)
    if (Date.now() - lastSent < COOLDOWN_MS) {
      showToast('Ya enviaste una consulta hace unos segundos, esperá un momento e intentá de nuevo', 'error')
      return
    }
    if (Date.now() - loadedAt.current < MIN_FILL_SECONDS) {
      showToast('No pudimos enviar tu consulta, intentá de nuevo', 'error')
      return
    }
    setSending(true)
    // WhatsApp primero y sin esperar nada: window.open sólo está permitido en el mismo
    // instante del clic (si se llama después de un await, el navegador lo bloquea como popup).
    window.open(buildWhatsappUrl(socialLinks.whatsapp, form), '_blank', 'noopener')
    localStorage.setItem('contactLastSent', String(Date.now()))
    showToast('Se abrió WhatsApp con tu consulta: tocá enviar para que nos llegue', 'success')
    setForm({ name: '', phone: '', email: '', message: '' })
    setSending(false)
    // Respaldo por mail: si falla no importa, la consulta ya salió por WhatsApp.
    submitContactRequest(form).catch(() => {})
  }

  return (
    <section className="contact-hero" style={contactBg ? { backgroundImage: `url(${contactBg})` } : undefined}>
      {!contactBg && <div className="ph">Foto BAIC BJ30</div>}
      <div className="contact-hero__overlay" />
      <div className="contact-hero__inner">
        <h1>Envíenos su Consulta</h1>
        <p>Completá tus datos y te respondemos por WhatsApp a la brevedad.</p>
        <form className="service-form" onSubmit={handleSubmit}>
          {/* Campo trampa para bots: invisible y fuera de tabulación para una persona real,
              pero los bots que llenan todos los inputs del form lo completan igual -si llega
              con contenido, Formspree descarta el envío como spam. */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} value={form._gotcha || ''} onChange={set('_gotcha')} />
          <input type="text" placeholder="Nombre" value={form.name} onChange={set('name')} required />
          <input type="tel" placeholder="Teléfono" value={form.phone} onChange={set('phone')} required />
          <input type="email" placeholder="Email (opcional)" value={form.email} onChange={set('email')} />
          <textarea placeholder="Mensaje" rows={5} value={form.message} onChange={set('message')} required />
          <button type="submit" disabled={sending}>{sending ? 'ABRIENDO WHATSAPP...' : 'ENVIAR POR WHATSAPP'}</button>
        </form>
      </div>
    </section>
  )
}
