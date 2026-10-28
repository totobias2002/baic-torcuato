import client from './client.js'

export const fetchNewsRequest = () => client.get('/news').then((r) => r.data)
