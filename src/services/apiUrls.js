const API_URL = {
  BASE_URL: process.env.REACT_APP_BASE_URL,
  PROVINCES: 'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre',
  LOGIN: 'auth/login',
  SIGNUP: 'auth/signup',
  LOGOUT: 'auth/me/logout',
  LOGOUT_ALL: 'auth/me/logoutAll',
  ME: 'auth/me',
  TOKEN_KEY: '_TOKEN_BAUGIT',
  USER: '_USER_BAUGIT',
};
export { API_URL };
