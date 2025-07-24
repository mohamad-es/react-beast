import axios from "axios";

let currentAccessToken: string | null = null;

// This updates the token that interceptors will use:
export const setAccessTokenForInterceptor = (token: string | null) => {
  currentAccessToken = token;
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
  withCredentials: true,
});

// Request interceptor: attach token if available
axiosInstance.interceptors.request.use(
  (config) => {
    if (currentAccessToken) {
      config.headers["Authorization"] = `Bearer ${currentAccessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
          {},
          {
            headers: { "x-api-key": import.meta.env.VITE_API_KEY },
            withCredentials: true,
          }
        );

        const newAccessToken = res.data?.data?.access_token;
        if (!newAccessToken) throw new Error("No access token returned");

        // Update the memory variable
        currentAccessToken = newAccessToken;

        // 🔴 Dispatch the event so AuthContext can update React state:
        window.dispatchEvent(new CustomEvent("tokenRefreshed", { detail: newAccessToken }));

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("🔴 Token refresh failed:", refreshError);
        window.location.href = "/"; // You can customize this path
        return Promise.reject(refreshError);
      }
    }

    if (error.response?.status === 401) {
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);
