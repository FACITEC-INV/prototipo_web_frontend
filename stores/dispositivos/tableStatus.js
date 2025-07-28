import { atom, effect, } from "nanostores";
import { fetchTableData } from "./tableActions";

export const $tableData = atom([]);
export const $searchTerm = atom('');
export const $reloadTableData = atom(true);


effect($reloadTableData, (fetchData) => {
  if (!fetchData) return;
  fetchTableData()
  $reloadTableData.set(false);
});
