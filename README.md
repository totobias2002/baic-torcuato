# BAIC Argentina — Front-end

Front-end de la página de BAIC Argentina, hecho con React + Vite.
Es solo front-end: el backend todavía no existe, así que `src/api`
apunta a `VITE_API_URL` (ver `.env`) y puede fallar hasta que el
backend esté disponible. Mientras tanto, cada feature arranca con
datos de ejemplo (`src/data`) para que la página se vea completa igual.

## Estructura

- `src/api` — funciones que van a llamar al backend (vehicles, news, dealers, contact)
- `src/app/store.js` — store de Redux Toolkit
- `src/features/*` — slices, thunks y selectors de Redux por dominio
- `src/toast` — Context provider de notificaciones
- `src/components` — componentes reutilizables (ui, layout, icons, home)
- `src/pages` — una página por ruta
- `src/routes` — definición de rutas
- `src/helpers` — formateo de fechas y textos
- `src/data` — contenido de ejemplo (modelos, novedades, concesionarios)

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
