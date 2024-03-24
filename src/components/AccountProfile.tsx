import React from 'react';
import { JobpostContainer, JobpostTitle, JobpostAttribute } from '../styles/Jobpost.styles';
import { SignUpFormButton } from '../styles/SignUpFormStyles';

function AccountProfile() {
  function handleEdit() {
    window.location.href = '/account/edit';
  }

  return (
    <JobpostContainer key='id'>
    <JobpostTitle>My Info</JobpostTitle>
    <JobpostAttribute><h3>Name</h3>James Barr</JobpostAttribute>
    <JobpostAttribute><h3>Username</h3>jamesbarr</JobpostAttribute>
    <JobpostAttribute><h3>Email</h3>jamesbarr@gmail.com</JobpostAttribute>
    <JobpostAttribute><h3>Account Creation Date</h3>17-03-2024</JobpostAttribute>
    <SignUpFormButton type="submit" onClick={handleEdit}>Edit My Info</SignUpFormButton>
    </JobpostContainer>
)}

export default AccountProfile
