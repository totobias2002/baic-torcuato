// Envío directo del formulario de Contacto por Formspree (sin backend propio):
// Formspree recibe el POST y reenvía un mail a la casilla configurada en el formulario de
// Formspree (it@baicpacheco.com.ar). El ID del form ("mzepvybw") es público -viaja igual en
// el JS del sitio así que no hace falta mantenerlo en .env, evita depender de reiniciar el
// servidor de dev para que tome la variable de entorno.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'mzepvybw'

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
  fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
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
