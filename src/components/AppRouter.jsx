import React, { useContext } from 'react';
import { LayoutPage } from 'components/Layout';
import ROUTES from 'constants/routes';
import ForgotPasswordPage from 'pages/forgotPasswordPage/ForgotPasswordPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/loginPage/LoginPage';
import SignUpPage from 'pages/signupPage/SignUpPage';
import { Route, Switch } from 'react-router-dom';
import { Profile } from 'pages/profile/Profile';
import { Dashboard } from 'pages/dashboard/Dashboard';
import { Posts } from 'pages/posts/posts';
import { AuthContext } from 'provider/AuthProvider';

const AppRouter = () => {
  const authContext = useContext(AuthContext);

  return (
    <Switch>
      {/* <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.SIGNUP} component={SignUpPage} />
      <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} /> */}
      {/* <Layout user={authContext.user} logout={useContext.logout}>
        <Route path={ROUTES.PROFILE} component={Profile} />
        <Route path={ROUTES.JOBS_HIRING} component={Dashboard} />
        <Route path={ROUTES.JOBS_POSTS} component={Posts} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
      </Layout> */}
      <Route exact path={ROUTES.HOME} component={LayoutPage} />
    </Switch>
  );
};

export default AppRouter;
