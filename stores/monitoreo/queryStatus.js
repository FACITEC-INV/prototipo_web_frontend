import { atom } from 'nanostores';

/** Estado para indicar si la consulta de datos está en curso. */
export const $isQueryLoading = atom(false);

/** Almacena los datos de monitoreo obtenidos del backend. */
export const $monitoreoData = atom(null);

/** Almacena cualquier error que ocurra durante la consulta. */
export const $queryError = atom(null);
