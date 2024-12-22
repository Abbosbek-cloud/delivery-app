import axios, { AxiosHeaderValue, HeadersDefaults } from "axios";
import { getCookie } from "cookies-next";
import { API_ENDPOINT } from "../constants";

export type I_Axios_Headers = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
  "Accept-Language"?: "uz" | "ru";
};

const AXIOS_CLIENT_MAIN = axios.create();

AXIOS_CLIENT_MAIN.defaults.baseURL = API_ENDPOINT;

AXIOS_CLIENT_MAIN.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Accept-Language": getCookie("NEXT_LOCALE") as string,
} as I_Axios_Headers & HeadersDefaults & { [key: string]: AxiosHeaderValue };

AXIOS_CLIENT_MAIN.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");

    if (token) {
      // Configure this as per your backend requirements
      config.headers!["Authorization"] = `Bearer ${token}`;
      config.headers!["Accept-Language"] = getCookie("NEXT_LOCALE");
    }

    // Remove default 'Content-Type' for FormData requests
    if (config.data instanceof FormData) {
      delete config.headers!["Content-Type"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AXIOS_CLIENT_MAIN;
