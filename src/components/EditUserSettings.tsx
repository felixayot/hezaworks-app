/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react'
import {
  FormLabel,
  SignUp, SignUpFormButton, SignUpFormContainer,
  SignUpFormInput, SignUpFormLink, SignUpFormText,
  SignUpFormTitle, SignUpFormWrapper } from '../styles/SignUpFormStyles'
  import useAxiosPrivate from '../hooks/UseAxiosPrivate';

  const ACCPROFILE_URL = 'auth/users/me'

function EditAccountSettings() {
  const axiosPrivate = useAxiosPrivate()

  const [ password, setPassword ] = useState('************')
  const [ email, setEmail ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ profilePicture, setProfilePicture ] = useState('')
  // const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState('')
  const [ success, setSuccess ] = useState('')

  useEffect(() => {
    document.title = 'HezaWorks - Edit Account Settings'
    axiosPrivate.get(ACCPROFILE_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    })
      .then((response) => {
          setEmail(response.data.email);
          setUsername(response.data.username);
          setProfilePicture(response.data.profile_picture);
      })
      .catch((err) => {
        if (!err?.response) {
          setError('No response from server');
        } else {
          setError(`Failed to fetch user account ${err?.response?.data?.message}`);
        }
      });
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    axiosPrivate.put(ACCPROFILE_URL, {
        password,
        email,
        username,
    })
    .then((response) => {
      setSuccess(`Dear ${response.data.username}, your account details have been updated successfully!`);
    })
    .catch((err) => {
        if (!err?.response) {
            setError('No response from server');
        } else {
            setError('Failed to update post');
        }
    });
}

  return (
    <SignUpFormContainer>
        <SignUpFormWrapper>
            <SignUp encType="multipart/form-data">
            <SignUpFormTitle>Update User Account Settings</SignUpFormTitle>
            <FormLabel>Change Password</FormLabel>
            <SignUpFormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            >
            </SignUpFormInput>
            <FormLabel>Change Email</FormLabel>
            <SignUpFormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></SignUpFormInput>
            <FormLabel>Change Username</FormLabel>
            <SignUpFormInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}></SignUpFormInput>
            <FormLabel>Change Profile Picture</FormLabel>
            <SignUpFormInput
            type="image"
            accept=".png,.jpg,.jpeg,.gif"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            ></SignUpFormInput>
            <SignUpFormButton onClick={handleSubmit}>Save Changes</SignUpFormButton>
            </SignUp>
        </SignUpFormWrapper>
    </SignUpFormContainer>
  )
}

export default EditAccountSettings
