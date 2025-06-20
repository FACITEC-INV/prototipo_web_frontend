"use client";
import { useRef, useState } from "react"

const Form = () => {
  const formRef = useRef(null);
  const selectRef = useRef(null);
  const [userId, setUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = ev => {
    ev.preventDefault();
    setIsLoading(true);
    console.log('Enviando datos al servidor....')
    setTimeout(() => {
      console.log('Datos enviado!')
      setIsLoading(false);
    }, 3000);
  }

  const resetForm = () => {
    formRef.current.reset();
    console.log('Form is reset');
  };

  return (
    <div className="card bg-neutral-200 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Registrar dispositivo</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="form-control gap-2">

          <input
            type="hidden"
            value={isEditing ? userId : null}
            className="input input-bordered w-full"
          />
          <div className="mb-3">
            <div className="floating-label">
              <span>Río</span>
              <input
                type="text"
                placeholder="Ingrese el río"
                className="input input-sm"
                value={''}
                oninput={(e) => { }}
                disabled={isLoading}
                required
              />
            </div>
            {errors.username && <span className="text-xs text-error mt-1">{errors.username}</span>}
          </div>
          <div className="mb-3">
            <div className="floating-label">
              <span>Ubicación</span>
              <input
                type="text"
                placeholder="Ingrese la ubicación"
                className="input input-sm"
                value={''}
                oninput={(e) => { }}
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
                ref={selectRef}
                className="select select-sm"
                value={null}
                defaultValue="Selecciones un intervalo"
                onchange={(e) => { }}
                disabled={isLoading}
                required
              >
                <option disabled >Selecciones un intervalo</option>
                <option value="15">15 minútos</option>
                <option value="30">30 minútos</option>
                <option value="60">60 minútos</option>
              </select>
            </div>
            {errors.role && <span className="text-xs text-error mt-1">{errors.role}</span>}
          </div>

          <div className="flex flex-row justify-center gap-2 mt-5">
            <button type="submit" className="btn btn-soft btn-primary flex-auto" disabled={isLoading ? 'disabled' : ''}>
              Guardar
            </button>
            <button type="button" onclick={resetForm} className="btn btn-soft btn-secondary flex-auto" disabled={isLoading}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
