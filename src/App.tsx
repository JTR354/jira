// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import ProjectList from "./screens/project-list";
function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <h1 onClick={() => setToggle(!toggle)}>hello </h1>
      {toggle && <ProjectList />}
    </div>
  );
}

export default App;
