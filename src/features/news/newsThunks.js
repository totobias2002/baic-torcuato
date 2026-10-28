import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchNewsRequest } from '../../api/news.js'

export const fetchNews = createAsyncThunk('news/fetchNews', async (_, { rejectWithValue }) => {
  try {
    return await fetchNewsRequest()
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
