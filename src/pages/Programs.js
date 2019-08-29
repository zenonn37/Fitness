import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPrograms,
  deleteProgram,
  setCurrent
} from "../actions/programsActions";

import ProgramList from '../components/ProgramList'

const Programs = () => {
  const dispatch = useDispatch();
  const { programs, loading } = useSelector(state => state.programs);

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  return (
    <div>
      <h1 className="page-title">Program</h1>
      {/* <Link to="/create">New Program</Link> */}




      <ul>
        {programs.map(program => (

          <ProgramList key={program.id}
            name={program.name}
            level={program.level}
            time={program.time}
            id={program.id}
            excercises={program.excercises}

          />
          // <li key={program.id}>
          //   <Link
          //     to={`/programs/${program.id}`}
          //     onClick={() => dispatch(setCurrent(program.id))}
          //   >
          //     <h1>{program.name}</h1>
          //   </Link>
          //   <button onClick={() => dispatch(deleteProgram(program.id))}>
          //     X
          //   </button>
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
