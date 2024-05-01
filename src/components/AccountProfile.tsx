/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { JobpostContainer, JobpostTitle, JobpostAttribute, JobpostLink, JobpostButton } from '../styles/Jobpost.styles';
import { SignUpFormButton, SignUpFormLink } from '../styles/SignUpFormStyles';
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/UseAxiosPrivate';

const ACCPROFILE_URL = 'auth/users/me'

function AccountProfile() {
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()
  // const navigate = useNavigate()

  const [usrAcc, setUsrAcc] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'HezaWorks - My Info';
    axiosPrivate.get(ACCPROFILE_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
        .then((response) => {
            setUsrAcc(response.data);
            //setIsLoading(false);
        })
        .catch((err) => {
          if (!err?.response) {
            setError('No response from server');
          } else {
            setError(`Failed to fetch user account ${err?.response?.data?.message}`);
          }
        });
  }, []);

  return (
    <JobpostContainer>
    <JobpostTitle>My Info</JobpostTitle>
    <JobpostAttribute><h3>Name</h3>{usrAcc.name}</JobpostAttribute>
    { auth.roles.includes(3) ? <JobpostAttribute><h3>Company/Organization Name</h3>{usrAcc.company}</JobpostAttribute> : null }
    <JobpostAttribute><h3>Username</h3>{usrAcc.username}</JobpostAttribute>
    <JobpostAttribute><h3>Email</h3>{usrAcc.email}</JobpostAttribute>
    <JobpostAttribute><h3>User ID</h3>{usrAcc.userID}</JobpostAttribute>
    <JobpostAttribute><h3>Account Creation Date</h3>{usrAcc.created_at}</JobpostAttribute>
    <JobpostButton>
    <JobpostLink to={`/user/account/edit`}>Edit My Info</JobpostLink>
    </JobpostButton>
    </JobpostContainer>
  )
}

export default AccountProfile
