import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProgram,
  updateProgram,
  setCurrent
} from "../actions/programsActions";

const Program = ({ match }) => {
  const dispatch = useDispatch();
  const { program, loading } = useSelector(state => state.programs);

  //const [name, setName] = useState("");
  const title = useRef(null);
  const levels = useRef(null);
  const times = useRef(null);
  const cal = useRef(null);
  const desp = useRef(null);

  const onUpdate = e => {
    e.preventDefault();

    const data = {
      name: title.current.value,
      level: levels.current.value,
      description: desp.current.value,
      time: times.current.value,
      calories: cal.current.value,
      id: program.id
    };

    console.log(data);

    dispatch(updateProgram(data));
  };

  useEffect(() => {}, []);

  const { name, level, time, calories, description, excercises } = program;
  return (
    <div>
      <Link to="/programs">
        <h4>Back</h4>
      </Link>
      <h1>{name}</h1>
      <p>{description}</p>
      {excercises.map(ex => (
        <div key={ex.id}>
          <h1 className="subtitle">{ex.name}</h1>
        </div>
      ))}

      <form onSubmit={onUpdate}>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              ref={title}
              type="text"
              placeholder="Title"
              defaultValue={name}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              ref={desp}
              defaultValue={description}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              ref={cal}
              type="text"
              placeholder="Estimated burned Calories"
              defaultValue={calories}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              ref={times}
              type="text"
              placeholder="Time"
              defaultValue={time}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div className="select">
              <select ref={levels} defaultValue={level}>
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
      </form>
    </div>
  );
};

export default Program;
