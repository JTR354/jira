import { useState } from "react";
import Login from "./login";
import Register from "./register";

const UnauthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? <Login /> : <Register />}
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? `go to register` : "go to login"}
      </button>
    </>
  );
};

export default UnauthenticatedApp;
