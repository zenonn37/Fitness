import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../actions/auth.action";

const Register = ({ history }) => {
  const dispatch = useDispatch();

  const name = useRef("null");
  const email = useRef("null");
  const password = useRef("null");

  const onRegister = event => {
    event.preventDefault();
    const register = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    };

    console.log(register);

    dispatch(registerAction(register));
  };

  return (
    <React.Fragment>
      <div className="box">
        <form onSubmit={onRegister}>
          <div className="field">
            <div className="control">
              <input
                className="input is-large"
                ref={name}
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
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

export default Register;
