/*
import styled from 'styled-components'
import { NavDropdown } from "react-bootstrap";

export const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-toggle::before {
    content: ${(props) =>
      props.totalnots ? '"' + props.totalnots + '"' : null};
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: ${(props) => props.theme.black};
    position: absolute;
    top: 5px;
    right: 5px;
    color: ${(props) => props.theme.yellow};
  }
  a::after {
    content: none;
  }
  .dropdown-menu {
    overflow-y: auto;
    padding: 20px 10px;
    width: 400px;
    margin: 0px;
    position: fixed !important;
    top: 0px;
    bottom: 0px;
    max-height: 100%;
    background-color: ${(props) => props.theme.lime};
    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #777777;
      border-radius: 3px;
      &:hover {
        background: #777777;
      }
    }
    @media (max-width: ${(props) => props.theme.smBreakpoint}) {
      width: 320px;
    }
  }
  @media (max-width: ${(props) => props.theme.tabletBreakpoint}) {
    position: fixed;
    top: 4px;
    right: 32px;
  }
`;

export const StyledDropDownItem = styled(NavDropdown.Item)`
  display: flex;
  margin-bottom: 2px;
  margin-top: 2px;
  padding: 15px 30px 15px 15px;
  border-radius: 5px;
  position: relative;
  white-space: normal;
  font-size: 14px;
  align-items: center;
  border-bottom: ${(props) =>
    props.endunseen ? "2px dashed rgba(124, 103, 93, 0.3)" : "none"};
  &:hover,
  &:active,
  &:focus {
    background-color: transparent !important;
    color: black !important;
  }
  &.active {
    color: black;
  }
`;

export const StyledNotLink = styled.div`
  border-radius: 50%;
  padding-right: 6px !important;
  padding-left: 6px !important;
  background-color: ${(props) => props.theme.neonPink};
  padding: 3px 6px 6px 6px;
  &:hover {
    background-color: ${(props) => props.theme.black};
  }
  @media (max-width: ${(props) => props.theme.smBreakpoint}) {
    .show & {
      z-index: 10000;
      position: fixed;
      right: 282px;
      top: 22px;
    }
  }
`;

export const NotificationHeader = styled.h3`
  font-family: SuisseIntl;
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 34px;
  letter-spacing: 0.06em;
  text-align: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.neonPink};
  transform: matrix(1, -0.03, 0.04, 1, 0, 0);
  @media (max-width: ${(props) => props.theme.smBreakpoint}) {
    font-size: 26px;
  }
`;

export const LikeFireIcon = styled.img`
  position: absolute;
  width: 25px;
  bottom: -7px;
  right: -3px;
`;

export const ImageWrapper = styled.div`
  width: 45px;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
`;

export const StyledProfileIcon = styled.img`
  width: 45px;
  border-radius: 50%;
  box-shadow: 2px 2px 1px ${(props) => props.theme.gray300};
`;

export const StyledNotIcon = styled.img`
  width: 20px;
`;

export const NotContent = styled.div`
  opacity: ${(props) => (!props.seen ? "1" : ".5")};
  color: ${(props) => props.theme.black};
  font-size: 15px;
  line-height: 21px;
`;

/*
export const StyledMoment = styled(Moment)`
  color: #7c675d;
`;
*/
