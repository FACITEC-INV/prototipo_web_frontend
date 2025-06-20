import { persistentAtom } from "@nanostores/persistent";


export const $authToken = persistentAtom("authToken", null, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const setAuthToken = (token) => {
  $authToken.set(token);
};

export const clearAuthToken = () => {
  $authToken.set(null);
};

