import { configureStore } from '@reduxjs/toolkit'
import { vehiclesReducer } from '../features/vehicles/index.js'
import { vehicleDetailReducer } from '../features/vehicleDetail/index.js'
import { newsReducer } from '../features/news/index.js'
import { dealersReducer } from '../features/dealers/index.js'
import { contactReducer } from '../features/contact/index.js'

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    vehicleDetail: vehicleDetailReducer,
    news: newsReducer,
    dealers: dealersReducer,
    contact: contactReducer
  }
})
