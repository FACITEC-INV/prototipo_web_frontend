import { hasMaxLength, hasMinLength, isNumberInRange, isRequired, isValidNumber } from "../utils/basicValidations";
import { $errorsStatus, $fieldsStatus } from "./formStatus";

/**
 * Procesa la validación de los datos del formulario.
 */
export const validateForm = () => {
  const { fullName, username, password, role } = $fieldsStatus.get();
  const fullNameValid = validateFullName(fullName);
  const usernameValid = validateUsername(username);
  const passwordValid = validatePassword(password);
  const roleValid = validateRole(role);
  return fullNameValid && usernameValid && passwordValid && roleValid;
};

const validateFullName = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('fullName', 'Campo obligatorio');
    isValid = false;
  }
  if (!hasMinLength(value, 3)) {
    $errorsStatus.setKey('fullName', 'Mínimo 3 caracteres');
    isValid = false;
  }
  if (!hasMaxLength(value, 20)) {
    $errorsStatus.setKey('fullName', 'Máximo 20 caracteres');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('fullName', '');
  return isValid;
};

const validateUsername = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('username', 'Campo obligatorio');
    isValid = false;
  }
  if (!hasMinLength(value, 4)) {
    $errorsStatus.setKey('username', 'Mínimo 4 caracteres');
    isValid = false;
  }
  if (!hasMaxLength(value, 20)) {
    $errorsStatus.setKey('username', 'Máximo 10 caracteres');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('username', '');
  return isValid;
};
const validatePassword = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('password', 'Campo obligatorio');
    isValid = false;
  }
  if (!hasMinLength(value, 5)) {
    $errorsStatus.setKey('password', 'Mínimo 5 caracteres');
    isValid = false;
  }
  if (!hasMaxLength(value, 50)) {
    $errorsStatus.setKey('password', 'Máximo 15 caracteres');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('password', '');
  return isValid;
};

const validateRole = (value) => {
  let isValid = true;
  if (!isRequired(value)) {
    $errorsStatus.setKey('role', 'Campo obligatorio');
    isValid = false;
  }
  if (value !== 'ADMIN' && value !== 'USER') {
    $errorsStatus.setKey('role', 'Rol inválido');
    isValid = false;
  }
  if (isValid) $errorsStatus.setKey('role', '');
  return isValid;
};
