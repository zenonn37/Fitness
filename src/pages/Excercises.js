import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExcercise } from "../actions/excercise.action";

const Excercises = () => {
  const dispatch = useDispatch();
  const excercise = useSelector(state => state.excercises);

  useEffect(() => {
    dispatch(getExcercise());
  }, [dispatch]);

  return <div>Excercise</div>;
};

export default Excercises;
