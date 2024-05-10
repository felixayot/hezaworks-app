import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ApplicationContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 15px;
  align-items: left;
  justify-content: center;
  margin: 5px 20px;
`;

// export const ApplicationWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   justify-content: center;
//   width: 100%;
// `;

export const ApplicationHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
        font-size: 16px;
      }
`;

export const ApplicationTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 16px;
      }
`;

export const ApplicationAttribute = styled.p`
    font-size: 1.5rem;
    /* margin-bottom: 1rem; */

    @media (max-width: 768px) {
        font-size: 16px;
      }
`;

export const ApplicationLink = styled(Link)`
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #F6921E;
    transition: 200ms ease-out;
  }

`;