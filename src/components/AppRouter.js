import Navbar from 'components/NavBar';
import ROUTES from 'constants/routes';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/loginPage/LoginPage';
import SignUpPage from 'pages/signupPage/SignUpPage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
    <div style={style}>
      <Router>
        <Navbar />
        <Switch>
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.SIGNUP} component={SignUpPage} />
          <Route path={ROUTES.HOME} exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};

const style = {
  width: '100%',
  // height: '100%',
};

export default AppRouter;
