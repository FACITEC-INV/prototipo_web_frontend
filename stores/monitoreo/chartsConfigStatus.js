import { atom } from "nanostores";

export const $chartsOptions = atom({
  chart: { type: 'line', height: 300, zoom: { enabled: true } },
  stroke: { curve: 'smooth', show: true, width: 2 },
  xaxis: { type: 'category' },
  yaxis: { title: { text: 'Valores medidos' } },
  fill: { opacity: 1 },
  title: {
    text: 'Grafico de valore medidos',
    align: 'left'
  },
  dataLabels: { enabled: false },
  legend: {
    show: true, position: 'top',
    horizontalAlign: 'right', floating: true,
    offsetY: -25, offsetX: -5
  },
});
