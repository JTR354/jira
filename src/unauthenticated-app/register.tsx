import { Form, Input, Button, Typography } from "antd";
import { useAuth } from "context/auth-context";
import { useAsync } from "utils/use-async";

const Register: React.FC<{}> = () => {
  const { register } = useAuth();
  const { run, error, isLoading } = useAsync();
  const handlerSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    run(register({ username, password }));
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
      <Form.Item
        name={"password2"}
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "pls input password again",
          },
          ({ getFieldValue }) => {
            return {
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("two password not match"));
                }
              },
            };
          },
        ]}
      >
        <Input.Password placeholder="confirm password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" block loading={isLoading}>
          register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
