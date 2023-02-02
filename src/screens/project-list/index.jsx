import { useState, useEffect } from "react";
import qs from "qs";
import List from "./list";
import SearchPanel from "./search-panel";
import { clearObject, useMount, useDebounce } from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [params, setParams] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const debounceParams = useDebounce(params, 500);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(clearObject(debounceParams))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParams]);

  return (
    <>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </>
  );
};

export default ProjectList;
