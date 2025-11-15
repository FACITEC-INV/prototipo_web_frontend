import { $dispositivosStatus, $selectedRiosList } from "./selectDispositivosStatus";

const { deepMap, effect, atom } = require("nanostores");

/** Parámetros disponibles para monitoreo */
const params = [
  { cod: 'con', desc: 'Conductividad', isChecked: true },
  { cod: 'od', desc: 'Oxigeno disuelto', isChecked: false },
  { cod: 'ph', desc: 'pH', isChecked: false },
  { cod: 'tem', desc: 'Temperatura', isChecked: false },
  { cod: 'tsd', desc: 'Total de solidos disueltos', isChecked: false },
  { cod: 'tur', desc: 'Turbidez', isChecked: false },
];

/** Estado global de los parámetros seleccionados */
export const $paramsStatus = deepMap(params);

/** Para manejo de errores */
export const $errorParams = atom('');

/**
 * Controla los cambios del selector de parámetros
 * según el selecctor de ríos.
 */
effect([$selectedRiosList], list => {
  if (list.length === 0) {
    $paramsStatus.get().findIndex((p, i) => {
      $paramsStatus.setKey(`${i}.isChecked`, false);
    });
  }
  if (list.length === 1) {
    $paramsStatus.get().forEach((p, i) => {
      let checked = false;
      if (p.isChecked === true) checked = true;
      if (checked === false) $paramsStatus.setKey(`${0}.isChecked`, true);
    });
  }
});

/** Controla los cambios en el selector de parámetros */
effect([$paramsStatus, $dispositivosStatus], (params, disp) => {
  $errorParams.set('');
  let checked = false;
  params.forEach(p => {
    if (p.isChecked === true) checked = true;
  });
  if (checked === false && disp.length > 0)
    $errorParams.set('Seleccione al menos un parámetro');
});
