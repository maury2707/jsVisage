import { request } from './api'

export const CarsApi = {
  getCars: () => request('/cars.json'),
  getCar: (id) => request(`/cars/${id}.json`),
}
