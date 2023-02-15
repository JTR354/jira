import { useEffect } from "react";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { User } from "../search-panel";

export const useUsers = (params?: object) => {
  const client = useHttp();

  const { run, ...result } = useAsync<User[]>();
  useEffect(() => {
    run(client("users", params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
};
