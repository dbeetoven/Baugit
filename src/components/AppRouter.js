import { Layout } from 'components/Layout';
import ROUTES from 'constants/routes';
import ForgotPasswordPage from 'pages/forgotPasswordPage/ForgotPasswordPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/loginPage/LoginPage';
import SignUpPage from 'pages/signupPage/SignUpPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Profile } from 'pages/profile/Profile';
import { Dashboard } from 'pages/dashboard/Dashboard';

const AppRouter = () => (
  <Switch>
    <Route path={ROUTES.LOGIN} component={LoginPage} />
    <Route path={ROUTES.SIGNUP} component={SignUpPage} />
    <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
    <Layout>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.PROFILE} component={Profile} />
      <Route path={ROUTES.JOBS_HIRING} component={Dashboard} />
    </Layout>
  </Switch>
);

export default AppRouter;
