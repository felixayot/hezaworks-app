/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    SignUpFormContainer,
    SignUpFormWrapper,
    SignUpFormTitle,
    SignUpFormInput,
    SignUpFormButton,
    SignUpFormText,
    SignUpFormLink,
    SignUp,
    SignUpFormRedirectLink, } from '../styles/SignUpFormStyles';
import axiosInstance from '../api/axios';
import IsAuthenticated from './IsAuthenticated';
import { PageLoadingWrapper, PageSuccess } from '../styles/PageLoading.styles';

const SIGNUP_URL = '/auth/signup'

function EmployerSignup() {

  useEffect(() => {
    document.title = 'HezaWorks - Recruiter Sign Up'
  }
  , [])

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/home'

  if (IsAuthenticated()) {
    navigate(from, { replace: true })
  }

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ company, setCompany ] = useState('')
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
          company,
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
        setSuccess('Account creation successful! You will be notified via email \
        once your account has been approved for posting jobs.')
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

  return (
      <SignUpFormContainer style={{height: "120vh"}}>
        { success ?
        <PageLoadingWrapper>
          <PageSuccess>{success}</PageSuccess>
          <PageSuccess>
            Meanwhile you can proceed to
          <SignUpFormLink to="/login">Log in</SignUpFormLink> and interact with the platform.
        </PageSuccess>
        </PageLoadingWrapper>

        : error ? <SignUpFormText>{error}</SignUpFormText> :
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
              {/* <alert style={{ color: "#F6921E"}}>For employers, please indicate your company's or organization's name</alert> */}
              <SignUpFormInput
              type="text"
              required
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
              placeholder="Company/Organization Name" />
              <SignUpFormInput
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Work Email" />
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
       }
      </SignUpFormContainer>
    )
}

export default EmployerSignup
