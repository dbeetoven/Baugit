import React from 'react';
import AppRouter from 'components/AppRouter';
import 'assets/scss/styles.scss';
import './App.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { AuthProvider } from 'api/provider/AuthProvider';

registerLocale('es', es);
setDefaultLocale('es');
export const App = () => (
  <div className="App">
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </div>
);
