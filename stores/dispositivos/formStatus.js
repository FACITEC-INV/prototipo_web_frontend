import { atom, map } from "nanostores";

const emptyFields = { id: '', rio: '', ubicacion: '', intervaloActualizacion: '0', ultimaConexion: '' }
const emptyErrors = { rio: '', ubicacion: '', intervaloActualizacion: '' }

export const $fieldsStatus = map({ ...emptyFields });
export const $errorsStatus = map({ ...emptyErrors });
export const $isNew = atom(true)
export const $isLoading = atom(false)

/**
 * Carga el estado del formulario por medio de un objeto.
 * @param {Object} values - Los valores del formulario a cargar.
 * @param {boolean} [nuevo=true] - Indica si es un nuevo registro.
 */
export function loadFormStatus(values, nuevo = true) {
  $fieldsStatus.set({
    id: values.id ?? '',
    rio: values.rio ?? '',
    ubicacion: values.ubicacion ?? '',
    intervaloActualizacion: values.intervaloActualizacion ?? '0',
    ultimaConexion: values.ultimaConexion ?? ''
  })
  $isNew.set(nuevo)
}

/**
 * Resetea el estado del formulario a sus valores iniciales.
 */
export const resetFormStatus = () => {
  $fieldsStatus.set({ ...emptyFields })
  $errorsStatus.set({ ...emptyErrors })
  $isNew.set(true)
};
