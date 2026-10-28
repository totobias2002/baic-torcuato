import { createSlice } from '@reduxjs/toolkit'
import { dealers as seedDealers } from '../../data/dealers.js'
import { fetchDealers } from './dealersThunks.js'

const initialState = {
  list: seedDealers,
  status: 'idle',
  error: null
}

const dealersSlice = createSlice({
  name: 'dealers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDealers.pending, (state) => { state.status = 'loading' })
      .addCase(fetchDealers.fulfilled, (state, action) => { state.status = 'succeeded'; state.list = action.payload.items ?? action.payload })
      .addCase(fetchDealers.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload })
  }
})

export default dealersSlice.reducer
