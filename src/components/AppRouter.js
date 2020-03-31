import React from 'react';
import ROUTES from 'constants/routes';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/loginPage/LoginPage';
import {Layout} from 'components/Layout'
import SignUpPage from 'pages/signupPage/SignUpPage';
import ForgotPasswordPage from 'pages/forgotPasswordPage/ForgotPasswordPage'
import { Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
      <Switch>
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.SIGNUP} component={SignUpPage} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
        <Layout>
        <Route exact path={ROUTES.HOME}  component={HomePage} />
        </Layout>
      </Switch>
  );
};

export default AppRouter;
