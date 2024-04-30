/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react"
import useAxiosPrivate from "../hooks/UseAxiosPrivate"
import { PageError, PageErrorButton, PageLoading, PageLoadingWrapper, PageSuccessLink } from "../styles/PageLoading.styles"

const USERPROFILE_URL = '/auth/user/talentprofile'

function UserProfile() {
    const axiosPrivate = useAxiosPrivate()
    const [ profile, setProfile ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState('')

    useEffect(() => {
        axiosPrivate.get(USERPROFILE_URL, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: false,
          })
            .then((response) => {
                setProfile(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
              if (!err?.response) {
                setError('No response from server');
              } else if (err.response.status === 404) {
                setError('No profile found for this user.');
              } else {
                setError('Failed to fetch user profile.');
              }
            });
      }, []);

    if (error) {
        return <PageLoadingWrapper>
            <PageError>{error}</PageError><br />
            <PageErrorButton onClick={() => window.location.reload()}>
                Try again</PageErrorButton><br />
            Haven't created a profile yet?
            <PageSuccessLink to="/user/profile/create">
                Create here</PageSuccessLink>
        </PageLoadingWrapper>
    }

    if (isLoading) {
        return <PageLoadingWrapper>
            <PageLoading>Loading...</PageLoading>
        </PageLoadingWrapper>
    }
  
    return (
    <>
        <h2>User Talent Profile</h2>
        <p>Resume: {profile.resume}</p>
        <p>Phone: {profile.phone_number}</p>
        <p>Address: {profile.address}</p>
        <p>City: {profile.city}</p>
        <p>Education Level: {profile.education_level}</p>
        <p>Institution: {profile.institution}</p>
        <p>Field: {profile.field}</p>
        <p>Employer: {profile.employer}</p>
        <p>Title: {profile.title}</p>
        <p>Responsibilities: {profile.responsibilities}</p>
        <button><PageSuccessLink to="/user/profile/update">Update profile</PageSuccessLink>
        </button>
        <br />
        <br />
    </>
    )
}

export default UserProfile
