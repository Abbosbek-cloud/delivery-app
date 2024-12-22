import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interfaces
import { ILoginResponse, IUser } from "../../interfaces";
import { deleteCookie, setCookie } from "cookies-next";

interface IAuthState extends Omit<IUser, "createdAt" | "updatedAt"> {
  accessToken: string;
  refreshToken: string;
}

const initialState: IAuthState = {
  id: "",
  username: "",
  phone: "",
  role: "",
  location: [0, 0],
  accessToken: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<ILoginResponse>) => {
      state.username = action.payload.data.username;
      state.phone = action.payload.data.phone;
      state.location = action.payload.data.location;
      state.role = action.payload.data.role;
      state.id = action.payload.data.id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      setCookie("accessToken", action.payload.accessToken);
      setCookie("refreshToken", action.payload.refreshToken);
    },
    logoutAction: (state) => {
      state.username = "";
      state.phone = "";
      state.location = [0, 0];
      state.role = "";
      state.id = "";
      state.accessToken = "";
      state.refreshToken = "";
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginAction } = authSlice.actions;

export default authSlice;
