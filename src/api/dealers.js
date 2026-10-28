import client from './client.js'

export const fetchDealersRequest = () => client.get('/dealers').then((r) => r.data)
