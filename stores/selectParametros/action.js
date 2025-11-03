import { $paramsStatus } from "./status";

export const toggleParams = (cod) => {
  const index = $paramsStatus.get().findIndex((p, i) => {
    if (p.cod === cod) {
      $paramsStatus.setKey(`${i}.isChecked`, !p.isChecked);
    }
  });
}
