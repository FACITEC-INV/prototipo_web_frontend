import { atom, computed } from "nanostores";
import { $authToken } from "./token";
import { jwtDecode } from "jwt-decode";

/** Estado que almacena el rol del usuario. */
export const $userRole = atom('')

/** Estado que almacena el nombre completo del usuario. */
export const $userFullname = atom('');

/** Estado que almacena el nombre de usuario. */
export const $username = atom('');

/** Estado que indica si el usuario está autenticado. */
export const $isAuthenticated = computed($authToken, token => {
  try {
    if (!token) return false;
    const { role, fullname } = jwtDecode(token);
    if (!token || !role || !fullname) return false;
    return true;
  } catch (error) {
    console.error("[status-actions] Error al decodificar el token:", error);
    return false;
  }
});

/** Estado que indica si el usuario es administrador. */
export const $isAdmin = computed($authToken, token => {
  try {
    if (!token) return false;
    const { role } = jwtDecode(token);
    if (!role) return false;
    const userRole = role.toLowerCase();
    if (userRole === 'admin' || userRole === 'root') return true;
    return false;
  } catch (error) {
    console.error("[status-actions] Error al decodificar el token:", error);
    return false;
  }
});

export const setUserStatus = (token) => {
  try {
    const payload = jwtDecode(token);
    $userRole.set(payload.role.toLowerCase() || 'user');
    $userFullname.set(payload.fullname || '');
    $username.set(payload.sub || '');
    console.log("Estado del usuario establecido:", {
      role: $userRole.get(),
      fullname: $userFullname.get(),
      username: $username.get(),
      isAdmin: $isAdmin.get(),
      isAuthenticated: $isAuthenticated.get()
    });
  } catch (error) {
    console.error("Error al establecer el rol del usuario:", error);
    throw new Error("Error al establecer el rol del usuario");
  }
};

