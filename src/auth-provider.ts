import { User } from "./screens/project-list/search-panel";

const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => sessionStorage.getItem(localStorageKey) || "";

export const handlerUserResponse = ({ user }: { user: User }) => {
  sessionStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (data: { username: string; password: string }) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return handlerUserResponse(await response.json());
  } else {
    return Promise.reject(await response.json());
  }
};

export const register = async (data: {
  username: string;
  password: string;
}) => {
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return handlerUserResponse(await response.json());
  } else {
    return Promise.reject(await response.json());
  }
};

export const logout = async () => sessionStorage.removeItem(localStorageKey);
