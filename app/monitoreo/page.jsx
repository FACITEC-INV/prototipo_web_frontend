import SelectParametros from "./components/SelectParametros";
import SelectRios from "./components/SelectRios";

const Monitoreo = () => {
  return (
    <div>
      <h1 className="text-center">Monitoreo</h1>
      <SelectRios />
      <SelectParametros />
    </div>
  )
}

export default Monitoreo;
