import { computed, atom } from 'nanostores';
import { $errorsDateInputStatus } from './dateInputStatus';
import { $errorSelectDispositivosStatus } from './selectDispositivosStatus';
import { $errorParams } from './selectParametrosStatus';

/**
 * Estado derivado que calcula si el formulario es inválido.
 * Devuelve `true` si hay algún error en cualquiera de los stores de error.
 */
export const $isFormInvalid = computed(
  [$errorsDateInputStatus, $errorSelectDispositivosStatus, $errorParams],
  (dateErrors, riosError, paramsError) => {
    if (Object.values(dateErrors).some(error => error !== null)) return true;
    if (riosError) return true;
    if (paramsError) return true;

    return false;
  }
);

/** Bandera para controlar que la consulta inicial se ejecute solo una vez. */
export const $initialQueryMade = atom(false);
