import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Programs from "./pages/Programs";
import Program from "./pages/Program";
import Profile from "./pages/Profile";
import CreateProgram from "./pages/CreateProgram";
import store from "./store";
import "./App.sass";
import "./style/main.css";
import { Provider } from "react-redux";
import history from "./actions/history";
import PrivateRoute from "./routing/PrivateRoute";
import { Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Excercises from "./pages/Excercises";
import Excercise from "./pages/Excercise";
import CreateExcercise from "./pages/CreateExcercise";
import Login from "./pages/Login";
import SidePanel from "./components/SidePanel";

import GuestLayout from "./layouts/guestLayout";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <GuestLayout />
      <SidePanel />
      <div className="container">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/Login" component={Login} />

          <PrivateRoute path="/" exact component={Profile} />
          <PrivateRoute path="/create" component={CreateProgram} />
          <PrivateRoute path="/programs" exact component={Programs} />
          <PrivateRoute path="/programs/:id" component={Program} />
          <PrivateRoute path="/excercises" exact component={Excercises} />
          <PrivateRoute path="/excercise/:id" component={Excercise} />
          <PrivateRoute path="/add" component={CreateExcercise} />
        </Switch>
      </div>
    </Router>
  </Provider>,

  document.getElementById("root")
);
