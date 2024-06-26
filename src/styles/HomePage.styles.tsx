import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  /* background-color: whitesmoke; */
  flex-direction: row;
  margin-left: 2rem;
  gap: 2rem;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  /* height: 100vh; */

  @media (max-width: 768px) {
      flex-direction: column;
      margin-left: 0;
      height: auto;
  }
`;

export const HomeTitle = styled.h2`
  font-size: 35px;
  margin-bottom: 1rem;

  @media(max-width: 768px) {
      font-size: 18px;
      margin: 20px;
  }
`;

export const ItemTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 1rem;

  @media(max-width: 768px) {
      font-size: 18px;
      margin: 20px;
  }
`;

export const HomeDescription = styled.p`
  font-size: 21px;
  margin-bottom: 1rem;

  @media(max-width: 768px) {
      font-size: 16px;
      margin: 20px;
  }
`;

export const HomeButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: #27005D;
  color: white;
  border: none;
  border-radius: 35px;
  cursor: pointer;

  @media (max-width: 768px) {
      font-size: 16px;
      width: 100%;
  }
`;

export const HomeImage = styled.img`
  width: 100vh;
  height: auto;
  /* margin-top: 2rem; */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;

    &:hover {
        color: #F6921E;
    }
`;
