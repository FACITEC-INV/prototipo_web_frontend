'use client';

import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import DateInput from "./DateInput";
import SelectParametros from "./SelectParametros";
import SelectRios from "./SelectRios";
import { handleQuerySubmit } from '@/stores/monitoreo/queryActions';
import { $isQueryLoading } from '@/stores/monitoreo/queryStatus';
import { $selectedRiosList } from '@/stores/monitoreo/selectDispositivosStatus';
import { $isFormInvalid, $initialQueryMade } from '@/stores/monitoreo/formStatus';
import Spinner from '@/commonComponents/Spinner';

const QueryDataForm = () => {
  const isLoading = useStore($isQueryLoading);
  const isInvalid = useStore($isFormInvalid);
  const selectedRios = useStore($selectedRiosList);
  const initialQueryMade = useStore($initialQueryMade);

  useEffect(() => {
    if (selectedRios.length > 0 && !initialQueryMade) {
      handleQuerySubmit();
      $initialQueryMade.set(true);
    }
  }, [selectedRios, initialQueryMade]);

  return (
    <div className="w-[95%] md:w-[30%] mb-2 border border-gray-300 p-2 rounded shadow-lg">
      <h6 className="pb-1 text-center font-medium">Selección de parámetros</h6>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleQuerySubmit}
      >
        <SelectRios />
        <SelectParametros />
        <DateInput />
        <button
          type="submit"
          className="btn btn-sm btn-soft btn-primary"
          disabled={isLoading || isInvalid}
        >
          {isLoading ? <Spinner /> : 'Consultar'}
        </button>
      </form>
    </div>
  );
}

export default QueryDataForm;
