// API url definition
import axios from 'axios'

export const BASE_URL = import.meta.env.VITE_PRODUCTION_BASE_URL
// export const BASE_URL = import.meta.env.VITE_LOCAL_DEV_BASE_URL

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

export default axiosInstance;

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false
});
