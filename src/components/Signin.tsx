/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {
  SignUpFormContainer,
  SignUpFormWrapper,
  SignUpFormTitle,
  SignUpFormInput,
  SignUpFormButton,
  SignUpFormText,
  SignUpFormLink,
  SignUp,
} from "../styles/SignUpFormStyles";
import axiosInstance from "../api/axios";
import IsAuthenticated from "./IsAuthenticated";
import {
  PageError,
  PageErrorButton,
  PageLoadingWrapper,
  PageSuccess,
} from "../styles/PageLoading.styles";

const SIGNIN_URL = "/auth/login";

function SigninForm() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  if (IsAuthenticated()) {
    navigate(from, { replace: true });
  }

  const [username, setUsername] = useState("");
  // const [email, setEmail ] = useState('')
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "HezaWorks | Sign In";
    setError("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        SIGNIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      // console.log(JSON.stringify(response?.data))
      const accessToken = response?.data?.access_token;
      const refreshToken = response?.data?.refresh_token;
      const roles = response?.data?.roles;
      setAuth({ username, roles, accessToken, refreshToken });
      setUsername("");
      setPassword("");
      setSuccess("Log in successful. Redirecting...");
      // console.log(setAuth)
    } catch (err) {
      if (!err?.response) {
        setError("No response from server");
      } else if (err?.response?.status === 400) {
        setError("Missing username or password");
      } else if (err?.response?.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("Log in failed. Try again later");
      }
    }
  };

  return (
    <SignUpFormContainer>
      {error ? (
        <PageLoadingWrapper>
          <PageError>{error}</PageError>
          <br />
          <PageErrorButton onClick={() => window.location.reload()}>
            Try again
          </PageErrorButton>
        </PageLoadingWrapper>
      ) : success ? (
        <PageLoadingWrapper>
          <PageSuccess>
            {success}
            <br />
            <SignUpFormLink to={navigate(from, { replace: true })}>Proceed</SignUpFormLink>
          </PageSuccess>
        </PageLoadingWrapper>
      ) : (
        <SignUpFormWrapper>
          <SignUpFormTitle>Sign In</SignUpFormTitle>
          <SignUp onSubmit={handleSubmit}>
            <SignUpFormInput
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <SignUpFormInput
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <SignUpFormButton type="submit">Log In</SignUpFormButton>
            <SignUpFormText>
              Not yet registered?{" "}
              <SignUpFormLink to="/signup">Sign up</SignUpFormLink>
            </SignUpFormText>
          </SignUp>
        </SignUpFormWrapper>
      )}
    </SignUpFormContainer>
  );
}

export default SigninForm;
