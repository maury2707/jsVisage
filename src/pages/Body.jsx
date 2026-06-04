import CarCard from '../components/CarCard.jsx'
import useCars from '../hooks/useCars'
// Se agrego la parte del manejo de errores y estado de carga, para que el usuario tenga feedback visual mientras se cargan los datos o si ocurre un error. 
// Esto mejora la experiencia del usuario y hace que la aplicación sea más robusta.
function Body() {
  const { cars, loading, error } = useCars()
  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="w-full max-w-[1200px] mx-auto grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-[#333] text-base">Loading cars...</p>}
        {error && <p className="text-red-600 text-base">Error: {error}</p>}
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </main>
  )
}

export default Body