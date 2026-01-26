import { hasMaxLength, hasMinLength, isRequired, isValidEmail } from "@/stores/utils/basicValidations";
import { $errorsStatus, $fieldsStatus } from "./subscribeFromStatus";

/**
 * Procesa la validación de los datos del formulario.
 */
export const validateForm = () => {
  const { nombre, organizacion, correo } = $fieldsStatus.get();
  const nombreValid = validateNombre(nombre);
  const organizacionValid = validateOrganizacion(organizacion);
  const correoValid = validateCorreo(correo);
  return nombreValid && organizacionValid && correoValid;
};

const validateNombre = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('nombre', 'Campo obligatorio');
    isValid = false;
  }
  if (!hasMinLength(value, 3)) {
    $errorsStatus.setKey('nombre', 'Mínimo 3 caracteres');
    isValid = false;
  }
  if (!hasMaxLength(value, 20)) {
    $errorsStatus.setKey('nombre', 'Máximo 20 caracteres');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('nombre', '');
  return isValid;
};

const validateOrganizacion = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('organizacion', 'Campo obligatorio');
    isValid = false;
  }
  if (!hasMinLength(value, 4)) {
    $errorsStatus.setKey('organizacion', 'Mínimo 4 caracteres');
    isValid = false;
  }
  if (!hasMaxLength(value, 50)) {
    $errorsStatus.setKey('organizacion', 'Máximo 50 caracteres');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('organizacion', '');
  return isValid;
};

const validateCorreo = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('correo', 'Campo obligatorio');
    isValid = false;
  }
  if (!isValidEmail(value)) {
    $errorsStatus.setKey('correo', 'Número inválido');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('correo', '');
  return isValid;
};
