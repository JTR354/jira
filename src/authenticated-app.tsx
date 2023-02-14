import { Button } from "antd";
import ProjectList from "screens/project-list";
import { useAuth } from "./context/auth-context";
const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button onClick={logout}>logout</Button>
      <ProjectList />;
    </div>
  );
};

export default AuthenticatedApp;
