import axiosInstance from '../api/axios'
import useAuth from './useAuth'

const REFRESH_URL = '/auth/refresh'

function UseRefreshToken() {
    const { setAuth } = useAuth()
    const authHeader = { headers:
        { 'Authorization': `Bearer ${setAuth?.refreshToken}` }
    }   

    async function refresh() {
        const response = await axiosInstance.post(REFRESH_URL,
            {
            headers: { 'Content-Type': 'application/json', ...authHeader },
            withCredentials: false
            })
            setAuth(prev => {
                console.log(JSON.stringify(prev))
                console.log(response.data.access_token)
                return { ...prev, accessToken: response.data.access_token }
            })
        return response.data.access_token
    }

    return refresh
}

export default UseRefreshToken
