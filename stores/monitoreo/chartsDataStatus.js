import { atom, effect } from "nanostores";
import { annotationsGen, seriesGen, xaxisGen, yaxisGen } from "./chartGenerators";
import { $chartsOptions } from "./chartsConfigStatus";
import { $qualityRanges } from "./qualityRangesStatus";
import { $monitoreoData } from "./queryStatus";
import { $selectedRiosList } from "./selectDispositivosStatus";
import { $paramsStatus } from "./selectParametrosStatus";

/** Almacena los datos de los gráficos generados en el effect */
export const $chartsData = atom([]);

effect([$monitoreoData], (monitoreoData) => {
  if (!monitoreoData) return;

  if (Object.keys(monitoreoData).length > 0 && $chartsData.get().length === 0) {
    const params = $paramsStatus.get();
    const defaultSelectedParams = params.filter(p => p.isChecked);
    defaultSelectedParams.forEach(p => {
      addChart(p);
    });
  }
});

export const addChart = param => {
    const dataRead = $monitoreoData.get();
    const qualityRanges = $qualityRanges.get();
    const chartsOptions = $chartsOptions.get();
    const devicesData = $selectedRiosList.get();
    const series = seriesGen(param, devicesData, dataRead);
    const yaxis = yaxisGen(param, qualityRanges);
    const annotations = annotationsGen(param, qualityRanges);
    const title = { text: param.desc };
    const id = param.cod;
    const xaxis = xaxisGen(series);
    const newChart = { id, ...chartsOptions, title, xaxis, yaxis, series, annotations };
    $chartsData.set([...$chartsData.get(), newChart]);
};

export const removeChart = param => {
    $chartsData.set($chartsData.get().filter(chart => chart.id !== param.cod));
};