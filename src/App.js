import React from "react";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Apps</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/programs">Programs</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
