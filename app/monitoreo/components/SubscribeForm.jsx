import { handleFieldChange, handleSubmit } from "@/stores/monitoreo/subscribe/subscribeFormActions";
import { $errorsStatus, $fieldsStatus, $isLoading } from "@/stores/monitoreo/subscribe/subscribeFromStatus";
import { useStore } from "@nanostores/react";

const SubscribeForm = () => {
  const { nombre, organizacion, correo } = useStore($fieldsStatus);
  const isLoading = useStore($isLoading);
  const errors = useStore($errorsStatus)

  return (
    <div className="card bg-neutral-200 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Subscripción</h2>
        <p>Suscríbete para recibir alertas sobre la situación de los ríos!</p>
        <form onSubmit={handleSubmit} className="form-control gap-2">

          <div className="mb-3">
            <div className="floating-label">
              <span>Nombre</span>
              <input
                type="text"
                placeholder="Ingrese su nombre"
                className="input input-sm w-full"
                value={nombre}
                onInput={e => { handleFieldChange('nombre', e.target.value) }}
                disabled={isLoading}
                required
              />
            </div>
          </div>
          {errors.nombre && <span className="text-xs text-error mt-1">{errors.nombre}</span>}
          <div className="mb-3">
            <div className="floating-label">
              <span>Organización</span>
              <input
                type="text"
                placeholder="Ingrese su organización"
                className="input input-sm w-full"
                value={organizacion}
                onInput={e => { handleFieldChange('organizacion', e.target.value) }}
                disabled={isLoading}
                required
              />
            </div>
            {errors.organizacion && <span className="text-xs text-error mt-1">{errors.organizacion}</span>}
          </div>
          <div className="mb-3">
            <div className="floating-label">
              <span>Correo electrónico</span>
              <input
                type="email"
                placeholder="Ingrese su correo electrónico"
                className="input input-sm w-full"
                value={correo}
                onInput={e => { handleFieldChange('correo', e.target.value) }}
                disabled={isLoading}
                required
              />
            </div>
            {errors.correo && <span className="text-xs text-error mt-1">{errors.correo}</span>}
          </div>

          <div className="flex flex-row justify-center gap-2 mt-5">
            <button
              type="submit"
              className="btn btn-soft btn-primary flex-auto"
              disabled={isLoading ? 'disabled' : ''}
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SubscribeForm;
