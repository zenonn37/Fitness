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

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/create" component={CreateProgram} />
          <Route path="/programs" exact component={Programs} />
          <Route path="/programs/:id" component={Program} />
        </Switch>
      </Router>
    </div>
  </Provider>,

  document.getElementById("root")
);
