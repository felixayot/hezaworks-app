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
  height: 100vh;
`;

export const HomeTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const HomeDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const HomeButton = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  background-color: #27005D;
  color: white;
  border: none;
  border-radius: 35px;
  cursor: pointer;
`;

export const HomeImage = styled.img`
  width: 100vh;
  height: auto;
  /* margin-top: 2rem; */
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;

    &:hover {
        color: #F6921E;
    }
`;
