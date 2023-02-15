import { useEffect } from "react";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { Project } from "../list";
import { clearObject } from "utils/index";

export const useProjects = (params?: Partial<Project>) => {
  const client = useHttp();

  const { run, ...result } = useAsync<Project[]>();
  useEffect(() => {
    run(client("projects", { data: clearObject(params) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return result;
};
