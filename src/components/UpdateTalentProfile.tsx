/* eslint-disable */
// @ts-nocheck

import { useLocation, useNavigate } from "react-router-dom";
import {
  ProfileForm, UserProfileButton, UserProfileContainer,
  UserProfileInput, UserProfileTextArea, UserProfileTitle,
  UserProfileWrapper } from '../styles/UserProfile.styles'
import { useState, useEffect } from 'react'
import { PageError, PageLoadingWrapper, PageSuccessLink } from '../styles/PageLoading.styles'
import useAxiosPrivate from '../hooks/UseAxiosPrivate'
import Icon from "./Icons";

const USERPROFILE_URL = '/auth/user/talentprofile'

function UpdateTalentProfile() {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/jobs'

  const axiosPrivate = useAxiosPrivate();

  const [resume, setResume] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [educationLevel, setEducationLevel] = useState('')
  const [institution, setInstitution] = useState('')
  const [field, setField] = useState('')
  const [employer, setEmployer] = useState('')
  const [title, setTitle] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'HezaWorks | Update My Profile'
    axiosPrivate.get(USERPROFILE_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
        .then((response) => {
            setResume(response.data.resume)
            setPhone(response.data.phone_number)
            setAddress(response.data.address)
            setCity(response.data.city)
            setEducationLevel(response.data.education_level)
            setInstitution(response.data.institution)
            setField(response.data.field)
            setEmployer(response.data.employer)
            setTitle(response.data.title)
            setResponsibilities(response.data.responsibilities)
        })
        .catch((err) => {
          if (!err?.response) {
            setError('No response from server');
          } else {
            setError('Failed to fetch user profile.');
          }
        });
  }
  , [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosPrivate.put(USERPROFILE_URL,
        JSON.stringify({
          resume,
          phone_number: phone,
          address,
          city,
          education_level: educationLevel,
          institution,
          field,
          employer,
          title,
          responsibilities
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      )
      setSuccess('Your Profile has been updated successfully!')
      // navigate(from, { replace: true })
    } catch (err) {
      if (!err?.response) {
        setError('No response from server')
      } else if (err.response?.status === 400) {
        setError('Invalid data')
      } else {
        setError('An error occurred, please try again later')
      }
    }
  }

  if (error) {
    return <PageLoadingWrapper>
    <PageError>{error}</PageError>
    </PageLoadingWrapper>
  } else if (success) {
    return <PageLoadingWrapper>
    <PageError>{success}</PageError>
    <PageSuccessLink to="/user/profile">View Profile</PageSuccessLink>
    </PageLoadingWrapper>
  }

  return (
    <>
    <UserProfileTitle>Update Your Professional Profile</UserProfileTitle>
    <UserProfileContainer>
        <UserProfileWrapper>
        <UserProfileTitle>Upload your Resume</UserProfileTitle>
          <ProfileForm>
        <label>Resume:
        <UserProfileInput
        type="file"
        required
        // value={resume}
        onChange={(e)=>setResume(e.target.value)} />
        </label>
        <UserProfileButton><Icon className="fa-solid fa-arrow-right"></Icon>Proceed to Next</UserProfileButton>
        </ProfileForm>
        </UserProfileWrapper>

        <UserProfileWrapper>
        <UserProfileTitle>Personal Information</UserProfileTitle>
          <ProfileForm>
        <UserProfileInput
        type="text"
        required
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        placeholder="Phone Number" />
        <UserProfileInput
        type="text"
        required
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        placeholder="Home Address" />
        <UserProfileInput
        type="text"
        required
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        placeholder="City" />
        <UserProfileButton><Icon className="fa-solid fa-arrow-right"></Icon>Proceed to Next</UserProfileButton>
        </ProfileForm>
        </UserProfileWrapper>

        <UserProfileWrapper>
        <UserProfileTitle>Education</UserProfileTitle>
          <ProfileForm>
        <UserProfileInput
        type="text"
        required
        value={educationLevel}
        onChange={(e)=>setEducationLevel(e.target.value)}
        placeholder="Education Level" />
        <UserProfileInput
        type="text"
        required
        value={institution}
        onChange={(e)=>setInstitution(e.target.value)}
        placeholder="Institution" />
        <UserProfileInput
        type="text"
        required
        value={field}
        onChange={(e)=>setField(e.target.value)}
        placeholder="Field of Study" />
        <UserProfileButton><Icon className="fa-solid fa-arrow-right"></Icon>Proceed to Next</UserProfileButton>
        </ProfileForm>
        </UserProfileWrapper>

        <UserProfileWrapper>
        <UserProfileTitle>Professional Experience</UserProfileTitle>
          <ProfileForm>
        <UserProfileInput
        type="text"
        required
        value={employer}
        onChange={(e)=>setEmployer(e.target.value)}
        placeholder="Employer" />
        <UserProfileInput
        type="text"
        required
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Title" />
        <UserProfileTextArea
        type="textarea"
        required
        value={responsibilities}
        onChange={(e)=>setResponsibilities(e.target.value)}
        placeholder="Responsibilites" />
        <UserProfileButton onClick={handleSubmit}><Icon className="fa-solid fa-paper-plane"></Icon>Submit</UserProfileButton>
        </ProfileForm>
        </UserProfileWrapper>
        </UserProfileContainer>
  </>
  )
}

export default UpdateTalentProfile
