import { batched, computed } from "nanostores";
import { $monitoreoData } from "./queryStatus";
import { $paramsStatus } from "./selectParametrosStatus";
import { $qualityRanges } from "./qualityRangesStatus";
import { $chartsOptions } from "./chartsConfigStatus";
import { $selectedRiosList } from "./selectDispositivosStatus";

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

/**
 * Store derivado de Nanostores que genera un array de configuraciones de gráficos.
 * Este store reacciona a los cambios en los datos de monitoreo, los parámetros seleccionados,
 * los dispositivos, los rangos de calidad y las opciones base de los gráficos.
 * Por cada parámetro que el usuario selecciona, genera un objeto de configuración completo
 * y listo para ser renderizado por un componente de gráfico ApexCharts.
 * @returns {Array<object>} Un array donde cada objeto es una configuración completa para un gráfico.
 */
export const $chartsData = batched(
  [$monitoreoData, $paramsStatus, $selectedRiosList, $qualityRanges, $chartsOptions,],
  (data, params, devicesData, ranges, options) => {
    const selectedParams = params.filter(p => p.isChecked);
    const chartsData = selectedParams.map(param => {
      const series = seriesGen(param, devicesData, data);
      const yaxis = yaxisGen(param);
      const annotations = annotationsGen(param, ranges);
      const title = { text: param.desc };
      const xaxis = xaxisGen(series);
      return { ...options, title, xaxis, yaxis, series, annotations };
    })
    return chartsData;
  });

/**
 * Genera el array de series de datos para un único gráfico (un parámetro).
 * Itera sobre cada ubicación en los datos recibidos y crea un objeto de serie (una línea en el gráfico) para cada una.
 * @param {object} param - El objeto del parámetro individual para el que se generarán las series.
 * @param {Array<object>} devicesData - La lista de dispositivos/ríos seleccionados para encontrar el nombre del río.
 * @param {object} data - El objeto con todos los datos de monitoreo, con las ubicaciones como claves.
 * @returns {Array<object>} Un array de objetos de serie, listo para ser usado en la configuración de un gráfico ApexCharts.
 * @example ```return [{ "name": "Curuguaty'y", "data": [ { "x": "Nov-01", "y": 1362.02 }, { "x": "Nov-02", "y": 1433.9 },... ] } ] ```
 */
function seriesGen(param, devicesData, data) {
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
function yValueGen(readData) {
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
 * @returns {object} Un objeto de configuración con el título.
 */
function yaxisGen(param) {
  const title = { text: `Valores de ${param.desc}` };
  return { title };
}

/**
 * Genera la configuración del eje X para un gráfico.
 * Extrae todas las etiquetas de categoría únicas de los datos de las series y las ordena.
 * @param {Array<object>} series - El array de series de datos para un gráfico. Cada objeto de serie contiene una propiedad 'data' que es un array de puntos {x, y}.
 * @returns {object} Un objeto de configuración para el eje X con el tipo 'category' y un array de categorías únicas y ordenadas.
 * @example ```returns { type: 'category', categories: ['Ene', 'Feb', 'Mar'] }```
 */
function xaxisGen(series) {
  const allCategories = series.flatMap(s => s.data.map(c => c.x));
  const categories = [... new Set(allCategories)].sort();
  return { type: 'category', categories }
}

function annotationsGen(param, ranges) {
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
