import { Button, Form, Input, Typography } from "antd";
import { useAsync } from "utils/use-async";
import { useAuth } from "../context/auth-context";

const Login: React.FC<{}> = () => {
  const { login } = useAuth();
  const { run, isLoading, error } = useAsync();
  const handlerSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    run(login({ username, password }));
  };
  return (
    <Form onFinish={handlerSubmit}>
      {error && (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      )}
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
        <Button loading={isLoading} type="primary" htmlType="submit" block>
          submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
