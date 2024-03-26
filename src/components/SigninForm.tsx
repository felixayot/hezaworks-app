import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import {
    SignUpFormContainer,
    SignUpFormWrapper,
    SignUpFormTitle,
    SignUpFormInput,
    SignUpFormButton,
    SignUpFormSuccess,
    SignUpFormError,
    SignUpFormText,
    SignUpFormLink,
    SignUp,
  } from '../styles/SignUpFormStyles'
import axios from '../api/axios'

const SIGNIN_URL = '/auth/login'

function SigninForm() {
  const { setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/home'

  useEffect(() => {
    if(setAuth.username) {
      navigate(from, { replace: true })
    }
  })

  const [ username, setUsername ] = useState('')
  // const [email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  //const [ success, setSuccess ] = useState('')
  const [ error, setError ] = useState('')

  useEffect(() => {
    setError('');
  }, [username, password])

 const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(SIGNIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        }
      );
      console.log(JSON.stringify(response?.data))
      const accessToken = response?.data?.access_token
      const userId = response?.data?.user_id
      const roles = response?.data?.roles
      setAuth({ username, password, userId, roles, accessToken })
      setUsername('')
      setPassword('')
      navigate(from, { replace: true })
      window.alert('Log in successful')
    } catch (err) {
      if(!err?.response) {
        setError('No response from server')
    } else if(err?.response?.status === 400) {
        setError('Missing username or password')
      } else if(err?.response?.status === 401) {
        setError('Invalid username or password')
      } else {
        setError('Log in failed. Try again later')
      }
    }
  }
    
  return (
    //<title>Sign In</title>
    <SignUpFormContainer>
      {
        error ? (
          <SignUpFormError>{error}</SignUpFormError>
          ) : null
      }
     {/*
     { success ?
     (
       <SignUpFormText>You are logged in. Go to
         <SignUpFormLink to="/home">Home</SignUpFormLink>
       </SignUpFormText>
      )
    : error ? (
      <SignUpFormText>{error}</SignUpFormText>
      ): null
      }
      */}
        <SignUpFormWrapper>
            <SignUpFormTitle>Sign In</SignUpFormTitle>
            <SignUp onSubmit={handleSubmit}>
            <SignUpFormInput
            type="text"
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="Username or Email" />
            <SignUpFormInput
            type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password" />
            <SignUpFormButton type="submit">Log In</SignUpFormButton>
            <SignUpFormText>
                Not yet registered? <SignUpFormLink to="/signup">Sign up</SignUpFormLink>
            </SignUpFormText>
            </SignUp>
        </SignUpFormWrapper>
    </SignUpFormContainer>
  )
}

export default SigninForm
