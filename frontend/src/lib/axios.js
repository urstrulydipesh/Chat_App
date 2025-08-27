// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL:
//     import.meta.env.MODE === "development"
//       ? "http://localhost:5001/api"
//       : import.meta.env.VITE_BACKEND_URL + "/api",
//   withCredentials: true,
// });


import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://chat-app-backend-ka8x.onrender.com/api",
  withCredentials: true,
});
