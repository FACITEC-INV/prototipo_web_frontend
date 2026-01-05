import { $errorSelectDispositivosStatus, $selectedRiosList } from './selectDispositivosStatus';
import { $errorParams, } from './selectParametrosStatus';
import { $dayStatus, $errorsDateInputStatus, $monthStatus, $yearsStatus } from './dateInputStatus';
import { $isQueryLoading, $monitoreoData, $queryError } from './queryStatus';
import { notify } from '../notification/notify';

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_BASE}/lecturas/promedios`;

/**
 * Maneja el envío del formulario de consulta de datos de monitoreo.
 * @param {Event} [e] - Evento del formulario (opcional).
 */
export const handleQuerySubmit = async (e) => {
  if (e) e.preventDefault();

  const dateErrors = $errorsDateInputStatus.get();
  if (Object.values(dateErrors).some(error => error !== null)) {
    notify('Por favor, corrija los errores en la fecha.', 'warn');
    return;
  }
  if ($errorSelectDispositivosStatus.get()) {
    notify('Por favor, corrija los errores en la selección de ríos.', 'warn');
    return;
  }
  if ($errorParams.get()) {
    notify('Por favor, corrija los errores en la selección de parámetros.', 'warn');
    return;
  }

  $isQueryLoading.set(true);
  $monitoreoData.set({});
  $queryError.set(null);

  try {
    const riosSeleccionados = $selectedRiosList.get().map(rio => rio.ubicacion);
    const fecha = {
      year: $yearsStatus.get(),
      month: $monthStatus.get(),
      day: $dayStatus.get()
    };

    const resultsByUbicacion = {};

    for (const ubicacion of riosSeleccionados) {
      const queryParams = new URLSearchParams({
        ubicacion: ubicacion,
        year: fecha.year,
      });
      if (fecha.month && fecha.month !== 0) queryParams.append('month', fecha.month);
      if (fecha.day && fecha.day !== 0) queryParams.append('day', fecha.day);

      const fullUrl = `${BASE_API_URL}?${queryParams.toString()}`;

      const response = await fetch(fullUrl);
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || `Error al consultar datos para ${ubicacion}.`);
      }

      // Agrupar resultados por ubicación
      if (data.response && data.response.length > 0) {
        resultsByUbicacion[ubicacion] = data.response;
      }
    }

    $monitoreoData.set(resultsByUbicacion);

    if (Object.keys(resultsByUbicacion).length > 0) {
      notify('Consulta realizada con éxito.', 'success');
    } else {
      notify('No se encontraron datos para los criterios seleccionados.', 'info');
    }

  } catch (error) {
    console.error('[handleQuerySubmit] Error:', error);
    $queryError.set(error.message);
    notify(error.message, 'error');
  } finally {
    $isQueryLoading.set(false);
  }
};
