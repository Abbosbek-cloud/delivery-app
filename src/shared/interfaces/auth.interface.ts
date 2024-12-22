export interface IUser {
  id: string;
  username: string;
  phone: string;
  role: string;
  location: [number, number];
  createdAt: string;
  updatedAt: string;
}

export interface ILoginRequest
  extends Omit<IUser, "id" | "createdAt" | "updatedAt" | "role"> {}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  data: IUser;
}
