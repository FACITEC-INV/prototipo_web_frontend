import { atom, computed } from "nanostores";
import { $authToken } from "./token";
import { jwtDecode } from "jwt-decode";
import { handleLogout } from "./actions";

/** Estado que almacena el rol del usuario. */
export const $userRole = atom('')

/** Estado que almacena el nombre completo del usuario. */
export const $userFullName = atom('');

/** Estado que almacena el nombre de usuario. */
export const $userName = atom('');

/** Estado que indica si el usuario está autenticado. */
export const $isAuthenticated = computed($authToken, token => {
  try {
    if (!token) {
      console.warn("[auth-status] No hay token");
      return false;
    }

    const { role, fullName, exp } = jwtDecode(token);

    if (!role || !fullName) {
      console.warn("[auth-status] Token incorrecto");
      handleLogout();
      return false;
    }

    // Verifica la expiración del token
    const nowInSeconds = Math.floor(Date.now() / 1000);
    if (nowInSeconds >= exp) {
      console.warn("[auth-status] Token expirado");
      handleLogout();
      return false;
    }

    return true;
  } catch (error) {
    console.error("[auth-status] Error al decodificar el token:", error);
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
    console.error("[auth-status] Error al decodificar el token:", error);
    return false;
  }
});

export const setUserStatus = (token) => {
  try {
    const payload = jwtDecode(token);
    $userRole.set(payload.role.toLowerCase() || 'user');
    $userFullName.set(payload.fullName || '');
    $userName.set(payload.sub || '');
  } catch (error) {
    console.error("[auth-status] Error al establecer el rol del usuario:", error);
    throw new Error("Error al establecer el rol del usuario");
  }
};

