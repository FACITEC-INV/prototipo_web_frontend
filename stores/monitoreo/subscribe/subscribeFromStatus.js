import { atom, map } from 'nanostores';

const emptyFields = { nombre: '', organizacion: '', correo: '' }
const emptyErrors = { nombre: '', organizacion: '', correo: '' }

export const $fieldsStatus = map({ ...emptyFields });
export const $errorsStatus = map({ ...emptyErrors });
export const $isLoading = atom(false)

/**
 * Resetea el estado del formulario a sus valores iniciales.
 */
export const resetFormStatus = () => {
  $fieldsStatus.set({ ...emptyFields })
  $errorsStatus.set({ ...emptyErrors })
};
