import { Table } from "antd";
import dayjs from "dayjs";
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
          title: "部门",
          dataIndex: "organization",
          sorter: (a, b) => a.organization.localeCompare(b.organization),
        },
        {
          title: "负责人",
          dataIndex: "personId",
          sorter: (a, b) => +a.personId - +b.personId,
          render(value, record, index) {
            return users.find((it) => it.id === value)?.name;
          },
        },
        {
          title: "创建时间",
          dataIndex: "created",
          sorter: (a, b) => +a.created - +b.created,
          render(value) {
            return value ? dayjs(value).format("YYYY-MM-DD") : "未知";
          },
        },
      ]}
    />
  );
};

export default List;
