const { atom, map, deepMap } = require("nanostores");

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

