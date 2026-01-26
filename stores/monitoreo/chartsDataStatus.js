import { atom, effect } from "nanostores";
import { annotationsGen, seriesGen, xaxisGen, yaxisGen } from "./chartGenerators";
import { $chartsOptions } from "./chartsConfigStatus";
import { $qualityRanges } from "./qualityRangesStatus";
import { $monitoreoData } from "./queryStatus";
import { $selectedRiosList } from "./selectDispositivosStatus";
import { $paramsStatus } from "./selectParametrosStatus";
import { notify } from "../notification/notify";
import { $initialQueryMade } from "./formStatus";

/** Almacena los datos de los gráficos generados en el effect */
export const $chartsData = atom([]);

effect([$monitoreoData], (monitoreoData) => {
  if (!monitoreoData || Object.keys(monitoreoData).length === 0) {
    $chartsData.set([]);
    return;
  }

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
  if (!dataRead || Object.keys(dataRead).length === 0) return;
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

let previousRiosList = [...$selectedRiosList.get()];

effect([$selectedRiosList], currenRiosList => {
  if (currenRiosList.length === 0) {
    $chartsData.set([]);
    $monitoreoData.set(null);
    previousRiosList = [];
    return;
  }
  const currenCount = currenRiosList.length;
  const previousCount = previousRiosList.length;
  if (currenCount < previousCount) {
    const removedRio = previousRiosList.find(
      prev => !currenRiosList.some(curr => curr.ubicacion === prev.ubicacion)
    );
    if (!removedRio) return;
    const currentCharts = $chartsData.get();
    const allNewSeries = currentCharts.map(chart =>
      chart.series.filter(s => s.name !== removedRio.rio)
    );
    const flattenedSeries = allNewSeries.flat();
    const newXaxis = xaxisGen(flattenedSeries);
    const updatedCharts = currentCharts.map((chart, index) => {
      return { ...chart, series: allNewSeries[index], xaxis: newXaxis };
    });
    $chartsData.set(updatedCharts);
  } else if (currenCount > previousCount) {
    if(!$initialQueryMade.get()) {
      previousRiosList = [...currenRiosList];
      return;
    }
    const addedRio = currenRiosList.find(
      current => !previousRiosList.some(prev => prev.ubicacion === current.ubicacion)
    );
    if (addedRio) {
      const dataRead = $monitoreoData.get() || {};
      if (dataRead.hasOwnProperty(addedRio.ubicacion)) {
        const currentCharts = $chartsData.get();
        const params = $paramsStatus.get();
        const updatedCharts = currentCharts.map(chart => {
          const param = params.find(p => p.cod === chart.id);
          if (!param) return chart;
          const addedSeriesArr = seriesGen(param, [addedRio], dataRead);
          if (addedSeriesArr.length === 0) return chart;
          const addedSeries = addedSeriesArr[0];
          const newFullSerries = [...chart.series, addedSeries];
          const oldCategories = chart.xaxis.categories;
          const newCategories = addedSeries.data.map(d => d.x);
          const combinedCategories = [...new Set([...oldCategories, ...newCategories])].sort();
          const newXaxis = { type: 'category', categories: combinedCategories };
          return { ...chart, series: newFullSerries, xaxis: newXaxis };
        });
        $chartsData.set(updatedCharts);
      } else {
        notify('Para ver los datos de este río, por favor vuelva a consultar.', 'info');
      }
    }
  }
  previousRiosList = [...currenRiosList];
});