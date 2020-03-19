import fireAuth from 'api/firebase/firebaseAuth';
import 'assets/custom.scss';
import AppRouter from 'components/AppRouter';
import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};
export default withFirebaseAuth(fireAuth)(App);
