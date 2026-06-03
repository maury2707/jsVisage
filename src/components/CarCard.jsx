
function CarCard({ car }) {
    if (!car) return null

    const { car: name, car_model, car_color, car_model_year, price } = car

    const details = [
        { label: 'Model', value: car_model },
        { label: 'Year', value: car_model_year },
        { label: 'Color', value: car_color },
    ]

    return (
        <div className="car-card bg-white/95 rounded-[18px] shadow-[0_16px_30px_rgba(0,0,0,0.08)] p-[22px] my-4 ml-auto text-[#1f1f1f] min-w-[280px] max-w-[420px]">
            <div className="flex justify-between items-baseline mb-[14px]">
                <h2 className="text-[1.2rem] font-bold m-0">{name}</h2>
                <span className="text-base font-bold text-[#1070ff]">{price}</span>
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

export default CarCard