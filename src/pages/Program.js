import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProgram } from "../actions/programsActions";

const Program = ({ match }) => {
  const dispatch = useDispatch();
  const { program, loading } = useSelector(state => state.programs);

  useEffect(() => {
    dispatch(getProgram(match.params.id));
  }, [dispatch]);

  return (
    <div>
      <h1>{program.name}</h1>
      <p>{program.description}</p>
    </div>
  );
};

export default Program;
