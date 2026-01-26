import { atom, map, } from "nanostores";

/** Fecha actual */
const date = new Date();

/** Año actual */
export const $currentYearStatus = atom(date.getFullYear()-1);
/** Mes actual */
export const $currentMonthStatus = atom(date.getMonth() + 1);
/** Día actual */
export const $currentDayStatus = atom(date.getDate());

/** Estado que almacena el valor ingresado en el input año */
export const $yearsStatus = atom($currentYearStatus.get());
/** Estado que almacena el valor ingresado en el input mes */
export const $monthStatus = atom($currentMonthStatus.get());
/** Estado que almacena el valor ingresado en el input día */
export const $dayStatus = atom('');


/** Valor inicial para estado de errores */
const errorsInitialState = {
  month: null,
  year: null,
  day: null
};

/** Estado que guarda los textos de errores para cada input */
export const $errorsDateInputStatus = map(errorsInitialState);

