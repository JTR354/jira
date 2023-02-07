const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login();
    function login() {
      fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then(async (response) => {
        if (response.ok) {
        }
      });
    }
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label htmlFor="username">name</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Login;
