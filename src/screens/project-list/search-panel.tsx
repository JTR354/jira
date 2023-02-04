export interface User {
  name: string;
  id: string;
}

interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchPanelProps["params"]) => void;
}
const SearchPanel = ({ users, params, setParams }: SearchPanelProps) => {
  return (
    <form>
      <input
        type="text"
        value={params.name}
        onChange={(e) =>
          setParams({
            ...params,
            name: e.target.value,
          })
        }
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          console.log(e.target.value);
          setParams({
            ...params,
            personId: e.target.value,
          });
        }}
      >
        <option value="">负责人</option>
        {users.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default SearchPanel;
