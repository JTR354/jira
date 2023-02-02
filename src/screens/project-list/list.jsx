const List = ({ list, users }) => {
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
