/* eslint-disable */
// @ts-nocheck

import { useState } from "react"
import { ProfileButton, ProfileLink, StyledDropDownItem, StyledNavDropdown } from "../styles/ProfileDropdown.styles"
// import Modal from "./Modal"

function ProfileDropdown() {
  const [ showProfileDropdown, setShowProfileDropdown ] = useState(true)
  // const [ logoutModal, setLogoutModal ] = useState(false)

  function handleShowProfileDropdown() {
    setShowProfileDropdown(false)
  }

  if (showProfileDropdown) {
    return (
      <>
          <StyledNavDropdown>
              <StyledDropDownItem onClick={handleShowProfileDropdown}><ProfileLink to="/user/account">Settings</ProfileLink></StyledDropDownItem>
              <StyledDropDownItem onClick={handleShowProfileDropdown}>
              <ProfileLink to="/user/logout">Logout</ProfileLink>
                {/* <ProfileButton onClick={() => setLogoutModal(true)}>Logout</ProfileButton> */}
                {/* {logoutModal && <Modal setOpenModal={setLogoutModal} BodySubject="You will be logged Out" />} */}
              </StyledDropDownItem>
          </StyledNavDropdown>
      </>
    )
  } else {
    return null
  }

}

export default ProfileDropdown
