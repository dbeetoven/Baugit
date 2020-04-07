import React from 'react';
import AppRouter from 'components/AppRouter';
import 'assets/scss/styles.scss';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
registerLocale('es', es)
setDefaultLocale('es');

export const App = () => (
  <div className="App">
    <AppRouter />
  </div>
);
