import { useState } from "react";
import List from "./list";
import SearchPanel from "./search-panel";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "./hooks/projects";
import { useUsers } from "./hooks/users";
import { useDebounce, useDocumentTitle } from "utils";

const ProjectList = () => {
  const [params, setParams] = useState({ name: "", personId: "" });

  const {
    data: list,
    error,
    isLoading,
  } = useProjects(useDebounce(params, 500));

  const { data: users } = useUsers();

  useDocumentTitle("项目列表");

  return (
    <Container>
      <Search params={params} setParams={setParams} users={users} />
      {error && (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      )}
      <List dataSource={list} users={users} loading={isLoading} />
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
