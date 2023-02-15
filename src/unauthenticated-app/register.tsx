import { Form, Input, Button } from "antd";
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
        <Button htmlType="submit" type="primary" block>
          register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
