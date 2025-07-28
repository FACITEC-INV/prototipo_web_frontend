import { hasMaxLength, hasMinLength, isNumberInRange, isRequired, isValidNumber } from "../utils/basicValidations";
import { $errorsStatus, $fieldsStatus } from "./formStatus";

/**
 * Procesa la validación de los datos del formulario.
 */
export const validateForm = () => {
  const { rio, ubicacion, intervaloActualizacion } = $fieldsStatus.get();
  const rioValid = validateRio(rio);
  const ubicacionValid = validateUbicacion(ubicacion);
  const intervaloValid = validateIntervalo(intervaloActualizacion);
  return rioValid && ubicacionValid && intervaloValid;
};

const validateRio = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('rio', 'Campo obligatorio');
    isValid = false;
  }
  if (!hasMinLength(value, 3)) {
    $errorsStatus.setKey('rio', 'Mínimo 3 caracteres');
    isValid = false;
  }
  if (!hasMaxLength(value, 20)) {
    $errorsStatus.setKey('rio', 'Máximo 20 caracteres');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('rio', '');
  return isValid;
};

const validateUbicacion = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('ubicacion', 'Campo obligatorio');
    isValid = false;
  }
  if (!hasMinLength(value, 5)) {
    $errorsStatus.setKey('ubicacion', 'Mínimo 3 caracteres');
    isValid = false;
  }
  if (!hasMaxLength(value, 50)) {
    $errorsStatus.setKey('ubicacion', 'Máximo 50 caracteres');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('ubicacion', '');
  return isValid;
};

const validateIntervalo = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('intervaloActualizacion', 'Campo obligatorio');
    isValid = false;
  }
  if (!isValidNumber(value)) {
    $errorsStatus.setKey('intervaloActualizacion', 'Número inválido');
    isValid = false;
  }
  if (!isNumberInRange(value, 1, 60)) {
    $errorsStatus.setKey('intervaloActualizacion', 'Rango inválido (1-60)');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('intervaloActualizacion', '');
  return isValid;
};
