import { useAuth } from "context/auth-context";
import { SET_IS_LOGIN } from "unauthenticated-app";

const Register: React.FC<SET_IS_LOGIN> = ({ setIsLogin }) => {
  const { register } = useAuth();
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };
  return (
    <form onSubmit={handlerSubmit}>
      <h1>Register</h1>
      <div>
        <label htmlFor="username">name</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">register</button>
        <button
          type="button"
          onClick={() => {
            setIsLogin(true);
          }}
        >
          go to login
        </button>
      </div>
    </form>
  );
};

export default Register;
