import { $authToken, clearAuthToken, setAuthToken } from "./token";
import { setUserStatus } from "./status";

const URLBASE = process.env.NEXT_PUBLIC_API_BASE;
const LOGIN = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT;

/**
 * Maneja el inicio de sesión del usuario.
 * @param {string} username - Nombre de usuario del usuario.
 * @param {string} password - Contraseña del usuario.
 */
export const login = async (username, password) => {
  try {
    if (!username || !password)
      throw new Error("Falta el nombre de usuario o el password");

    const res = await fetch(`${URLBASE}${LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      const msg = res.status === 401
        ? "Error! Datos incorrectos. Por favor, verifique sus credenciales"
        : 'Ocurrió un error al intentar iniciar sesión';
      console.error(`[action-login] [${res.status}]`, data.response);
      throw new Error(msg);
    }

    setAuthToken(data.response);
    setUserStatus($authToken.get());
  } catch (error) {
    console.error(`[action-login] ${error.message}`);
    console.error(error);
    throw new Error(error.message);
  }
}

/**
 * Maneja el cierre de sesión del usuario.
 */
export const handleLogout = async () => {
  clearAuthToken();
};

