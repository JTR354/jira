// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// import ProjectList from "./screens/project-list";
import Login from "./screens/login";
function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <h1 onClick={() => setToggle(!toggle)}>hello </h1>
      {/* {toggle && <ProjectList />} */}
      <Login />
    </div>
  );
}

export default App;
