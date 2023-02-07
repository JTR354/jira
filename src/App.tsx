// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";

// import ProjectList from "./screens/project-list";
// import Login from "./screens/login";
import { useAuth } from "context/auth-context";
import UnauthenticatedApp from "unauthenticated-app";
import AuthenticatedApp from "authenticated-app";
function App() {
  // const [toggle, setToggle] = useState(true);
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      {/* <h1 onClick={() => setToggle(!toggle)}>hello </h1> */}
      {/* {toggle && <ProjectList />} */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
