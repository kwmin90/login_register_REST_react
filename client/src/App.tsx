import React from "react";
import { Register } from "./components/Register/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { MyAccount } from "./components/MyAccount/MyAccount";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/myaccount" component={MyAccount} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
