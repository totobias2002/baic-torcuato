export function formatDate(dateString) {
  if (!dateString) return ''
  return new Intl.DateTimeFormat('es-AR', { dateStyle: 'long' }).format(new Date(dateString))
}

export function truncateText(text = '', maxLength = 140) {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trim()}...`
}
