// Tarjeta reutilizable y puramente presentacional.
// Recibe datos ya normalizados (title, price y una lista de details),
// para que cada pagina mapee SU info (cars / airplanes / motorcycles) a este formato.
// Asi la card no sabe de donde vienen los datos: tu conectas la info y se la pasas por props.
function VehicleCard({ title, price, details = [] }) {
    if (!title) return null

    return (
        <div className="vehicle-card bg-white/95 rounded-[18px] shadow-[0_16px_30px_rgba(0,0,0,0.08)] p-[22px] my-4 text-[#1f1f1f] min-w-[280px] max-w-[420px]">
            <div className="flex justify-between items-baseline mb-[14px]">
                <h2 className="text-[1.2rem] font-bold m-0">{title}</h2>
                {price && <span className="text-base font-bold text-[#1070ff]">{price}</span>}
            </div>
            {details.map(({ label, value }) => (
                <div key={label} className="flex justify-between py-2 border-b border-black/6">
                    <span className="text-[#6a6a6a] text-[0.95rem]">{label}</span>
                    <span className="font-semibold text-[#222]">{value}</span>
                </div>
            ))}
        </div>
    )
}

export default VehicleCard
