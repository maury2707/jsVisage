import { request } from './api'

export const MotorcyclesApi = {
  getMotorcycles: () => request('/motorcycles.json'),
  getMotorcycle: (id) => request(`/motorcycles/${id}.json`),
}
