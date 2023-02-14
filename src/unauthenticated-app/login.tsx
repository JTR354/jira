import { Button, Form, Input } from "antd";
import { useAuth } from "../context/auth-context";

const Login: React.FC<{}> = () => {
  const { login } = useAuth();
  const handlerSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    login({ username, password });
  };
  return (
    <Form onFinish={handlerSubmit}>
      <h1>Login</h1>
      <Form.Item
        name={"username"}
        label="username"
        rules={[{ required: true, message: "pls input username" }]}
      >
        <Input type="text" id="username" />
      </Form.Item>
      <Form.Item
        name={"password"}
        label="password"
        rules={[{ required: true, message: "pls input password" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
