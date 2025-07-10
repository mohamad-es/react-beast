import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    "Content-Type": "multipart/form-data",
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASEURL}${process.env.NEXT_PUBLIC_API_USER}/user-refresh-token`,
          {},
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
            withCredentials: true,
          }
        );

        const newAccessToken = res.data?.data?.access_token;
        if (!newAccessToken) throw new Error("No access token returned");

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

