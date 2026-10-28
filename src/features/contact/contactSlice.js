import { createSlice } from '@reduxjs/toolkit'
import { submitContact } from './contactThunks.js'

const initialState = {
  status: 'idle',
  error: null
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactStatus(state) { state.status = 'idle'; state.error = null }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => { state.status = 'loading'; state.error = null })
      .addCase(submitContact.fulfilled, (state) => { state.status = 'succeeded' })
      .addCase(submitContact.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload })
  }
})

export const { resetContactStatus } = contactSlice.actions
export default contactSlice.reducer
