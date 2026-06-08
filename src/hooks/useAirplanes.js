import useHttp from './useHttp'
import { AirplanesApi } from '../api/airplanes-api'
// Hook de dominio para aviones: delega carga/errores a useHttp y solo expone los datos ya listos.
function useAirplanes() {
  const { data, loading, error } = useHttp(AirplanesApi.getAirplanes)
  return { airplanes: data?.airplanes ?? [], loading, error }
}

  export default useAirplanes
