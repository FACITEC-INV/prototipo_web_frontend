import { atom, map } from "nanostores";

const emptyFields = { id: '', fullName: '', username: '', password: '', role: '0' }
const emptyErrors = { fullName: '', username: '', password: '', role: '' }

export const $fieldsStatus = map({ ...emptyFields });
export const $errorsStatus = map({ ...emptyErrors });
export const $isNew = atom(true)
export const $isLoading = atom(false)
export const $changePassword = atom(false);
export const $PASSWORD_PLACEHOLDER = '**********';

/**
 * Carga el estado del formulario por medio de un objeto.
 * @param {Object} values - Los valores del formulario a cargar.
 * @param {boolean} [nuevo=true] - Indica si es un nuevo registro.
 */
export function loadFormStatus(values, esnuevo = true) {
  $fieldsStatus.set({
    id: values.id ?? '',
    fullName: values.fullName ?? '',
    username: values.username ?? '',
    password: esnuevo ? values.password ?? '' : $PASSWORD_PLACEHOLDER,
    role: values.role ?? '0'
  })
  $isNew.set(esnuevo)
}

/**
 * Resetea el estado del formulario a sus valores iniciales.
 */
export const resetFormStatus = () => {
  $fieldsStatus.set({ ...emptyFields })
  $errorsStatus.set({ ...emptyErrors })
  $isNew.set(true)
  $changePassword.set(false);
};
