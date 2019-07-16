import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/auth.action";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const email = useRef("null");
  const password = useRef("null");

  const onLogin = event => {
    event.preventDefault();
    const login = {
      username: email.current.value,
      password: password.current.value
    };

    console.log(login);

    dispatch(loginAction(login));
  };

  return (
    <React.Fragment>
      <div className="auth-box">
        <div className="auth-container">
          <div className="auth-brand">PLANK</div>
          <div className="auth-input">
            <h2 className="subtitle">Sign In</h2>
            <form onSubmit={onLogin}>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-large"
                    ref={email}
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-large"
                    ref={password}
                    type="password"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="sign">
                <button type="submit" className="button is-primary is-large ">
                  Sign In
                </button>

                <Link to="/register">
                  <p>Need an Account? Sign up.</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
