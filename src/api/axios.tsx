// API url definition
import axios from 'axios'

// export const BASE_URL = 'https://hezaapi.custopedia.tech/'
export const BASE_URL = 'http://localhost:5000/'

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

export default axiosInstance;

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false
});
