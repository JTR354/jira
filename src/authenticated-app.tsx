import ProjectList from "screens/project-list";
import { useAuth } from "./context/auth-context";
const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>logout</button>
      <ProjectList />;
    </div>
  );
};

export default AuthenticatedApp;
