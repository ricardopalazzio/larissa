import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from './login/index';
import Layout from './layout/NavBar';
import PrivateRoute from './PrivateRoute';
import FormUser from './form/FormUser';
import Dashboard from './dashboard/index';

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/FormUser" component={FormUser} />
        <Route component={NotFound404} />
      </Switch>
    </div>
  </div>
);
const Router = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <PrivateRoute path="/" component={wrappedRoutes} />
    </Switch>
  </main>
);
export default Router;
