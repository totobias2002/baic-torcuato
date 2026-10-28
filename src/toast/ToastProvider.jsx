import { useCallback, useMemo, useState } from 'react'
import { ToastContext } from './ToastContext.jsx'

let idCounter = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = ++idCounter
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => removeToast(id), duration)
  }, [removeToast])

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div style={{ position: 'fixed', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 8, zIndex: 1000 }}>
        {toasts.map((t) => (
          <div
            key={t.id}
            style={{
              padding: '10px 16px',
              borderRadius: 8,
              color: '#fff',
              fontSize: 14,
              background: t.type === 'error' ? '#d43f3f' : t.type === 'success' ? '#2f9e5c' : '#111214'
            }}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
