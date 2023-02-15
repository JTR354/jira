import { Form, Input, Select } from "antd";

export interface User {
  name: string;
  id: string;
  token: string;
}

interface SearchPanelProps {
  users: User[] | undefined;
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchPanelProps["params"]) => void;
}
const SearchPanel = ({ users = [], params, setParams }: SearchPanelProps) => {
  return (
    <Form layout="inline" style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          type="text"
          value={params.name}
          onChange={(e) =>
            setParams({
              ...params,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          defaultValue={""}
          onChange={(value) => {
            setParams({
              ...params,
              personId: value,
            });
          }}
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map(({ id, name }) => {
            return (
              <Select.Option key={id} value={id}>
                {name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default SearchPanel;
