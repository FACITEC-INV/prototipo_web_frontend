import { $authToken } from "../auth/token";
import { notify } from "../notification/notify";
import {
  $changePassword, $errorsStatus,
  $fieldsStatus, $isLoading,
  $isNew, $PASSWORD_PLACEHOLDER,
  resetFormStatus
} from "./formStatus";
import { validateForm } from "./formValidator";
import { $reloadTableData } from "./tableStatus";

const URLBASE = process.env.NEXT_PUBLIC_API_BASE + '/admin/users';

/**
 * Maneja el envío de datos de dispositivos.
 * Controla y envía los datos al backend.
 * @param {Event} ev - El evento de envío del formulario.
 */
export const handleSubmit = async (ev) => {
  try {
    ev.preventDefault();
    $isLoading.set(true);
    if (!validateForm()) {
      console.error('[users-form-action] Formulario inválido', $errorsStatus.get());
      notify('Por favor, corrija los errores en el formulario', 'warning');
      return;
    }
    if ($isNew.get() === true) {
      delete $fieldsStatus.get().id;
    } else {
      if ($fieldsStatus.get().password === $PASSWORD_PLACEHOLDER) {
        $fieldsStatus.setKey('password', '');
      }
    }
    const result = await fetch(URLBASE + '/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${$authToken.get()}`,
      },
      body: JSON.stringify($fieldsStatus.get()),
    })
    const { success, response } = await result.json();
    if (!result.ok) {
      console.error('[users-form-action] Error al enviar el formulario:', response);
      notify('Error al enviar el formulario', 'error');
      return;
    }
    if (!success) {
      console.error('[users-form-action] Error en la respuesta del servidor:', response);
      notify('Error en el servidor', 'error');
      return;
    }
    notify('Datos guardados correctamente!', 'success');
    $reloadTableData.set(true);
    resetFormStatus();
  } catch (error) {
    console.error("[users-form-action] Error de red o sistema:", error.message);
    console.error(error);
    notify('Ocurrió un error al enviar el formulario', 'error');
  } finally {
    $isLoading.set(false);
  }
};

/**
 * Maneja el cambio de un campo en el formulario.
 * @param {string} field - El nombre del campo que cambió.
 * @param {any} value - El nuevo valor del campo.
 */
export function handleFieldChange(field, value) {
  $fieldsStatus.setKey(field, value);
}

export function handleChangePassword(ev) {
  ev.preventDefault();
  const passwordIsEditing = !$changePassword.get();
  if (passwordIsEditing) {
    $fieldsStatus.setKey('password', '');
  } else {
    $fieldsStatus.setKey('password', $PASSWORD_PLACEHOLDER);
  }
  $changePassword.set(passwordIsEditing);
}
