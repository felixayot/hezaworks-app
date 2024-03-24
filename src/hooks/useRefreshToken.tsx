import axios from '../api/axios'
import useAuth from './useAuth'

const REFRESH_URL = '/auth/refresh'

function UseRefreshToken() {
    const { setAuth } = useAuth()

    async function refresh() {
        const response = await axios.post(REFRESH_URL,
            {
            headers: { 'Content-Type': 'application/json' },
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
