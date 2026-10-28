import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDealersRequest } from '../../api/dealers.js'

export const fetchDealers = createAsyncThunk('dealers/fetchDealers', async (_, { rejectWithValue }) => {
  try {
    return await fetchDealersRequest()
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
