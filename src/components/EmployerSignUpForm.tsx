import { useState } from 'react'
//import { useHistory } from 'react-router-dom'
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
import axios from '../api/axios';

const SIGNUP_URL = '/auth/signup'

function EmployerSignUpForm() {
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
        const response = await axios.post(SIGNUP_URL,
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
        window.location.href = '/login'
        setSuccess('Account creation successful!')
        window.alert(success)
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
        <SignUpFormText>Account creation successful! You will be notified via email
          once your account has been approved for posting jobs and projects.
          Meanwhile you can proceed to
          <SignUpFormLink to="/login">Log in</SignUpFormLink> and interact with the platform.
        </SignUpFormText>
        : error ? <SignUpFormText>{error}</SignUpFormText> : null
        }
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
              <alert style={{ color: "#F6921E"}}>For employers, please indicate your company's or organization's name</alert>
              <SignUpFormInput
              type="text"
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
      </SignUpFormContainer>
    )
}

export default EmployerSignUpForm
