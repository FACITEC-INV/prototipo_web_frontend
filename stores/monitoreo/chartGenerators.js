const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

/**
 * Genera el array de series de datos para un único gráfico (un parámetro).
 * Itera sobre cada ubicación en los datos recibidos y crea un objeto de serie (una línea en el gráfico) para cada una.
 * @param {object} param - El objeto del parámetro individual para el que se generarán las series.
 * @param {Array<object>} devicesData - La lista de dispositivos/ríos seleccionados para encontrar el nombre del río.
 * @param {object} data - El objeto con todos los datos de monitoreo, con las ubicaciones como claves.
 * @returns {Array<object>} Un array de objetos de serie, listo para ser usado en la configuración de un gráfico ApexCharts.
 * @example ```return [{ "name": "Curuguaty'y", "data": [ { "x": "Nov-01", "y": 1362.02 }, { "x": "Nov-02", "y": 1433.9 },... ] } ] ```
 */
export function seriesGen(param, devicesData, data) {
  const locations = Object.keys(data);
  const series = [];
  locations.forEach((l, i) => {
    series.push({
      name: devicesData.find(d => d.ubicacion === locations[i]).rio,
      data: data[l].map(d => {
        return {
          x: yValueGen(d),
          y: parseFloat(d[param.cod].toFixed(2)),
        }
      }),
    });
  });
  return series;
}

/**
 * Genera la etiqueta de texto (categoría) para el eje X a partir de una única lectura de datos.
 * La granularidad de la etiqueta (mes, día u hora) depende de los campos no nulos en la lectura.
 * @param {object} readData - El objeto de una única medición con propiedades de fecha (hour, day, month, hourStr).
 * @returns {string} La etiqueta de categoría para el eje X (ej. "Ene", "Jul-01", "01 Mar 10:00hs").
 */
export function yValueGen(readData) {
  const d = readData;
  return d.hour !== null
    ? `${d.day <= 9 ? '0'.concat(d.day) : d.day} ${months[d.month - 1]} ${d.hourStr}`
    : d.day !== null
      ? `${months[d.month - 1]}-${d.day <= 9 ? '0'.concat(d.day) : d.day}`
      : months[d.month - 1];
}

/**
 * Genera el título para el eje Y de un gráfico.
 * @param {object} param - El objeto del parámetro seleccionado (ej. { cod: 'ph', desc: 'pH' }).
 * @param {object} ranges - Configuración de rangos para los valores de los parámetros.
 * @returns {object} Un objeto de configuración con el título.
 */
export function yaxisGen(param, ranges) {
  const toValue = Math.max.apply(null, ranges[param.cod].map(r => r.to));
  const title = { text: `Valores de ${param.desc}` };
  return { title, min: 0, max: toValue };
}

/**
 * Genera la configuración del eje X para un gráfico.
 * Extrae todas las etiquetas de categoría únicas de los datos de las series y las ordena.
 * @param {Array<object>} series - El array de series de datos para un gráfico. Cada objeto de serie contiene una propiedad 'data' que es un array de puntos {x, y}.
 * @returns {object} Un objeto de configuración para el eje X con el tipo 'category' y un array de categorías únicas y ordenadas.
 * @example ```returns { type: 'category', categories: ['Ene', 'Feb', 'Mar'] }```
 */
export function xaxisGen(series) {
  const allCategories = series.flatMap(s => s.data.map(c => c.x));
  const categories = [... new Set(allCategories)].sort();
  return { type: 'category', categories }
}

/**
 * Genera las etiquetas y segmentos de información.
 * Utiliza los rangos configurados
 * @param {Object} param Paramétro seleccionado
 * @param {object} ranges Rangos de los parámetros
 */
export function annotationsGen(param, ranges) {
  const annotations = {
    yaxis: ranges[param.cod].map(a => {
      return {
        y: a.from,
        y2: a.to,
        opacity: 0.2,
        fillColor: a.color,
        label: { text: a.label }
      }
    })
  }
  return annotations;
}