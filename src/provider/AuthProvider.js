import React from 'react';
import { API_URL } from 'services/apiUrls';
import { login, logout, register } from 'services/authService';
import localstorage from '../services/localstorage';

const token = localstorage.getItem(API_URL.token) || '';
const user = localstorage.getItem(API_URL.USER) || {};

const setSessionData = (...args) => {
  const [token, user] = args;
  localstorage.setItem(API_URL.TOKEN_KEY, token);
  localstorage.setItem(API_URL.USER, user);
};

const authLogout = () => {
  logout().then(() => {
    localstorage.removeItem(API_URL.TOKEN_KEY);
    localstorage.removeItem(API_URL.USER);
  });
};

const AuthContext = React.createContext();
const defaultValue = {
  user,
  token,
  login,
  authLogout,
  register,
  setSessionData,
};
export { AuthContext, defaultValue };
