import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const TPTitle = styled.h2`
    margin-bottom: 10px;
    color: #333;
    `;

export const TPContainer = styled.article`
    display: flex;
    flex-direction: column;
    flex-shrink: 10%;
    align-items: left;
    justify-content: center;
    margin: 20px;
    width: 30vw;
    `;

export const TPAttribute = styled.p`
  margin-top: 10px;
  color: #333;
  `;

export const VTPButton = styled.button`
    width: 25%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background-color: #27005D;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #f6921e;
    }

    @media (max-width: 768px) {
    width: 100%;
  }
    `;

export const TPatag = styled.a`
    margin-top: 10px;
    color: #27005D;

    &:hover {
        color: #f6921e;
    }
    `;

export const TPLink = styled(Link)`
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #F6921E;
    }
    `;
