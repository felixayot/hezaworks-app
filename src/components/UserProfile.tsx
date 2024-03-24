import React from 'react'
import { SignUp, SignUpFormButton, SignUpFormContainer, SignUpFormInput, SignUpFormText, SignUpFormTitle, SignUpFormWrapper } from '../styles/SignUpFormStyles'

function UserProfile() {
  return (
    <SignUpFormContainer>
        <SignUpFormWrapper>
          <SignUp>
        <SignUpFormTitle>Create Your Professional Profile</SignUpFormTitle>
        <label>Resume:
        <SignUpFormInput
        type="file"
        required />
        </label>
        <SignUpFormInput
        type="text"
        required
        placeholder="Personal Information" />
        <SignUpFormInput
        type="text"
        required
        placeholder="Education" />
        <SignUpFormInput
        type="text"
        required
        placeholder="Professional Experience" />
        <SignUpFormButton>Review and Submit</SignUpFormButton>
        </SignUp>
        </SignUpFormWrapper>
        </SignUpFormContainer>
  )
}

export default UserProfile