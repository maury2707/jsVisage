import VehicleCard from '../components/VehicleCard.jsx'
import useCars from '../hooks/useCars'

// Pagina de ejemplo YA conectada a la info (useCars -> /api/cars.json).
// Usala como plantilla para Airplanes.jsx y Motorcycles.jsx cuando conectes sus datos.
function Cars() {
  const { cars, loading, error } = useCars()

  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="w-full max-w-[1200px] mx-auto grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-[#333] text-base">Loading cars...</p>}
        {error && <p className="text-red-600 text-base">Error: {error}</p>}
        {cars.map((car) => (
          <VehicleCard
            key={car.id}
            title={car.car}
            price={car.price}
            details={[
              { label: 'Model', value: car.car_model },
              { label: 'Year', value: car.car_model_year },
              { label: 'Color', value: car.car_color },
            ]}
          />
        ))}
      </div>
    </main>
  )
}

export default Cars
