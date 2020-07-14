import axios from "axios";
import { beforeRequest, afterResponse } from "./interceptors";

const options = {
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:3000"
};

const api = axios.create(options);

api.interceptors.request.use(
  config => {
    config = beforeRequest(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    response = afterResponse(response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
