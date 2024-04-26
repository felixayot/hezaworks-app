import { useState } from "react";
import {
  Nav,
  LeftContainer,
  RightContainer,
  NavInnerContainer,
  NavExtendedContainer,
  NavLinkContainer,
  NavLink,
  Logo,
  OpenLinksButton,
  NavLinkExtended,
} from "../styles/Navbar.styles";
import LogoImage from "../assets/heza-logo.png";

function PublicNavbar() {
  const [ extendNav, setExtendNav ] = useState(false);

  return (
    <Nav extendNav={extendNav}>
      <NavInnerContainer>
        <LeftContainer>
          <NavLinkContainer>
            <NavLink to="/home">
              <Logo src={LogoImage}></Logo>
            </NavLink>
            <NavLink to="/postjob">Post Jobs</NavLink>
            <NavLink to="/jobs">Find Jobs</NavLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNav((curr) => !curr);
              }}
            >
              {" "}
              {extendNav ? <> &#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavLinkContainer>
        </LeftContainer>
        <RightContainer>
        <NavLinkContainer>
            <NavLink to="/login">Log in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
        </NavLinkContainer>
        </RightContainer>
      </NavInnerContainer>
      {extendNav && (
        <NavExtendedContainer>
          <NavLinkExtended to="/home">
            <Logo src={LogoImage}></Logo>
          </NavLinkExtended>
          <NavLinkExtended to="/postjob">Post Jobs</NavLinkExtended>
          <NavLinkExtended to="/jobs">Find Jobs</NavLinkExtended>
          <NavLinkExtended to="/login">Log in</NavLinkExtended>
          <NavLinkExtended to="/signup">Sign up</NavLinkExtended>
        </NavExtendedContainer>
      )}
    </Nav>
  );
}

export default PublicNavbar;
