import { Table } from "antd";
import { User } from "./search-panel";
interface Project {
  id: number;
  name: string;
  personId: string;
  organization: string;
  created: string;
}
interface ListProps {
  list: Project[];
  users: User[];
}
const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      dataSource={list}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          dataIndex: "personId",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, record, index) {
            return users.find((it) => it.id === value)?.name;
          },
        },
      ]}
    />
  );
};

export default List;
