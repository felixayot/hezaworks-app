import { useState } from "react"
import { ProfileLink, StyledDropDownItem, StyledNavDropdown } from "../styles/ProfileDropdown.styles"

function ProfileDropdown() {
  const [ showProfileDropdown, setShowProfileDropdown ] = useState(true)

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
              </StyledDropDownItem>
          </StyledNavDropdown>
      </>
    )
  } else {
    return null
  }

}

export default ProfileDropdown
