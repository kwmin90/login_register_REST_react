import React from "react";
import { Register } from "./components/Register/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { MyAccount } from "./components/MyAccount/MyAccount";
import { Home } from "./components/Home/Home";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute
          path="/myaccount"
          component={MyAccount}
          redirectTo="/login"
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
