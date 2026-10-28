import { createSlice } from '@reduxjs/toolkit'
import { news as seedNews } from '../../data/news.js'
import { fetchNews } from './newsThunks.js'

const initialState = {
  items: seedNews,
  status: 'idle',
  error: null
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => { state.status = 'loading' })
      .addCase(fetchNews.fulfilled, (state, action) => { state.status = 'succeeded'; state.items = action.payload.items ?? action.payload })
      .addCase(fetchNews.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload })
  }
})

export default newsSlice.reducer
