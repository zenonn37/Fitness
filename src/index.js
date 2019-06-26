import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Programs from "./pages/Programs";
import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
         <Route path="/" exact component={App} />
        <Route path="/programs" component={Programs} />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
