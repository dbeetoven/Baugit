import React, { useContext } from 'react';
import { LayoutPage } from 'components/Layout';
import ROUTES from 'constants/routes';
import ForgotPasswordPage from 'pages/forgotPasswordPage/ForgotPasswordPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/loginPage/LoginPage';
import { Posts } from 'pages/posts/posts';
import { Profile } from 'pages/profile/Profile';
import SignUpPage from 'pages/signupPage/SignUpPage';
import { AuthContext } from 'provider/AuthProvider';
import { Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  const authContext = useContext(AuthContext);

  return (
    <Switch>
      <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.SIGNUP} component={SignUpPage} />
      <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
      <LayoutPage user={authContext.user}>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.PROFILE} component={Profile} />
        <Route path={ROUTES.JOBS_POSTS} component={Posts} />
      </LayoutPage>
    </Switch>
  );
};

export default AppRouter;
