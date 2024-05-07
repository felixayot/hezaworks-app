/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react'
import axiosInstance from '../api/axios'
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import {
    SignUpFormContainer,
    SignUpFormWrapper,
    SignUpFormTitle,
    SignUpFormInput,
    SignUpFormButton,
    SignUpFormText,
    SignUpFormLink,
    SignUp,
    SignUpFormRedirectLink, } from '../styles/SignUpFormStyles'
import { PageError, PageErrorButton, PageLoadingWrapper, PageSuccess } from '../styles/PageLoading.styles'

const SIGNUP_URL = '/auth/signup'

function TalentSignup() {

  const { auth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/home'

  useEffect(() => {
    document.title = 'HezaWorks - Talent Sign Up'
    if(auth.username) {
      navigate(from, { replace: true })
    }
  })

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ success, setSuccess ] = useState('')
  const [ error, setError ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosInstance.post(SIGNUP_URL,
        JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        password,
        confirm_password: confirmPassword
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      )
      console.log(response)
      window.location.href = '/login'
      setSuccess('Account created successfully')
  } catch (err) {
      if(!err?.response) {
          setError('No response from server')
      } else if(err.response?.status === 400) {
          setError('Invalid data')
      } else if(err.response?.status === 409) {
          setError('Username or Email already exists')
      } else {
          setError('An error occurred, please try again later')
      }
  }
  }

  if (error == '409') {
    return (
      <PageLoadingWrapper>
        <PageError>Username or Email already exists</PageError><br />
        <PageErrorButton onClick={() => {navigate(-1)}}>Go back</PageErrorButton>
      </PageLoadingWrapper>
    )
  } else if (error) {
    return (
      <PageLoadingWrapper>
        <PageError>{error}</PageError><br />
        <PageErrorButton onClick={() => {navigate(-1)}}>Go back</PageErrorButton>
      </PageLoadingWrapper>
    )
  } else if (success) {
    return (
      <PageLoadingWrapper>
        <PageSuccess>Account created successfully. Proceed to
          <PageErrorButton onClick={() => {navigate('/login')}}>Log in</PageErrorButton>
        </PageSuccess>
      </PageLoadingWrapper>
    )
  }

  return (
    <>
      <SignUpFormContainer>
          <SignUpFormWrapper>
              <SignUpFormTitle>Sign Up</SignUpFormTitle>
              <SignUp onSubmit={handleSubmit}>
              <SignUpFormInput
              type="text"
              required
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              placeholder="First Name" />
              <SignUpFormInput
              type="text"
              required
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              placeholder="Last Name" />
              <SignUpFormInput
              type="text"
              required
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder="Username" />
              <SignUpFormInput
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email" />
              <SignUpFormInput
              type="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password" />
              <SignUpFormInput
              type="password"
              required
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              placeholder="Confirm Password" />
            <SignUpFormButton type="submit"><SignUpFormRedirectLink to="/login" />Sign Up</SignUpFormButton>
              <SignUpFormText>
                  Already have an account? <SignUpFormLink to="/login">Log in</SignUpFormLink>
              </SignUpFormText>
              </SignUp>
          </SignUpFormWrapper>
      </SignUpFormContainer>
    </>
    )
}

export default TalentSignup
