import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { JobpostContainer, JobpostTitle, JobpostAttribute } from '../styles/Jobpost.styles';
import { SignUpFormButton } from '../styles/SignUpFormStyles';
// import axiosInstance from '../api/axios'
import useAxiosPrivate from '../hooks/UseAxiosPrivate';

const ACCPROFILE_URL = 'auth/users/me'

function AccountProfile() {
  const axiosPrivate = useAxiosPrivate()
  const location = useLocation()
  const navigate = useNavigate()

  const [usrAcc, setUsrAcc] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
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

  function handleEdit() {
    window.location.href = '/account/edit';
  }

  return usrAcc.map(() =>
    <JobpostContainer>
    <JobpostTitle>My Info</JobpostTitle>
    <JobpostAttribute><h3>Name</h3>{usrAcc.name}</JobpostAttribute>
    <JobpostAttribute><h3>Username</h3>{usrAcc.username}</JobpostAttribute>
    <JobpostAttribute><h3>Email</h3>{usrAcc.email}</JobpostAttribute>
    <JobpostAttribute><h3>User ID</h3>{usrAcc.userID}</JobpostAttribute>
    <JobpostAttribute><h3>Account Creation Date</h3>{usrAcc.created_at}</JobpostAttribute>
    <SignUpFormButton type="submit" onClick={handleEdit}>Edit My Info</SignUpFormButton>
    </JobpostContainer>
  )
}

export default AccountProfile
