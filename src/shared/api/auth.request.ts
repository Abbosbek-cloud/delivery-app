import { axiosConfig } from "../config";

interface I_Login_Data {
  username: string;
  password: string;
}

export const login = async (data: I_Login_Data) => {
  const response = await axiosConfig.post("/auth/login", data);
  return response;
};
