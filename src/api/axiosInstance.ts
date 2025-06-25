import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // when need to setup refresh and accesstoken
  //   withCredentials: true,
});

// when need to setup refresh and accesstoken

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const res = await axios.post(
//           `/api${process.env.NEXT_PUBLIC_API_USER}/user-refresh-token`,
//           {},
//           { withCredentials: true }
//         );

//         const newAccessToken = res.data?.data?.access_token;
//         if (!newAccessToken) throw new Error("No access token returned");

//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error("🔴 Token refresh failed:", refreshError);
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
