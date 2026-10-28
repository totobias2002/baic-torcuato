import { createSlice } from '@reduxjs/toolkit'
import { fetchVehicleBySlug } from './vehicleDetailThunks.js'

const initialState = {
  vehicle: null,
  status: 'idle',
  error: null
}

const vehicleDetailSlice = createSlice({
  name: 'vehicleDetail',
  initialState,
  reducers: {
    clearVehicleDetail(state) { state.vehicle = null; state.status = 'idle'; state.error = null }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleBySlug.pending, (state) => { state.status = 'loading'; state.error = null })
      .addCase(fetchVehicleBySlug.fulfilled, (state, action) => { state.status = 'succeeded'; state.vehicle = action.payload })
      .addCase(fetchVehicleBySlug.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload })
  }
})

export const { clearVehicleDetail } = vehicleDetailSlice.actions
export default vehicleDetailSlice.reducer
