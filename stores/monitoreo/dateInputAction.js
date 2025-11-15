import { $dayStatus, $monthStatus, $yearsStatus } from "./dateInputStatus";
import { yearIsValid, monthIsValid, dayIsValid } from "./formValidator";

/**
 * Maneja el cambio en el input de año.
 * @param {Event} e - Evento de cambio del input.
 */
export const handleYearInputChange = e => {
  const inputValue = Number(e.target.value);
  if (!yearIsValid(inputValue)) {
    $yearsStatus.set(inputValue);
    return;
  }
  $yearsStatus.set(inputValue);
}

/**
 * Maneja el cambio en el input de mes.
 * @param {Event} e - Evento de cambio del input.
 */
export const handleMonthInputChange = e => {
  const inputValue = Number(e.target.value);
  if (!monthIsValid(inputValue)) {
    $monthStatus.set(inputValue);
    return;
  }
  $monthStatus.set(inputValue);
}

/**
 * Maneja el cambio en el input de día.
 * @param {Event} e - Evento de cambio del input.
 */
export const handleDayInputChange = e => {
  const inputValue = Number(e.target.value);
  if (!dayIsValid(inputValue)) {
    $dayStatus.set(inputValue);
    return;
  }
  $dayStatus.set(inputValue);
}
