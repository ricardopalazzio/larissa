import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Formulario from "./formulario/Formulario";
import Operacao from "./operacao/Operacao";
import NavBar from "./layout/NavBar";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/formulario" component={Formulario} />
            <Route path="/operacao" component={Operacao} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
