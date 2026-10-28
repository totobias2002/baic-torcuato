import client from './client.js'

export const fetchVehiclesRequest = () => client.get('/vehicles').then((r) => r.data)
export const fetchVehicleBySlugRequest = (slug) => client.get(`/vehicles/${slug}`).then((r) => r.data)
