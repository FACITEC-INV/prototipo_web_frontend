"use client"

import {
  fetchAllDispositivos,
  handleAddRiosToSelectedList,
  handleRiosSelectChange,
  handleRomoveRiosFromSelectedList
} from "@/stores/monitoreo/selectDispositivosActions";
import {
  $dispositivosStatus,
  $errorSelectDispositivosStatus,
  $selectedRiosList
} from "@/stores/monitoreo/selectDispositivosStatus"
import { useStore } from "@nanostores/react"
import { useEffect } from "react";

const SelectRios = () => {
  const dispositivos = useStore($dispositivosStatus);
  const selectedRiosList = useStore($selectedRiosList);
  const error = useStore($errorSelectDispositivosStatus);

  useEffect(() => {
    fetchAllDispositivos();
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <select
          id="select-rios"
          className={`select select-sm mr-1 ${error ? 'input-error' : ''}`}
          disabled={dispositivos.length === 0}
          onChange={handleRiosSelectChange}
        >
          <option value="0">Seleccione un río</option>
          {dispositivos.map((d, i) => (
            <option key={'opcion-'+d.ubicacion.replaceAll(' ', '')} value={`${d.ubicacion}`}>{d.rio}</option>
          ))}
        </select>
        <button
          type="button"
          className="btn btn-sm btn-soft btn-accent"
          disabled={dispositivos.length === 0}
          onClick={handleAddRiosToSelectedList}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M15 12h-6" /><path d="M12 9v6" /></svg>
        </button>
      </div>
      {error && <div className="text-xs text-error mt-1">{error}</div>}
      {selectedRiosList.length > 0 && (
        <div className="mt-1">
          {selectedRiosList.map((r, i) => (
            <button
              type="button"
              key={'rio-selected-' + r.ubicacion.replaceAll(' ', '')}
              className="btn btn-xs btn-soft btn-info mr-1"
              onClick={() => handleRomoveRiosFromSelectedList(r.ubicacion)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
              {r.rio}
            </button>
          ))}
        </div>
      )}
    </div>

  )
}

export default SelectRios
