import { useState } from "react";
import Login from "./login";
import Register from "./register";

export interface SET_IS_LOGIN {
  setIsLogin: (login: boolean) => void;
}

const UnauthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? (
    <Login setIsLogin={setIsLogin} />
  ) : (
    <Register setIsLogin={setIsLogin} />
  );
};

export default UnauthenticatedApp;
