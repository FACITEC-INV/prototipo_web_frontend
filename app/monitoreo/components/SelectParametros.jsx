'use client'

import { toggleParams } from "@/stores/selectParametros/action";
import { $paramsStatus } from "@/stores/selectParametros/status"
import { useStore } from "@nanostores/react"

const SelectParametros = () => {
  const params = useStore($paramsStatus);
  return (
    <div className="card w-96 bg-base-100 card-xs shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Parámetros</h2>
        <div>
          {params.map((p, i) => (
            <label
              htmlFor={p.cod}
              key={`${p.cod}-${i}`}
              className="flex justify-between items-center mb-2"
            >
              {p.desc}
              <input
                type="checkbox"
                className="toggle toggle-info"
                id={p.cod}
                value={p.cod}
                disabled={false}
                checked={p.isChecked}
                onChange={e => toggleParams(p.cod, e.target.value)}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectParametros
