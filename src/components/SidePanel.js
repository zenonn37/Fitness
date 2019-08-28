import React from "react";
import { Link } from 'react-router-dom';

const SidePanel = () => {
  return (
    <div className="sidebar">

      <div className="active-panel">

        <div className="user">
          <div className="avatar">
            <img src="images/women.jpg" />
            <div className="edit-user">
              <i className="fas fa-edit"></i>

            </div>
          </div>
          <div className="person">
            <h2 className="title">Lila Croces</h2>
            <h5 className="sub-title">Female, 24 years</h5>
          </div>


        </div>

        <div className="menu">

          <ul>

            <li>
              <Link to="/">
                <i className="fas fa-home"></i>
                Home
                  </Link>

            </li>
            <li>
              <Link to="/programs">
                <i className="fas fa-tasks"></i>
                Programs
                  </Link>

            </li>
            <li>
              <Link to="/excercises">
                <i className="fas fa-dumbbell"></i>
                Excercises
                  </Link>

            </li>
            <li>
              <Link to="/">
                <i className="fas fa-bullseye"></i>
                My Goals
                  </Link>

            </li>
            <li>
              <Link to="/">
                <i className="fas fa-chart-line"></i>
                Statitics
                  </Link>

            </li>
            <li>
              <Link to="/">
                <i className="fas fa-calendar-day"></i>
                Schedule
                  </Link>

            </li>
            <li>
              <Link to="/">
                <i className="fas fa-user-cog"></i>
                Settings
                  </Link>

            </li>

          </ul>
        </div>

      </div>


    </div>
  )

};

export default SidePanel;
