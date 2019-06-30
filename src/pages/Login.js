import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/auth.action";

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
      <div className="box">
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
          <button type="submit" className="button is-primary large">
            Save
          </button>
          <button
            onClick={() => history.push("/programs")}
            className="button is-danger large"
          >
            Cancel
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
