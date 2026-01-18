import { addChart, removeChart } from "./chartsDataStatus";
import { $paramsStatus } from "./selectParametrosStatus";

export const toggleParams = (cod) => {
  const params = $paramsStatus.get()
  const index = params.findIndex(p => p.cod === cod);
  const param = params[index];
  const paramIsChecked = param.isChecked;
  $paramsStatus.setKey(`${index}.isChecked`, !paramIsChecked)

  if (paramIsChecked) {
    removeChart(param);
  } else {
    addChart(param);
  }
}
