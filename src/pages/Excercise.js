import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showExcercise } from "../actions/excercise.action";

const Excercise = ({ match }) => {
  const dispatch = useDispatch();
  const { excercise } = useSelector(state => state.excercise);

  //   useEffect(() => {
  //     dispatch(showExcercise(match.params.id));
  //   }, [dispatch, match.params.id]);

  const { name } = excercise;
  return (
    <div>
      <h1 className="subtitle">{name}</h1>
    </div>
  );
};

export default Excercise;
