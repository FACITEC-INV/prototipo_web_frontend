const { atom } = require("nanostores");

export const $notifcations = atom([]);

const fadeOutTimers = {};
const removeTimers = {};
let count = 0;

const getId = () => `notify-${count++}`;

/**
 * Función para mostrar una notificación.
 * types: info, success, warning, error
 * @param {string} message - El mensaje de la notificación.
 * @param {string} type - El tipo de notificación (info, success, warning, error).
 * @param {number} duration - Duración en milisegundos antes de que la notificación se cierre automáticamente.
 */
export const notify = (message = '', type = 'info', duration = 8000) => {
  const id = getId();
  const notification = {
    id,
    message,
    type,
    show: true,
    animated: 'fade-in',
  };
  clearTimeout(fadeOutTimers[id]);
  clearTimeout(removeTimers[id])
  $notifcations.set([...$notifcations.get(), notification]);
  fadeOutTimers[id] = setTimeout(() => {
    const updated = $notifcations.get().map(n =>
      n.id === id ? { ...n, animated: 'fade-out' } : n
    );
    $notifcations.set(updated);
    removeTimers[id] = setTimeout(() => {
      const remaining = $notifcations.get().filter(n => n.id !== id);
      $notifcations.set(remaining);

      delete fadeOutTimers[id];
      delete removeTimers[id];
    }, 1000);
  }, duration);
}
