import useHttp from './useHttp'
import { CarsApi } from '../api/cars-api'
// Este hook es específico para la lógica de negocio de los coches, pero delega la gestión de estado de carga y errores a useHttp.
// Esto mantiene el código limpio y enfocado, y permite reutilizar useHttp para otros hooks de dominio (e.g. useUsers) sin duplicar la lógica de fetch.
function useCars() {
  const { data, loading, error } = useHttp(CarsApi.getCars)
  return { cars: data?.cars ?? [], loading, error }
}

  export default useCars
