import { useEffect, useState } from 'react'

// Esto es para el manejo de errores y la lógica de fetch genérica, que luego se puede usar para cualquier endpoint.
// Permite que el hook de dominio (useCars) se centre solo en la lógica de negocio específica de los coches, sin preocuparse por el estado de carga o errores.
function useHttp(fetcher) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    fetcher()
      .then((result) => {
        if (active) setData(result)
      })
      .catch((err) => {
        if (active) setError(err.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [fetcher])

  return { data, loading, error }
}

export default useHttp
