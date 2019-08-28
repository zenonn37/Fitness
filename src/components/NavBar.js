import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../actions/auth.action";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  return (
    <React.Fragment>

      <header>
        <div className="logo">
          <Link to="/">

            <h2> FIT</h2>


          </Link>


        </div>
        <nav>
          <div className="left-content">

            <i className="fas fa-calendar"></i>
            <h3>Today, 28th August</h3>

          </div>

          <div className="right-content">
            <i className="fas fa-bell"></i>
            <i className="fas fa-sign-out-alt" onClick={() => dispatch(logOut())}></i>
          </div>
        </nav>

      </header>
      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">PLANK</div>

          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
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
                <div className="navbar-item">Jobs</div>
                <div className="navbar-item">Contact</div>
                <hr className="navbar-divider" />
                <div className="navbar-item">Report an issue</div>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {token ? (
                  ""
                ) : (
                    <div className="button is-primary">
                      <Link to="/login">
                        <strong>Login</strong>
                      </Link>
                    </div>
                  )}

                {token ? (
                  <div
                    className="button is-light"
                    onClick={() => dispatch(logOut())}
                  >
                    Logout
                  </div>
                ) : (
                    console.log("guest")
                  )}
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </React.Fragment>
  );
};

export default NavBar;
