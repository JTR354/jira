import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import { User } from "./search-panel";
export interface Project {
  id: number;
  name: string;
  personId: string;
  organization: string;
  created: string;
  key?: unknown;
}
interface ListProps extends TableProps<Project> {
  users: User[] | undefined;
}
const List = ({ users = [], dataSource = [], ...props }: ListProps) => {
  return (
    <Table
      title={() => <h1>项目列表</h1>}
      pagination={false}
      dataSource={dataSource.map((it) => ({ ...it, key: it.id }))}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
          key: "name",
        },
        {
          title: "部门",
          dataIndex: "organization",
          sorter: (a, b) => a.organization.localeCompare(b.organization),
          key: "organization",
        },
        {
          title: "负责人",
          dataIndex: "personId",
          sorter: (a, b) => +a.personId - +b.personId,
          render(value, record, index) {
            return users.find((it) => it.id === value)?.name;
          },
          key: "personId",
        },
        {
          title: "创建时间",
          dataIndex: "created",
          sorter: (a, b) => +a.created - +b.created,
          render(value) {
            return value ? dayjs(value).format("YYYY-MM-DD") : "未知";
          },
          key: "created",
        },
      ]}
      {...props}
    />
  );
};

export default List;
