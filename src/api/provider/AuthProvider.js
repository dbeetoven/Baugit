import React from 'react';
import httpService from 'api/axios-client';
import localstorage from '../localstorage';
import api from '../api';

const token = localstorage.getItem(api.token);
const user = localstorage.getItem(api.USER);

const setSessionData = (...args) => {
  const [token, user] = args;
  localstorage.setItem(api.TOKEN_KEY, token);
  localstorage.setItem(api.USER, user);
};

const login = ({ email, password }) => httpService.post(api.LOGIN, { email, password });

const logout = () => {
  localstorage.removeItem(api.TOKEN_KEY);
  localstorage.removeItem(api.USER);
};

const register = ({ username, email, password }) => httpService.post(api.SIGNUP, { username, email, password });

const AuthContext = React.createContext({
  user, token, login, logout, register
});

export { AuthContext };
