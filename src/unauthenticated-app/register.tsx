import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";

const Register: React.FC<{}> = () => {
  const { register } = useAuth();
  const handlerSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    register({ username, password });
  };
  return (
    <Form onFinish={handlerSubmit}>
      <h1>Register</h1>
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
      <Form.Item
        name={"password2"}
        label="confirm password"
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
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
