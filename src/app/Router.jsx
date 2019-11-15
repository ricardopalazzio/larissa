import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './layout/NavBar';
import PrivateRoute from './PrivateRoute';
import Formulario from './form/Formulario';
import Dashboard from './dashboard/index';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout}/>
      <PrivateRoute path="/Dashboard" component={Dashboard} />
      <PrivateRoute path="/Formulario" component={Formulario} />
    </Switch>
  </BrowserRouter>
);
export default Router;
