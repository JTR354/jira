import { useState } from "react";
import Login from "./login";
import Register from "./register";
import { Card, Button } from "antd";

const UnauthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isLogin ? <Login /> : <Register />}
        <Button type="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? `go to register` : "go to login"}
        </Button>
      </Card>
    </div>
  );
};

export default UnauthenticatedApp;
