// import axiosInstance from '../api/axios'
// import useAuth from './useAuth'

// const REFRESH_URL = '/auth/refresh'

// function UseRefreshToken() {
//     const { setAuth } = useAuth()
//     const authHeader = { headers:
//         { 'Authorization': `Bearer ${setAuth?.refreshToken}` }
//     }   

//     async function refresh() {
//         const response = await axiosInstance.post(REFRESH_URL,
//             {
//             headers: {
//                 ...authHeader,
//                 'Content-Type': 'application/json'
//             },
//             withCredentials: false
//             })
//             const username = setAuth.username
//             const accessToken = response?.data?.access_token
//             const refreshToken = setAuth.refreshToken
//             const roles = setAuth.roles
//             setAuth({ username, roles, accessToken, refreshToken })
//                 // console.log(JSON.stringify(prev))
//             console.log(JSON.stringify(response.data))
//                 // console.log(response.data.access_token)
//             // return { ...prev,
//             //         // roles: response.data.roles,
//             //         accessToken: response.data.access_token
//             //     }
//             // })
//                 return response.data.access_token
//     }

//     return refresh
// }

// export default UseRefreshToken
