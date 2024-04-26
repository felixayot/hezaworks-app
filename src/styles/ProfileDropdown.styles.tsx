import styled from 'styled-components'
import { Link } from 'react-router-dom'

// const StyledProfileDropdown = styled(ProfileDropdown)`
//   position: absolute;
//   top: 4.5rem;
//   right: 1.5rem;
//   width: 120px;
//   padding: 15px;
//   border-radius: 15px;
//   background-color: white;
//   border: 1px solid gray; //#27005D;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 80px; */

//   &:before {
//     content: "";
//     position: absolute;
//     top: -0.7rem;
//     right: 1.1rem;
//     width: 20px;
//     height: 20px;
//     transform: rotate(45deg);
//     border-top: 1px solid gray;
//     border-left: 1px solid gray;
  
//   }
// `;

export const StyledNavDropdown = styled.ul`
  position: absolute;
  top: 60px;
  right: 2rem;
  width: 120px;
  margin: 10px 10px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid gray;
  padding: 5px 5px;
  list-style-type: none;

  &:before {
    content: "";
     position: absolute;
     top: -0.7rem;
     right: 1.1rem;
     width: 20px;
     height: 20px;
     transform: rotate(45deg);
     border-top: 1px solid gray;
     border-left: 1px solid gray;
     }
`;

export const StyledDropDownItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  color: #27005D;
  font-size: 16px;
  font-weight: bold;
`;

export const ProfileButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  color: #27005D;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: #F6921E;
  }
`;


export const ImageWrapper = styled.div`
  width: 45px;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
`;

export const StyledProfileIcon = styled.i`
  width: 45px;
  border-radius: 50%;
  box-shadow: 2px 2px 1px ${(props) => props.theme.gray300};
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: #F6921E;
  }
`;

/*
export const StyledMoment = styled(Moment)`
  color: #7c675d;
`;
*/
