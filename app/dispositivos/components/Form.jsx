"use client";

import { handleFieldChange, handleSubmit } from "@/stores/dispositivos/formActions";
import { $errorsStatus, $fieldsStatus, $isLoading, $isNew, resetFormStatus } from "@/stores/dispositivos/formStatus";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

const Form = () => {
  const { id, rio, ubicacion, intervaloActualizacion } = useStore($fieldsStatus);
  const isLoading = useStore($isLoading);
  const errors = useStore($errorsStatus);
  const isNew = useStore($isNew);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!isNew || (id && id.length > 0)) {
      setAnimated(true);
      const timer = setTimeout(() => {
        setAnimated(false);
      }, 650);
      return () => clearTimeout(timer);
    }
    if (isNew) setAnimated(false);
  }, [isNew, id]);

  return (
    <div className={`${animated ? 'animate-[border-flash_0.6s_ease-in-out_forwards]' : ''} card bg-neutral-200 shadow-sm`}>
      <div className="card-body">
        <h2 className="card-title justify-center">Registrar dispositivo</h2>
        <form onSubmit={handleSubmit} className="form-control gap-2">

          <input
            type="hidden"
            value={id ?? ''}
            className="input input-bordered w-full"
          />
          <div className="mb-3">
            <div className="floating-label">
              <span>Río</span>
              <input
                type="text"
                placeholder="Ingrese el río"
                className="input input-sm"
                value={rio ?? ''}
                onInput={(e) => { handleFieldChange('rio', e.target.value) }}
                disabled={isLoading}
                required
              />
            </div>
            {errors.rio && <span className="text-xs text-error mt-1">{errors.rio}</span>}
          </div>
          <div className="mb-3">
            <div className="floating-label">
              <span>Ubicación</span>
              <input
                type="text"
                placeholder="Ingrese la ubicación"
                className="input input-sm"
                value={ubicacion ?? ''}
                onInput={(e) => { handleFieldChange('ubicacion', e.target.value) }}
                disabled={isLoading}
                required
              />
            </div>
            {errors.ubicacion && <span className="text-xs text-error mt-1">{errors.ubicacion}</span>}
          </div>
          <div className="mb-3">
            <div className="floating-label">
              <span>Intérvalo de atualización</span>
              <select
                className="select select-sm"
                value={intervaloActualizacion ?? ''}
                onChange={(e) => { handleFieldChange('intervaloActualizacion', e.target.value) }}
                disabled={isLoading}
                required
              >
                <option disabled value="0">Selecciones un intervalo</option>
                <option value="15">15 minutos</option>
                <option value="30">30 minutos</option>
                <option value="60">60 minutos</option>
              </select>
            </div>
            {errors.intervaloActualizacion && <span className="text-xs text-error mt-1">{errors.intervaloActualizacion}</span>}
          </div>

          <div className="flex flex-row justify-center gap-2 mt-5">
            <button
              type="submit"
              className="btn btn-soft btn-primary flex-auto"
              disabled={isLoading ? 'disabled' : ''}
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={resetFormStatus}
              className="btn btn-soft btn-secondary flex-auto"
              disabled={isLoading}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
