import React from 'react'
import { SignUp, SignUpFormButton, SignUpFormContainer, SignUpFormInput, SignUpFormLink, SignUpFormText, SignUpFormTitle, SignUpFormWrapper } from '../styles/SignUpFormStyles'

function UserAccountSettingsForm() {
  return (
    <SignUpFormContainer>
        <SignUpFormWrapper>
            <SignUp>
            <SignUpFormTitle>User Account Settings</SignUpFormTitle>
            <label>Change Password</label>
            <SignUpFormInput type="password"></SignUpFormInput>
            <label>Change Email</label>
            <SignUpFormInput type="email"></SignUpFormInput>
            <label>Change Username</label>
            <SignUpFormInput type="text"></SignUpFormInput>
            <label>Change Profile Picture</label>
            <SignUpFormInput type="file"></SignUpFormInput>
            <SignUpFormButton type="submit">Save Changes</SignUpFormButton>
            </SignUp>
        </SignUpFormWrapper>
    </SignUpFormContainer>
  )
}

export default UserAccountSettingsForm
