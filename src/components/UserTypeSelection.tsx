/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react';
import { SignUpFormText, SignUpFormLink, SignUpFormContainer, SignUpFormWrapper, SignUp, SignUpFormTitle, SignUpFormInput, SignUpFormButton } from '../styles/SignUpFormStyles';

function SelectUserType() {

  useEffect(() => {
    document.title = 'HezaWorks | Select Account Type'
  }
  , [])

  const [userType, setUserType] = useState(''); // State to store user type

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value); // Update user type based on selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === 'employer') {
      // Redirect to employer registration form
      window.location.href = '/signup/employer';
    } else if (userType === 'talent') {
      // Redirect to freelancer registration form
      window.location.href = '/signup/talent';
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
        Employer
        </SignUpFormText>
        <SignUpFormInput
          type="radio"
          value="employer"
          checked={userType === 'employer'}
          onChange={handleUserTypeChange}
        /><br />
        <SignUpFormText>
        Talent
        </SignUpFormText>
        <SignUpFormInput
          type="radio"
          value="talent"
          checked={userType === 'talent'}
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
