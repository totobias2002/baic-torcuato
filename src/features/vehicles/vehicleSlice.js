import { createSlice } from '@reduxjs/toolkit'
import { models } from '../../data/models.js'
import { fetchVehicles } from './vehicleThunks.js'

const initialState = {
  list: models,
  status: 'idle',
  error: null,
  usingFallback: true
}

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => { state.status = 'loading' })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload.items ?? action.payload
        state.usingFallback = false
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
        // sin backend todavía: dejamos los modelos locales para que la página no quede vacía
      })
  }
})

export default vehicleSlice.reducer
