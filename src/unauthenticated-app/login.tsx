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
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "pls input username" }]}
      >
        <Input type="text" id="username" placeholder="username" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "pls input password" }]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
