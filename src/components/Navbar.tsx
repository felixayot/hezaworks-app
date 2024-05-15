/* eslint-disable */
// @ts-nocheck

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
  NavText,
  NavWrapper,
  NavBurger,
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
              { auth?.roles?.includes(1)
              ? (
                <>
            <NavLink to="/adminpanel/admins">Admins</NavLink>
            <NavLink to="/adminpanel/recruiters">Recruiters</NavLink>
            <NavLink to="/adminpanel/users">Other Users</NavLink>
            </>
              ) : auth?.roles?.includes(2)
              ? (
                <>
            <NavLink to="/adminpanel/recruiters">Recruiters</NavLink>
            <NavLink to="/adminpanel/users">Other Users</NavLink>
            </>
              ) : auth?.roles?.includes(3)
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
              {extendNav ? <NavBurger>&#10005;</NavBurger> : <NavBurger>&#8801;</NavBurger>}
            </OpenLinksButton>
          </NavLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavLinkContainer>
            {auth?.roles?.includes(1) ? (
              <>
            <NavLink to="/adminpanel/inactive">Inactive Users</NavLink>
              {/* {<ProfileDropdown title={auth.username}>
              <NavDropdown.Item href="/user/account">Account Settings</NavDropdown.Item><br />
              <NavDropdown.Item href="/home">Sign Out</NavDropdown.Item>
            </ProfileDropdown>} */}
            <NavButton onClick={showDropdown}><Icon className="fa-regular fa-user" />{auth.username}</NavButton>
            { showProfileDropdown && <ProfileDropdown />}
          </>
            ) : auth?.roles?.includes(2) ? (
              <>
            <NavLink to="/adminpanel/inactive">Inactive Users</NavLink>
              {/* {<ProfileDropdown title={auth.username}>
              <NavDropdown.Item href="/user/account">Account Settings</NavDropdown.Item><br />
              <NavDropdown.Item href="/home">Sign Out</NavDropdown.Item>
            </ProfileDropdown>} */}
            <NavButton onClick={showDropdown}><Icon className="fa-regular fa-user" />{auth.username}</NavButton>
            { showProfileDropdown && <ProfileDropdown />}
          </>
          ) : auth?.roles?.includes(3) ? (
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
          {auth?.roles?.includes(1) ? (
          <>
          <NavWrapper>
            <NavText><Icon className="fa-regular fa-user"></Icon>{auth.username}</NavText>
          </NavWrapper>
          <NavWrapper><NavLinkExtended to="/adminpanel/admins">Admins</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/adminpanel/recruiters">Recruiters</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/adminpanel/users">Other Users</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/adminpanel/inactive">Inactive Users</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/account">Settings</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/logout">Sign Out</NavLinkExtended></NavWrapper>
          </>
          ) : auth?.roles?.includes(2) ? (
          <>
          <NavWrapper>
            <NavText><Icon className="fa-regular fa-user"></Icon>{auth.username}</NavText>
          </NavWrapper>
          <NavWrapper><NavLinkExtended to="/adminpanel/recruiters">Recruiters</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/adminpanel/users">Other Users</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/adminpanel/inactive">Inactive Users</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/account">Settings</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/logout">Sign Out</NavLinkExtended></NavWrapper>
          </>
          ) : auth?.roles?.includes(3) ? (
          <>
          <NavWrapper>
            <NavText><Icon className="fa-regular fa-user"></Icon>{auth.username}</NavText>
          </NavWrapper>
          <NavWrapper><NavLinkExtended to="/postjob">Post Jobs</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/posts">My Posts</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/applications">Job Applicants</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/viewprofiles">View Talents</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/account">Settings</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/logout">Sign Out</NavLinkExtended></NavWrapper>
          </>
          ) : auth?.accessToken ? (
          <>
          <NavWrapper>
            <NavText><Icon className="fa-regular fa-user"></Icon>{auth.username}</NavText>
          </NavWrapper>
          <NavWrapper><NavLinkExtended to="/jobs">Find Jobs</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/myapplications">My Applications</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/jobcart">My Job Cart</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/profile">Professional Profile</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/account">Settings</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/user/logout">Sign Out</NavLinkExtended></NavWrapper>
          </>
          ) : (
          <>
          <NavWrapper><NavLinkExtended to="/jobs">Find Jobs</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/postjob">Post Jobs</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/login">Log in</NavLinkExtended></NavWrapper>
          <NavWrapper><NavLinkExtended to="/signup">Sign up</NavLinkExtended></NavWrapper>
          </>
          )
          }
        </NavExtendedContainer>
      )}
    </Nav>
  );
}

export default Navbar;
