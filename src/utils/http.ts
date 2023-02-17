import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object;
  token?: string;
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customerConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
      ...headers,
    },
    ...customerConfig,
  };

  if (config.method?.toLocaleUpperCase() === "GET") {
    endpoint += "?" + qs.stringify(data);
  } else {
    config.body = JSON.stringify(data || {});
  }
  const response = await window.fetch(`${apiUrl}/${endpoint}`, config);
  if (response.status === 401) {
    await auth.logout();
    // window.location.reload();
    return Promise.reject({ message: "请重新登录！" });
  }
  const json = await response.json();
  if (response.ok) {
    return json;
  } else {
    return Promise.reject(json);
  }
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) => {
    return http(endpoint, { ...config, token: user?.token });
  };
};
