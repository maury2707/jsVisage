import { useEffect, useState } from 'react'

function CarsAPI() {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
      async function fetchCars() {
      try {
        const response = await fetch('https://myfakeapi.com/api/cars')
        if (!response.ok) {
          throw new Error('Failed to fetch cars')
        }
        const data = await response.json()

        setCars(data.cars)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

      fetchCars()
    }, [])
    
    return {cars, loading, error}
}

export default CarsAPI