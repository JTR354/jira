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
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ name, personId, id }) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{users.find((it) => it.id === personId)?.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
