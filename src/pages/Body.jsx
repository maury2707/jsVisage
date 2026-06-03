import CarCard from '../components/CarCard.jsx'
import CarsAPI from '../components/APIs/CarsAPI.jsx'

function Body() {
  const { cars, loading, error } = CarsAPI()
  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="w-full max-w-[1200px] mx-auto grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-[#333] text-base">Loading cars...</p>}
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </main>
  )
}

export default Body