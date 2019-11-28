import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Cadastro from "./formulario/Cadastro";
import Operacao from "./operacao/Operacao";
import Logout from "./login/Logout";
import NavBar from "./layout/NavBar";
import '../scss/app.scss';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/operacao" component={Operacao} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
