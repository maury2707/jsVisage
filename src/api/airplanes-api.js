import { request } from './api'

export const AirplanesApi = {
  getAirplanes: () => request('/airplanes.json'),
  getAirplane: (id) => request(`/airplanes/${id}.json`),
}
