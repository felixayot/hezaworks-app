import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import {
  Nav,
  LeftContainer,
  RightContainer,
  NavInnerContainer,
  NavExtendedContainer,
  NavLinkContainer,
  ProfileDropdown,
  NavLink,
  Logo,
  OpenLinksButton,
  NavLinkExtended,
} from "../styles/Navbar.styles";
import LogoImage from "../assets/heza-logo.png";
import Icon from "./Icons";
import useAuth from "../hooks/useAuth";
import UserProfile from "./UserProfile";
import AccountProfile from "./AccountProfile";
import UserAccountSettingsForm from "./EditUserSettingsForm";

function Navbar() {
  const [extendNav, setExtendNav] = useState(false);
  const { auth } = useAuth();

  <Routes>
  <Route path="/user/profile" element={<UserProfile />} />
  <Route path="/user/account" element={<AccountProfile />} />
  <Route path="/user/account/edit" element={<UserAccountSettingsForm />} />
  <Route path="/user/account/delete" element="<UserProfile />" />
  </Routes>
  return (
    <Nav extendNav={extendNav}>
      <NavInnerContainer>
        <LeftContainer>
          <NavLinkContainer>
            <NavLink to="/home">
              <Logo src={LogoImage}></Logo>
            </NavLink>
              { auth?.roles?.includes(3)
              ? (
                <>
            <NavLink to="/postjob">Post Jobs</NavLink>
            <NavLink to="/jobs/:id/update">My Posts</NavLink>
            </>
            ) : auth?.username ? (
            <>
            <NavLink to="/jobs">Find Jobs</NavLink>
            <NavLink to="/jobs/:id/add">My Applications</NavLink>
            <NavLink to="/jobs/:id/add">My Job Cart</NavLink>
            </>
              ) : (
            <>
            <NavLink to="/postjob">Post Jobs</NavLink>
            <NavLink to="/jobs">Find Jobs</NavLink>
            </>
            )
            }
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
            {!auth?.username ? (
              <>
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/signup">Sign up</NavLink>
              </>
            ) : (
              <ProfileDropdown title="User Profile">
              <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item><br />
              <NavDropdown.Item href="/user/account">Account Settings</NavDropdown.Item><br />
              <NavDropdown.Item href="/user/home">Sign Out</NavDropdown.Item>
            </ProfileDropdown>
            )
            }
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
          <NavLinkExtended to="/profile">Profile</NavLinkExtended>
        </NavExtendedContainer>
      )}
    </Nav>
  );
}

export default Navbar;
