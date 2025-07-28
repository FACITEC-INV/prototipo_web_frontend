"use client";

import { handleFieldChange, handleSubmit } from "@/stores/users/formActions";
import { $errorsStatus, $fieldsStatus, $isLoading, $isNew, resetFormStatus } from "@/stores/users/formStatus";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

const Form = () => {
  const { id, fullName, username, password, role } = useStore($fieldsStatus);
  const isLoading = useStore($isLoading);
  const errors = useStore($errorsStatus);
  const isNew = useStore($isNew);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!isNew || id.length > 0) {
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
        <h2 className="card-title justify-center">{isNew ? 'Registrar' : 'Modificar'} usuarios</h2>
        <form onSubmit={handleSubmit} className="form-control gap-2">

          <input
            type="hidden"
            value={id}
            className="input input-bordered w-full"
          />
          <div className="mb-3">
            <div className="floating-label">
              <span>Nombre completo</span>
              <input
                type="text"
                placeholder="Ingrese nombre completo"
                className="input input-sm"
                value={fullName}
                onInput={(e) => { handleFieldChange('fullName', e.target.value) }}
                disabled={isLoading}
                required
              />
            </div>
            {errors.fullName && <span className="text-xs text-error mt-1">{errors.fullName}</span>}
          </div>
          <div className="mb-3">
            <div className="floating-label">
              <span>Nombre de usuario</span>
              <input
                type="text"
                placeholder="Ingrese el nombre de usuario"
                className="input input-sm"
                value={username}
                onInput={(e) => { handleFieldChange('username', e.target.value) }}
                disabled={isLoading}
                required
              />
            </div>
            {errors.username && <span className="text-xs text-error mt-1">{errors.username}</span>}
          </div>
          <div className="mb-3">
            <div className="floating-label">
              <span>Contraseña</span>
              <input
                type="password"
                placeholder="Ingrese la contraseña"
                className="input input-sm"
                value={password}
                onInput={(e) => { handleFieldChange('password', e.target.value) }}
                disabled={isLoading}
                required
              />
            </div>
            {errors.password && <span className="text-xs text-error mt-1">{errors.password}</span>}
          </div>
          <div className="mb-3">
            <div className="floating-label">
              <span>Intérvalo de atualización</span>
              <select
                className="select select-sm"
                value={role}
                onChange={(e) => { handleFieldChange('role', e.target.value) }}
                disabled={isLoading}
                required
              >
                <option disabled value="0">Selecciones un rol</option>
                <option value="ADMIN">Administrador</option>
                <option value="USER">Usuario</option>
              </select>
            </div>
            {errors.role && <span className="text-xs text-error mt-1">{errors.role}</span>}
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
