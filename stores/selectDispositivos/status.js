import { atom, effect } from "nanostores";


/**
 * Lista de dispositivos para cargar en el selector de dispositivos.
 * @example [{rio: string, ubicacion: string, intervalo_actualizacion: number, ultimaConexion: Date}]
 */
export const $dispositivosStatus = atom([]);

/**
 * Lista de dispositivos seleccionados.
 * @example [{rio: string, ubicacion: string, intervalo_actualizacion: number, ultimaConexion: Date}]
 */
export const $selectedRiosList = atom([]);

/**
 * Ubicación del dispositivo seleccionado.
 */
export const $rioSelected = atom('');


