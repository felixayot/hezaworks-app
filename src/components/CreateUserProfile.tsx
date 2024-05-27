/* eslint-disable */
// @ts-nocheck

import { useLocation, useNavigate } from "react-router-dom";
import {
  ProfileForm, UserProfileButton, UserProfileContainer,
  UserProfileInput, UserProfileTextArea, UserProfileTitle,
  UserProfileWrapper } from '../styles/UserProfile.styles'
import { useState, useEffect } from 'react'
import { PageError, PageErrorButton, PageLoadingWrapper, PageSuccess, PageSuccessLink } from '../styles/PageLoading.styles'
import useAxiosPrivate from '../hooks/UseAxiosPrivate'
import Icon from "./Icons";

const PROFILE_URL = '/auth/user/talentprofile'

function CreateUserProfile() {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/user/profile'

  useEffect(() => {
    document.title = 'HezaWorks | Create My Profile'
  }
  , [])

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

  const handleFileChange = (e) => {
    setResume(e.target.files[0])
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleCityChange = (e) => {
    setCity(e.target.value)
  }

  const handleELChange = (e) => {
    setEducationLevel(e.target.value)
  }

  const handleInstChange = (e) => {
    setInstitution(e.target.value)
  }

  const handleFieldChange = (e) => {
    setField(e.target.value)
  }

  const handleEmpChange = (e) => {
    setEmployer(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
}

  const handleRespChange = (e) => {
    setResponsibilities(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('resume', resume)
    formData.append('fileName', resume.name)
    formData.append('phone_number', phone)
    formData.append('address', address)
    formData.append('city', city)
    formData.append('education_level', educationLevel)
    formData.append('institution', institution)
    formData.append('field', field)
    formData.append('employer', employer)
    formData.append('title', title)
    formData.append('responsibilities', responsibilities)
    // console.log(formData)
    // console.log(formData.get('fileName'))
    // console.log(formData.get('phone_number'))
    // console.log(formData.get('address'))
    // console.log(formData.get('city'))
    // console.log(formData.get('education_level'))
    // console.log(formData.get('institution'))
    // console.log(formData.get('field'))
    // console.log(formData.get('employer'))
    // console.log(formData.get('title'))
    // console.log(formData.get('responsibilities'))

    try {
      const response = await axiosPrivate.post(PROFILE_URL,
        formData,
        {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: false
        }
      )
      // console.log(response)
      setSuccess('Profile creation successful!')
      setResume('')
      setPhone('')
      setAddress('')
      setCity('')
      setEducationLevel('')
      setInstitution('')
      setField('')
      setEmployer('')
      setTitle('')
      setResponsibilities('')
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
    <PageError>{error}</PageError><br />
    <PageErrorButton onClick={() => navigate(-1)}>Go Back</PageErrorButton>
    </PageLoadingWrapper>
  } else if (success) {
    return <PageLoadingWrapper>
    <PageSuccess>{success}</PageSuccess><br />
    <PageErrorButton>
      <PageSuccessLink to="/user/profile">View Profile</PageSuccessLink>
    </PageErrorButton>
    </PageLoadingWrapper>
  }

  return (
    <>
    <UserProfileTitle>Create Your Professional Profile</UserProfileTitle>
    <UserProfileContainer>
        <ProfileForm encType="multipart/form-data">
        <UserProfileWrapper>
        <UserProfileTitle>Upload your Resume</UserProfileTitle>
        {/* <h4>Resume:</h4> */}
        <UserProfileInput
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        required
        // value={resume}
        onChange={handleFileChange}
        />
        {/* <UserProfileButton onClick={() => null}><Icon className="fa-solid fa-arrow-right"></Icon>Proceed to Next</UserProfileButton>
        </ProfileForm> */}
        </UserProfileWrapper>

        <UserProfileWrapper>
        <UserProfileTitle>Personal Information</UserProfileTitle>
          {/* <ProfileForm> */}
        <UserProfileInput
        type="text"
        required
        // value={phone}
        onChange={handlePhoneChange}
        placeholder="Phone Number" />
        <UserProfileInput
        type="text"
        required
        // value={address}
        onChange={handleAddressChange}
        placeholder="Home Address" />
        <UserProfileInput
        type="text"
        required
        // value={city}
        onChange={handleCityChange}
        placeholder="City" />
        {/* <UserProfileButton><Icon className="fa-solid fa-arrow-right"></Icon>Proceed to Next</UserProfileButton>
        </ProfileForm> */}
        </UserProfileWrapper>

        <UserProfileWrapper>
        <UserProfileTitle>Education</UserProfileTitle>
          {/* <ProfileForm> */}
        <UserProfileInput
        type="text"
        required
        // value={educationLevel}
        onChange={handleELChange}
        placeholder="Education Level" />
        <UserProfileInput
        type="text"
        required
        // value={institution}
        onChange={handleInstChange}
        placeholder="Institution" />
        <UserProfileInput
        type="text"
        required
        // value={field}
        onChange={handleFieldChange}
        placeholder="Field of Study" />
        {/* <UserProfileButton><Icon className="fa-solid fa-arrow-right"></Icon>Proceed to Next</UserProfileButton>
        </ProfileForm> */}
        </UserProfileWrapper>

        <UserProfileWrapper>
        <UserProfileTitle>Professional Experience</UserProfileTitle>
          {/* <ProfileForm> */}
        <UserProfileInput
        type="text"
        required
        // value={employer}
        onChange={handleEmpChange}
        placeholder="Employer" />
        <UserProfileInput
        type="text"
        required
        // value={title}
        onChange={handleTitleChange}
        placeholder="Title" />
        <UserProfileTextArea
        type="textarea"
        required
        // value={responsibilities}
        onChange={handleRespChange}
        placeholder="Responsibilites" />
        <UserProfileButton onClick={handleSubmit}><Icon className="fa-solid fa-paper-plane"></Icon>Submit</UserProfileButton>
        </UserProfileWrapper>
        </ProfileForm>
        </UserProfileContainer>
  </>
  )
}

export default CreateUserProfile
