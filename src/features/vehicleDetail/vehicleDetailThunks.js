import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchVehicleBySlugRequest } from '../../api/vehicles.js'
import { models } from '../../data/models.js'
import { arcfoxModelDetails } from '../../data/arcfoxModelDetails.js'

// Los modelos ARCFOX no viven en data/models.js (ese array alimenta el mega menu y el
// footer de BAIC) -para no mezclarlos ahí, este segundo fallback arma un "vehicle" mínimo
// a partir del contenido ya cargado en arcfoxModelDetails.js, solo cuando el slug no es de
// ningún modelo BAIC.
function arcfoxFallback(slug) {
  const detail = arcfoxModelDetails[slug]
  if (!detail) return null
  return { slug, name: detail.hero.title, tagline: detail.hero.tagline[0], image: detail.heroImage }
}

export const fetchVehicleBySlug = createAsyncThunk(
  'vehicleDetail/fetchVehicleBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      return await fetchVehicleBySlugRequest(slug)
    } catch (err) {
      const fallback = models.find((m) => m.slug === slug) || arcfoxFallback(slug)
      if (fallback) return fallback
      return rejectWithValue(err.message)
    }
  }
)
