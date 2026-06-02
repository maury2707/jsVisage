

import { useEffect, useState } from 'react'
import CarCard from '../components/CarCard.jsx'

function Body() {
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

  return (
    <main style={{ backgroundColor: '#f5f0e8', minHeight: '100vh', padding: '40px' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
        }}
      >

      {loading && <p style={{ color: '#333', fontSize: '18px' }}>Loading cars...</p>}  
      {cars.map(car => (
        CarCard({ car })
      ))}

      </div>
    </main>
  )
}

export default Body