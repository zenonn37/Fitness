import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showExcercise } from "../actions/excercise.action";

const Excercise = () => {
  const dispatch = useDispatch();
  const excercise = useSelector(state => state.excercises);

  useEffect(() => {
    dispatch(showExcercise());
  }, [dispatch]);

  return <div>Excercise</div>;
};

export default Excercise;
