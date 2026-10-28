import { createAsyncThunk } from '@reduxjs/toolkit'
import { submitContactRequest } from '../../api/contact.js'

export const submitContact = createAsyncThunk('contact/submitContact', async (formData, { rejectWithValue }) => {
  try {
    return await submitContactRequest(formData)
  } catch (err) {
    return rejectWithValue(err.message)
  }
})
