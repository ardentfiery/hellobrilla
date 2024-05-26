import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://192.168.1.14:3502",
  // baseURL: "http://localhost:3502",
  baseURL: "https://backend.brillasystem.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
   config.withCredentials=true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;