import useHttp from './useHttp'
import { MotorcyclesApi } from '../api/motorcycles-api'
// Hook de dominio para motos: delega carga/errores a useHttp y solo expone los datos ya listos.
function useMotorcycles() {
  const { data, loading, error } = useHttp(MotorcyclesApi.getMotorcycles)
  return { motorcycles: data?.motorcycles ?? [], loading, error }
}

  export default useMotorcycles
