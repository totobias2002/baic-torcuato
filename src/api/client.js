import axios from 'axios'

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' }
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Error de red'
    return Promise.reject({ ...error, message })
  }
)

export default client
