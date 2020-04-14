import React, { useState } from 'react';
import AppRouter from 'components/AppRouter';
import 'assets/scss/styles.scss';
import './App.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { authContext } from '../../api/context/api-context';
import localstorage from '../../api/localstorage';
import api from '../../api/api';

registerLocale('es', es);
setDefaultLocale('es');
export const App = () => {
  const [authValue, setAuthValue] = useState({
    token: localstorage.getItem(api.token) || null,
    user: localstorage.getItem(api.USER) || {},
    logged: !!localstorage.getItem(api.token)
  });

  const logout = () => {
    localstorage.clear();
    setAuthValue({
      logged: false
    });
  };

  const contextValue = { ...authValue, logout, setAuthValue };
  console.log(contextValue);


  return (
    <div className="App">
      <authContext.Provider value={contextValue}>
        <AppRouter />
      </authContext.Provider>
    </div>
  );
};
