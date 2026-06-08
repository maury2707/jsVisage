import VehicleCard from '../components/VehicleCard.jsx'
import useAirplanes from '../hooks/useAirplanes'

// Aviones: se muestran los datos que tienen sentido para una aeronave
// (tipo, capacidad, alcance, motores) en vez de los campos genericos de un auto.
function Airplanes() {
  const { airplanes, loading, error } = useAirplanes()

  return (
    <main className="min-h-screen bg-[#eef3f8] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="w-full max-w-[1200px] mx-auto grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-[#333] text-base">Loading airplanes...</p>}
        {error && <p className="text-red-600 text-base">Error: {error}</p>}
        {airplanes.map((plane) => (
          <VehicleCard
            key={plane.id}
            title={plane.airplane}
            price={plane.price}
            details={[
              { label: 'Model', value: plane.airplane_model },
              { label: 'Type', value: plane.type },
              { label: 'Capacity', value: `${plane.capacity} pax` },
              { label: 'Range', value: `${plane.range_km.toLocaleString()} km` },
              { label: 'Engines', value: plane.engines },
            ]}
          />
        ))}
      </div>
    </main>
  )
}

export default Airplanes
