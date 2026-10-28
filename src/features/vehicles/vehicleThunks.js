import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchVehiclesRequest } from '../../api/vehicles.js'

export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicles', async (_, { rejectWithValue }) => {
  try {
    return await fetchVehiclesRequest()
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
