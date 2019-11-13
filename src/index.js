import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import FormUser from "./app/form/FormUser";
import TopSide from "./app/layout/Topside";

function App() {
  return (
    <TopSide />
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);