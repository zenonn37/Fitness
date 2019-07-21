import React from "react";
import { excerciseCurrent } from "../actions/excercise.action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function ExcerciseList({ name, sets, reps, id }) {
  const dispatch = useDispatch();

  const showData = () => {
    console.log("pressed");
  };

  return (
    <div className="ios-box">
      <div className="move-logo">
        <span className="icon has-text-info">
          <i className="fas fa-2x fa-heartbeat" />
        </span>
      </div>

      <div className="move-info">
        <h2 className="subtitle flex-control" onClick={() => showData()}>
          {name} | {sets}
          <i className="fas fa-1x fa-times" />
          {reps}
        </h2>
        <div>
          <progress className="progress is-link" value="70" max="100">
            30%
          </progress>
        </div>
      </div>

      <div className="move-complete">
        <i className="far fa-2x fa-check-circle" />
      </div>
    </div>
  );
}
