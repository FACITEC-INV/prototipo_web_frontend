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

    if (!res.ok)
      throw new Error("Error al iniciar sesión");

    const data = await res.json();

    if (!data || !data.success)
      throw new Error("Token no recibido o inválido");

    setAuthToken(data.response);
    setUserStatus($authToken.get());
  } catch (error) {
    console.error(`${error.message}`, error);
    throw new Error("Error al iniciar sesión. Por favor, verifique sus credenciales");
  }

}

/**
 * Maneja el cierre de sesión del usuario.
 */
export const logout = async () => {
  clearAuthToken();
};

