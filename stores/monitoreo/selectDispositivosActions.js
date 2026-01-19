import { task } from "nanostores";
import { notify } from "../notification/notify";
import { $allDispositivos, $dispositivosStatus, $rioSelected, $selectedRiosList } from "./selectDispositivosStatus";

const URLBASE = `${process.env.NEXT_PUBLIC_API_BASE}/dispositivos`;

/**
 * Recupera los dispositivos desde la API y los almacena en el estado.
 */
export const fetchAllDispositivos = async () => {
  try {
    const res = await fetch(URLBASE + '/all');
    if (!res.ok) {
      notify('Error al intentar el listado de dispositivos', 'error');
      console.error('[selectDispositivos-action] Error al obtener los datos:', res);
      return;
    }
    const { success, response } = await res.json();
    if (!success) {
      notify('Error en el servidor', 'error');
      console.error('[selectDispositivos-action] Error en el servidor:', response);
      return;
    }
    loadComponentData(response);
  } catch (error) {
    console.error('[selectDispositivos-action] Error al obtener los datos:', error.message);
    console.error(error);
    notify('Error al intentar obtener los datos');
  }
};

/**
 * Carga los datos iniciales en los estados correspondientes.
 * @param {Array} data - Lista de dispositivos obtenidos de la API.
 */
const loadComponentData = data => {
  if (!data) return;
  $allDispositivos.set([...data]);
  const first = data.shift();
  $dispositivosStatus.set([...data]);
  $selectedRiosList.set([first]);
}

/**
 * Maneja el cambio de selección en el selector de ríos.
 * @param {Event} ev - Evento de cambio del selector.
 */
export const handleRiosSelectChange = async ev => {
  const { target: { value } } = ev;
  if (value === '0' || value === undefined) {
    $rioSelected.set('');
    return;
  }
  $rioSelected.set(value);
};

/**
 * Actualiza la lista de ríos seleccionados y elimina el
 * río seleccionado de la lista de dispositivos.
 * @param {string} rio - Río seleccionado.
 */
export const handleAddRiosToSelectedList = () => {
  const rioSeleccionado = $rioSelected.get();
  if (rioSeleccionado === '' || rioSeleccionado === undefined) {
    notify('Seleccione un río', 'info', 2000)
    return;
  }
  const dispositivoToAdd = $dispositivosStatus.get().find(d => d.ubicacion === rioSeleccionado);
  if (dispositivoToAdd) {
    $selectedRiosList.set([...$selectedRiosList.get(), dispositivoToAdd]);
    $dispositivosStatus.set(
      $dispositivosStatus.get().filter(d => d.ubicacion !== rioSeleccionado)
    );
  } else {
    notify('Error al seleccionar el río. No se encuentra el dispositivo', 'error', 2000);
    return;
  }
  document.querySelector('select#select-rios').value = '0';
  $rioSelected.set('');
};

/**
 * Elimina un río de la lista de ríos seleccionados y lo
 * agrega de nuevo a la lista de dispositivos disponibles.
 * @param {string} ubicacion - Ubicación del río a eliminar.
 */
export const handleRomoveRiosFromSelectedList = (ubicacion) => {
  if (!ubicacion) return;
  $dispositivosStatus.set([...$dispositivosStatus.get(), $selectedRiosList.get().find(r => r.ubicacion === ubicacion)]);
  $selectedRiosList.set(
    $selectedRiosList.get().filter(r => r.ubicacion !== ubicacion)
  );
  document.querySelector('select#select-rios').value = '0';
  $rioSelected.set('');
};
