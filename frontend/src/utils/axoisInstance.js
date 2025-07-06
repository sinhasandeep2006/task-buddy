import axios from "axios";
import { BASE_URL } from "./apiPath";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // ✅ On success, just return the response
    return response;
  },
  (error) => {
    // ❌ Handle common errors globally
    if (error.response) {
      // Unauthorized → redirect to login
      if (error.response.status === 401) {
        window.location.href = "/login";
      }
      // Internal server error
      else if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      // Timeout error
      console.error("Request timeout. Please try again.");
    }

    // Always reject to allow local handling too
    return Promise.reject(error);
  }
);


export default axiosInstance;

