import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../actions/auth.action";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/">Dashboard</Link>
            </div>

            <div className="navbar-item">
              <Link to="/programs">Programs</Link>
            </div>
            <div className="navbar-item">
              <Link to="/excercises"> Excercises </Link>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>

              <div className="navbar-dropdown">
                <div className="navbar-item">About</div>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-primary">
                  <Link to="/login">
                    <strong>Login</strong>
                  </Link>
                </div>
                <div
                  className="button is-light"
                  onClick={() => dispatch(logOut())}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
