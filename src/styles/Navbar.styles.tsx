import styled from "styled-components";
import { Link } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";

export const Nav = styled.nav<{ extendNav: boolean }>`
  width: 100%;
  height: ${(props) => (props.extendNav ? "100vh" : "80px")};
  background-color: white;
  display: flex;
  flex-direction: column;
  border-bottom: 0.05px solid #27005D;
`;

export const LeftContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-bottom: 0;
`;

export const RightContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  padding-right: 50px;
`;

export const NavInnerContainer = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 10px;
  font-size: x-large;

  &:hover {
  color:  #F6921E;
  transition: 200ms ease-out;
    }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  text-decoration: none;
  color: black;
  border-radius: 75px;
  padding: 0 20px;
  overflow: hidden;
  border: none;
  margin-bottom: 1px;
  font-size: large;
  cursor: pointer;

  &:hover {
  color:  #F6921E;
  transition: 200ms ease-out;
    }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkExtended = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 10px;
  font-size: x-large;
`;

export const Logo = styled.img`
  margin: 0;
  max-width: 150px;
  height: auto;
  background-color: none;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;
