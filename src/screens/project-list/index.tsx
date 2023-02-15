import { useState, useEffect } from "react";
import List from "./list";
import SearchPanel from "./search-panel";
import { clearObject, useMount, useDebounce } from "../../utils";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

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
    <Container>
      <Search params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </Container>
  );
};

export default ProjectList;

const Container = styled.section`
  padding: 2rem;
`;

const Search = styled(SearchPanel)`
  margin-bottom: 2rem;
`;
