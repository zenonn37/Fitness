import React, { useRef, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProgram, checkComplete } from "../actions/programsActions";

const CreateProgram = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, programs } = useSelector(state => state.programs);

  const title = useRef(null);
  const level = useRef(null);
  const time = useRef(null);
  const calories = useRef(null);
  const desp = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      name: title.current.value,
      level: level.current.value,
      description: desp.current.value,
      time: time.current.value,
      calories: calories.current.value
    };
    dispatch(createProgram(data));
    console.log(data);
  };

  return (
    <div>
      <h2 className="subtitle">Create Program</h2>
      <form onSubmit={onSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              ref={title}
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              placeholder="Description"
              ref={desp}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              ref={calories}
              type="text"
              placeholder="Estimated burned Calories"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              ref={time}
              type="text"
              placeholder="Time"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div className="select">
              <select ref={level}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
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
  );
};

export default CreateProgram;
