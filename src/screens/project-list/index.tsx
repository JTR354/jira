import { useState, useEffect } from "react";
import List from "./list";
import SearchPanel from "./search-panel";
import { clearObject, useMount, useDebounce } from "../../utils";
import { useHttp } from "utils/http";

const ProjectList = () => {
  const [params, setParams] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const debounceParams = useDebounce(params, 500);

  const client = useHttp();

  useMount(() => {
    client("users").then(setUsers);
  });

  useEffect(() => {
    client("projects", { data: clearObject(debounceParams) }).then(setList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParams]);

  return (
    <>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </>
  );
};

export default ProjectList;
