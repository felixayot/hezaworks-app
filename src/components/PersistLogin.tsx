/* eslint-disable */
// @ts-nocheck

// import { Outlet } from "react-router-dom"
// import { useState, useEffect } from "react"
// import useAuth from "../hooks/useAuth"
// import { PageLoading, PageLoadingWrapper } from "../styles/PageLoading.styles"

// function PersistLogin() {
//     const [ isLoading, setIsLoading ] = useState(true)
//     const { auth } = useAuth()

//     useEffect(() => {
//         const verifyAccessToken = async () => {
//             try {
//                 await window.location.reload()
//                 const accessToken = auth?.accessToken
//                 auth((prev => {...prev, accessToken }))
//             }

//             } catch (err) {
//                 console.log(err)
//             } finally {
//                 setIsLoading(false)
//             }
//         })

//         !auth.accessToken ? verifyrefreshToken() : setIsLoading(false)
//     }, [])
    
//   return (
//     <>
//     {
//         isLoading ?
//         <PageLoadingWrapper>
//             <PageLoading>Loading...</PageLoading>
//         </PageLoadingWrapper>
//         :
//         <Outlet />
//     }
//     </>
//   )
// }

// export default PersistLogin
