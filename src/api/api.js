const BASE_URL = 'https://myfakeapi.com/api'

// Se crea una clase de error personalizada para manejar errores específicos de la API, lo que permite un manejo de errores más claro y consistente en toda la aplicación. 
// Esto es especialmente útil para diferenciar entre errores de red, errores de respuesta no exitosa y errores de formato de datos.
export class ApiError extends Error {
  constructor(message, { status = null, cause = null } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    if (cause) this.cause = cause
  }
}
// La función request centraliza toda la lógica de hacer una solicitud a la API, incluyendo el manejo de errores de red, errores de respuesta no exitosa y errores de formato de datos.
async function request(path) {
  let res
  try {
    res = await fetch(`${BASE_URL}${path}`)
  } catch (err) {
    // fetch only rejects on network-level failures (offline, DNS, CORS)
    throw new ApiError('Network error: could not reach the server', { cause: err })
  }

  if (!res.ok) {
    throw new ApiError(`Request failed with status ${res.status}`, { status: res.status })
  }

  try {
    return await res.json()
  } catch (err) {
    throw new ApiError('Invalid JSON in response', { cause: err })
  }
}
// El objeto api exporta funciones específicas para cada endpoint de la API, lo que proporciona una interfaz clara y fácil de usar para el resto de la aplicación.
export const api = {
  getCars: () => request('/cars'),
  getCar: (id) => request(`/cars/${id}`),
}
