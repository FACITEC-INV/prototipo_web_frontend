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

/** Error que se mostrará en el selectedRios */
export const $errorSelectDispositivosStatus = atom("");

/** Controla que el selectedRios no este vacío */
effect([$selectedRiosList, $dispositivosStatus], (selectedRios, dispositivos) => {
  $errorSelectDispositivosStatus.set("");
  if (selectedRios.length <= 0 && dispositivos.length > 0) {
    $errorSelectDispositivosStatus.set("Seleccione un río.");
  }
});


