import React from 'react';
import localstorage from '../localstorage';
import api from '../api';

const logout = () => {
  localstorage.removeItem(api.TOKEN_KEY);
  localstorage.removeItem(api.USER);
};

const setLoginData = (user, token) => {
  localstorage.setItem(api.TOKEN_KEY, token);
  localstorage.setItem(api.USER, user);
};

const INITIAL_AUTH_STATE = {
  token: localstorage.getItem(api.token),
  user: localstorage.getItem(api.USER),
  logged: !!localstorage.getItem(api.token),
  logout,
  setLoginData
};
const authContext = React.createContext(INITIAL_AUTH_STATE);

export {
  authContext, // Export it so it can be used by other Components
};
