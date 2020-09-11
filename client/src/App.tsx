import React from "react";
import { Register } from "./components/Register/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
