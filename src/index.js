import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import Formulario from "./app/form/Formulario";
//import NavBar from "./app/layout/NavBar";
import NavBar from "./app/layout/NavBar";

function App() {
  return (
    <NavBar />
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);