import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Programs from "./pages/Programs";
import Program from "./pages/Program";
import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/programs" exact component={Programs} />
        <Route path="/programs/:id" component={Program} />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
