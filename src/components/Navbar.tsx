import { useState } from "react";
//import { Routes, Route } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
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
  NavButton,
} from "../styles/Navbar.styles";
import LogoImage from "../assets/heza-logo.png";
import Icon from "./Icons";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const [ extendNav, setExtendNav ] = useState(false);
  const [ showProfileDropdown, setShowProfileDropdown ] = useState(false)
  const { auth } = useAuth();

  function showDropdown() {
    setShowProfileDropdown((curr) => !curr)
  }

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
            <NavLink to="/user/posts">My Posts</NavLink>
            <NavLink to="/user/applications">Job Applicants</NavLink>
            </>
            ) : auth?.accessToken ? (
            <>
            <NavLink to="/jobs">Find Jobs</NavLink>
            <NavLink to="/user/myapplications">My Applications</NavLink>
            <NavLink to="/user/jobcart">My Job Cart</NavLink>
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
            {auth?.roles?.includes(3) ? (
              <>
            <NavLink to="/user/viewprofiles">View Talents</NavLink>
              {/* {<ProfileDropdown title={auth.username}>
              <NavDropdown.Item href="/user/account">Account Settings</NavDropdown.Item><br />
              <NavDropdown.Item href="/home">Sign Out</NavDropdown.Item>
            </ProfileDropdown>} */}
            <NavButton onClick={showDropdown}><Icon className="fa-regular fa-user" />{auth.username}</NavButton>
            { showProfileDropdown && <ProfileDropdown />}
          </>
            ) : auth?.accessToken ?
            (
              <>
              {/* {<ProfileDropdown title={auth.username}>
              <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item><br />
              <NavDropdown.Item href="/user/account">Account Settings</NavDropdown.Item><br />
              <NavDropdown.Item href="/home">Sign Out</NavDropdown.Item>}
              </ProfileDropdown>
             */}
              <NavLink to="/user/profile">Professional Profile</NavLink>
              <NavButton onClick={showDropdown}><Icon className="fa-regular fa-user" />{auth.username}</NavButton>
              { showProfileDropdown && <ProfileDropdown />}
              </>
                ) : (
                  <>
                  <NavLink to="/login">Log in</NavLink>
                  <NavLink to="/signup">Sign up</NavLink>
                  </>
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
        </NavExtendedContainer>
      )}
    </Nav>
  );
}

export default Navbar;
