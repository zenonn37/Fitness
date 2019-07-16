import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExcercise } from "../actions/excercise.action";
import { getPrograms } from "../actions/programsActions";

const CreateExcercise = ({ history }) => {
  const dispatch = useDispatch();

  const { programs } = useSelector(state => state.programs);

  const [failure, setFailure] = useState(false);
  const [workout, setProgram] = useState("");
  const [program] = useState([
    { name: "T-20", id: 1 },
    { name: "T-25", id: 2 },
    { name: "Elite-8", id: 3 }
  ]);

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  const title = useRef(null);
  const level = useRef(null);
  const sets = useRef(null);
  const reps = useRef(null);
  const instructions = useRef(null);

  const handleChange = e => {
    setFailure(e.target.checked);
  };

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      name: title.current.value,
      level: level.current.value,
      instructions: instructions.current.value,
      sets: parseInt(sets.current.value),
      reps: !failure ? parseInt(reps.current.value) : 0,
      failure: !failure ? 0 : 1,
      program_id: parseInt(workout)
    };
    dispatch(addExcercise(data));
    console.log(data);
  };

  return (
    <div>
      <h2 className="subtitle">Create Excercise</h2>
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
              placeholder="Instructions"
              ref={instructions}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              ref={sets}
              type="number"
              placeholder="Number of Sets Required"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            {failure ? (
              <input
                className="input is-large"
                ref={reps}
                type="number"
                placeholder="Number of Reps Required"
                disabled
              />
            ) : (
              <input
                className="input is-large"
                ref={reps}
                type="number"
                placeholder="Number of Reps Required"
              />
            )}
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
        <h2 className="subtitle">Select Program</h2>
        <div className="field">
          <div className="control">
            <div className="select">
              <select onChange={e => setProgram(e.target.value)}>
                <option value="N/A">
                  Choose A Workout to assiocate this Excercise with.
                </option>
                {programs.map(pro => (
                  <option key={pro.id} value={pro.id}>
                    {pro.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" value={failure} onChange={handleChange} />
              Push to Failure no Reps
            </label>
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

export default CreateExcercise;
