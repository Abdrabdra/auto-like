import axios from "axios";
import { mainModule } from "process";

export const DEV_API = "http://137.184.123.64/";
// export const PROD_API = "https://";

export const $api = axios.create({
  baseURL: DEV_API,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  }
});
