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
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });

  useEffect(() => {
    client("projects", { data: clearObject(debounceParams) }).then(setList);
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(clearObject(debounceParams))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
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
