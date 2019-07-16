import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExcercise } from "../actions/excercise.action";

import ExcerciseList from "../components/ExcerciseList";

const Excercises = ({ history }) => {
  const dispatch = useDispatch();
  const { excercises } = useSelector(state => state.excercise);

  useEffect(() => {
    dispatch(getExcercise());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Excercise</h1>
      <div>
        <button
          className="button is-primary"
          onClick={() => history.push("/add")}
        >
          Create New Excercise
        </button>
      </div>

      {excercises.map(ex => (
        <ExcerciseList
          key={ex.id}
          name={ex.name}
          sets={ex.sets}
          reps={ex.reps}
          id={ex.id}
        />
      ))}
    </div>
  );
};

export default Excercises;
