import { ProfileForm, UserProfileButton, UserProfileContainer, UserProfileInput, UserProfileTitle, UserProfileWrapper } from '../styles/UserProfile.styles'
import { useState, useEffect } from 'react'
import axios from '../api/axios'
import { PageError, PageLoadingWrapper } from '../styles/PageLoading.styles'

const PROFILE_URL = '/auth/user/talentprofile'

function UserProfile() {
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

  const handleNext = (e) => {
    e.preventDefault()
    console.log('Next')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(PROFILE_URL,
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
      console.log(response)
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
      window.alert(success)
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
  }

  return (
    <>
    <UserProfileTitle>Create Your Professional Profile</UserProfileTitle>
    <UserProfileContainer>
        <UserProfileWrapper>
        <UserProfileTitle>Upload your Resume</UserProfileTitle>
          <ProfileForm>
        <label>Resume:
        <UserProfileInput
        type="file"
        required
        value={resume}
        onChange={(e)=>setResume(e.target.value)} />
        </label>
        <UserProfileButton onClick={handleNext}>Save and Proceed to Next</UserProfileButton>
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
        <UserProfileButton onClick={handleNext}>Save and Proceed to Next</UserProfileButton>
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
        <UserProfileButton onClick={handleNext}>Save and Proceed to Next</UserProfileButton>
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
        <UserProfileInput
        type="textarea"
        required
        value={responsibilities}
        onChange={(e)=>setResponsibilities(e.target.value)}
        placeholder="Responsibilites" />
        <UserProfileButton onClick={handleSubmit}>Review and Submit</UserProfileButton>
        </ProfileForm>
        </UserProfileWrapper>
        </UserProfileContainer>
  </>
  )
}

export default UserProfile
