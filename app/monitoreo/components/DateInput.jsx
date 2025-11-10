
const DateInput = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center mb-4 gap-2">
      Año:
      <input
        type="number"
        placeholder="Año"
        className="input input-sm "
        min={2024}
        max={currentYear}
        defaultValue={currentYear}
      />
      Mes:
      <input
        type="number"
        placeholder="Mes"
        className="input input-sm"
        min={1}
        max={12}
      />
      Día:
      <input
        type="number"
        placeholder="Día"
        className="input input-sm"
        min={1}
        max={31}
      />
    </div>
  )
}

export default DateInput
