import DateInput from "./DateInput";
import SelectParametros from "./SelectParametros";
import SelectRios from "./SelectRios";

const QueryDataForm = () => {
  return (
    <div className="w-[30%] mb-2 border border-gray-300 p-2 rounded shadow-lg">
      <h6 className="pb-1 text-center font-medium">Selección de parámetros</h6>
      <from className="flex flex-col gap-2">
        <SelectRios />
        <SelectParametros />
        <DateInput />
        <button className="btn btn-sm btn-soft btn-primary">Consultar</button>
      </from>
    </div>
  );
}

export default QueryDataForm;
