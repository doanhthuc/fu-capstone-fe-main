import axios from "axios";
import {logLoading} from "../../../log_color.dev";

// axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      logLoading("axios is requesing with existed token");
    } else {
      logLoading("axios is requesing without token");
    }
    return config;
  },
  error => Promise.reject(error),
);
