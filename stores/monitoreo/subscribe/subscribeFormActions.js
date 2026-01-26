import { $errorsStatus, $fieldsStatus, $isLoading, resetFormStatus } from "./subscribeFromStatus";
import { validateForm } from "./subscribeFormValidator";
import { notify } from "@/stores/notification/notify";

const URLBASE = process.env.NEXT_PUBLIC_API_BASE + '/suscripciones';

/**
 * Maneja el envío de datos de suscripciones.
 * Controla y envía los datos al backend.
 * @param {Event} ev - El evento de envío del formulario.
 */
export const handleSubmit = async (ev) => {
  try {
    ev.preventDefault();
    $isLoading.set(true);
    if (!validateForm()) {
      console.error('[susc-form-action] Formulario inválido', $errorsStatus.get());
      notify('Por favor, corrija los errores en el formulario', 'warning');
      return;
    }
    const result = await fetch(URLBASE + '/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify($fieldsStatus.get()),
    })
    const { success, response } = await result.json();
    if (!result.ok) {
      if (response.includes('already exists')) {
        console.error('[susc-form-action] nombre o correo ya existen:', response);
        notify('Atención! El nombre o el correo electrónico ingresados ya están registrados', 'warning');
        return;
      } else {
        console.error('[susc-form-action] Error al enviar el formulario:', response);
        notify('Error al enviar el formulario', 'error');
        return;
      }
    }
    if (!success) {
      console.error('[susc-form-action] Error en la respuesta del servidor:', response);
      notify('Error en el servidor', 'error');
      return;
    }
    notify('Datos guardados correctamente!', 'success');
    resetFormStatus();
  } catch (error) {
    console.error("[susc-form-action] Error de red o sistema:", error.message);
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

