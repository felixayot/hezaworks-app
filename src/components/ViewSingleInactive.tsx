/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { JobpostContainer, JobpostTitle, JobpostAttribute, JobpostLink, JobpostButton } from '../styles/Jobpost.styles';
import { SignUpFormButton, SignUpFormLink } from '../styles/SignUpFormStyles';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';
import Modal from './Modal'

function ViewSingleInactive() {
  const axiosPrivate = useAxiosPrivate()
  const { id } = useParams()
  const navigate = useNavigate()

  const [usrAcc, setUsrAcc] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [recruiterModal, setRecruiterModal] = useState(false);
  const [activateModal, setActivateModal] = useState(false);

  useEffect(() => {
    document.title = 'HezaWorks - View Inactive User Info';
    axiosPrivate.get(`auth/users/inactive/${id}`, {
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
          } else if (err?.response?.status === 404) {
            setError('404');
          } else {
            setError('Failed to fetch this user account');
          }
        });
  }, []);

  return (
    <JobpostContainer>
    <JobpostTitle>Viewing Account Info for Inactive User ID {usrAcc.user_id}</JobpostTitle>
    <JobpostAttribute><h3>Name</h3>{usrAcc.name}</JobpostAttribute>
    <JobpostAttribute><h3>Company/Organization Name</h3>{usrAcc.company}</JobpostAttribute>
    <JobpostAttribute><h3>Username</h3>{usrAcc.username}</JobpostAttribute>
    <JobpostAttribute><h3>Email</h3>{usrAcc.email}</JobpostAttribute>
    <JobpostAttribute><h3>Phone</h3>{usrAcc.phone}</JobpostAttribute>
    <JobpostAttribute><h3>User ID</h3>{usrAcc.user_id}</JobpostAttribute>
    <JobpostAttribute><h3>Account Creation Date</h3>{usrAcc.created_at}</JobpostAttribute>
    <JobpostAttribute><h3>Account Last Update Date</h3>{usrAcc.updated_at}</JobpostAttribute>
    <JobpostAttribute><h3>Is User Account Active?</h3>{usrAcc.is_active}</JobpostAttribute>
    <JobpostButton onClick={() => {setRecruiterModal(true)}}>Make Recruiter</JobpostButton>
    <JobpostButton onClick={() => {setActivateModal(true)}}>Activate</JobpostButton>
    {recruiterModal && <Modal setOpenModal={setRecruiterModal} BodySubject="This user will be granted access to recruiter roles"
    handleContinue={() => navigate(`/adminpanel/newrecruiter/${usrAcc.user_id}`)}/>}
    {activateModal && <Modal setOpenModal={setActivateModal} BodySubject="This user will be reactivated"
    handleContinue={() => navigate(`/adminpanel/activate/${usrAcc.user_id}`)}/>}
    </JobpostContainer>
  )
}

export default ViewSingleInactive
