import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Programs from "./pages/Programs";
import Program from "./pages/Program";
import CreateProgram from "./pages/CreateProgram";
import store from "./store";
import "./App.sass";
import "./style/main.css";
import { Provider } from "react-redux";
import history from "./actions/history";

import { Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/create" component={CreateProgram} />
          <Route path="/programs" exact component={Programs} />
          <Route path="/programs/:id" component={Program} />
        </Switch>
      </Router>
    </div>
  </Provider>,

  document.getElementById("root")
);
