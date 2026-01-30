import { $authToken } from "../auth/token";
import { notify } from "../notification/notify";
import { $fieldsStatus, $isNew, loadFormStatus, resetFormStatus } from "./formStatus";
import { $tableData, $reloadTableData, $searchTerm } from "./tableStatus";

const URLBASE = process.env.NEXT_PUBLIC_API_BASE + '/admin/users';

/**
 * Obtiene los datos para la tabla desde el servidor.
 * Carga los datos obternidos en el estado global.
 */
export const fetchTableData = async () => {
  try {
    const res = await fetch(URLBASE + '/all', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${$authToken.get()}`,
      }
    });
    const { success, response } = await res.json();
    if (!res.ok) {
      notify('Error al intentar obtener los datos', 'error');
      console.error('[users-table-action] Error al obtener los datos:', response);
      return;
    }
    if (!success) {
      notify('Error en el servidor', 'error');
      console.error('[table-action] Error en el servidor:', response);
      return;
    }
    $tableData.set(response.reverse());
  } catch (error) {
    console.error('[users-table-action] Error al obtener los datos:', error.message);
    console.error(error);
    notify('Error al intentar obtener los datos');
  }
};

/**
 * Maneja la acción de editar de un ítem de la tabla.
 * Obtiene el ítem por ID desde el servidor y lo asigna al estado global.
 * @param {string} id - El ID a editar.
 */
export const handleEdit = async id => {
  try {
    const res = await fetch(`${URLBASE}/get/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${$authToken.get()}`,
      }
    });
    const { success, response } = await res.json();
    if (!res.ok) {
      notify('Error al intentar obtener los datos', 'error');
      console.error('[users-table-action] Error al obtener los datos:', response);
      return;
    }
    if (!success) {
      notify('Error en el servidor', 'error');
      console.error('[users-table-action] Error en el servidor:', response);
      return;
    }
    loadFormStatus(response, false);
  } catch (error) {
    console.error('[users-table-action] Error al obtener los datos:', error.message);
    console.error(error);
    notify('Error al intentar obtener los datos');
  }
};

/**
 * Maneja el evento de eliminar un ítem de la tabla.
 * @param {string} id - El ID del ítem a eliminar.
 */
export const handleDelete = async id => {
  try {
    const userData = $tableData.get().find(u => u.id === id);
    if (!userData) {
      console.error('[users-table-action] Error al eliminar, no existe un usuario con ese id en la tabla');
      return;
    }
    const conf = confirm(`¿Está seguro de eliminar el usuario ${userData.fullName}?`);
    if (!conf) {
      notify('Eliminación cancelada', 'info');
      return;
    }
    const res = await fetch(`${URLBASE}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${$authToken.get()}`,
      }
    });
    if (!res.ok) {
      notify('Error al intentar eliminar los datos', 'error');
      console.error('[users-table-action] Error al eliminar los datos:', res);
      return;
    }
    const { success, response } = await res.json();
    if (!success) {
      notify('Error en el servidor', 'error');
      console.error('[users-table-action] Error en el servidor:', response);
      return;
    }
    resetFormStatus();
    $reloadTableData.set(true);
    notify(`Se eliminó el usuario ${userData.fullName}`, 'success');
  } catch (error) {
    console.error('[users-table-action] Error al eliminar los datos:', error.message);
    console.error(error);
    notify('Error al intentar eliminar los datos');
  }
};

let timer = null;

export const handelSearch = async term => {
  $searchTerm.set(term);
  if (timer) clearTimeout(timer);
  try {
    timer = setTimeout(async () => {
      if (!term || term.trim().length === 0) {
        fetchTableData();
        return;
      }
      const res = await fetch(`${URLBASE}/search/${term.trim()}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$authToken.get()}`,
        }
      });
      if (!res.ok) {
        notify('Error al intentar buscar los datos', 'error');
        console.error('[users-table-action] Error al buscar:', res);
        return;
      }
      const { success, response } = await res.json();
      if (!success) {
        notify('Error en el servidor', 'error');
        console.error('[users-table-action] Error en el servidor:', response);
        return;
      }
      $tableData.set(response.reverse());
    }, 500);
  } catch (error) {
    console.error('[users-tableAction] Error al buscar:', error.message);
    console.error(error);
    notify('Error al intentar buscar los datos', 'error');
  }
};






