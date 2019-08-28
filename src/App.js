import React from "react";
import Programs from "./pages/Programs";
import Program from "./pages/Program";
import Profile from "./pages/Profile";
import CreateProgram from "./pages/CreateProgram";
import { useSelector } from 'react-redux';
// import "./App.sass";
import "./style/main.css";
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

function App() {

  const { token } = useSelector(state => state.auth);
  return <Router history={history}>

    <div className="app">
      <GuestLayout />
      <main className="main-content">
        {token ? <SidePanel /> : ""}
        <div className="content">
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
        </div>
      </main>
    </div>
  </Router>

}

export default App;
