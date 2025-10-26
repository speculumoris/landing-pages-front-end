import axios from "axios";
const host = process.env.REACT_APP_BACKEND_CONNECTION || "http://localhost:8080";
const api = axios.create({
    baseURL: host,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
