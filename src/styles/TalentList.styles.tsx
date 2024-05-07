import styled from "styled-components";
import { Link } from "react-router-dom";

export const TalentListContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  padding: 5px 20px;
  border-radius: 10px;
  height: auto;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  margin: 20px;
  color: #27005D;
`;

export const TalentListTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const TalentListAttribute = styled.p`
  margin-top: 10px;
  color: #333;
`;

export const TalentListLink = styled(Link)`
    text-decoration: none;
    /* width: 23.5%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background-color: #27005D;
     */
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #F6921E;
        transition: 200ms ease-out;
    }
    `;

export const TPButton = styled.button`
  width: 25%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #27005D;
  color: #fff;
  cursor: pointer;
`;
