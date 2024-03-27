import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
//import { Routes, Route } from "react-router-dom";
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
import Layout from "./Layout";

function Navbar() {
  const [extendNav, setExtendNav] = useState(false);
  const { auth } = useAuth();

  return (
    <Nav extendNav={extendNav}>
      <NavInnerContainer>
        <LeftContainer>
          <NavLinkContainer>
          <Layout />
            <NavLink to="home">
              <Logo src={LogoImage}></Logo>
            </NavLink>
              { auth?.roles?.includes(3)
              ? (
                <>
            <Layout />
            <NavLink to="postjob">Post Jobs</NavLink>
            <NavLink to="user/jobs">My Posts</NavLink>
            <NavLink to="user/applicants">Job Applicants</NavLink>
            </>
            ) : auth?.username ? (
            <>
            <Layout />
            <NavLink to="jobs">Find Jobs</NavLink>
            <NavLink to="jobs/:id/add">My Applications</NavLink>
            <NavLink to="jobs/:id/add">My Job Cart</NavLink>
            </>
              ) : (
            <>
            <Layout />
            <NavLink to="postjob">Post Jobs</NavLink>
            <NavLink to="jobs">Find Jobs</NavLink>
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
            <NavLink to="user/viewprofiles">View Talents</NavLink>
              <ProfileDropdown title="My Profile">
              <Layout />
              <NavDropdown.Item href="user/account">Account Settings</NavDropdown.Item><br />
              <NavDropdown.Item href="home">Sign Out</NavDropdown.Item>
            </ProfileDropdown>
            </>
            ) : auth?.username ?
            (
              <>
              <ProfileDropdown title="My Profile">
                <Layout />
              <NavDropdown.Item href="user/profile">Profile</NavDropdown.Item><br />
              <NavDropdown.Item href="user/account">Account Settings</NavDropdown.Item><br />
              <NavDropdown.Item href="home">Sign Out</NavDropdown.Item>
            </ProfileDropdown>
              </>
            ) : (
              <>
              <Layout />
              <NavLink to="login">Log in</NavLink>
              <NavLink to="signup">Sign up</NavLink>
              </>
            )
            }
          </NavLinkContainer>
        </RightContainer>
      </NavInnerContainer>
      {extendNav && (
        <NavExtendedContainer>
          <Layout />
          <NavLinkExtended to="home">
            <Logo src={LogoImage}></Logo>
          </NavLinkExtended>
          <NavLinkExtended to="postjob">Post Jobs</NavLinkExtended>
          <NavLinkExtended to="jobs">Find Jobs</NavLinkExtended>
          <NavLinkExtended to="login">Log in</NavLinkExtended>
          <NavLinkExtended to="signup">Sign up</NavLinkExtended>
          <NavLinkExtended to="profile">Profile</NavLinkExtended>
        </NavExtendedContainer>
      )}
    </Nav>
  );
}

export default Navbar;
