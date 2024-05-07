/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react"
import useAxiosPrivate from "../hooks/UseAxiosPrivate"
import { ErrorButton,
  PageError, PageErrorButton,
  PageLoading, PageLoadingWrapper,
  PageSuccessLink } from "../styles/PageLoading.styles"
import { TPAttribute, TPContainer,
  TPLink, TPTitle, TPatag } from "../styles/ViewTalentProfile.styles"
import { TPButton } from "../styles/TalentList.styles"

const USERPROFILE_URL = '/auth/user/talentprofile'

function UserProfile() {
    const axiosPrivate = useAxiosPrivate()
    const [ profile, setProfile ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState('')

    useEffect(() => {
        axiosPrivate.get(USERPROFILE_URL, {
            headers: {
              "Content-Type": "multipart/form-data",
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
                setError('No profile found');
              } else {
                setError('Failed to fetch user profile.');
              }
            });
      }, []);

    if (error === 'No profile found') {
        return <PageLoadingWrapper>
            <PageError>You have no professional profile yet.</PageError><br />
            <ErrorButton><TPLink to="/user/profile/create">
                Create one here</TPLink>
                </ErrorButton>
        </PageLoadingWrapper>
    } else if (error) {
        return <PageLoadingWrapper>
            <PageError>{error}</PageError><br />
            <PageErrorButton onClick={() => window.location.reload()}>
                Try again</PageErrorButton>
        </PageLoadingWrapper>
    }

    if (isLoading) {
        return <PageLoadingWrapper>
            <PageLoading>Loading...</PageLoading>
        </PageLoadingWrapper>
    }
  
    const VIEWRESUME_URL = `/main/cv/${profile.resume}`

    return (
    <>
      <TPContainer>
        <TPTitle>User Talent Profile</TPTitle>
        <TPAttribute><h3>Resume</h3><TPatag href={`http://localhost:5000/${VIEWRESUME_URL}`}
        target="_blank">{profile.resume}</TPatag></TPAttribute>
        <TPAttribute><h3>Phone</h3>{profile.phone_number}</TPAttribute>
        <TPAttribute><h3>Address</h3>{profile.address}</TPAttribute>
        <TPAttribute><h3>City</h3>{profile.city}</TPAttribute>
        <TPAttribute><h3>Education Level</h3>{profile.education_level}</TPAttribute>
        <TPAttribute><h3>Institution</h3>{profile.institution}</TPAttribute>
        <TPAttribute><h3>Field</h3>{profile.field}</TPAttribute>
        <TPAttribute><h3>Employer</h3>{profile.employer}</TPAttribute>
        <TPAttribute><h3>Title</h3>{profile.title}</TPAttribute>
        <TPAttribute><h3>Responsibilities</h3>{profile.responsibilities}</TPAttribute>
        <TPButton><TPLink to="/user/profile/update">Update profile</TPLink>
        </TPButton>
        </TPContainer>
    </>
    )
}

export default UserProfile
