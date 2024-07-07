// API url definition
import axios from 'axios'

/**
 * Use import.meta.env.VITE_ENV_VAR_NAME to access environment variables
 * in a Vite App as opposed to the normal process.env in React Apps.
 * Also, remember to prefix your environment variables with VITE_.
 * This is a safety precaution for Vite Apps not to accidentally
 * import env vars that are not intended to be public or to be be exposed
 * to the Vite App, just like we use REACT_APP_ in React App env vars.
 */

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
