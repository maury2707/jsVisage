import VehicleCard from '../components/VehicleCard.jsx'
import useMotorcycles from '../hooks/useMotorcycles'

// Motos: se muestran los datos que tienen sentido para una moto
// (tipo, cilindrada y potencia) en vez de los campos genericos de un auto.
function Motorcycles() {
  const { motorcycles, loading, error } = useMotorcycles()

  return (
    <main className="min-h-screen bg-[#f1eef8] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
      <div className="w-full max-w-[1200px] mx-auto grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-[#333] text-base">Loading motorcycles...</p>}
        {error && <p className="text-red-600 text-base">Error: {error}</p>}
        {motorcycles.map((moto) => (
          <VehicleCard
            key={moto.id}
            title={moto.motorcycle}
            price={moto.price}
            details={[
              { label: 'Model', value: moto.motorcycle_model },
              { label: 'Type', value: moto.type },
              { label: 'Engine', value: `${moto.engine_cc} cc` },
              { label: 'Power', value: `${moto.power_hp} hp` },
            ]}
          />
        ))}
      </div>
    </main>
  )
}

export default Motorcycles
