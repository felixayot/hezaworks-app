import React, { useState } from 'react';
import { SignUpFormText, SignUpFormLink, SignUpFormContainer, SignUpFormWrapper, SignUp, SignUpFormTitle, SignUpFormInput, SignUpFormButton } from '../styles/SignUpFormStyles';

function SelectUserType() {
  const [userType, setUserType] = useState(''); // State to store user type

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value); // Update user type based on selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === 'employer') {
      // Redirect to employer registration form
      window.location.href = '/signup/employer';
    } else if (userType === 'freelancer') {
      // Redirect to freelancer registration form
      window.location.href = '/signup/jobseeker';
    } else {
        alert('Please select an account type');
        }
  };

  return (
    <SignUpFormContainer>
        <SignUpFormWrapper>
    <SignUp onSubmit={handleSubmit}>
      <SignUpFormTitle>Select your account type</SignUpFormTitle>
      <SignUpFormText>
        Employer or Client
        </SignUpFormText>
        <SignUpFormInput
          type="radio"
          value="employer"
          checked={userType === 'employer'}
          onChange={handleUserTypeChange}
        /><br />
        <SignUpFormText>
        Freelancer or Job Seeker
        </SignUpFormText>
        <SignUpFormInput
          type="radio"
          value="freelancer"
          checked={userType === 'freelancer'}
          onChange={handleUserTypeChange}
        />
      <SignUpFormButton type="submit">Proceed to Account Creation</SignUpFormButton>
      <SignUpFormText>
                  Already have an account? <SignUpFormLink to="/login">Log in</SignUpFormLink>
              </SignUpFormText>
    </SignUp>
    </SignUpFormWrapper>
    </SignUpFormContainer>
  );
}

export default SelectUserType;
