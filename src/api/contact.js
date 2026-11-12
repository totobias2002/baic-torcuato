// Respaldo por mail del formulario de Contacto/Postventa vía Formspree (sin backend propio).
// DESACTIVADO: el form que venía de la web de Pacheco ("mzepvybw") mandaba los mails a la
// casilla de BAIC Pacheco (it@baicpacheco.com.ar), y Torcuato es otra agencia. Mientras no
// haya un form de Formspree propio de Torcuato, las consultas salen sólo por WhatsApp.
// Para activarlo: crear un form en Formspree con el mail de Torcuato y poner su ID acá
// (o en VITE_FORMSPREE_ID).
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ''

// Arma el link de WhatsApp (el mismo número del botón verde del sitio, socialLinks.whatsapp)
// con la consulta ya escrita, para que el visitante sólo tenga que apretar "enviar" en
// WhatsApp. El mail (Formspree) quedó como respaldo: no depende de que alguien lo lea.
export const buildWhatsappUrl = (baseUrl, { name, phone, email, message }) => {
  const lines = [
    'Hola! Quiero hacer una consulta desde la web de BAIC Torcuato.',
    '',
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    email ? `Email: ${email}` : null,
    '',
    message
  ].filter((l) => l !== null)
  return `${baseUrl}?text=${encodeURIComponent(lines.join('\n'))}`
}

export const submitContactRequest = (data) =>
  !FORMSPREE_ID ? Promise.resolve(null) : fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data)
  }).then(async (r) => {
    if (!r.ok) {
      const body = await r.json().catch(() => null)
      throw new Error(body?.errors?.[0]?.message || 'No se pudo enviar el mensaje')
    }
    return r.json()
  })
